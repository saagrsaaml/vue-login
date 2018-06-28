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
    idToken: null,
    userId: null,
    username: null,
    first_name: null,
    last_name: null,
    email: null
  },

  getters: {
    isAuthenticated (state) {
      return state.idToken !== null
    }
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
      state.username = userData.username
      state.first_name = userData.first_name
      state.last_name = userData.last_name
      state.email = userData.email
    },
    storeUser (state, username) {
      state.username = username
    },
    clearAuthData (state) {
      state.idToken = null
      state.userId = null
      state.username = null
      state.first_name = null
      state.last_name = null
      state.email = null
    }
  }
})
