# Building a program-only activity (and moving it into SALT later)

Each program has its own `program.js` and `program.css`. They load **only** in
that program's Canvas sub-account, after the main SALT code. This is where a
designer can try a new game, lab-prep activity, or other idea without touching
the other 43 sub-accounts.

Think of it as a **pilot program**: try it in one program, prove it works on
phones and for every student, then roll it out to everyone through SALT.

## The life of an activity

```
1. Idea            Designer + Claude build it in programs/<program>/program.js and program.css
2. Pilot           Used in that program's courses only (class names start salt-pilot-)
3. Review          Mobile app check + accessibility review (Jodie) + UDOIT
4. Promote         Copied into DTC-Main-SALT as a salt- component, added to the showcase
5. Clean up        Removed from the program files; pages switch to the new salt- class names
```

## Rules that keep one program from breaking another

1. **Activate only on pages that use it.** Every pilot activity looks for its
   own class (for example `.salt-pilot-torque-sequence`) and does nothing on
   pages without it. A brand-new activity is therefore invisible until
   someone puts it on a page.
2. **Prefix everything with `salt-pilot-`**: CSS classes, `data-` attributes,
   and saved browser data. This keeps it from colliding with SALT.
3. **Never change Canvas itself**: menus, buttons, Gradebook, Quizzes, Modules.
   Program code runs on *every* page of the sub-account, including those.
4. **Never copy `salt.js` or `salt.css`** into a program file. Loading SALT
   twice breaks every interactive component on the page.
5. **Build it to pass review from day one**: works with keyboard only
   (Tab, Enter, Space, Esc), has visible focus, makes sense to a screen reader,
   works on a phone screen and in the Canvas app, and doesn't rely on color
   alone.

## How to test before students see it

GitHub Pages publishes the program files as soon as a change is merged, but
because of rule 1, nothing appears until a page uses the new class.

1. Merge the activity (the pull request checklist still applies).
2. Wait about 10 minutes.
3. Put the activity's HTML on a page in a **sandbox course that lives in the
   same sub-account**. A sandbox course in another sub-account won't load this
   program's files.
4. Test on a computer, in the Canvas app, with keyboard only, and with the
   Canvas checker and UDOIT.
5. Only then add it to real course pages.

## UDC

UDC is one sub-account with 13 sub-accounts under it. Canvas loads files from
the whole chain, so a UDC - AUTO page loads:

```
SALT (root)  →  programs/udc-programs/program.*  →  programs/udc-programs/auto/program.*
```

Put things every UDC program needs in `programs/udc-programs/`, and
program-specific things in that program's folder.

## Promoting an activity into SALT

When an activity has proven itself:

1. In the program's `CLAUDE.md`, mark it as passing mobile and accessibility
   review, with the date and reviewer.
2. Ask Claude to promote it. Claude copies it into `DTC-Main-SALT`, renames
   `salt-pilot-` to `salt-`, adds it to the component showcase, and opens a
   pull request for Trae or Wes. Big or risky components can be tested in
   Canvas Beta first ([canvas-beta-testing.md](canvas-beta-testing.md)).
3. After it's live in SALT, update the program's pages to the new class names
   and remove the pilot code from `program.js` / `program.css`.
