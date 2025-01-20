// ==UserScript==
// @name         manga remove ads
// @namespace    https://tienrocker.com
// @version      2025.01.20.02
// @description  remove truyenqqto and nettruyenviet ads
// @author       Tien Tran
// @match        https://*.truyenqqto.com/*
// @match        https://*.nettruyenviet.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @updateURL    https://github.com/tienrocker/remove_web_ads/raw/main/truyenqqto_ads_remove.user.js
// @downloadURL  https://github.com/tienrocker/remove_web_ads/raw/main/truyenqqto_ads_remove.user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function GM_addStyle(css) {
        const style = document.getElementById("GM_addStyleBy8626") || (function () {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.id = "GM_addStyleBy8626";
            document.head.appendChild(style);
            return style;
        })();
        const sheet = style.sheet;
        sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
    }

    GM_addStyle("#popup-truyenqq { display:none!important; }");
    for (var i = 1; i < 20; i++) {
        GM_addStyle("#popup-truyenqq" + i + " { display:none!important; }");
    }

    GM_addStyle("#pop_nettruyenviet { display:none!important; }");
})();