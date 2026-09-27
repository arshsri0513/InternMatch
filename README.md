# InternMatch Prototype

## One flow
**Discover → Compare → Save**

A student enters a few skills and optional preferences, reviews a small set of prototype internship opportunities, selects two opportunities for side-by-side comparison, and saves opportunities for later.

## Scope
This is a deliberately narrow prototype for testing the core comparison/discovery mechanism.

### Included
- Skill-based filtering
- Location and work-mode filters
- Keyword search
- Opportunity cards
- Select up to two opportunities
- Side-by-side comparison
- Save/unsave with browser localStorage
- Basic empty/unexpected input handling

### Deliberately excluded
- Accounts/authentication
- Messaging
- Payments
- Applications
- Live scraping
- Production recommendation models
- Notifications
- Admin tools
- Real personal data

## Run locally
No backend or package installation is required.

1. Open `index.html` directly in a browser, or serve the folder with any static server.
2. Example with Python:
   `python -m http.server 8000`
3. Open `http://localhost:8000`.

## Data
The internship records in `app.js` are **prototype/demo records**, not live opportunities. They are not evidence that these internships are currently open.

## Testing
The Build Log documents the intended break tests and stranger-test protocol. Any real user-test results should be added after actual sessions; do not represent planned tests as completed research.

## Credentials
No API keys, `.env` files, or credentials are included.
