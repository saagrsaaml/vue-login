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

  },

  getters: {

  },

  mutations: {

  }

})
