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
import UserHomePage from '@/components/user/home/home'
import UserProfileHomePage from '@/components/user/profile/home/home'

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
        if (store.state.authUser.idToken) {
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
        if (store.state.authUser.idToken) {
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
        if (store.state.authUser.idToken) {
          next()
        } else {
          next('/signin')
        }
      }
    },
    {
      path: '/user/:id',
      component: UserPage,
      props: true,
      children: [
        { path: '', component: UserHomePage, props: true },
        // Profile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        {
          path: 'profile',
          component: UserProfilePage,
          props: true,
          children: [
            { path: '', component: UserProfileHomePage, props: true,},
            // when /user/:id/profile/edit is matched
            {
              path: 'edit',
              name: 'editUser',
              component: UserProfileEditPage,
              props: true
            }
          ]
        }
      ],
      beforeEnter (to, from, next) {
        if (store.state.authUser.idToken) {
          next()
        } else {
          next('/signin')
        }
      }
    }
  ]
})
