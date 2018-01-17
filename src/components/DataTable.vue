<template>
  <el-table
    :data="getTableData"
    style="width: 100%">
    <el-table-column
      prop="timestamp"
      label="时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="Average"
      label="使用率">
    </el-table-column>
  </el-table>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    // data() {
    //   return {
    //     tableData: [{
    //       "userId": "1664210210253154",
    //       "instanceId": "i-bp1e4dr61j7sgonmobnf",
    //       "Average": 107.87109375,
    //       "timestamp": 1516010160000
    //     },{
    //         "userId": "1664210210253154",
    //         "instanceId": "i-bp1ayvrn26pt4ymkoth4",
    //         "Average": 115.009765625,
    //         "timestamp": 1516010160000
    //     }]
    //   }
    // },
    computed: {
      ...mapGetters([
        'getTableData'
      ])
    }
  }
</script>