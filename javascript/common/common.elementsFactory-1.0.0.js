/**
 * @Author pangcg@highsuccess.cn
 * @Description  html 元素工厂
 * @Since 2015/11/3
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define('elementFactory', [''], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        elementFactory = factory();
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
    function appendEle (insertElement, parentElement) {
        return parentElement.appendChild(insertElement);
    }

    /**
     * 在指定元素之前插入新元素
     * @param  insertElement
     * @param  beforeElement
     * @returns {XML|Node}
     */
    function insertBeforeEle (insertElement, beforeElement) {
        var parentElement = beforeElement.parentNode;
        return parentElement.insertBefore(insertElement, beforeElement);
    }

    /**
     * 在指定元素之后插入新元素
     * @param insertElement
     * @param afterElement
     * @returns {XML|Node}
     */
    function insertAfterEle(insertElement, afterElement) {
        var parentElement = afterElement.parentNode;
        if (parentElement.lastChild == afterElement) {
            // 如果最后的节点是目标元素，则直接添加。因为默认是最后
            return parentElement.appendChild(insertElement);
        } else {
            //如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
            return parentElement.insertBefore(insertElement, afterElement.nextSibling);
        }
    }

    return {
        createElement: createElement,
        appendEle : appendEle,
        insertBeforeEle : insertBeforeEle,
        insertAfterEle : insertAfterEle
    }
}));