// ==UserScript==
// @name RemoveRTMLogo
// @version 1.2
// @author Mark Williams
// @description "Get rid of the whimsical Cow Logo from Rememember the Milk"
// @match        https://www.rememberthemilk.com/*
// @run-at document-start
// @grant GM_addStyle
// ==/UserScript==
// Git: https://github.com/themarkwilliams/EnhanceRTM/blob/master/logo.js

// Hide the Logo
GM_addStyle('.b-un-to { display:none !important; }'); // 3/10/17

// Adjust the height of the left navigation to compensate for the missing logo
GM_addStyle('.b-Hp-Ej-Ip-bo { top:0 !important; bottom:0 !important; height:100% !important; }'); // 3/10/17

// Change the Favicon
var favicon_link_html = document.querySelector("link[rel*='icon']") || document.createElement('link');
favicon_link_html.rel = 'shortcut icon';
favicon_link_html.href = 'http://marktastic.com/images/rtmfavicon.ico';
favicon_link_html.type = 'image/x-icon';

try { 
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html ); 
}
catch(e) { }
