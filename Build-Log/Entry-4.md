# Build Log — Entry 4: Unwind the Idea

## Five Whys
**Initial solution:** Build an internship discovery platform.

1. **Why?** Students may struggle to identify relevant internships.
2. **Why does relevance matter?** A large list can still require students to manually inspect eligibility, skills, location, and deadlines.
3. **Why is manual inspection a problem?** It may increase effort and make comparison harder.
4. **Why does it increase effort?** We do not yet know how students actually search or what they compare.
5. **Why don't we know?** We have not completed sufficient field research.

**First research item:** What do target students actually do when searching for internships, and which step causes the most friction?

## Reframe 1 — The disbeliever
**Prompt:** Assume the problem does not meaningfully exist. What would prove us wrong?

**What it exposed:** Students may already have an efficient workflow through LinkedIn, college groups, seniors, and existing portals. We cannot assume fragmentation is severe without observing it.

## Reframe 2 — The incumbent
**Prompt:** Imagine an existing internship platform defending the status quo. Why might it say this prototype is unnecessary?

**What it exposed:** Existing platforms already provide search and filtering. Our differentiation cannot simply be "another internship search page"; the comparison mechanism needs to demonstrate a specific benefit.

## Two critics
### User
**Strongest objection:** "I already search on platforms I know. Why would I switch to another site just to compare listings?"

### Technical lead
**Strongest objection:** "If the data is not live and reliable, a comparison interface can look useful while still failing the real task."

## Top 3 assumptions
| Rank | Assumption | Why it can break the project |
|---|---|---|
| 1 | Target students experience meaningful friction in internship discovery/comparison | If false, the core problem is weak. |
| 2 | Comparison is more useful than simply better search | If false, the chosen flow tests the wrong mechanism. |
| 3 | Students will change their current behaviour to use a new tool | If false, usefulness may not translate to adoption. |

## 48-hour tests
| Assumption | Test |
|---|---|
| #1 | Conduct 5–8 interviews with target students focused on their most recent internship search. |
| #2 | Show two versions of the same opportunity set: basic list vs. side-by-side comparison; observe which helps users make a decision faster. |
| #3 | Give users a realistic search task using the prototype and ask them to repeat the task with their current method; compare observed effort and preference without relying only on stated intent. |

## Problem statement — Version 2
**College students actively searching for internships may struggle to compare opportunities across skills, eligibility, location, work mode, and deadlines because relevant information is spread across different listings and channels. The cost may be repeated manual checking and slower decision-making, but the frequency and severity of this problem still need field validation. Today, students can use job portals, professional networks, college groups, and personal contacts, so a new product must prove that a focused comparison flow provides value beyond those alternatives.**

### What changed from Version 1
Version 2 narrows the problem from general "internship discovery" to the specific, testable question of **comparison friction**, while explicitly acknowledging that the problem's frequency and severity remain unverified.
