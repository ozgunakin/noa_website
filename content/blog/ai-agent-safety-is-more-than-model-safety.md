---
title: "AI Agent Safety Is More Than Model Safety"
date: "2026-09-12"
author: "NOA"
category: "AI safety"
description: "A safe model is not enough. Companies also need to control what an AI agent can do and what people may believe because of it."
slug: "ai-agent-safety-is-more-than-model-safety"
cover_image: "/images/journal/ai-agent-safety-system-cover.webp"
---

# AI Agent Safety Is More Than Model Safety

AI agents are starting to work inside real companies.

They write code, search internal documents, answer employee questions, and connect to company systems.

That creates a different kind of security problem.

**An AI agent can cause harm in two ways: by doing the wrong thing, or by making a human believe the wrong thing.**

![Two layers of AI agent safety: actions and information.](/images/journal/ai-agent-safety-two-layers.svg)

The first problem is about **actions**.

Spotify has described agentic development environments where coding agents work with controlled permissions and isolated environments. The idea is familiar from traditional security: do not give software more access than it needs.

Uber has also discussed extending identity and Zero Trust ideas to AI agents. An agent should have an identity, clear permissions, and extra controls around sensitive actions.

The principle is simple: **Do not ask the agent to enforce every security rule by itself. Build the rules around it.**

But actions are only half of the problem.

An agent can be perfectly isolated from production and still give a confident, wrong answer. If an employee makes a real decision based on that answer, the damage is no longer technical. It is informational.

Airbnb’s AI support work shows the value of grounding answers in a limited set of trusted help and account information, with escalation to a human when needed.

Morgan Stanley has taken a similar approach in knowledge assistants for employees: answers are grounded in approved internal content, users can reach the original source material, and new use cases are evaluated before wider deployment.

This gives us a second principle: **A safe agent should not only know what it is allowed to do. It should know what it is allowed to claim.**

Trusted sources matter. Access-aware retrieval matters. Citations matter. And sometimes the safest answer is simply: **“I don’t know.”**

That is not a weakness. It is a safety feature.

As AI agents become part of everyday work, model safety will remain important. But the model is only one layer.

**The safest agent may not be the one with the safest model. It may be the agent inside the safest system.**

*See you in a Thoughtful Future.*

## References

1. Spotify Engineering. https://engineering.atspotify.com/
2. Uber Engineering. https://www.uber.com/blog/engineering/
3. Airbnb Tech. https://medium.com/airbnb-engineering
4. Morgan Stanley. https://www.morganstanley.com/
5. OpenAI Codex. https://openai.com/codex/


<!-- IMPLEMENTATION NOTES
Cover: /images/journal/ai-agent-safety-system-cover.webp — Journal card + article hero.
Inline: /images/journal/ai-agent-safety-two-layers.svg — keep at the exact position used above.
Suggested SVG destination: public/images/journal/
Suggested Markdown destination: content/blog/
-->
