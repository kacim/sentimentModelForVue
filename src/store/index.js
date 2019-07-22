import Vue from 'vue'
import Vuex from 'vuex'

import testS from './modules/testStor'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        testS
    },
    state: {
        countp: testS.state.count
    },
    getters: {
        doneTodos: state => {
            return state.countp;
        }
    },
    mutations: {
    doadd (state) {
      // 变更状态
      state.countp++
    }
  }
})