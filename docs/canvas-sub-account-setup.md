# Setting up a program's Canvas sub-account

Each sub-account gets **two small files**, uploaded **once**. They point Canvas
at that program's `program.css` and `program.js` on GitHub. After that,
changes happen in GitHub, and Canvas picks them up within about 10 minutes.

## What goes where

Canvas loads the root account's theme files (SALT) in every sub-account, then
each sub-account's own files after them.

| Theme Editor → Upload slot | Root account (done) | Each program's sub-account |
| --- | --- | --- |
| CSS file | SALT browser styles | `canvas-upload/program-theme.css` |
| JavaScript file | SALT browser code | `canvas-upload/program-theme.js` |
| Mobile app CSS file | SALT mobile styles | `canvas-upload/program-theme.css` (same file) |
| Mobile app JavaScript file | SALT mobile code | `canvas-upload/program-theme.js` (same file) |

> ⚠️ **Never upload the SALT files themselves in a sub-account.** SALT would
> load twice. `salt.js` resets itself when it starts, so a second copy attaches
> every button twice, and reveals and flip cards open and instantly close.

## One-time setup (root account admin)

1. Turn on **GitHub Pages** for `DTC-EdEx/dtc-programs`: Settings → Pages →
   Deploy from branch → `main` → `/ (root)`. Check that
   `https://dtc-edex.github.io/dtc-programs/programs/business/program.css`
   shows code.
2. In Canvas, root account → **Settings** → check **"Let sub-accounts use the
   Theme Editor to customize their own branding."** Save. If a sub-account's
   Theme Editor has no **Upload** tab afterward, custom JavaScript/CSS for
   sub-accounts also has to be allowed for your Canvas instance. Check the root
   account settings, or ask your Instructure contact.
3. **Try one program first**, ideally in Canvas Beta, before doing all 44.

## For each sub-account

1. Download the program's two files from GitHub: open
   `programs/<program>/canvas-upload/program-theme.css` → **Download raw file**
   (the down-arrow button). Do the same for `program-theme.js`. UDC programs
   are in `programs/udc-programs/<code>/`.
2. In Canvas, open the sub-account → **Themes** → open its theme in the
   **Theme Editor** → **Upload** tab, and upload the files as shown in the
   table above.
3. Optional: on the **Edit** tab, set Canvas's own brand colors (global
   navigation, buttons) to match.
4. **Preview Your Changes** → check a page that uses SALT → **Save theme** →
   **Apply theme**.
5. Check a SALT page in that sub-account:
   - Interactive pieces (reveals, flip cards, tabs) open and close normally.
   - SALT loaded once and the program file loaded once. Open the browser
     console (F12) and run
     `[...document.scripts].map(s => s.src).filter(s => s.includes("github.io"))`.
     You should see each file listed one time.

**The UDC sub-account and its 13 sub-accounts each get their own upload.**
The UDC parent uses the files in `programs/udc-programs/canvas-upload/`.

## Changing colors

Edit the top section of `programs/<program>/program.css` through a pull
request. Check that the primary color has at least 4.5:1 contrast against
white, and record it in the program's `CLAUDE.md`. Nothing needs to be
re-uploaded in Canvas.
