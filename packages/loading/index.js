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
let loadingPool = [];
LoadingConstructor.prototype.close = function () {
  this.visible = false;
  let _this = this;
  let _index = loadingPool.indexOf(this)
  loadingPool.splice(_index,1)
  this.$el.parentNode.removeChild(_this.$el);
  if(_this.timer){
    clearTimeout(_this.timer)
  }
}
let loadingCloseAll = function(){
  while(loadingPool.length>0){
    loadingPool[0].close();
  }
}
LoadingConstructor.prototype.closeAll = function(){
  loadingCloseAll()
}
let Loading = (option) => {
    console.log("Vue.el", Vue.el);
    let loaddingInstance = createLoading();
    let duration = option.duration;
    if(option.text){
      loaddingInstance.text = option.text;
    }
    if(option.mask){
      loaddingInstance.maskVisible = option.mask;
    }
    document.body.appendChild(loaddingInstance.$el);
    loadingPool.push(loaddingInstance);
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
export default {Loading, loadingCloseAll};
