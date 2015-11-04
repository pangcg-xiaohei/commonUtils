/**
 * @Author pangcg@highsuccess.cn
 * @Description 事件绑定移除工具
 * @Since 2015/11/4
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define("eventUtils", [''], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        eventUtils = factory();
    }
}(function () {
    // 事件工厂，负责绑定事件

    // 绑定事件
    function addListener (element, type, func) {
        if (element.attachEvent) {
            element.attachEvent('on' + type, func);
        } else {
            element.addEventListener(type, func);
        }
    }

    // 移除事件
    function removeListener (element, type, func, flag) {
        if (element.detachEvent) {
            element.detachEvent('on' + type, func);
        } else {
            element.removeEventListener(type, func, flag);
        }
    }

    return {
        addListener : addListener,
        removeListener: removeListener
    }
}));