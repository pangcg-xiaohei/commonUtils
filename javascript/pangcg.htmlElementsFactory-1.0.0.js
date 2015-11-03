/**
 * @Author pangcg@highsuccess.cn
 * @Description  创建HTML元素
 * @Since 2015/11/3
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define('htmlElementFactory', [''], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        htmlElementFactory = factory();
    }
}(function () {
    //页面 html 元素 创建
    /**
     * 生成html元素
     * @param {String} tagName
     * @param {Object} attrObject
     * @param {String} textContent
     * @param {Object} style
     * @returns {HTMLElement}
     */
    function createElement (tagName, attrObject, textContent, style) {
        var element = document.createElement(tagName);

        // 为元素添加属性
        for (var key in attrObject) {
            var attrVal = attrObject[key];
            element.setAttribute(key, attrVal);
        }

        // 为元素添加内容
        element.innerText = textContent;

        // 其他特别的属性
        if (style) {
            for (var key in style) {
                var styleVal = style[key];
                element.style[key] = styleVal;
            }
        }

        return element;
    }

    /**
     * 在指定元素底部插入新的元素
     * @param insertElement
     * @param parentElement
     * @returns {XML|Node}
     */
    function append (insertElement, parentElement) {
        return parentElement.appendChild(insertElement);
    }

    /**
     * 在指定元素之前插入新元素
     * @param  insertElement
     * @param  beforeElement
     * @param  parentElement
     */
    function insertBeforeEle (insertElement, beforeElement, parentElement) {
        return parentElement.insertBefore(insertElement, beforeElement);
    }

    /**
     * 在指定元素之后插入新元素
     * @param insertElement
     * @param afterElement
     */
    function insertAfter(insertElement, afterElement, parentElement) {
    }

    return {
        createElement: createElement
    }
}));