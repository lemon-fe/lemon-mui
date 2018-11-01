// js components
import Toast from '../packages/toast/index.js';
import Loading from '../packages/loading/index.js';
import Dialog_JS from '../packages/dialog/index.js';

// ui components
import Button from '../packages/button/index.vue';
import Address from '../packages/address/index.vue';
import CountDown from '../packages/countdown/index.vue';
import Dialog_UI from '../packages/dialog/index.vue';

// directives
import LoadingDirective from '../packages/loading/directive.js'

// import Vue from 'vue'
import './assets/font/lemon-iconfont.css';

const version = '0.0.1';
const install = function(Vue, config = {}) {
  if (install.installed) return;
  Vue.component(Toast.name, Toast);
  Vue.component(Button.name, Button);
  Vue.component(Address.name, Address);
  Vue.component(CountDown.name, CountDown);
  Vue.component(Dialog_UI.name, Dialog_UI);

  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$dialog = Vue.prototype.$dialog = Dialog_JS;
  Vue.$loading = Vue.prototype.$loading = Loading;

  Vue.use(LoadingDirective);
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
  Dialog: Dialog_UI,
  Loading,
  Address
}
