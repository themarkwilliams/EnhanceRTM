// ==UserScript==
// @name Enhance RTM
// @version 1.14
// @author Mark Williams
// @description "Get rid of the metallic pea highlight color"
// @match        https://www.rememberthemilk.com/*
// @run-at document-start
// @grant GM_addStyle
// ==/UserScript==
// Git: https://github.com/themarkwilliams/EnhanceRTM/blob/master/userscript.js

// Set tag color in task list
GM_addStyle('.b-fb-an-Mb { background-color: #0060BF !important; }'); // 4/23/18

// Set tag in right detail pane
GM_addStyle('.b-f-Nb-sm-Mb-Jn { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 4/23/18
GM_addStyle('.b-f-Nb-sm-Mb-Oj { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 4/23/18

// Take the metallic pea out of the left column
GM_addStyle('.Fj-an-Mb .Fj-an-Kr{ background-color: #0060BF !important; color: #0060BF !important; }'); // 4/23/18

// Take the metallic pea out of the new tag in the Smart Add Bar
GM_addStyle('.b-Qn-sm-Xs-Zs-Mb { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 4/23/18
GM_addStyle('.b-Qn-sm-Xs-Zs-Mb .b-Qn-sm-Xs-Zs-i-hb.b-k-i-bn { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 4/23/18

// Take the metallic pea out of tag suggestion box
GM_addStyle('.b-yn-Kr { background-color: #0060BF !important; }'); // 4/23/18

/* Others */
GM_addStyle('.b-c-d-e-f-ks-Mb { background-color: #0060BF !important; }'); // 4/23/18

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-Up-Co-Sj-ro { display:none !important; }'); // 4/23/18
