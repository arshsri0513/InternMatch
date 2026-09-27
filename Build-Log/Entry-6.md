# Build Log — Entry 6: Spec, Build, Test

## PROJECT_SPEC.md
The complete specification is included in `prototype/PROJECT_SPEC.md`.

## Tech stack
| Layer | Choice | Why it fits |
|---|---|---|
| Frontend | HTML, CSS, vanilla JavaScript | Lowest setup overhead; sufficient for one focused prototype. |
| Backend | None | The flow can be tested without a server; avoiding a backend keeps scope narrow. |
| Data/storage | In-memory demo records + browser localStorage | Enough to test filtering, comparison, and saving without credentials or database setup. |
| AI model/API | None in runtime | The prototype is testing the user flow, not adding AI merely for appearance. |
| Hosting | Any static host | The project is static and can be deployed cheaply; a hosted link should be added after deployment. |

## Working flow
**Discover → Compare → Save**

1. User enters skills/preferences.
2. Prototype filters demo opportunities.
3. User selects two opportunities and compares them side by side.
4. User saves an opportunity locally.

## Deliberate break tests
These are required test cases. The actual observed result should be recorded after execution on the final environment.

| Test | Expected | Actual status |
|---|---|---|
| Empty skills | Show all/filtered opportunities without crashing | Designed and locally handled; final environment check required |
| Very long input | Remain usable; input is capped | `maxlength` is set; final environment check required |
| Unexpected text | No crash; likely zero matches | Designed to return zero matches; final environment check required |

## Spec review
Human review checklist:
- Requirements implemented: Yes, based on source inspection.
- Exclusions respected: Yes.
- Demo data clearly labelled: Yes.
- Credentials included: No.
- One flow maintained: Yes.

AI review:
**Not included as a fabricated transcript.** The final team should run the exact implementation through an AI reviewer using `PROJECT_SPEC.md` and paste the unedited review here.

## Stranger test
**Status: pending real sessions.**  
Two real participants have not been fabricated. The final submission should record:
- Task given
- First hesitation
- Wrong click
- Question asked
- Whether the user completed the task
- What changed afterward

### Suggested stranger-test task
"Find an internship that matches your skills, compare it with one other option, and save the one you prefer."

## Changes after stranger test
**Pending.** Do not claim changes based on users until two real sessions have been run.

## Reusable workflow — Evidence Claim Verification
**Input:** A factual claim generated during product research.

**Process:** Locate the original source; compare the claim with the source; check date, population, wording, and calculation.

**Verification:** Mark the claim Verified, Partially Verified, or Unverified. If no reliable source can be found, do not use the claim as evidence.

**Output:** A claim with its source, verification status, and Evidence/Inference/Hypothesis/Assumption tag.
