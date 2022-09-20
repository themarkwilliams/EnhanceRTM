// ==UserScript==
// @name Enhance RTM
// @version 1.21
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
GM_addStyle('.b-ib-VQ-Pb { background-color: #0060BF !important; }'); // 9/19/22

// Set tag in right detail pane
GM_addStyle('.b-l-Qb-Sj-Pb-mP { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 9/19/22
GM_addStyle('.b-l-Qb-Sj-Pb-YH { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 9/19/22

// Take the metallic pea out of the left column
GM_addStyle('.iP-VQ-Pb .iP-VQ-WU { background-color: #0060BF !important; color: #0060BF !important; }'); // 9/19/22

// Take the metallic pea out of the new tag in the Smart Add Bar
GM_addStyle('.b-TR-Sj-bW-cW-Pb .b-TR-Sj-bW-cW-o-kb.b-u-o-nR { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 11/23/20
GM_addStyle('.b-TR-Sj-bW-cW-Pb { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 9/19/22

// Take the metallic pea out of tag suggestion box
GM_addStyle('.b-FR-WU { background-color: #0060BF !important; }'); // 9/19/22

/* Others */
GM_addStyle('.b-v-w-x-l-Pr-Pb { background-color: #0060BF !important; }'); // 9/19/22

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-CR-tT { display:none !important; }'); // 9/19/22

// Hide the Cow Logo
GM_addStyle('.b-hR-zm { display:none !important; }'); // 9/19/22

// Adjust the height of the left navigation to compensate for the missing logo
GM_addStyle('.b-aM-iP-Jw-wR { top:0 !important; bottom:0 !important; height:100% !important; }'); // 9/19/22