// ==UserScript==
// @name EnhanceRTM
// @version 1.5
// @author Mark Williams
// @description "Get rid of the metallic pea highlight color"
// @match        https://www.rememberthemilk.com/*
// @run-at document-start
// @grant GM_addStyle
// ==/UserScript==
// Git: https://github.com/themarkwilliams/EnhanceRTM/blob/master/userscript.js

// Set tag color in task list
GM_addStyle('.b-db-Lm-o { background-color: #0060BF !important; }');

// Set tag in right detail pane
GM_addStyle('.b-f-m-n-o-p { background-color: #0060BF !important; color: #E0EBD5 !important; }');
GM_addStyle('.b-f-m-n-o-Nj { background-color: #0060BF !important; color: #E0EBD5 !important; }');

// Take the metallic pea out of the left column
GM_addStyle('.Ej-Lm-o .Ej-Lm-ur { background-color: #0060BF !important; color: #0060BF !important; }');

// Take the metallic pea out of the new tag in the Smart Add Bar - 11/3/16 verified
GM_addStyle('.b-An-n-Is-Ks-o { background-color: #E4EEF8 !important; color: #0060BF !important; }');
GM_addStyle('.b-An-n-Is-Ks-o .b-An-n-Is-Ks-i-fb.b-k-i-Mm { background-color: #E4EEF8 !important; color: #0060BF !important; }');

// Take the metallic pea out of tag suggestion box
GM_addStyle('.b-Um-Gm-Gd { background-color: #0060BF !important; }');
GM_addStyle('.b-in-ur { background-color: #0060BF !important; }');

/* Others */
GM_addStyle('.b-c-d-e-f-Vr-o { background-color: #0060BF !important; }');

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-Cp-go-Rj-Vn { display:none !important;}'); //11/3/16
GM_addStyle('.b-Cp-Ej-Dp-Vn { height:90%; }');//11/3/16
