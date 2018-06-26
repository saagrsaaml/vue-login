import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignupPage from '@/components/auth/signup.vue'
import login from '@/components/login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    { name: 'signup',
      path: '/signup',
      component: SignupPage
    }
  ]
})
