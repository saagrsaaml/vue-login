import Vuex from 'vuex'
import Vue from 'vue'
import signup from './auth/signup'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    signup: signup
  },

  state: {

  },

  getters: {

  },

  mutations: {

  }

})
