# Build Summary — InternMatch

## Theme
**AI for Education & Employability**  
*Replace with the exact registered Innovation Theme wording if different.*

## Problem statement
College students actively searching for internships may struggle to compare opportunities across skills, eligibility, location, work mode, and deadlines because relevant information is spread across different listings and channels. The cost may be repeated manual checking and slower decision-making, but the frequency and severity still require field validation.

**How it changed:** The first version described broad internship-discovery friction. After unwinding the idea, the project narrowed to the specific hypothesis that comparison—not simply discovery—is a meaningful friction worth testing.

## What we built
A focused browser prototype implementing:

**Discover → Compare → Save**

The user enters skills/preferences, reviews demo opportunities, selects two for side-by-side comparison, and saves an opportunity.

### Deliberately not built
Accounts, messaging, payments, applications, live scraping, production recommendation models, notifications, and admin tools.

## Tech stack
- **Frontend:** HTML/CSS/vanilla JavaScript — minimal setup for a focused prototype.
- **Backend:** None — unnecessary for the first flow.
- **Storage:** Browser localStorage — sufficient for a save interaction.
- **AI runtime:** None — the prototype tests the product mechanism rather than adding AI without evidence.
- **Hosting:** Static hosting compatible — add the deployed link after deployment.

## Evidence position
### Currently supported
- The proposed flow is technically feasible as a small browser prototype.
- The comparison mechanism can be implemented without a complex backend.
- The project has explicit scope and test criteria.

### Still assumptions / unverified
- How common comparison friction is among the target students.
- Whether students prefer comparison over their existing search workflow.
- Whether the flow saves meaningful time.
- Whether users would adopt a new tool.
- Whether there is a viable payer and price.

No fabricated interviews, market statistics, or live internship claims are included.

## What we would build next
Next flow: **Compare → Detail → Apply/Source** using verified live opportunities.

It would only be worth building after evidence shows that:
1. target students repeatedly experience comparison friction,
2. users complete the comparison flow without guidance,
3. comparison changes or improves their decision process, and
4. reliable opportunity data can be maintained.

## Prototype note
Demo records are included solely to make the interaction testable. They are not presented as verified current internship openings.
