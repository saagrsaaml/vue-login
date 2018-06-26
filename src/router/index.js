import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignupPage from '@/components/auth/signup/signup'
import SigninPage from '@/components/auth/signin/signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      name: 'signin',
      path: '/signin',
      component: SigninPage
    },
    { name: 'signup',
      path: '/signup',
      component: SignupPage
    }
  ]
})
