import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import {LoginRoutes} from '@/modules/login/routes'
import {UserRoutes} from '@/modules/user/routes'
import {RoleRoutes} from '@/modules/role/routes'
import {CategoryRoutes} from '@/modules/category/routes'
import {MusicRoutes} from '@/modules/music/routes'
import store from "../store";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    },
    ...LoginRoutes,
    ...UserRoutes,
    ...RoleRoutes,
    ...CategoryRoutes,
    ...MusicRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['login/isUserConnected']) {
      return next()
    }
    return next('/signin')
  } else {
    return next()
  }  
})

export default router
