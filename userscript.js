// ==UserScript==
// @name EnhanceRTM
// @version 1.13
// @author Mark Williams
// @description "Get rid of the metallic pea highlight color"
// @match        https://www.rememberthemilk.com/*
// @run-at document-start
// @grant GM_addStyle
// ==/UserScript==
// Git: https://github.com/themarkwilliams/EnhanceRTM/blob/master/userscript.js

// Set tag color in task list
GM_addStyle('.b-Z-Xm-Gb { background-color: #0060BF !important; }'); // 12/27/17

// Set tag in right detail pane
GM_addStyle('.b-f-Hb-om-Gb-Hn { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 12/27/17
GM_addStyle('.b-f-Hb-om-Gb-Lj { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 12/27/17

// Take the metallic pea out of the left column
GM_addStyle('.Cj-Xm-Gb .Cj-Xm-Er { background-color: #0060BF !important; color: #0060BF !important; }'); // 12/27/17

// Take the metallic pea out of the new tag in the Smart Add Bar
GM_addStyle('.b-On-om-Rs-Ts-Gb { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 12/27/17
GM_addStyle('.b-Kb-Dj-lk-Bp-mk .b-f-Hb-om-Gb-Lj { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 12/27/17

// Take the metallic pea out of tag suggestion box
GM_addStyle('.b-vn-Er { background-color: #0060BF !important; }'); // 12/27/17

/* Others */
GM_addStyle('.b-c-d-e-f-es-Gb { background-color: #0060BF !important; }'); // 12/27/17

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-Op-wo-Pj-lo { display:none !important; }'); // 12/27/17
