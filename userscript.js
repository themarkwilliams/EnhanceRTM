// ==UserScript==
// @name EnhanceRTM
// @version 1.8
// @author Mark Williams
// @description "Get rid of the metallic pea highlight color"
// @match        https://www.rememberthemilk.com/*
// @run-at document-start
// @grant GM_addStyle
// ==/UserScript==
// Git: https://github.com/themarkwilliams/EnhanceRTM/blob/master/userscript.js

// Set tag color in task list
GM_addStyle('.b-db-Om-o { background-color: #0060BF !important; }'); // 12/16/16

// Set tag in right detail pane
GM_addStyle('.b-f-m-n-o-p { background-color: #0060BF !important; color: #E0EBD5 !important; }');
GM_addStyle('.b-f-m-n-o-Nj { background-color: #0060BF !important; color: #E0EBD5 !important; }');

// Take the metallic pea out of the left column
GM_addStyle('.Ej-Om-o .Ej-Om-xr { background-color: #0060BF !important; color: #0060BF !important; }'); //2/27/17

// Take the metallic pea out of the new tag in the Smart Add Bar - 11/3/16 verified
GM_addStyle('.b-En-n-Ls-Ns-o { background-color: #E4EEF8 !important; color: #0060BF !important; }'); //2/27/17
GM_addStyle('.b-En-n-Ls-Ns-o .b-En-n-Ls-Ns-i-fb.b-k-i-Pm { background-color: #E4EEF8 !important; color: #0060BF !important; }'); //2/27/17

// Take the metallic pea out of tag suggestion box
GM_addStyle('.b-mn-xr { background-color: #0060BF !important; }'); //2/27/17

/* Others */
GM_addStyle('.b-c-d-e-f-Yr-o { background-color: #0060BF !important; }'); //2/27/17

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-Fp-ko-Rj-Zn { display:none !important;}'); //12/16/16
GM_addStyle('.b-Fp-Ej-Gp-Zn { height:90%; }');//12/16/16
