import Vue from 'vue';
import Router from 'vue-router';
import Vuetify from 'vuetify';

import Home from '@/pages/Home';
import News from '@/pages/News';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Sample from '@/pages/Sample';

import '../../node_modules/vuetify/dist/vuetify.css';
// import { settings } from 'cluster';

Vue.use(Router);
Vue.use(Vuetify);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/sample',
      name: 'Sample',
      component: Sample,
    }
  ],
});
