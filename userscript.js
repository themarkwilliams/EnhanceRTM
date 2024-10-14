// ==UserScript==
// @name Enhance RTM
// @version 1.30
// @author Mark Williams
// @description "Get rid of the whimsical Cow Logo from Rememember the Milk and the metallic pea color"
// @match        https://www.rememberthemilk.com/*
// @run-at document-start
// @grant GM_addStyle
// @downloadURL  https://raw.githubusercontent.com/themarkwilliams/EnhanceRTM/master/userscript.js
// ==/UserScript==
// Git: https://github.com/themarkwilliams/EnhanceRTM/blob/master/userscript.js

// Change the Favicon
var favicon_link_html = document.querySelector("link[rel*='icon']") || document.createElement('link');
favicon_link_html.rel = 'shortcut icon';
favicon_link_html.href = 'https://marktastic.com/images/rtmlogo.ico';
favicon_link_html.type = 'image/x-icon';

try {
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { }

// Set tag color in task list
GM_addStyle('.b-ib-dS-Pb { background-color: #0060BF !important; }'); // 10/14/24

// Take the metallic pea out of tag suggestion box
GM_addStyle('.b-NS-dW { background-color: #0060BF !important; }'); // 10/14/24

/* Others */
GM_addStyle('.b-v-w-x-l-fs-Pb { background-color: #0060BF !important; }'); // 10/14/24

// Take the metallic pea out of the left column
GM_addStyle('.rQ-dS-Pb .rQ-dS-dW  { background-color: #0060BF !important; color: #0060BF !important; }'); // 10/14/24

// Set tag in right detail pane
GM_addStyle('.b-l-Qb-Sj-Pb-vQ { background-color: #0060BF !important; color: #E0EBD5 !important; }'); // 10/14/24
GM_addStyle('.b-l-Qb-Sj-Pb-TI { background-color: #0060BF !important; color: #E0EBD5 !important; }'); // 10/14/24

// Take the metallic pea out of the new tag in the Smart Add Bar
GM_addStyle('.b-bT-Sj-jX-kX-Pb .b-bT-Sj-jX-kX-o-kb.b-u-o-vS { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 10/14/24
GM_addStyle('.b-bT-Sj-jX-kX-Pb { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 10/14/24

// Hide the Cow Logo
GM_addStyle('.b-KS-AU { display:none !important; }'); // 10/14/24

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-pS-Uj { display:none !important; }'); // 10/14/24

/* Hide invisible box in lower left */
GM_addStyle('.b-gN-pS-Uj-ES { display:none !important; }'); // 10/14/24

// Adjust the height of the left navigation to compensate for the missing logo
GM_addStyle('.b-gN-rQ-qx-ES { top:0 !important; bottom:0 !important; height:100% !important; }'); // 10/14/24