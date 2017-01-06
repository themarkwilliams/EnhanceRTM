// ==UserScript==
// @name RemoveRTMLogo
// @version 1.0
// @author Mark Williams
// @description "Get rid of the whimsical Cow Logo from Rememember the Milk"
// @match        https://www.rememberthemilk.com/*
// @run-at document-start
// @grant GM_addStyle
// ==/UserScript==
// Git: https://github.com/themarkwilliams/EnhanceRTM/blob/master/logo.js

// Set tag color in task list
GM_addStyle('.b-rn-qo { display:none !important; }'); // 1/6/17

GM_addStyle('.b-Ep-Ej-Fp-Yn { top:0 !important; bottom:0 !important; height:100% !important; }'); //1/6/17
