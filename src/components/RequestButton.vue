<template>
  <el-button type="primary" @click="request">查询</el-button>
</template>

<script>
  import axios from 'axios'
  import { mapState, mapMutations } from 'vuex'
  export default {
    computed: mapState([
      'metric',
      'instanceId',
      'startEndTime',
      'period'
    ]),
    methods: {
      ...mapMutations([
        'setResponse'
      ]),
      request(){
        // console.log(this.metric)
        var config = {
          method: 'get',
          url: '/api/QueryMetricList/acs_ecs_dashboard',
          params: {
            metric: this.metric,
            instanceId: this.instanceId,
            startTime: this.$store.getters.getStartEndTimestamp[0],
            endTime: this.$store.getters.getStartEndTimestamp[1],
            period: this.period
          }
        }
        axios(config)
          .then(response => {
            this.setResponse(response.data.Datapoints)
          })
          .catch(error => {
            console.log(error)
          }
        )
      }
    }
  }
</script>
