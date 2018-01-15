<template>
  <el-table
    :data="tableData"
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
  export default {
    data() {
      return {
        tableData: [{
          "userId": "1664210210253154",
          "instanceId": "i-bp1e4dr61j7sgonmobnf",
          "Average": 107.87109375,
          "timestamp": 1516010160000
        },{
            "userId": "1664210210253154",
            "instanceId": "i-bp1ayvrn26pt4ymkoth4",
            "Average": 115.009765625,
            "timestamp": 1516010160000
        },{
            "userId": "1664210210253154",
            "instanceId": "i-bp1fvnzjphkaeymdxwja",
            "Average": 3.4303385416666665,
            "timestamp": 1516010220000
        },{
            "userId": "1664210210253154",
            "instanceId": "i-bp1458r5xhk7lduoe0g8",
            "Average": 73.46299913194444,
            "timestamp": 1516010220000
        },{
            "userId": "1664210210253154",
            "instanceId": "i-bp1h224i4xtl79j9lt7c",
            "Average": 2.945638020833333,
            "timestamp": 1516010220000
        }]
      }
    },
    props: ['response-data']
  }
</script>