import Toast from '../packages/toast/index.js';
import Dialog from '../packages/dialog/index.js';
import Indicator from '../packages/indicator/index.js';

import Button from '../packages/button/index.vue';
import CountDown from '../packages/countdown/index.vue';
// import Vue from 'vue'
import './assets/font/lemon-iconfont.css';

const version = '0.0.1';
const install = function(Vue, config = {}) {
  if (install.installed) return;
  Vue.component(Toast.name, Toast);
  Vue.component(Button.name, Button);
  Vue.component(CountDown.name, CountDown);
  Vue.component(Dialog.name, Dialog);
  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$dialog = Vue.prototype.$dialog = Dialog;
  Vue.$indicator = Vue.prototype.$indicator = Indicator;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};
/*
module.exports = {
  install,
  version,
  Toast
};
*/
export default {
  install,
  version,
  Toast,
  Button,
  Dialog,
  Indicator
}
