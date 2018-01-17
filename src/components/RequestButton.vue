<template>
  <el-button type="primary" @click="request">查询</el-button>
</template>

<script>
  import axios from 'axios'
  import { mapState, mapMutations } from 'vuex'
  export default {
    computed: mapState([
      'metric'
    ]),
    methods: {
      ...mapMutations([
        'setResponse'
      ]),
      request(){
        // console.log(this.metric)
        axios.get('http://127.0.0.1:8010/api/QueryMetricLast/acs_ecs_dashboard/' + this.metric)
          .then(response => {
            this.setResponse(response)
            console.log(this.$store.state.response)
          })
          .catch(error => {
            console.log(error)
            console.log('API跪了')
          }
        )
      }
    }
  }
</script>
