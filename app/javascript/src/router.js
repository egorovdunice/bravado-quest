import Vue from 'vue';
import Router from 'vue-router';
import UsersView from "./views/UsersView";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: UsersView
    },
    {
      path: '/search/:search?',
      name: 'Search',
      component: UsersView
    },
  ]
});

export default router;