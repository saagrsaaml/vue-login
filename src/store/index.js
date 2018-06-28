import Vuex from 'vuex'
import Vue from 'vue'
import signup from './auth/signup'
import signin from './auth/signin'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    signup: signup,
    signin: signin
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
