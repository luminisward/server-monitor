<template>
  <el-button type="primary" @click="request">查询</el-button>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    request(){
      axios.get('http://127.0.0.1:5000/QueryMetricLast/acs_ecs_dashboard/VPC_PublicIP_InternetOutRate_Percent')
        .then(response => console.log(response))
    }
  }
}
</script>
