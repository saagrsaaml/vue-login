import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/'
import HelloWorld from '@/components/HelloWorld'
import SignupPage from '@/components/auth/signup/signup'
import SigninPage from '@/components/auth/signin/signin'
import DashboardPage from '@/components/dashboard/dashboard'
import UserPage from '@/components/user/user'
import UserProfilePage from '@/components/user/profile/profile'
import UserProfileEditPage from '@/components/user/profile/edit/edit'

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
    },
    {
      path: '/user/:id',
      component: UserPage,
      children: [
        // Profile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        {
          path: 'profile',
          component: UserProfilePage,
          children: [
            // when /user/:id/profile/edit is matched
            {
              path: 'edit',
              component: UserProfileEditPage
            }
          ]
        }
      ]
    }
  ]
})
