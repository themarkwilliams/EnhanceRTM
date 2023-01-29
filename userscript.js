// ==UserScript==
// @name Enhance RTM
// @version 1.23
// @author Mark Williams
// @description "Get rid of the whimsical Cow Logo from Rememember the Milk and the metallic pea color"
// @match        https://www.rememberthemilk.com/*
// @run-at document-start
// @grant GM_addStyle
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
GM_addStyle('.b-ib-fR-Pb { background-color: #0060BF !important; }'); // 12/5/22

// Set tag in right detail pane
GM_addStyle('.b-l-Qb-Sj-Pb-wP { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 12/5/22
GM_addStyle('.b-l-Qb-Sj-Pb-gI { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 12/5/22

// Take the metallic pea out of the left column
GM_addStyle('.sP-fR-Pb .sP-fR-gV { background-color: #0060BF !important; color: #0060BF !important; }'); // 12/5/22

// Take the metallic pea out of the new tag in the Smart Add Bar
GM_addStyle('.b-dS-Sj-lW-mW-Pb .b-dS-Sj-lW-mW-o-kb.b-u-o-xR { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 12/5/22
GM_addStyle('.b-dS-Sj-lW-mW-Pb { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 12/5/22

// Take the metallic pea out of tag suggestion box
GM_addStyle('.b-PR-gV { background-color: #0060BF !important; }'); // 12/5/22

/* Others */
GM_addStyle('.b-v-w-x-l-Qr-Pb { background-color: #0060BF !important; }'); // 12/5/22

// Hide the Cow Logo
GM_addStyle('.b-MR-DT { display:none !important; }'); // 12/5/22

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-rR-zm { display:none !important; }'); // 12/5/22

/* Hide invisible box in lower left */
GM_addStyle('.b-lM-rR-zm-GR { display:none !important; }'); // 1/28/23

// Adjust the height of the left navigation to compensate for the missing logo
GM_addStyle('.b-lM-sP-Lw-GR { top:0 !important; bottom:0 !important; height:100% !important; }'); // 12/5/22