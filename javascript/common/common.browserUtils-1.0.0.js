/**
 * @Author pangcg@highsuccess.cn
 * @Description 浏览器工具
 * @Since 2015/11/4
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define("browserUtils", [''], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        browserUtils = factory();
    }
}(function () {
    // 浏览器信息{名称，版本}
    function getBrowserInfo() {
        var browser = {};
        var ua = navigator.userAgent.toLowerCase();
        var re =/(msie|firefox|chrome|opera|version).*?([\d.]+)/;
        var m = ua.match(re);
        browser.name = m[1].replace(/version/, "'safari");
        browser.version = m[2];

        browser.toString = function () {
            return this.name + ":" + this.version;
        }
        Object.defineProperty(browser, 'toString', {
            enumerable : false
        }); // toString 设置不能被枚举出来

        return browser;
    }

    return {
        getBrowserInfo : getBrowserInfo
    }
}));