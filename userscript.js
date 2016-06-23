// ==UserScript==
// @name EnhanceRTM
// @version 1.3
// @author Mark Williams
// @description "Get rid of the metallic pea highlight color"
// @match        https://www.rememberthemilk.com/*
// @run-at document-start
// @grant GM_addStyle
// ==/UserScript==
// Git: https://github.com/themarkwilliams/EnhanceRTM/blob/master/userscript.js

// Set tag color in task list
GM_addStyle('.b-eb-Uk-o { background-color: #0060BF !important; }');

// Set tag in right detail pane
GM_addStyle('.b-f-m-n-o-Tl { background-color: #0060BF !important; color: #E0EBD5 !important; }');
GM_addStyle('.b-f-m-n-o-p { background-color: #0060BF !important; color: #E0EBD5 !important; }');

// Take the metallic pea out of the left column
GM_addStyle('.zl-Uk-fq { background-color: #0060BF !important; }');

// Take the metallic pea out of the new tag in the Smart Add Bar
GM_addStyle('.b-Hl-n-fr-hr, .b-Hl-n-fr-hr-o, .b-Hl-n-fr-hr-i-gb, .b-k-i a a-ib Nj-Rn-Sn, .b-Hl-n-gr-ir-o, .b-Hl-n-gr-ir { background-color: #E4EEF8 !important; color: #0060BF !important; }');

/* Others */
GM_addStyle('.b-ll-fq { background-color: #0060BF !important; }');
GM_addStyle('.b-q-s-l { background-color: #0060BF !important; }');
GM_addStyle('.zl-Uk-o .zl-Uk-fq { background-color: #0060BF !important; }');
GM_addStyle('.b-c-d-e-f-Bq-o { background-color: #0060BF !important; }');
GM_addStyle('.b-k-i-Ik { background-color: #0060BF !important; }');

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-ym-Xj { display:none !important;}');
GM_addStyle('.b-bo-ym-Xj-km { display:none !important;}');
GM_addStyle('.b-bo-zl-co-km { height:90%; }');
