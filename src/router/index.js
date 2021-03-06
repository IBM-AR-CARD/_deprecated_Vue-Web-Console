import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login/login'
import management from '../pages/management/management'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/management/:id',
      name:'management',
      component: management,
    }
  ]
})
