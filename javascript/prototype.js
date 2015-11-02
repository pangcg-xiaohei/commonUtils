/**
 * @Author pangcg@highsuccess.cn
 * @Description
 * @Since 2015/10/30
 */
var version = '1.0.0'
Function.prototype.plugins = {};

var Utils = {
    // TODO: Browser Utils
    initBrowserUtils : function () {
        var browser = {};
        var ua = navigator.userAgent.toLowerCase();
        var re =/(msie|firefox|chrome|opera|version).*?([\d.]+)/;
        var m = ua.match(re);
        browser.name = m[1].replace(/version/, "'safari");
        browser.version = m[2];

        browser.toString = function () {
            return this.name + ":" + this.version;
        }
        document.write(browser.toString());
    }()
    // TODO: Date Utils
        // DatePicker 日期工具
    // TODO: Common Utils
};

//var Class = {
//    create : function() {
//        return function () {
//            this.initialize.apply(this, arguments);
//        }
//    }
//}