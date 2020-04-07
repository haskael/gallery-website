import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogIn: false,
    userid: '',
    collectionLoad: false,
    myCollections: []
  },

  getters: {
    getLogIn: state => state.isLogIn,
    getId: state => state.getId
  },

  mutations: {
    logInStatusChange(state, flag) {
      state.isLogIn = flag
    },
    setId(state, id) {
      state.userid = id
    },
    getMyCollections(state, collectInfo) {
      state.myCollections = collectInfo;
    }
  },

  actions: {
    
  },

  modules: {
  }
})
