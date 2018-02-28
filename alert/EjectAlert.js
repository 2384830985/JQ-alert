/**
 * Created by Administrator on 2018/2/28.
 */
;(function (window) {
    var _bind = function (that) {
        $("body").append(
            '<div class="mydialog123">'+
            '<span class="close123">×</span>'+
            '<div class="mydialog-cont">'+
            '<div class="cont123">'+that.content+'</div>'+
            '</div>'+
            '<div class="footer123">'+
            '<span class="btn123 t_ok_alert">'+that.okValue+'</span>'+
            '<span class="btn123 t_remove_alert">'+that.closeValue+'</span>'+
            '</div>' +
            '</div>'
        )
        $(that.DOMxx).on('click',function () {
            removeAlert()
        })
        $(that.DOMclose).on('click',function () {
            removeAlert()
            return that.close()
        })
        $(that.DOMok).on('click',function () {
            removeAlert()
            return that.ok()
        })
    }
    var removeAlert = function () {//删除方法
        $('.mydialog123').remove()
    }
    function EjectAlert (options){//原型
        this.okValue = options.okValue|| '确定'; //ok里面的字
        this.ok = options.ok;           //ok的方法
        this.close = options.close;     //取消的方法
        this.closeValue = options.closeValue||'取消';//取消里面的字
        this.content = options.content||'我是里面的内容'; //里面的内容
        this.DOMxx = '.close123'; //X的dom节点
        this.DOMclose = '.t_remove_alert'; //close的dom节点
        this.DOMok = '.t_ok_alert'; //ok的dom节点
    }
    EjectAlert.prototype.init = function (res) {
    }
    EjectAlert.prototype.show = function () {
        if ($('.mydialog123').length===0){     //出现
            _bind(this)
        }
    }
    EjectAlert.prototype.hide = function () {  //隐藏
        removeAlert()
    }
    EjectAlert.prototype.ok = function () {    //点击确定
        return true
    }
    EjectAlert.prototype.close = function () { //点击取消
        return true
    }
    window.EjectAlert = EjectAlert
}(window))