/**
 * @Author pangcg@highsuccess.cn
 * @Description
 * @Since 2015/11/4
 */
require.config({

    baseUrl : '../javascript', // 项目js文件根目录

    paths : { // 指定路径
        'selfExeUtils' : 'common/common.selfExeUtils-1.0.0',
        'eventUtils' : 'common/common.eventUtils-1.0.0',
        'browserUtils' : 'common/common.browserUtils-1.0.0',
        'elementFactory' : 'common/common.elementsFactory-1.0.0',
        'commonUtils' : 'common/common.commonUtils-1.0.0'
    },

    shim: { // 指定特殊依赖
        'selfExeUtils' : {
            deps : ''
        }
    }
});