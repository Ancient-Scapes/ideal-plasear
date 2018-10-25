import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import axios from 'axios';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';

Vue.prototype.$axios = axios;

Vue.use(Router);
Vue.use(Vuesax);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/idepre',
      name: 'idepre',
      component: () => import('./views/Idepre.vue'),
    },
  ],
});
