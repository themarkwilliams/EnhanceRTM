// ==UserScript==
// @name Enhance RTM
// @version 1.19
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
favicon_link_html.href = 'https://marktastic.com/images/rtmfavicon.ico';
favicon_link_html.type = 'image/x-icon';

try {
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { }

// Set tag color in task list
GM_addStyle('.b-ib-in-Pb { background-color: #0060BF !important; }'); // 11/23/20

// Set tag in right detail pane
GM_addStyle('.b-l-Qb-Im-Pb-mn { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 11/23/20
GM_addStyle('.b-l-Qb-Im-Pb-rk { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 11/23/20

// Take the metallic pea out of the left column
GM_addStyle('.lk-in-Pb .lk-in-Tr { background-color: #0060BF !important; color: #0060BF !important; }'); // 11/23/20

// Take the metallic pea out of the new tag in the Smart Add Bar
GM_addStyle('.b-Wn-zm-et-gt-Mb .b-Wn-zm-et-gt-i-hb.b-k-i-in { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 11/23/20
GM_addStyle('.b-Rn-Im-gt-ht b-Rn-Im-gt-ht-Pb { background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 11/23/20

// Take the metallic pea out of tag suggestion box
GM_addStyle('.b-Bn-Tr { background-color: #0060BF !important; }'); // 11/23/20

/* Others */
GM_addStyle('.b-v-w-x-l-ts-Pb { background-color: #0060BF !important; }'); // 11/23/20

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-Xm-gk { display:none !important; }'); // 11/23/20

// Hide the Cow Logo
GM_addStyle('.b-yn-Gp { display:none !important; }'); // 11/23/20

// Adjust the height of the left navigation to compensate for the missing logo
GM_addStyle('.b-dq-lk-eq-rn { top:0 !important; bottom:0 !important; height:100% !important; }'); // 11/23/20
