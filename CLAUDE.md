# Team instructions for Claude — DTC EdEx program pages

You are helping the Davis Technical College Educational Excellence (EdEx) team
build Canvas pages for the college's programs. Read this file at the start of
every session, then read the `CLAUDE.md` inside the program folder you are
working on before making any change there.

## What this repository is

- `programs/<program>/` — one folder per program (one Canvas sub-account each).
  - `CLAUDE.md` — how this program uses Canvas. **Always read it first.**
  - `program.css` — this program's colors, plus styles for its pilot activities.
  - `program.js` — JavaScript for this program's pilot activities.
  - `canvas-upload/` — the two small loader files uploaded once into the
    sub-account's Canvas theme. Do not change them.
  - `home-page/` and `orientation/` — the program's page HTML.
- `programs/udc-programs/` — the UDC (Utah Department of Corrections)
  sub-account, with its 13 sub-accounts as folders inside it. Canvas loads the
  UDC folder's files in all of them.
- `templates/` — the approved starting point for home and orientation pages.
- `docs/` — how-to guides for people (Canvas setup, pilot activities, Beta).

The shared SALT code (`salt.css`, `salt.js`) lives in a different repository,
`DTC-EdEx/DTC-Main-SALT`. It loads on every Canvas page at the college.
**Never copy SALT CSS or JavaScript into this repository or into a page.**
Loading SALT twice breaks its interactive components.

## Program activities (program.js / program.css)

A designer can build a new activity, such as a game or lab-prep tool, for one
program before it becomes part of SALT. Follow
`docs/program-activities.md`. In short:

- The code goes in that program's `program.js` / `program.css` only.
- Every class name, `data-` attribute, and storage key starts with `salt-pilot-`.
- The code only acts on pages that contain its own `salt-pilot-` class, and does
  nothing anywhere else. It runs on every page in the sub-account, including
  Gradebook and Quizzes.
- Never change Canvas's own interface.
- Build it keyboard-accessible, screen-reader friendly, and phone-ready from
  the start. That is what's checked before it can move into SALT.
- Record each pilot activity in the program's `CLAUDE.md` under
  "Pilot activities."
- Run `node --check` on any JavaScript you change.

## Changes to core SALT (DTC-Main-SALT)

- **Default: production.** Open a pull request into `DTC-Main-SALT`.
- **Only when someone asks to test in Beta first:** copy current production into
  `DTC-EdEx/DTC-Main-SALT-Beta`, add the change there, and let the person test.
  Then open the same change as a pull request into `DTC-Main-SALT`. See
  `docs/canvas-beta-testing.md`.

## Rules for every page

1. **Use only SALT components** from the component showcase
   (`examples/salt-component-showcase.html` in `DTC-EdEx/DTC-Main-SALT`). Copy
   their markup exactly; the class names are what make them work.
2. **No `<script>` or `<style>` tags.** Canvas removes them. Avoid inline
   `style=""` unless the showcase uses it.
3. **Headings start at `<h2>`.** Canvas uses `<h1>` for the page title. Never
   skip a level (h2 → h4).
4. **Every image needs meaningful `alt` text**, or `alt=""` if it is purely
   decorative.
5. **Link text says where it goes** ("Program calendar", not "click here").
   Links that leave Canvas open in a new tab with `target="_blank" rel="noopener"`.
6. **Color is never the only way to show meaning.** Text and its background
   must have at least 4.5:1 contrast (3:1 for large text and icons). Check
   this whenever a program's colors in `program.css` change.
7. **Plain language.** Many students read on a phone in a shop, lab, or
   clinical setting. Short sentences, common words, and the most important
   thing first.
8. **Pages must work in the Canvas mobile app**, not just a computer browser.
9. **Never put student information in this repository**: no names, grades,
   ID numbers, or anything from a student record. The repository is public.
10. Leave `[PLACEHOLDER]` text in brackets when you don't know something,
    and tell the designer what is still missing. Don't invent program
    details (hours, contacts, policies).

## How to work

1. Ask which program, if the designer hasn't said.
2. Read `programs/<program>/CLAUDE.md`. For a UDC program, also read
   `programs/udc-programs/CLAUDE.md`.
3. Start new pages from `templates/`, then fit them to how the program
   actually uses Canvas. A program that only uses Canvas for quizzes needs a
   very different home page than a fully online one.
4. **Remember what you learn.** When the designer tells you something lasting
   about the program (a preference, a rule, a decision), add it to that
   program's `CLAUDE.md` under "Decisions and notes" with the date. This is
   how the next designer inherits the knowledge.
5. Work on a branch and open a pull request. Fill in the pull request
   checklist honestly. The designer previews the page in a Canvas sandbox
   course and runs the Canvas accessibility checker and UDOIT before merging.

## Who does what

| Person | Focus |
| --- | --- |
| Wes | Team lead |
| Trae Durtschi | LMS administrator, Inclusive Access; core SALT code |
| Heather Andicochea | UX research and design; home page design for all programs |
| Ixchel Padilla | Canvas support |
| Jodie Ward | UDL and accessibility |
| Keith Collinwood | Hybrid, Canvas support, Inclusive Access; orientation courses |
| Stacie Gallagher | Faculty development |

Anyone on the team may help with any program. The program's designer is
listed in its `CLAUDE.md` and is notified about every change to it.
