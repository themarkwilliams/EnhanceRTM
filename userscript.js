// ==UserScript==
// @name Enhance RTM
// @version 1.29
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
GM_addStyle('.b-ib-SR-Pb  { background-color: #0060BF !important; }'); // 12/19/23

// Take the metallic pea out of tag suggestion box
GM_addStyle('.b-CS-TV { background-color: #0060BF !important; }'); // 12/19/23

/* Others */
GM_addStyle('.b-v-w-x-l-bs-Pb { background-color: #0060BF !important; }'); // 12/19/23

// Take the metallic pea out of the left column
GM_addStyle('.gQ-SR-Pb .gQ-SR-TV { background-color: #0060BF !important; color: #0060BF !important; }'); // 12/19/23

// Set tag in right detail pane
GM_addStyle('.b-l-Qb-Tj-Pb-kQ { background-color: #0060BF !important; color: #E0EBD5 !important; }'); // 12/19/23
GM_addStyle('.b-l-Qb-Tj-Pb-KI { background-color: #0060BF !important; color: #E0EBD5 !important; }'); // 12/19/23

// Take the metallic pea out of the new tag in the Smart Add Bar
GM_addStyle('.b-QS-Tj-ZW-aX-Pb .b-QS-Tj-ZW-aX-o-kb.b-u-o-kS { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 12/19/23
GM_addStyle('.b-QS-Tj-ZW-aX-Pb { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 12/19/23

// Hide the Cow Logo
GM_addStyle('.b-zS-qU { display:none !important; }'); // 12/19/23

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-eS-Vj { display:none !important; }'); // 12/19/23

/* Hide invisible box in lower left */
GM_addStyle('.b-WM-eS-Vj-tS { display:none !important; }'); // 12/19/23

// Adjust the height of the left navigation to compensate for the missing logo
GM_addStyle('.b-WM-gQ-jx-tS { top:0 !important; bottom:0 !important; height:100% !important; }'); // 12/19/23