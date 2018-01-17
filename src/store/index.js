import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      count: 0,
      metric: 'CPUUtilization',
      response: ''
    },
    mutations: {
      increment (state) {
        state.count++
      },
      setMetric (state, n) {
        state.metric = n
      },
      setResponse (state, n) {
        state.response = n
      }
    },
    getters: {
      // getTableData: state => {
      //   if (state.response){
      //     return state.response.data.Datapoints
      //   }else{
      //     return {}
      //   }
      // }
    }
  })