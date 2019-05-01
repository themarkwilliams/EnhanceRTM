// ==UserScript==
// @name Enhance RTM
// @version 1.16
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
GM_addStyle('.b-f-Nb-sm-Mb-Jn { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 4/30/19
GM_addStyle('.b-f-Nb-sm-Mb-Oj { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 4/30/19

// Take the metallic pea out of the left column
GM_addStyle('.Fj-an-Mb .Fj-an-Lr{ background-color: #0060BF !important; color: #0060BF !important; }'); // 4/30/19

// Take the metallic pea out of the new tag in the Smart Add Bar
GM_addStyle('.b-Qn-sm-Ys-at-Mb { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 4/30/19
GM_addStyle('.b-Qn-sm-Ys-at-Mb .b-Qn-sm-Ys-at-i-hb.b-k-i-bn{ background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 4/30/19

// Take the metallic pea out of tag suggestion box
GM_addStyle('.b-yn-Lr { background-color: #0060BF !important; }'); // 4/30/19

/* Others */
GM_addStyle('.b-c-d-e-f-ls-Mb { background-color: #0060BF !important; }'); // 4/30/19

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-Vp-Co-Sj-ro { display:none !important; }'); // 4/30/19
