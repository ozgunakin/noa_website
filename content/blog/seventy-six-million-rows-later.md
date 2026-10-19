---
title: "Seventy-Six Million Rows Later: What Working With AI Agents Taught Us"
date: "2026-10-19"
author: "NOA"
category: "Work & AI"
description: "Real team work with AI coding agents: what got faster, what went wrong, why the expert team mattered most, and what the research says."
slug: "seventy-six-million-rows-later"
cover_image: "/images/journal/seventy-six-million-rows-cover.png"
---

# Seventy-Six Million Rows Later: What Working With AI Agents Taught Us

I recently went back through sixty working sessions with AI coding agents.

Not quick questions. Not experiments. Each one was a real piece of work, and none of it was a one-person project.

Together with my team, we moved a large set of data pipelines to a new database. We upgraded a production database. We built a customer support center in a single day. We put a paywalled product live in one evening.

My part in this was specific. I have broad access across our systems and a lot of context on how they fit together. So I could take what the team had designed, point the agents at it, and help move it to production faster. The expertise behind the work was the team's.

To give a sense of the scale, the database migration alone involved:

- **More than 50 production pipelines**, around **87,000 lines** of Python and SQL, changed to write to both the old and the new database.
- About **2,500 tables** copied in a single run of a little over four hours: 36,870 files, zero failed tables.
- Around **76 million rows** written to the new database in the first 48 hours after the switch, across more than 1,400 pipeline runs, with no failures.
- A data cleanup touching **194 million values** in 778 tables, and more than 1,200 queries checked against the old database, with zero errors.

The longest session behind it involved more than 1,500 commands.

Across those sessions, I typed some version of **"stop"** around forty times. I asked the agents to **revert** something about eight times.

Both numbers matter. And I think together they say more than most of what we read about agents.

## Two stories that don't agree

Tech media tells one story. Agents are everywhere now. In Stack Overflow's 2026 survey, two-thirds of developers who use AI say they use coding agents. Anthropic reports its own engineers now use Claude in around 60% of their work and feel about 50% more productive.

Research tells a more careful story. In METR's 2025 randomized trial, experienced developers using AI took **19% longer** to finish real tasks. The strange part: they still *believed* they had been about 20% faster. A Harvard working paper covering roughly 700 companies found that after teams adopted agents, they wrote around 30% more code, but resolved **no more issues** than before.

So which one is true?

From our experience: both. Agents really are faster at producing work. Whether a *team* ends up faster depends on everything around them, and most of all on the people.

## Where agents really shine

**1. Repeating a pattern the team has already solved.**

My team built one data pipeline change by hand, carefully. Then I asked an agent to understand what we did and apply it to the others. It did twenty repositories. Later that day I gave it thirty more. It split the work across three agents running in parallel, and they finished in about fourteen minutes.

These were not toy scripts. Each repository was a pipeline running in production, some with thousands of lines of their own. Doing the same change by hand, carefully, would have taken the team days.

That is the sweet spot. **One worked example from people who know the system, many copies from the agents.**

**2. Careful operational work, with humans holding the clock.**

We upgraded a production database with a blue/green switchover. An agent helped plan it, ran it at night and monitored it. The actual switchover took about 34 seconds. Along the way, it found a missing index on around a thousand tables, and we fixed that too.

We chose when it happened, how often it checked and what "done" meant. The agent did the rest.

**3. Getting from idea to live.**

We needed a paywalled product online that evening. The product, the content and the decisions about what to sell were already the team's. With that in place, sign-up, payments, an API and the content gating were live about ninety minutes later. A full support center, built on flows the team had defined, took about six hours.

This matches what the larger field experiments show. A study with nearly 5,000 developers at Microsoft, Accenture and a Fortune 100 company found about **26% more completed tasks** per week. Anthropic found that 27% of the work its engineers did with AI simply **would not have been done otherwise.**

**4. A second pair of eyes.**

When we asked for a database proxy, the agent warned that the setup would expose a long list of database users to a new network path. It proposed a locked-down alternative, explained why our existing setup would not break, and let us choose how far to go.

Agents are often the first ones in the room to say "wait, this is risky." But they are one voice in the room, not the room.

## Where they go wrong

**1. They optimize what you said, not what you meant.**

One agent designed a data backfill that was correct. It was also far more expensive than it needed to be. Only when we asked "is there a cheaper way?" did it explain that its own design was the cause, and propose a much cheaper route.

Nobody had said cost mattered. So, for the agent, it didn't. It took people who know what our infrastructure *should* cost to notice.

I wrote recently about [AI doing exactly what we asked](/blog/what-if-ai-is-doing-exactly-what-we-asked/). This is the everyday version of that problem.

**2. They make decisions quietly.**

Across different projects, agents switched an authentication approach the team had already agreed on, changed who receives customer email replies, and moved a setting out of our secrets manager into a plain environment variable. In one case, an agent edited the very repository we had given it as a *reference*.

None of these were bugs. They were **decisions**, and nobody asked us. Each one was caught because someone knew how things are supposed to work here.

This is the part I think research captures well. In the 700-company study, the time from pull request to merge went up by 49%, and the share of changes needing rework nearly doubled. Writing got cheap. **Reviewing did not.**

And it is not enough to review the code. You have to review the choices, and that takes people who understand them.

**3. Autonomy without limits.**

During an outage at an external service, an agent kept a background loop retrying a build every few minutes instead of stopping to find the cause. Another time, we asked for a bulk data operation and the agent started working before a plan had been agreed.

Both times we stopped it. After the second, the agents got a standing rule: **no background jobs, and no bulk actions, without asking first.** The rule went into persistent memory and was kept.

Last year, an agent on another platform deleted a user's database during a code freeze. That story got attention because it was dramatic. But the cause is ordinary: an agent with more freedom than the situation deserved, and no one positioned to stop it.

**4. Long sessions drift.**

The longest session ran for days. The agent's memory was compressed several times along the way. Each time, small things slipped: rules we had set, even the language it was supposed to answer in. Another project grew so many overlapping screens that we had to stop and ask for everything to be consolidated.

The fix was boring and effective: written decision logs, and starting fresh sessions more often.

**5. Fast to live is not the same as safe to live.**

The paywall we put live in ninety minutes had a gap: while payments were still in test mode, anyone could unlock paid content with a public test card. The agent caught it, but only after launch. Within days, bots were signing up and we had to add more protection.

Security research points the same way. Veracode found security flaws in **45%** of AI-generated code across more than 100 models.

**6. Understanding debt.**

This one is quieter. Anthropic ran a randomized study with junior engineers learning a new library. The group using AI scored **50%** on a later test, compared with **67%** for the group without it. The biggest gap was in debugging, which is exactly the skill you need to supervise agents.

The people who used AI to ask questions did well. The people who just handed over the work did not.

I called this [understanding debt](/blog/ai-solved-the-problem-humans-are-still-catching-up/) in an earlier post. Agents make it very easy to take on, and an experienced team is the best protection against it.

## Agents are not the team

It would be easy to read the numbers above and conclude that one person with a few agents can now do the work of a team.

That is not what happened.

Every pattern the agents copied was designed by someone on the team. Every "stop" came from someone who knew the system well enough to see a problem coming. The cost issue, the quiet decisions, the email flow that was wrong: all of them were caught by people with years of context the agents did not have.

What the agents changed was the **distance between a good decision and a working system**. My role was to shorten that distance: to use my access and experience to carry what the team designed into production faster.

![A team designs the plan and guards the bridge while AI agents carry the work into production.](/images/journal/agents-are-not-the-team.png)

Without the team, the agents would have been fast at building the wrong things.

## What we do differently now

None of this made us use agents less. It changed how we use them.

- **Start from the team's worked example.** And say clearly which files are reference only.
- **Plan first.** For anything bulk, costly or hard to undo, the agent proposes a plan and a person approves it before any action.
- **Put the constraints in the request.** Cost, scope, what must not change. If we don't say it, it doesn't exist.
- **Keep the keys with people.** We create the cloud resources and permissions ourselves. The agents write the code. They work on a branch, not in production.
- **Write the rules down.** Persistent memory and project instruction files are where limits survive a long session.
- **Review decisions, not just diffs.** "Why did you change that?" is the most useful question we ask.
- **Verify in the real system.** Not in an agent's summary of the real system.
- **Ask, don't just delegate.** When we want to *learn* something, we ask the agents to explain, not just to do.

## The amplifier

Google's 2025 DORA report describes AI as an **amplifier**. It makes strong teams stronger and weak processes weaker. AI is now linked to higher delivery speed, but also to more instability.

That matches what we saw. Agents did not replace judgment or expertise. They made them the main thing.

**The agents write the code. The team still owns the decisions.**

The developers in METR's newer study were so attached to their AI tools that many refused to work without them, which broke the experiment. I understand them. We would not go back either.

But the question was never whether agents are fast.

It is whether our teams are getting better at deciding what agents should do, and noticing when they decide for us.

*See you in a Thoughtful Future.*


### References

METR (2025). *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity.*  
https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/

METR (2026). *We are Changing our Developer Productivity Experiment Design.*  
https://metr.org/blog/2026-02-24-uplift-update/

Ars Technica via Slashdot (2026). *AI Coding Agents Generate More Code, But Not More Software.*  
https://tech.slashdot.org/story/26/10/12/0234217/ai-coding-agents-generate-more-code-but-not-more-software

Cui, Z., Demirer, M., Jaffe, S., Musolff, L., Peng, S. & Salz, T. *The Effects of Generative AI on High Skilled Work.* Summary by MIT Sloan.  
https://mitsloan.mit.edu/ideas-made-to-matter/how-generative-ai-affects-highly-skilled-workers

Shen, J. & Tamkin, A. (2026). *How AI assistance impacts the formation of coding skills.* Anthropic.  
https://www.anthropic.com/research/AI-assistance-coding-skills

Anthropic (2025). *How AI is transforming work at Anthropic.*  
https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic

Google DORA (2025). *State of AI-assisted Software Development.*  
https://blog.google/technology/developers/dora-report-2025/

Veracode (2025). *2025 GenAI Code Security Report.*  
https://www.veracode.com/press-release/ai-generated-code-poses-major-security-risks-in-nearly-half-of-all-development-tasks-veracode-research-reveals/

Stack Overflow (2026). *The results of the 2026 Developer Survey are here.*  
https://stackoverflow.blog/2026/10/06/the-results-of-the-2026-developer-survey-are-here/

eWeek (2025). *Replit AI Coding Assistant Failure.*  
https://www.eweek.com/news/replit-ai-coding-assistant-failure/
