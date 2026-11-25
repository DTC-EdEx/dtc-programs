# Testing SALT in Canvas Beta (when you ask for it)

**Default: SALT changes go straight to production.** Most changes are small,
so they go into `DTC-Main-SALT` through a normal pull request. Beta is
**optional**. Use it when someone says "test this in Beta first."

Good reasons to ask for Beta:

- A new interactive component, or a big change to `salt.js`
- Anything that could affect Canvas's own pages (menus, Modules, Gradebook,
  Quizzes)
- Changes to the theme loader files (`Salt.EdEx.4.0.*`, `Salt.Mobile.4.0.*`)
- Anything you're nervous about

## How the two copies work

Canvas Beta (`<your school>.beta.instructure.com`) is a separate copy of
Canvas with real courses but no students. GitHub Pages can publish only one
version of a repository, so Beta gets its own copy of the code:

```
DTC-Main-SALT-Beta  ──►  Canvas Beta theme         (dress rehearsal)
DTC-Main-SALT       ──►  Canvas production theme   (students see this)
```

Production changes don't flow to Beta automatically. So **every Beta test
starts by copying current production into Beta**, then adding the new change
on top. Claude does both steps when you ask.

## One-time setup

1. Turn on GitHub Pages for `DTC-EdEx/DTC-Main-SALT-Beta`: Settings → Pages →
   Deploy from branch → `main` → `/ (root)`. Check that
   `https://dtc-edex.github.io/DTC-Main-SALT-Beta/salt.css` shows code.
2. In **Canvas Beta**, root account → Themes → Theme Editor → Upload tab,
   upload the four production theme files with `/DTC-Main-SALT/` changed to
   `/DTC-Main-SALT-Beta/`:

   ```css
   @import url(https://designplus.ciditools.com/css/content.css);
   @import url(https://designplus.ciditools.com/css/editor.css);
   @import url("https://dtc-edex.github.io/DTC-Main-SALT-Beta/Salt.EdEx.4.0.css?v=4.2");
   ```

   ```js
   (function () {
     var s = document.createElement("script");
     s.src = "https://dtc-edex.github.io/DTC-Main-SALT-Beta/Salt.EdEx.4.0.js?v=4.2";
     document.head.appendChild(s);
   })();
   ```

   Do the same for the mobile CSS and mobile JavaScript files.
3. Preview, save, and apply **in Beta only**.

## A Beta test, step by step

1. Ask Claude: "Test this in Beta first." Claude syncs `DTC-Main-SALT-Beta`
   with production and adds the change. Wait about 10 minutes.
2. Test in Canvas Beta:
   - [ ] The component showcase page: every component still works
   - [ ] 2–3 real courses from different programs, including a sub-account
         with its own program files
   - [ ] A computer browser, and the Canvas mobile app if it can reach Beta
   - [ ] Keyboard only, plus the Canvas accessibility checker
   - [ ] Canvas's own pages (Modules, Assignments, Quizzes, Gradebook) look
         and work normally
3. Claude opens the same change as a pull request into `DTC-Main-SALT`, noting
   "tested in Beta." Trae or Wes merges.
4. The change reaches production Canvas within about 10 minutes. Bumping the
   version (`?v=4.2` → `?v=4.3`) in the Canvas theme files is only needed if
   it has to show up sooner (see the `DTC-Main-SALT` README).

## When Instructure refreshes Beta

Instructure regularly copies production over Beta, which **replaces the Beta
theme with the production theme**. Beta then quietly loads the live SALT code.
After a refresh, re-upload the Beta theme files from step 2. To check which
copy Beta is using, open the browser console (F12) in Beta and run
`[...document.scripts].map(s => s.src).filter(s => s.includes("SALT"))`.
The addresses should say `DTC-Main-SALT-Beta`.
