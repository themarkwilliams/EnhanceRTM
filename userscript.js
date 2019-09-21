// ==UserScript==
// @name Enhance RTM
// @version 1.17
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
GM_addStyle('.b-fb-bn-Mb { background-color: #0060BF !important; }'); // 9/21/19

// Set tag in right detail pane
GM_addStyle('.b-f-Nb-tm-Mb-Kn { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 9/21/19
GM_addStyle('.b-f-Nb-tm-Mb-Oj { background-color: #0060BF !important; color: #E0EBD5 !important; }');// 9/21/19

// Take the metallic pea out of the left column
GM_addStyle('.Fj-bn-Mb .Fj-bn-Mr{ background-color: #0060BF !important; color: #0060BF !important; }'); // 9/21/19

// Take the metallic pea out of the new tag in the Smart Add Bar
GM_addStyle('.b-Rn-tm-Zs-bt-Mb{ background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 9/21/19
GM_addStyle('.b-Rn-tm-Zs-bt-Mb .b-Rn-tm-Zs-bt-i-hb.b-k-i-cn{ background-color: #E4EEF8 !important; color: #0060BF !important; }'); // 9/21/19

// Take the metallic pea out of tag suggestion box
GM_addStyle('.b-zn-Mr { background-color: #0060BF !important; }'); // 9/21/19

/* Others */
GM_addStyle('.b-c-d-e-f-ms-Mb { background-color: #0060BF !important; }'); // 9/21/19

/* Get Rid of the Pro Nag in the lower left */
GM_addStyle('.b-Do-Sj{ display:none !important; }'); // 9/21/19

// Hide the Cow Logo
GM_addStyle('.b-En-Ko { display:none !important; }'); // 9/21/19

// Adjust the height of the left navigation to compensate for the missing logo
GM_addStyle('.b-Wp-Fj-Xp-so { top:0 !important; bottom:0 !important; height:100% !important; }'); // 9/21/19
