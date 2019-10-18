import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import Page2 from '@/pages/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "login"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    }
  ]
})
