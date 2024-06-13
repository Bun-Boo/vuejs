import { createRouter, createWebHistory } from 'vue-router'

import HomeScreen from "../views/HomeScreen.vue";
import AboutScreen from "../views/AboutScreen.vue";
import JobDetail from "../components/Details/Jobs/JobDetail.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeScreen
  },
  {
    path: '/about',
    name: 'About',
    component: AboutScreen
  },
  {
    path: '/jobDetail/:id',
    name: 'JobDetail',
    component: JobDetail,
    props: true
  },

  // not found page
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router