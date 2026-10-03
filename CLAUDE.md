# CV App (سيرتي) — Project Spec

## How to work with the owner
The owner is a complete beginner with no coding experience.
- Always explain what you are doing in simple Arabic, one step at a time.
- Ask before any big decision.
- Keep the code simple and well commented.
- Build phase by phase and stop after each phase so the owner can test.

## Product
A free, bilingual (Arabic + English, full RTL) CV builder for the Middle East job market.
CVs must be ATS-friendly (single column, real text PDF, clear section titles, no tables/images
hiding text). Gulf conventions: optional photo (offer "two versions": with and without), nationality,
residence/visa status, date of birth & marital status (optional), driving license.
Research data and the agreed 60 questions: `docs/research.md`.

## Tech decisions (agreed)
- Plain HTML + CSS + JavaScript, no build step, classic `<script>` tags (works from `file://`).
- Cache busting: every local script/CSS in index.html has `?v=<n>`; BUMP it on every deploy.
  netlify.toml sends `max-age=0, must-revalidate`.
- UI text lives in `js/i18n.js` (keys: `q.<id>`, `q.<id>.hint`, `o.<id>.<option>`, `f.<field>`, `ph.<field>`).
  Big data lists (fields, jobs, countries) live in `js/data.js` with `ar` and `en` side by side.
- Routing by URL hash: `#/`, `#/start`, `#/q/<section>/<index>`, `#/done/<section>`.
- Answers saved in localStorage (`cvapp.answers`) only, for now.

## Flow (agreed with owner)
Start question "Who are you?" (graduate / experienced / licensed / craft) → 4 parts × 15 questions:
1. You & your goal  2. Education & certificates  3. Experience & achievements  4. Skills & CV look.
Questions marked 🔄 in docs/research.md change their options by profile (e.g. PROFILE_FIELDS).

## File structure
```
index.html       The single page
css/style.css    All styling (white calm UI, teal primary #0F5257, amber accent #E39B2D)
js/data.js       PROFILES, FIELDS (14 fields with jobs), PROFILE_FIELDS, COUNTRIES, WORK_COUNTRIES
js/questions.js  SECTIONS: question definitions (single / multi / text, other, more, optional)
js/storage.js    localStorage helpers
js/i18n.js       All UI text AR + EN, t()
js/app.js        State, screens (home, start, question, done), validation, router
docs/research.md Market research (sources) + the 60 questions
```

## Phase status
- [x] Phase 1: home, "Who are you?", part 1 (15 questions), part-1 summary with CV header preview.
- [ ] Phase 2: part 2 (education & certificates) + part 3 (experience & achievements).
- [ ] Phase 3: part 4 (skills & look) + real CV templates + ATS-friendly PDF download.
- [ ] Phase 4: personal photo — upload/take photo, crop, shape (circle/square/rounded), position
      (top right/left/center, sidebar, next to name, none), size, frame; mirrored for Arabic;
      stays on the device; "two versions" download.
- [ ] Phase 5: "I have a CV — improve it": upload photo/PDF → extract → pre-fill answers → improve
      skills & wording → ATS score before/after. AI (option A) vs in-browser (option B): owner to decide.
