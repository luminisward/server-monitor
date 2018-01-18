import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      period: '60',
      metric: 'CPUUtilization',
      responseData: [],
      instanceId: 'i-bp1iu8yarz42qqagrmjt',
      startEndTime: []
    },
    mutations: {
      setMetric (state, n) {
        state.metric = n
      },
      setInstanceId (state, n) {
        state.instanceId = n
      },
      setResponse (state, n) {
        state.responseData = n
      },
      setStartEndTime (state, n) {
        state.startEndTime = n
      },
      setPeriod(state, n) {
        state.period = n
      }
    },
    getters: {
      getStartEndTimestamp: state => {
        return state.startEndTime.map(time => new Date(time).getTime())
      }
    }
  })