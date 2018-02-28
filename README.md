# -JQ-alert-
一个简单的alert自定义内容方法的插件

        new EjectAlert({
            okValue: '确定',
            closeValue: '取消',
            content: '确定吗少年?',
            ok: function () {
                alert('你点击了确定')
            },
            close: function () {
                alert('你点击了取消')
            }
        }).show()
        
        
