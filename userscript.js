// ==UserScript==
// @name EnhanceRTM
// @version 1.9
// @author Mark Williams
// @description "Get rid of the metallic pea highlight color"
// @match        https://www.rememberthemilk.com/*
// @run-at document-start
// @grant GM_addStyle
// ==/UserScript==
// Git: https://github.com/themarkwilliams/EnhanceRTM/blob/master/userscript.js

// Set tag color in task list
GM_addStyle('.b-db-Qm-o { background-color: #0060BF !important; }'); // 3/10/17

// Set tag in right detail pane
GM_addStyle('.b-f-m-n-o-p { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 3/10/17
GM_addStyle('.b-f-m-n-o-Nj { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 3/10/17

// Take the metallic pea out of the left column
GM_addStyle('.Ej-Qm-o .Ej-Qm-zr { background-color: #0060BF !important; color: #0060BF !important; }'); // 3/10/17

// Take the metallic pea out of the new tag in the Smart Add Bar - 11/3/16 verified
GM_addStyle('.b-Gn-n-Ns-Ps-o { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 3/10/17
GM_addStyle('.b-Gn-n-Ns-Ps-o .b-Gn-n-Ns-Ps-i-fb.b-k-i-Rm { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 3/10/17

// Take the metallic pea out of tag suggestion box
GM_addStyle('.b-on-zr { background-color: #0060BF !important; }'); // 3/10/17

/* Others */
GM_addStyle('.b-c-d-e-f-as-o { background-color: #0060BF !important; }'); // 3/10/17

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-Hp-mo-Rj-bo { display:none !important;}'); // 3/10/17
GM_addStyle('.b-Hp-Ej-Ip-bo { height:90%; }');// 3/10/17
