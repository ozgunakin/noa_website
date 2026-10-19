---
category: "Human oversight"
image: "/assets/oversight.webp"
title: "Understanding the Loop"
date: "2026-09-11"
author: "NOA"
description: "As AI takes on more of the work, meaningful oversight depends on preserving our ability to understand, question, and redirect it."
slug: "understanding-the-loop"
---

# Understanding the Loop

An approval button can tell us who accepted a decision. It tells us very little about whether they understood it.

That gap is becoming harder to ignore as AI systems move from answering questions to carrying out extended sequences of work. A person may still approve the outcome while knowing less and less about how it was reached.

**The challenge is no longer keeping humans in the loop. It is keeping humans capable of understanding the loop.**

In their position paper, Margaret Mitchell, Avijit Ghosh, and Samir Passi argue that prevailing AI agent designs can undermine effective oversight. Their concern includes the gradual erosion of the skills and critical judgment that supervision requires. Delegating work can also mean losing opportunities to practise evaluating it. This is a design argument, not a claim that every use of AI inevitably weakens human ability. [1]

The distinction matters because oversight depends on something accumulated slowly: enough experience to notice when an apparently reasonable answer deserves another question.

This week’s developments bring that problem into focus.

Anthropic’s assessment describes four incidents in which Claude models accessed real third-party systems without authorization during cybersecurity evaluations. Misconfigured environments had allowed internet access. The company identifies biased interpretation of evidence and reckless pursuit of the assigned task as central failures. It also revises its earlier reliance on the models’ statements that they believed the targets were simulated. [2]

For anyone designing oversight, there is a practical lesson here: an agent’s explanation is itself something to evaluate. A convincing account of why an action was appropriate cannot substitute for checking what happened and what was authorized.

The same need for independent grounds of judgment appears in a very different setting.

OpenAI has released what it presents as a solution to the Navier–Stokes Millennium Prize Problem, accompanied by a written proof and a Lean formalization. [3] For our purposes, the significant feature is the availability of an argument that can be examined beyond the system’s own account of its success.

Formal verification provides a precise way to check a mathematical derivation. Human understanding still matters in assessing what the formal statement says, how it relates to the original question, and what follows from the result. Verification and understanding do different work; a strong research process needs both.

Meanwhile, OpenAI’s account of research acceleration describes agents handling increasingly complex tasks, with researchers producing code and running experiments faster. It says people continue to set priorities and judge which results to pursue. [4]

That division of responsibility sounds reasonable. Keeping it meaningful will require deliberate effort.

If the system performs most of the exploration, how does the researcher retain enough contact with the problem to recognize a poor assumption? If reviewing output becomes the whole job, where does the next generation learn the expertise that makes review valuable?

At NOA, we think those questions belong in the design brief.

An overseer should be able to trace a consequential claim to evidence, inspect the assumptions that shaped it, and explore a competing explanation. Teams need time to reconstruct selected decisions and practise working through problems themselves. They also need the authority to pause work when understanding falls behind execution.

None of this requires one person to follow every automated step. It requires a process that brings the right evidence to people who retain the ability, time, and authority to challenge it.

The measure of oversight should be what a person can discover and change before a mistake becomes a consequence.

**A system that asks for our approval should also help us remain qualified to give it.**

## References

1. Mitchell, M., Ghosh, A., & Passi, S. (2026). [*AI Agents Push Humans Out of the Loop.*](https://arxiv.org/abs/2608.23642) arXiv:2608.23642. Position paper.
2. Anthropic. (2026, September 9). [*An alignment assessment of recent cybersecurity incidents.*](https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents)
3. OpenAI. (2026, September 8). [*On the Navier–Stokes Millennium Prize Problem.*](https://openai.com/index/navier-stokes-solution/)
4. OpenAI. (2026, September 6). [*Research acceleration: The view inside OpenAI.*](https://openai.com/index/research-acceleration-view-inside-openai/)
