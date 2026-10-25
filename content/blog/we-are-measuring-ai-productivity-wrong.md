---
title: "We're Measuring AI Productivity Wrong"
date: "2026-10-25"
author: "NOA"
category: "Work & AI"
description: "AI makes us produce more. That is not the same as getting more done."
slug: "we-are-measuring-ai-productivity-wrong"
cover_image: "/images/journal/measuring-ai-productivity-cover.png"
---

# We're Measuring AI Productivity Wrong

"AI made us more productive."

Almost every team says this now. But ask *how* they know, and the answer is usually: more code, more pull requests, more tickets closed, people feel faster.

**None of that proves more useful work got done.**

## More code, not more software

This summer, a Microsoft study of its own rollout of AI coding agents found that engineers who adopted them merged about **24% more pull requests**. Even the authors note that a merged pull request is not the same as delivered value.

This month, a Harvard working paper looked at **718 companies** and asked exactly that question.

After teams adopted AI coding agents, they wrote about **30% more code**.

They did not finish meaningfully more work.

What grew instead was everything around the code: reviews took **49% longer**, and the share of changes sent back for rework nearly doubled.

## Feeling faster is not being faster

DX's research across more than 120,000 developers found that almost everyone now uses AI, yet the productivity gain has stalled at around **10%**.

Glean's 2026 survey of 6,000 workers shows where the rest goes. **75%** say AI makes them more productive. **77%** had to fix or redo AI work in the past month.

Workers say AI saves them about **11 hours a week**, and that they spend about **6.4 hours** checking and fixing its output. The report calls this **"botsitting."**

![Agents produce output fast, while a person spends hours checking and fixing it.](/images/journal/botsitting.png)

Almost nobody measures that second number.

## The bottleneck moved

Writing got cheap. Reviewing, verifying and deciding did not.

So if your dashboard counts lines, commits or pull requests, it is counting the cheap part, and that part can now be inflated endlessly.

## What our own numbers taught us

When we [moved 76 million rows with AI agents](/blog/seventy-six-million-rows-later/), the activity numbers looked like a miracle: thirty repositories in fourteen minutes, 1,500 commands in one session.

None of that told us whether the work was right.

What mattered was **zero failed tables**, row counts that matched, and the forty or so times someone on the team said "stop."

**The output numbers measured the agents. The outcome numbers measured the team.**

## What to measure instead

- **Finished outcomes,** not activity.
- **Time to a trusted result,** not time to a first draft.
- **Rework:** how often AI work has to be fixed or redone.
- **Review load:** how much human time goes into checking.
- **Cost per outcome,** including people's time.

When producing output costs almost nothing, **output tells you almost nothing.**

So the question is not "Is AI making us more productive?"

It is: **What did we finish that we couldn't before, and how much human time did it really take?**

*See you in a Thoughtful Future.*

### References

Chen, F. & Stratton, J. (2026). *Artificial Intelligence in the Firm: Bottlenecks in Software Production.* Harvard working paper. Coverage:  
https://fourweekmba.com/ai-coding-agents-add-30-more-code-not-more-finished-work/

Murphy-Hill, E., Butler, J. & Savelieva, A. (2026). *Adoption and Impact of Command-Line AI Coding Agents: A Study of Microsoft's Early 2026 Rollout of Claude Code and GitHub Copilot CLI.*  
https://arxiv.org/abs/2607.01418

DX (2026). *Measuring Developer Productivity & AI Impact.* Coverage:  
https://shiftmag.dev/this-cto-says-93-of-developers-use-ai-but-productivity-is-still-10-8013/

Glean Work AI Institute (2026). *Work AI Index 2026.*  
https://www.glean.com/work-ai-institute/reports/work-ai-index
