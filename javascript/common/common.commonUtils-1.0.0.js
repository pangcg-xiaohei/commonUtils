/**
 * @Author pangcg@highsuccess.cn
 * @Description
 * @Since 2015/11/4
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define("commonUtils", ['selfExeUtils'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        commonUtils = factory();
    }
}(function () {
    //TODO : function factory implement

    return {

        /**
         * 对key1=value1&key2=value2&key3=value3。。。格式字符串的CRUD操作
         */
        andSymbolStr : {

            /**
             * 添加值
             * @param {String} str
             * @param {String} confirmKey
             * @param {String} value
             * @returns {String}
             */
            add : function (str, confirmKey, value) {
                if(str.isBlank() || confirmKey.isBlank()) {
                    return str;
                }

                var strArray = str.split("&");
                for(var i=0, length=strArray.length; i < length; i++) {
                    var currentKey = strArray[i].substring(0, strArray[i].indexOf("="));
                    if(currentKey == confirmKey) {
                        throw new Error("键值已存在，无法新增键值");
                    }
                }
                str += "&" + confirmKey + "=" + value ;
                return str;
            },

            /**
             * 删除指定的值
             * @param {String} str
             * @param {String} confirmKey
             * @returns {String}
             */
            del : function (str, confirmKey) {
                if(str.isBlank() || confirmKey.isBlank()) {
                    return str;
                }

                var strArray = str.split("&");
                var newStr = "";
                for(var i=0, length=strArray.length; i < length; i++) {
                    var currentKey = strArray[i].substring(0, strArray[i].indexOf("="));
                    var value = strArray[i].substring(strArray[i].indexOf("=") + 1);
                    if(currentKey.isNotBlank()) {
                        if (currentKey != confirmKey) {
                            newStr += "&" + currentKey + "=" + value;
                        }
                    }
                }
                return newStr;
            },

            /**
             *  获取指定的值
             * @param {String} str
             * @param {String} confirmKey
             * @returns {string}
             */
            get : function (str, confirmKey) {
                if(str.isBlank() || confirmKey.isBlank()) {
                    return "";
                }

                var strArray = str.split("&");
                for(var i=0, length=strArray.length; i < length; i++) {
                    var currentKey = strArray[i].substring(0, strArray[i].indexOf("="));
                    var value = strArray[i].substring(strArray[i].indexOf("=") + 1);
                    if(currentKey.equal(confirmKey)) {
                        return value;
                    }
                }
                return "";
            },

            /**
             *  判断key值是否存在
             * @param {String} str
             * @param {String} confirmKey
             * @returns {boolean}
             */
            isExist : function(str, confirmKey) {
                var strArray = str.split("&");
                for(var i=0, length=strArray.length; i < length; i++) {
                    var currentKey = strArray[i].substring(0, strArray[i].indexOf("="));
                    if(currentKey.equal(confirmKey)) {
                        return true;
                    }
                }
                return false;
            },

            /**
             * 更新指定的值
             * @param {String} str
             * @param {String} confirmKey
             * @param {String} value
             * @returns {String}
             */
            update : function (str, confirmKey, value) {
                if(str.isBlank() || confirmKey.isBlank()) {
                    return str;
                }

                var strArray = str.split("&");
                var newStr = "";
                for(var i=0, length=strArray.length; i < length; i++) {
                    var currentKey = strArray[i].substring(0, strArray[i].indexOf("="));
                    var curValue = strArray[i].substring(strArray[i].indexOf("=") + 1);
                    if(currentKey.isNotBlank()) {
                        if(currentKey.equal(confirmKey)) {
                            newStr += currentKey + "=" + curValue + "&";
                        } else {
                            newStr += currentKey + "=" + value + "&";
                        }
                    }
                }
                return newStr;
            }
        },

        /**
         * 将&xxx=xxx&xxx=xxx...格式的数据字符串，转换为json格式的字符串
         * @param {String} paramStr
         * @return {String}
         */
        changeToJsonStr : function(paramStr) {
            //对反斜杠进行处理
            if(paramStr.indexOf("\\") > -1) {
                paramStr = paramStr.replace(/\\/g,"\\\\");
            }
            var str = "";
            var array = paramStr.split("&");
            for(var i = 0 ; i < array.length ; i++) {
                if(array[i].length > 0) {
                    var key = array[i].substring(0, array[i].indexOf("="));
                    var value = array[i].substring(array[i].indexOf("=") + 1);
                    if(value.indexOf("\t") > -1) {
                        value = value.replace(/\t/g, "");
                    }
                    str += "\"" + key + "\":\"" + value+ "\"" + ",";
                }
            }
            var jsonStr = "{" + str.substring(0, str.length - 1) + "}";
            return jsonStr;
        }

    }

}));