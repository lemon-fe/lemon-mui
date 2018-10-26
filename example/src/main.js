import Vue from 'vue'
import App from './App.vue'
import Coms from '@com/index.js';
// import Coms from '../../lib/index.js';
import routes from './route';
// import router from './router';
import VueRouter from 'vue-router';
window.Vue = Vue
Vue.use(Coms);
Vue.use(VueRouter);
const router = new VueRouter({
  base: __dirname,
  routes
});

Vue.config.productionTip = false

new Vue({ // eslint-disable-line
  render: h => h(App),
  router
}).$mount('#app')


let indexScrollTop = 0;
router.beforeEach((route, redirect, next) => {
  if (route.path !== '/') {
    indexScrollTop = document.body.scrollTop;
  }
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0;
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop;
    });
  }
});


require("./assets/common.less")