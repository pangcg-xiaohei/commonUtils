/**
 * @Author pangcg@highsuccess.cn
 * @Description
 * @Since 2015/11/3
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
        factory(htmlElementFactory);
    }
}(function (htmlElementFactory) {

    var attrObject = {
        "href" : "test.html",
        "id" : "myTest",
        "title" : "myTitle"
    };
    var element = htmlElementFactory.createElement('a', attrObject, 'test', {
        "float" : "right"
    });
    console.log(element);

    var body = document.getElementsByTagName("body");
    console.log(body);
    body[0].appendChild(element);

    var divAttrObj = {
        "id" : "testDiv",
        "title" : "divTitle",
        "class" : "testClass"
    };
    var divElement = htmlElementFactory.createElement('div', divAttrObj, '', {});
    var spanElement = htmlElementFactory.createElement('span', {}, 'testSpan', {});
    divElement.appendChild(spanElement);
    divElement.insertAdjacentHTML();
    divElement.insertAdjacentText();
    divElement.insertBefore();
    body[0].appendChild(divElement);
}));