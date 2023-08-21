// ==UserScript==
// @name Enhance RTM
// @version 1.28
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
GM_addStyle('.b-ib-zR-Pb  { background-color: #0060BF !important; }'); // 8/21/23

// Take the metallic pea out of tag suggestion box
GM_addStyle('.b-jS-AV { background-color: #0060BF !important; }'); // 8/21/23

/* Others */
GM_addStyle('.b-v-w-x-l-Xr-Pb { background-color: #0060BF !important; }'); // 8/21/23

// Take the metallic pea out of the left column
GM_addStyle('.MP-zR-Pb .MP-zR-AV { background-color: #0060BF !important; color: #0060BF !important; }'); // 8/21/23

// Set tag in right detail pane
GM_addStyle('.b-l-Qb-Tj-Pb-QP { background-color: #0060BF !important; color: #E0EBD5 !important; }'); // 8/21/23
GM_addStyle('.b-l-Qb-Tj-Pb-wI { background-color: #0060BF !important; color: #E0EBD5 !important; }'); // 8/21/23

// Take the metallic pea out of the new tag in the Smart Add Bar
GM_addStyle('.b-xS-Tj-GW-HW-Pb .b-xS-Tj-GW-HW-o-kb.b-u-o-RR { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 8/21/23
GM_addStyle('.b-xS-Tj-GW-HW-Pb { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 8/21/23

// Hide the Cow Logo
GM_addStyle('.b-gS-XT { display:none !important; }'); // 8/21/23

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-LR-Vj { display:none !important; }'); // 8/21/23

/* Hide invisible box in lower left */
GM_addStyle('.b-DM-LR-Vj-aS { display:none !important; }'); // 8/21/23

// Adjust the height of the left navigation to compensate for the missing logo
GM_addStyle('.b-DM-MP-ax-aS { top:0 !important; bottom:0 !important; height:100% !important; }'); // 8/21/23