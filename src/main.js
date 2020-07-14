import Vue from 'vue'
import App from './App.vue'
import {routes} from "./routes/router";
import VueRouter from "vue-router";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
