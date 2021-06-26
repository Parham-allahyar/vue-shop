import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SideBarStatus:true,
  },
  mutations: {
    SidebarChenge(state){
      state.SideBarStatus = !state.SideBarStatus;
    }
  },
  actions: {
  },
  modules: {
  }
})
