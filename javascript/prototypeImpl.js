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
        funcName = factory();
    }
}(function () {
    //TODO : function factory implement

    //Test testReplaceAll
    function testReplaceAll() {
        var str = "pangcg goatugodojf pangcg jwi124095039 4909-=-=2-=402spggos pppangcg";
        str = str.replaceAll("pangcg", "xiaohei");
        console.log(str);
    }
    //testReplaceAll();

    //Test testEqual
    function testEqual() {
        var str = 'test';
        var other = 123;
        console.log(str.equal('test'));
        console.log(str.equal(other));
    }
    //testEqual();

    //Test testIsNotBlank
    function testIsNotBlank () {
        var str1 = '';
        var str2 = 'test';
        var str3 = ' ';
        var str4 = null;

        console.log("str1==============" + str1.isNotBlank() + "str1==============" + str1.isBlank());
        console.log("str2==============" + str2.isNotBlank() + "str2==============" + str2.isBlank());
        console.log("str3==============" + str3.isNotBlank() + "str2==============" + str3.isBlank());
        // console.log("str4==============" + str4.isNotBlank() + "str4==============" + str4.isBlank());
    }
    //testIsNotBlank();

    //Test testGetType
    function testGetType() {
        var array = new Array(1, 2, 3, 4);
        var number = new Number(1);
        var object = new Object();
        var func = function () {};
        var regexp = new RegExp();444

        console.log("array getType ====== " + array.getType());
        console.log("number getType ====== " + number.getType());
        console.log("object getType ====== " + object.getType());
        console.log("func getType ====== " + func.getType());
        console.log("regexp getType ====== " + regexp.getType());
    }
    testGetType();
}));