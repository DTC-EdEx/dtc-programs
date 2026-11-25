# DTC EdEx — Program Pages

Home pages, orientation pages, and theme colors for every Davis Tech program,
built on the shared [SALT framework](https://github.com/DTC-EdEx/DTC-Main-SALT).

Think of it like a team playbook: **SALT** is the core offense everyone runs,
and each **program folder** is that program's page of notes. The team owns the
playbook, so when someone moves on, the notes stay.

## How it fits together

```
Canvas root account theme ──► SALT (DTC-Main-SALT)                 all components, every page
        │
        └─ sub-account theme ──► programs/<program>/program.css + .js   that program only
```

Canvas loads the root account's theme files in every sub-account too, so each
sub-account adds only its own colors and pilot activities. Nothing in one
program's files reaches another program. Guides:

- [Setting up a sub-account](docs/canvas-sub-account-setup.md)
- [Building a program-only activity and moving it into SALT](docs/program-activities.md)
- [Testing SALT in Canvas Beta](docs/canvas-beta-testing.md) (optional; production is the default)

## Folder layout

```
CLAUDE.md                     team rules Claude reads every session
templates/                    starting point for home and orientation pages
docs/                         how-to guides
programs/<program>/
    CLAUDE.md                 how this program uses Canvas (fill this in!)
    program.css               colors + pilot activity styles
    program.js                pilot activity code
    canvas-upload/            two loader files, uploaded once to the sub-account theme
    home-page/                home page HTML
    orientation/              orientation page HTML
programs/udc-programs/        UDC parent sub-account, with its 13 sub-accounts inside
.github/CODEOWNERS            who is notified about changes to each folder
```

## Everyday workflow

1. Open Claude Code on this repository and say which program you're working on.
2. Claude reads the team `CLAUDE.md` and the program's `CLAUDE.md`, then builds
   or edits the page on a branch.
3. **Preview:** paste the HTML into your sandbox course in Canvas. Check it on
   a computer and in the Canvas mobile app.
4. Run the **Canvas accessibility checker** and **UDOIT**.
5. Open a pull request and complete its checklist. The program's designer is
   automatically asked to look. Anyone on the team can merge.
6. Paste the final HTML into the real course.

## Programs

| Program | Folder | Designer |
| --- | --- | --- |
| Nurse Assistant / Home Health Aide | `nurse-assistant-home-health-aide` | Heather Andicochea |
| Dental Assisting | `dental-assisting` | Heather Andicochea |
| Drafting and Design | `drafting-and-design` | Heather Andicochea |
| Surgical Technology | `surgical-technology` | Heather Andicochea |
| Phlebotomy | `phlebotomy` | Heather Andicochea |
| Business | `business` | Heather Andicochea |
| Manufacturing Technology | `manufacturing-technology` | Ixchel Padilla |
| Firefighter / EMT / Advanced EMT | `firefighter-emt-advanced-emt` | Ixchel Padilla |
| UDC Programs | `udc-programs` | Ixchel Padilla |
| Pharmacy Technician | `pharmacy-technician` | Jodie Ward |
| Machining Technology | `machining-technology` | Jodie Ward |
| Cosmetology | `cosmetology` | Jodie Ward |
| Nail Technician | `nail-technician` | Jodie Ward |
| Culinary Arts | `culinary-arts` | Jodie Ward |
| Esthetician / Brow and Lash | `esthetician-brow-and-lash` | Jodie Ward |
| Information Technology / Networking and Cybersecurity | `it-networking-and-cybersecurity` | Keith Collinwood |
| Automation Technology / Control Systems and Robotics | `automation-control-systems-robotics` | Keith Collinwood |
| Web and Graphic Design | `web-and-graphic-design` | Keith Collinwood |
| Automotive / Advanced Automotive | `automotive-advanced-automotive` | Keith Collinwood |
| Medical Assistant | `medical-assistant` | Keith Collinwood |
| Diesel Technology | `diesel-technology` | Keith Collinwood |
| Medical Coding and Billing | `medical-coding-and-billing` | Keith Collinwood |
| Data Technician / Software Development | `data-technician-software-development` | Stacie Gallagher |
| Welding Technology | `welding-technology` | Stacie Gallagher |
| Commercial Driver's License Class A | `cdl-class-a` | Stacie Gallagher |
| Practical Nursing | `practical-nursing` | Stacie Gallagher |
| Workplace Success and Academic Development | `workplace-success-academic-development` | Stacie Gallagher |
| Composite Technology | `composite-technology` | Stacie Gallagher |
| Electrical Apprenticeship | `electrical-apprenticeship` | Trae Durtschi |
| Plumbing Apprenticeship | `plumbing-apprenticeship` | Trae Durtschi |
| HVACR Technician | `hvacr-technician` | Trae Durtschi |

### UDC sub-accounts (Ixchel Padilla)

Folders inside `programs/udc-programs/`: `academic-development`, `auto`,
`cula`, `dmdc`, `iamt`, `team`, `itec`, `tebp`, `teca`, `teit`, `temt`,
`tewg`, `weld`. These are the Canvas sub-accounts **UDC - Academic
Development, UDC - AUTO, UDC - CULA, UDC - DMDC, UDC - IAMT, UDC - TEAM,
UDC - ITEC, UDC - TEBP, UDC - TECA, UDC - TEIT, UDC - TEMT, UDC - TEWG,
UDC - WELD**.

When a program changes hands, update its `CLAUDE.md`, this table, and
`.github/CODEOWNERS`.

## Ground rules

- This repository is **public** (GitHub Pages serves the program files from
  it). Never add student information.
- Changes to SALT components themselves go to
  [DTC-Main-SALT](https://github.com/DTC-EdEx/DTC-Main-SALT), straight to
  production by default, or through Canvas Beta first when someone asks.
