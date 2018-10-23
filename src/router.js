import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import axios from 'axios';
import googleMap from '@google/maps';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';

Vue.prototype.googleMapsClient = googleMap.createClient({
  key: process.env.VUE_APP_GOOGLE_API_KEY,
  Promise: Promise,
});
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
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/idepre',
      name: 'idepre',
      component:  () => import('./views/Idepre.vue'),
    },
  ],
});
