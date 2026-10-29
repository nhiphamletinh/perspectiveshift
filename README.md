# PerspectiveShift — Lesson 1

A responsive facilitator and learner workspace with server-enforced class membership, immutable submitted attempts, versioned materials, controlled live stages, anonymous sharing, two independent practices, scheduling, private comments, and exports.

## Runtime

Node 22.13+; React/Vinext on Cloudflare Workers; Sites-managed ChatGPT authentication; Cloudflare D1. Sites injects trusted user identity at the edge. Never expose the Worker directly behind a proxy that accepts arbitrary identity headers from visitors.

The only database is the migration-managed `records` table. Records have separate kinds for classes, memberships, material versions, responses, practice assignments, shares, feedback views, and private comments. Every class request is authorized on the server. Submitted response updates are rejected in application logic and guarded atomically in SQL. Draft recovery in localStorage supplements D1.

## Start

Install using the Sites install-dependencies helper, then run `npm run db:generate` only when the schema changes. Build with the Sites build-site helper. Apply pending SQL to local D1 using the generated `dist/server/wrangler.json` configuration, then `npm start -- --port 8787`. Hosted migrations apply during Sites publication.

Local preview does not simulate ChatGPT sign-in. `tests/api.mjs` uses three distinct simulated identities against a localhost Worker, plus an unaffiliated identity. It creates isolated local QA classes. Run it only against the local preview with its D1 migration applied. No test identity override is shipped in the application.

## Included Lesson 1 materials

The supplied CampusBridge recommendation and P1–P4 sources, AI writing-assistant worked example, learner reference, individual mapping prompts, pair discussion, private facilitator guidance, dashboard practice and CaptionAid practice are included. Prepared practice feedback remains submission-gated. New classes start with these materials ready for facilitator review and publication.

## Classroom setup

1. Sign in and create a class.
2. Review the supplied materials in Lesson Setup and publish a version.
3. Arrange Site access for the intended learners through Sites sharing. A new Site remains owner-private by default; a class code does not bypass that hosting boundary.
4. Learners sign in with their own accounts and join using the class code.
5. Advance stages using Live Session. Explicitly select submitted maps in Responses to share them. Opening a private response does not share it.
6. Release or schedule each practice independently.

## Verification

TypeScript and production build checks, local API tests, and browser checks of facilitator navigation, learner practice forms, draft saves, keyboard submission, post-submission feedback, and mobile layout were performed. Full hosted sign-in, cross-device use, and the requested walkthrough with separate real accounts remain to be verified after the intended learner accounts have Site access. No automated scoring or LLM integration is present.

## Lesson-plan control flow

Opening a class now opens its 90-minute Lesson Plan for facilitators, and the current interactive activity for learners. Each expandable step exposes its materials, Start activity, and Try student screen. New classes include the supplied material version published and ready to use. Existing class records and attempts are preserved.

The plan covers external baseline, initial judgment, concepts, individual mapping, break, comparison, revision, and exit retrieval. Assessment A is explicitly external because its content has not been provided. No baseline assessment or scoring has been invented.

Start activity updates the server-controlled stage; learner workspaces follow within the polling interval. Concepts use a shared slide index. The teaching deck excludes roster information and private notes. Comparison and exit retrieval save separate private attempts.

The facilitator monitor refreshes every two seconds. Learners send an activity/field presence heartbeat every five seconds, and drafts autosave separately. Presence is class-authorized and is not shown to other learners. It records the app field and recent presence, not a screen recording or cursor tracking.

Try student screen is an interactive, clearly labeled local demo. It supports input, save, submit, and prefilled revision without creating real learner submissions. Demo attempts reset when a different class is selected or the page is reloaded; real learner attempts persist in D1.

The local API suite `tests/lesson-flow.mjs` verifies activity gates, presence privacy, synchronized slides, comparison, exit retrieval, and immutable revisions. Set TEST_BASE to the localhost production-preview API URL. The development sign-in helper uses a single local identity, so multi-identity tests use the built Worker preview.


## Complete delivery guide update

The 90-minute flow now includes joining (5), NotePilot baseline (15), CampusBridge judgment (5), concepts (15), mapping (15), break (5), comparison (15), debrief (5), revision (5), and exit retrieval (5). Debrief is read-only; revision is released separately.

Presentation View opens in a separate named window and follows server stage/slide state. Private guidance, roster, answer guidance, and delivery records stay in Facilitator View. The join screen generates its QR locally. Learners supply a display name and code after sign-in. A private Site requires Site access in addition to the classroom code.

Baseline is now included, with no automatic feedback and no peer sharing. Server responses withhold CampusBridge before the hook, reference/example content before concepts and during exit, and unreleased practice content. Only submitted maps can be shared. Facilitators preview and edit the anonymous shared copy; originals remain unchanged. All explicitly shared maps appear on the discussion board.

Stage changes preserve local text; if a response is unsaved the learner can save before following the new activity. Existing drafts remain saveable after a stage closes; submissions obey stage rules. Late initial maps are marked after peer-example exposure, not simply after a break. A printable learner fallback is generated only in the facilitator view, without answer guidance. The guide did not supply a baseline rubric; use an approved external rubric for later review.

Tests: `tests/api.mjs` covers persistence, permissions, practices and immutable attempts; `tests/lesson-flow.mjs` covers baseline, release gates, slide sync, break draft preservation, redacted sharing, read-only debrief gate, revisions and the three-field exit task. Use TEST_BASE to point at a locally authenticated Worker. Test identity injection is local-only and is not deployed.
