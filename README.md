# -JQ-alert-
一个简单的alert自定义内容方法的插件

        new EjectAlert({
//            okValue:'确定',//ok里面自定义的值
//            closeValue:'取消',//close里面自定义的值
//            content:'确定吗少年?',//里面自定义的内容
            ok: function () {
                alert('你点击了确定')
            },
            close: function () {
                alert('你点击了取消')
            }
        }).show()
