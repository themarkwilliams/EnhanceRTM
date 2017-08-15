// ==UserScript==
// @name EnhanceRTM
// @version 1.12
// @author Mark Williams
// @description "Get rid of the metallic pea highlight color"
// @match        https://www.rememberthemilk.com/*
// @run-at document-start
// @grant GM_addStyle
// ==/UserScript==
// Git: https://github.com/themarkwilliams/EnhanceRTM/blob/master/userscript.js

// Set tag color in task list
GM_addStyle('.b-db-Ym-o { background-color: #0060BF !important; }'); // 8/15/17

// Set tag in right detail pane
GM_addStyle('.b-f-m-n-o-p { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 4/20/17
GM_addStyle('.b-f-m-n-o-Nj { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 4/20/17

// Take the metallic pea out of the left column
GM_addStyle('.Ej-Ym-o .Ej-Ym-Er { background-color: #0060BF !important; color: #0060BF !important; }'); // 8/15/17

// Take the metallic pea out of the new tag in the Smart Add Bar
GM_addStyle('.b-On-n-Rs-Ts-o { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 8/15/17
GM_addStyle('.b-On-n-Rs-Ts-o .b-On-n-Rs-Ts-i-fb.b-k-i-Zm { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 8/15/17

// Take the metallic pea out of tag suggestion box
GM_addStyle('.b-wn-Er { background-color: #0060BF !important; }'); // 8/15/17

/* Others */
GM_addStyle('.b-c-d-e-f-es-o { background-color: #0060BF !important; }'); // 4/20/17

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-Op-Ej-Pp-lo { top:0 !important; bottom:0 !important; height:100% !important; }'); // 8/15/17
GM_addStyle('.b-wo-Rj { display:none !important; }'); // 8/15/17
