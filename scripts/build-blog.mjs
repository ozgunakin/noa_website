#!/usr/bin/env node
import { readFileSync, readdirSync, mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import matter from 'gray-matter';

const ROOT = path.resolve(import.meta.dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'content/blog');
const OUTPUT_DIR = path.join(ROOT, 'public/blog');
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const slugify = (s) => String(s).toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/[\s_]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
const formatDate = (d) => new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const formatHomeDate = (d) => new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric', timeZone: 'UTC' });

const page = ({ title, description, body }) => `<!doctype html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-0ELDNRLBN6"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-0ELDNRLBN6');
  </script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#040a30">
  <meta name="description" content="${escapeHtml(description)}">
  <title>${escapeHtml(title)}</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header wrap">
  <a class="brand" href="/" aria-label="Not Only Artificial home"><img class="brand-logo" src="/assets/logo-navy.webp" alt="Not Only Artificial" width="1916" height="400"></a>
  <nav aria-label="Main navigation"><a href="/blog/">Journal</a><a href="/approach/">Our approach</a><a href="mailto:hello@notonlyartificial.com">Say hello</a></nav>
</header>
${body}
<footer class="site-footer">
  <div class="wrap site-footer-inner">
    <a class="brand" href="/" aria-label="Not Only Artificial home"><img class="brand-logo" src="/assets/logo-white.webp" alt="Not Only Artificial" width="1889" height="398"></a>
    <span>© 2026 Not Only Artificial</span>
  </div>
</footer>
<script src="/script.js"></script>
</body>
</html>
`;

const meta = (p) => `<span class="blog-meta"><span>${escapeHtml(p.category)}</span><time datetime="${escapeHtml(p.date)}">${formatDate(p.date)}</time><span>${p.readingMinutes} min read</span></span>`;

const collaborationNote = `<aside class="collaboration-note"><h2>Human judgment. AI research. Shared work.</h2><p>These essays are created through human–AI collaboration. AI helps us find sources, explore connections, and synthesize research. We bring context, critical judgment, and editorial direction—and take responsibility for what we publish.</p></aside>`;

const homeImageWidths = JSON.parse(readFileSync(path.join(ROOT, 'public/assets/responsive/sources.json'), 'utf8'));

// Optional pre-optimized covers: new posts safely fall back to their source image.
const homeImage = (p, featured = false) => {
  const stem = path.basename(p.image, path.extname(p.image));
  const variants = [280, 640, 960].map(w => ({ w, url: `/assets/responsive/${stem}-${w}.webp` }))
    .filter(v => existsSync(path.join(ROOT, 'public', v.url)));
  if (!variants.length) return '';
  const sizes = featured
    ? '(max-width: 700px) calc(100vw - 40px), (max-width: 980px) calc(100vw - 56px), (max-width: 1000px) calc((100vw - 84px) * .535 - 28px), (max-width: 1416px) calc((100vw - 124px) * .535 - 28px), 664px'
    : '(max-width: 560px) 112px, (max-width: 980px) 180px, 120px';
  // Describe the original with its actual width so browsers select the correct density.
  return ` srcset="${variants.map(v => `${v.url} ${v.w}w`).join(', ')}, ${escapeHtml(p.image)} ${homeImageWidths[p.image] || 1200}w" sizes="${sizes}"`;
};

const homeFeatured = (p) => `<a class="home-featured" href="/blog/${p.slug}/"><img class="home-featured-image" src="${escapeHtml(p.image)}"${homeImage(p, true)} alt="" width="1200" height="800" loading="lazy" decoding="async"><span class="home-featured-copy"><span class="home-featured-category">${escapeHtml(p.category)}</span><strong>${escapeHtml(p.title)}</strong><span class="home-featured-excerpt">${escapeHtml(p.excerpt)}</span><span class="home-featured-meta">${formatHomeDate(p.date)} · ${p.readingMinutes} min read</span></span></a>`;

const homePostRow = (p) => `<a class="home-post-row" href="/blog/${p.slug}/"><img class="home-post-image" src="${escapeHtml(p.image)}"${homeImage(p)} alt="" width="1200" height="800" loading="lazy" decoding="async"><span class="home-post-copy"><span class="home-post-category">${escapeHtml(p.category)}</span><strong>${escapeHtml(p.title)}</strong><span class="home-post-excerpt">${escapeHtml(p.excerpt)}</span><span class="home-post-meta">${formatHomeDate(p.date)} · ${p.readingMinutes} min read</span></span></a>`;

const postCard = (p, heading = 'h2') => `
    <article class="blog-card">
      <a href="/blog/${p.slug}/">
        <img class="blog-image" src="${escapeHtml(p.image)}" alt="" width="1200" height="800" loading="lazy" decoding="async">
        <div class="card-copy">
          ${meta(p)}
          <${heading}>${escapeHtml(p.title)}</${heading}>
          <p>${escapeHtml(p.excerpt)}</p>
          <span class="blog-read">Read the essay <span aria-hidden="true">↗</span></span>
        </div>
      </a>
    </article>`;

function loadPosts() {
  if (!existsSync(CONTENT_DIR)) return [];
  return readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const { data, content } = matter(readFileSync(path.join(CONTENT_DIR, filename), 'utf8'));
      const body = content.replace(/^\s*#[^\n]*\n+/, '');
      const text = body.replace(/[#*_`>[\]!-]/g, ' ').replace(/\s+/g, ' ').trim();
      // Covers are local editorial assets; reject remote or traversal paths.
      // New article packages use `cover_image`, while older posts use `image`.
      const requestedImage = data.cover_image || data.image;
      const image = typeof requestedImage === 'string' &&
        /^\/(?:assets|images\/journal)\/[a-zA-Z0-9_-]+\.(?:webp|png|jpg|svg)$/.test(requestedImage)
        ? requestedImage : '/assets/research.webp';
      return {
        slug: slugify(data.slug || filename.replace(/\.md$/, '')),
        title: data.title || filename.replace(/\.md$/, ''),
        date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : data.date ? String(data.date).slice(0, 10) : '1970-01-01',
        excerpt: data.excerpt || data.description || text.slice(0, 160) + (text.length > 160 ? '…' : ''),
        category: data.category || 'Perspectives',
        image,
        featured: data.featured === true,
        readingMinutes: Math.max(1, Math.ceil(text.split(/\s+/).length / 220)),
        draft: !!data.draft,
        html: marked.parse(body),
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

function replaceRegion(html, name, body) {
  const start = `<!-- ${name}:START -->`;
  const end = `<!-- ${name}:END -->`;
  const startIdx = html.indexOf(start);
  const endIdx = html.indexOf(end);
  if (startIdx === -1 || endIdx < startIdx) throw new Error(`Missing homepage region: ${name}`);
  return html.slice(0, startIdx + start.length) + '\n' + body + '\n    ' + html.slice(endIdx);
}

function build() {
  const posts = loadPosts();
  rmSync(OUTPUT_DIR, { recursive: true, force: true });
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(path.join(OUTPUT_DIR, 'index.html'), page({
    title: 'Journal — Not Only Artificial',
    description: 'Independent thinking on AI, human judgment, and what comes next.',
    body: `<main id="main" class="reading-surface"><div class="wrap">
  <section class="blog-hero"><p class="eyebrow">The journal</p><h1>Towards better use of AI.</h1><p>Ideas on people, technology, and a more thoughtful future.</p></section>
  ${collaborationNote}
  <section class="blog-list" aria-label="All articles">${posts.length ? posts.map(p => postCard(p)).join('\n') : '<p class="blog-empty">No posts yet — check back soon.</p>'}</section>
</div></main>`,
  }));
  for (const p of posts) {
    const dir = path.join(OUTPUT_DIR, p.slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(path.join(dir, 'index.html'), page({
      title: `${p.title} — Not Only Artificial`, description: p.excerpt,
      body: `<main id="main" class="reading-surface"><div class="wrap"><article class="post">
  <header class="post-header"><a class="text-link" href="/blog/">← The journal</a>${meta(p)}<h1>${escapeHtml(p.title)}</h1><p class="post-deck">${escapeHtml(p.excerpt)}</p><img class="post-cover" src="${escapeHtml(p.image)}" alt="" width="1200" height="800"></header>
  <div class="post-content">${p.html}</div>
  <a class="button secondary back-link" href="/blog/">← All articles</a>
</article></div></main>`,
    }));
  }
  const indexPath = path.join(ROOT, 'public/index.html');
  let html = readFileSync(indexPath, 'utf8');
  const featured = posts.find(p => p.featured) || posts[0];
  const previewPosts = posts.filter(p => !featured || p.slug !== featured.slug).slice(0, 4);
  html = replaceRegion(html, 'BLOG_PREVIEW', previewPosts.map(homePostRow).join('\n') || '<p class="blog-empty">No posts yet — check back soon.</p>');
  html = replaceRegion(html, 'FEATURED_POST', featured ? homeFeatured(featured) : '');
  writeFileSync(indexPath, html);
  console.log(`[blog] built ${posts.length} post(s) and homepage previews`);
}
build();
