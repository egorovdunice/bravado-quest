import babelPolyfill from 'babel-polyfill'
import Vue from 'vue'
import router from './router';
import store from '../src/store';
import App from '../src/app.vue'

const APP_SELECTOR = 'app';

export default  () => {
  document.body.appendChild(document.createElement(APP_SELECTOR))
  new Vue({
    render: h => h(App),
    router,
    store,
  }).$mount(APP_SELECTOR)
};