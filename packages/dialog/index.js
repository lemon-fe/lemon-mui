import Vue from 'vue';
import Com from './index.vue'
const DialogConstructor = Vue.extend(Com);
let createDialog = function(){
  let dialogInstance = new DialogConstructor({
    el: document.createElement('div')
  })
  return dialogInstance;
}
DialogConstructor.prototype.cancelInfo = function(cb){
  let _this = this;
  let btn_cancel = this.$el.getElementsByClassName("btn-cancel")[0];
  btn_cancel.onclick = function(){
    _this.options.show = false;
    _this.$el.parentNode.removeChild(_this.$el);
    cb && cb();
  }
};
DialogConstructor.prototype.confirmInfo = function(cb){
  let _this = this;
  let btn_confirm = this.$el.getElementsByClassName("btn-confirm")[0];
  btn_confirm.onclick = function(){
    _this.options.show = false;
    _this.$el.parentNode.removeChild(_this.$el);
    cb && cb(); 
  }
};
const Dialog = (option) => {
  let dialogInstance = createDialog();
  Object.assign(dialogInstance.options, option);
  document.body.appendChild(dialogInstance.$el);
  Vue.nextTick(function() {
    dialogInstance.options.show = true;
    dialogInstance.cancelInfo(option.cancel);
    dialogInstance.confirmInfo(option.confirm);
  });
};
export default Dialog;
