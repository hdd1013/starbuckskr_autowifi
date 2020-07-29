// ==UserScript==
// @name         Starbucks Korea Wifi Autoconnect
// @namespace    hdd1013
// @version      0.2
// @description  Starbucks Korea Wifi Autoconnect Script
// @author       hdd1013
// @match        https://first.wifi.olleh.com/starbucks/index_*.html
// @match        http://first.wifi.olleh.com/starbucks/index_*.html
// @match        https://www.starbucks.co.kr/util/wireless.do
// @grant        window.close
// ==/UserScript==

(function() {
  'use strict';

  // Your code here...
  var windowLoc = window.location.href;
  if(windowLoc.match(/index_en/g)) {
      document.querySelector("#purpose_agree").checked=true;
      goAct();
  } else if(windowLoc.match(/wireless\.do/)) {
      window.close();
  } else {
      window.location.href="https://first.wifi.olleh.com/starbucks/index_en.html";
  }
})();