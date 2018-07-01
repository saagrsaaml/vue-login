import Vuex from 'vuex'
import Vue from 'vue'
import signup from './auth/signup'
import signin from './auth/signin'
import user from './user'
import router from '@/router'
import { $http } from '@/axios.auth.js'
import { app } from '@/app.config'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    signup: signup,
    signin: signin,
    user: user
  },

  state: {
    authUser: {
      idToken: null,
      userId: null,
      username: null,
      first_name: null,
      last_name: null,
      email: null
    }
  },

  getters: {
    isAuthenticated (state) {
      return state.authUser.idToken !== null
    },
    authUser: state => state.authUser
  },
  actions: {
    async getAuthUser ({commit, dispatch}, userID) {
      try {
        const response = await $http({
          method: 'get',
          url: `${app.USER}${userID}/`
        })
        console.log(response)
        if (response.status === 200) {
          commit('authUser', {
            token: response.data.token,
            userId: response.data.user_id,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            username: response.data.username,
            email: response.data.email
          })
          // router.replace('/dashboard')
        } else {
          // router.replace('/signin')
        }
      } catch (error) {
        console.error(error)
      }
    },
    async updateAuthUser ({commit, dispatch}, authData) {
      try {
        const response = await $http({
          method: 'patch',
          url: `${app.USER}${authData.userid}/`,
          data: authData.formData
          // params: {
          //   ID: 1
          // }
        })
        console.log(response)
        if (response.status === 200) {
          commit('authUser', {
            token: response.data.token,
            userId: response.data.user_id,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            username: response.data.username,
            email: response.data.email
          })
          router.replace('/dashboard')
        } else {
          // router.replace('/signin')
        }
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }
  },
  mutations: {
    authUser (state, userData) {
      state.authUser.idToken = userData.token
      state.authUser.userId = userData.userId
      state.authUser.username = userData.username
      state.authUser.first_name = userData.first_name
      state.authUser.last_name = userData.last_name
      state.authUser.email = userData.email
    },
    storeUser (state, username) {
      state.authUser.username = username
    },
    clearAuthData (state) {
      state.authUser.idToken = null
      state.authUser.userId = null
      state.authUser.username = null
      state.authUser.first_name = null
      state.authUser.last_name = null
      state.authUser.email = null
    }
  }
})
