import Vue from 'vue';
import Com from './index.vue'
const LoadingConstructor = Vue.extend(Com);
const loadingInstance = new LoadingConstructor({
  el: document.createElement('div')
});
let Loading = (option) => {
  showLoading(option);
  return Loading;
};
Loading.close = function (){
  loadingInstance.visible = false;
  Loading.closed = true;
}
const showLoading = (option) => {
  let duration = option.duration || 3000;
  loadingInstance.visible = true;
  if(option.text){
    loadingInstance.text = option.text;
  }
  // if(option.){

  // }
  document.body.appendChild(loadingInstance.$el);
  if(Loading.closed){
    return;
  }
  let t = setTimeout(function(){
    loadingInstance.visible = false;
    clearTimeout(t);
  },duration);
}
export default Loading;
