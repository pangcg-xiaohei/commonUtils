/**
 * @Author pangcg@highsuccess.cn
 * @Description
 * @Since 2015/11/4
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        require(['selfExeUtils', 'eventUtils', 'browserUtils', 'elementFactory'], factory);
    } else {
        // Browser globals
        factory("", eventUtils, browserUtils, elementFactory);
    }
}(function (S, eventUtils, browserUtils, elementFactory) {

    // insertTest
//    var zeroSpanEle = elementFactory.createElement('span', {'id':'zero'}, 'zero', {});
//    var fourthSpanEle = elementFactory.createElement('span', {'id':'fourth'}, 'fourth', {});
//
//
//    var parentEle = document.getElementById('insertTest');
//    var beforeEle = document.getElementById('first');
//    var afterEle = document.getElementById('third');
//
//    var appendButton = document.getElementById('append');
//    function append () {
//        console.log('click append button');
//        var id = 'firth' + Date.parse(new Date());
//        var firthSpanEle = elementFactory.createElement('span', {'id': id}, 'firth', {});
//        elementFactory.appendEle(firthSpanEle, parentEle);
//        eventUtils.removeListener(appendButton, 'click', append, false);
//    }
//    eventUtils.addListener(appendButton, 'click', append);
//
//    eventUtils.addListener(appendButton, 'click', function () {
//        console.log('click append button again');
//    });
//
//    //Test testReplaceAll
//    function testReplaceAll() {
//        var str = "pangcg goatugodojf pangcg jwi124095039 4909-=-=2-=402spggos pppangcg";
//        str = str.replaceAll("pangcg", "xiaohei");
//        console.log(str);
//    }
//    //testReplaceAll();
//
//    //Test testEqual
//    function testEqual() {
//        var str = 'test';
//        var other = 123;
//        console.log(str.equal('test'));
//        console.log(str.equal(other));
//    }
//    //testEqual();
//
//    //Test testIsNotBlank
//    function testIsNotBlank () {
//        var str1 = '';
//        var str2 = 'test';
//        var str3 = ' ';
//        var str4 = null;
//
//        console.log("str1==============" + str1.isNotBlank() + "str1==============" + str1.isBlank());
//        console.log("str2==============" + str2.isNotBlank() + "str2==============" + str2.isBlank());
//        console.log("str3==============" + str3.isNotBlank() + "str2==============" + str3.isBlank());
//        // console.log("str4==============" + str4.isNotBlank() + "str4==============" + str4.isBlank());
//    }
//    //testIsNotBlank();
//
//    //Test testGetType
//    function testGetType() {
//        var array = new Array(1, 2, 3, 4);
//        var number = new Number(1);
//        var object = new Object();
//        var func = function () {};
//        var regexp = new RegExp();444
//
//        console.log("array getType ====== " + array.getType());
//        console.log("number getType ====== " + number.getType());
//        console.log("object getType ====== " + object.getType());
//        console.log("func getType ====== " + func.getType());
//        console.log("regexp getType ====== " + regexp.getType());
//    }
//    testGetType();

//    function Animal () {
//        this.species = '动物';
//    }
//
//    function Cat (name, color) {
//        this.name = name;
//        this.color = color
//    }
//
//    function objectExtend (Child, Parent) {
//        var p = Parent.prototype;
//        var c = Child.prototype;
//        for (var i in p) {
//            c[i] = p[i];
//        }
//        c.uber = p;
//    }
//
//    objectExtend(Cat, Animal);
//    var cat1 = new Cat('xxx', 'xxx');
//    console.log(cat1.getType());
//    console.log( cat1 instanceof Animal);

//    function getInstance (_argus) {
//        var Func = function (argus) {
//            if (argus) {
//                for (var name in argus) {
//                    this[name] = argus[name];
//                }
//            }
//        }
//        return new Func(_argus);
//    }
//    var argus = {
//        "name": "xiaohei",
//        "color": "black",
//        "talk": function () {
//            console.log("my name = " + this.name);
//        }
//    }
//
//    var other1 = getInstance(argus);
//    other1.talk();

//    console.log('ohter1 name ====' + other1.name);
//    other1.name = 'pang xiao hei';
//    console.log(other1 instanceof BaseObject);
//    var other2 = getInstance('pangcg', 'blue');
//    console.log('other2 name ====' + other2.name)
}));