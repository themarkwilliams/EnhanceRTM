// ==UserScript==
// @name EnhanceRTM
// @version 1.11
// @author Mark Williams
// @description "Get rid of the metallic pea highlight color"
// @match        https://www.rememberthemilk.com/*
// @run-at document-start
// @grant GM_addStyle
// ==/UserScript==
// Git: https://github.com/themarkwilliams/EnhanceRTM/blob/master/userscript.js

// Set tag color in task list
GM_addStyle('.b-db-Vm-o { background-color: #0060BF !important; }'); // 4/20/17

// Set tag in right detail pane
GM_addStyle('.b-f-m-n-o-p { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 4/20/17
GM_addStyle('.b-f-m-n-o-Nj { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 4/20/17

// Take the metallic pea out of the left column
GM_addStyle('.Ej-Vm-o .Ej-Vm-Er { background-color: #0060BF !important; color: #0060BF !important; }'); // 4/20/17


// Take the metallic pea out of the new tag in the Smart Add Bar
GM_addStyle('.b-Ln-n-Rs-Ts-o { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 4/20/17
GM_addStyle('.b-Ln-n-Rs-Ts-o .b-Ln-n-Rs-Ts-i-fb.b-k-i-Wm { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 4/20/17

// Take the metallic pea out of tag suggestion box
GM_addStyle('.b-tn-Er { background-color: #0060BF !important; }'); // 4/20/17

/* Others */
GM_addStyle('.b-c-d-e-f-es-o { background-color: #0060BF !important; }'); // 4/20/17

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-Lp-to-Rj-io { display:none !important;}'); // 4/20/17
GM_addStyle('.b-Lp-Ej-Mp-io { height:90%; }');// 4/20/17
