/**
 * @Author pangcg@highsuccess.cn
 * @Description
 * @Since 2015/11/4
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
        funcName = factory();
    }
}(function () {
    //TODO : 实现异步请求
}));