/* =========================================================
   Nurse Assistant / Home Health Aide — program JavaScript
   Runs on EVERY Canvas page in this sub-account (and any sub-accounts under
   it), in browsers and the Canvas app, after the main SALT theme loads.
   See docs/program-activities.md before adding anything here.

   Rules:
   1. Only act on pages that contain your activity's .salt-pilot- class.
      Pages without it must be left completely alone.
   2. Never change Canvas's own menus, buttons, gradebook, or quizzes.
   3. Never copy salt.js (or any part of it) into this file.
   ========================================================= */
(function () {
    "use strict";

    var PROGRAM = "nurse-assistant-home-health-aide";
    window.DTCProgramLoaded = window.DTCProgramLoaded || {};
    if (window.DTCProgramLoaded[PROGRAM]) {
        return; /* already loaded on this page */
    }
    window.DTCProgramLoaded[PROGRAM] = true;

    function whenReady(callback) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback);
        } else {
            callback();
        }
    }

    whenReady(function () {
        /* Pilot activities go here. Pattern:

        document.querySelectorAll(".salt-pilot-example").forEach(function (el) {
            // set up the activity inside el only
        });
        */
    });
})();
