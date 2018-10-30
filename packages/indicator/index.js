import Vue from 'vue';
import Com from './index.vue'
const IndicatorConstructor = Vue.extend(Com);
const indicatorInstance = new IndicatorConstructor({
  el: document.createElement('div')
});
let Indicator = (option) => {
  showIndicator(option);
  return Indicator;
};
Indicator.close = function (){
  indicatorInstance.visible = false;
  Indicator.closed = true;
}
const showIndicator = (option) => {
  let duration = option.duration || 3000;
  indicatorInstance.visible = true;
  if(option.text){
    indicatorInstance.text = option.text;
  }
  document.body.appendChild(indicatorInstance.$el);
  if(Indicator.closed){
    return;
  }
  let t = setTimeout(function(){
    indicatorInstance.visible = false;
    clearTimeout(t);
  },duration);
}
export default Indicator;
