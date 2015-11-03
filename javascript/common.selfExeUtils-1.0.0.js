/**
 * @Author pangcg@highsuccess.cn
 * @Description
 * @Since 2015/10/30
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define("", [''], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory();
    }
}(function () {

    // Object prototype Utils getType
    if (!Object.prototype.getType) {
        Object.prototype.getType = function () {
            var type =  typeof this.valueOf();
            if ( type !== "object") {
                return type;
            } else {
                return Object.prototype.toString.call(this.valueOf());
            }
        }
        // 定义getType方法不能被枚举出来
        Object.defineProperty(Object.prototype, "getType", {
            enumerable : false
        });
    }

    // String prototype Utils replaceAll
    if (!String.prototype.replaceAll) {
        console.log("extend Sting.prototype.replace function");
        String.prototype.replaceAll = function (replace, value) {
            var regExp = new RegExp(replace, "gm");
            return this.replace(regExp, value);
        }
    }

    // String prototype Utils equal
    if (!String.prototype.equal) {
        String.prototype.equal = function (value) {
            var type = value.getType();
            if (type === 'string' && this.valueOf() === value)
                return true;
            return false;
        }
    }

    // String prototype Utils isNotBlank
    if (!String.prototype.isNotBlank) {
        String.prototype.isNotBlank = function () {
            if (this.length === 0 || this == null) {
                return false;
            }
            return true;
        }
    }

    // String prototype Utils isBlank
    if (!String.prototype.isBlank) {
        String.prototype.isBlank = function () {
            return !this.isNotBlank();
        }
    }

    // 浏览器信息{名称，版本}
    var browser = {};
    var ua = navigator.userAgent.toLowerCase();
    var re =/(msie|firefox|chrome|opera|version).*?([\d.]+)/;
    var m = ua.match(re);
    browser.name = m[1].replace(/version/, "'safari");
    browser.version = m[2];

    browser.toString = function () {
        return this.name + ":" + this.version;
    }
}));