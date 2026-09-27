# PROJECT_SPEC.md — InternMatch

## 1. What is this?
InternMatch is a lightweight prototype for helping college students narrow a fragmented internship search into a small set of opportunities they can compare and save. The prototype tests whether a focused discovery-and-comparison flow is useful before building a larger platform.

## 2. Who uses it?
Primary user: college students actively searching for internships who use multiple channels and need to compare opportunities against their skills and preferences.

## 3. What must it do?
1. Accept a short list of user skills.
2. Let the user optionally filter by location and work mode.
3. Show relevant prototype opportunities.
4. Let the user select up to two opportunities.
5. Show selected opportunities side by side.
6. Let the user save/unsave opportunities locally.
7. Handle empty, very long, and unexpected text without crashing.

## 4. What does it NOT do?
- No login or account creation.
- No applications or application submission.
- No messaging.
- No payments.
- No live job scraping.
- No claim that prototype listings are real/current openings.
- No automated ranking marketed as a production AI recommendation engine.
- No collection of sensitive personal information.

## 5. What data does it use?
- Demo internship records embedded in `app.js`.
- User-entered skills and filters, used only in the browser.
- Saved IDs stored in browser localStorage.
No sensitive personal data is required.

## 6. What are the constraints?
- Small student team.
- Prototype should be buildable quickly.
- No dependency on paid infrastructure.
- No credentials committed to the repository.
- One meaningful flow only.
- Demo data is acceptable for prototype testing but must not be presented as verified live opportunities.

## 7. What does "done" mean?
The Discover → Compare → Save flow can be completed end-to-end in a browser, survives the three deliberate break tests without crashing, and has been reviewed against this specification.

## 8. What is still unknown?
- Whether the target students experience this problem frequently enough.
- Whether comparison is more valuable than simply better search.
- Which information students actually need to compare.
- Whether students would change their current search behaviour.
- Whether a production version should use live data or integrations.
- Whether AI-based matching would improve outcomes enough to justify its complexity.
