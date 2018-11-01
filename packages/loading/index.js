import Vue from 'vue';
import Com from './index.vue'
import Directive from './directive.js';
const LoadingConstructor = Vue.extend(Com);
let createLoading = () => {
  let loadingInstance = new LoadingConstructor({
    el: document.createElement('div')
  });
  return loadingInstance;
}
LoadingConstructor.prototype.close = function () {
  this.visible = false;
  let _this = this;
  this.$el.parentNode.removeChild(_this.$el);
  if(_this.timer){
    clearTimeout(_this.timer)
  }
}
let Loading = (option) => {
  let loaddingInstance = createLoading();
    let duration = option.duration;
    if(option.text){
      loaddingInstance.text = option.text;
    }
    if(option.mask){
      loaddingInstance.maskVisible = option.mask;
    }
    document.body.appendChild(loaddingInstance.$el);
 Vue.nextTick(function() {
    loaddingInstance.visible = true;
    if(duration){
      loaddingInstance.timer = setTimeout(function(){
        loaddingInstance.close();
      },duration);
    }
  })
  return loaddingInstance;
};
export default Loading;
