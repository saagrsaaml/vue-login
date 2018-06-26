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
    user: null
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
    },
    storeUser (state, user) {
      state.user = user
    },
    clearAuthData (state) {
      state.idToken = null
      state.userId = null
    }
  }
})
