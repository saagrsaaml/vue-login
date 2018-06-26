import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/'
import HelloWorld from '@/components/HelloWorld'
import SignupPage from '@/components/auth/signup/signup'
import SigninPage from '@/components/auth/signin/signin'
import DashboardPage from '@/components/dashboard/dashboard'

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
      component: SigninPage,
      beforeEnter (to, from, next) {
        if (store.state.idToken) {
          next('/dashboard')
        } else {
          next()
        }
      }
    },
    { name: 'signup',
      path: '/signup',
      component: SignupPage,
      beforeEnter (to, from, next) {
        if (store.state.idToken) {
          next('/dashboard')
        } else {
          next()
        }
      }
    },
    {
      path: '/dashboard',
      component: DashboardPage,
      beforeEnter (to, from, next) {
        if (store.state.idToken) {
          next()
        } else {
          next('/signin')
        }
      }
    }
  ]
})
