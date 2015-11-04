/**
 * @Author pangcg@highsuccess.cn
 * @Description
 * @Since 2015/11/4
 */
/**
 * 面向对象，构造函数的继承
 * @param {Function | Object} parent
 * @param {Function | Object}child
 * @constructor
 */
function ObjectExt (Parent, Child) {
    var Func = function () {}
    Func.prototype = Parent.prototype;
    Child.prototype = new Func();
    Child.prototype.constructor = Child;
}