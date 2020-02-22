// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueCookie from 'vue-cookie'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './stores/store'
Vue.config.productionTip = false

axios.defaults.baseURL = '/api';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vueCookie,
  components: { App },
  template: '<App/>',
})

/*axios.interceptors.request.use(
  config=>{
    if(config.url === '/user/login'){}
      else{
      if(localStorage.getItem('token')){
        config.headers.Authorization = 'Bearer ' + localStorage.getItem('token'); 
      }
    }
    return config;
  },
  error =>{
    if(error.response){
      switch(error.response.status){
        case 401:
          localStorage.removeItem('Authorization');
          this.$router.push('/login');
      }
    }
  }
)*/

router.beforeEach((to,from,next) =>{
  if(to.path === '/'){
    next();
  }
  else{
    let token = localStorage.getItem('token');
    if(token === 'null' || token === ''){
      next('/login');
    }else{
      next();
    }
  }

});
