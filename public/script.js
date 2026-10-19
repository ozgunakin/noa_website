// Preserve previously shared links to the former homepage approach section.
if ((location.pathname === '/' || location.pathname === '/index.html') &&
    ['#principles', '#why'].includes(location.hash)) {
  location.replace('/approach/');
}
