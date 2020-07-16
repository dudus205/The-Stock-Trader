import Vue from 'vue'
import App from './App.vue'
import {routes} from "./routes/router";
import VueRouter from "vue-router";
import Vuex from "vuex";
import {stores} from './stores/store';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

const store = new Vuex.Store(
  stores
);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
