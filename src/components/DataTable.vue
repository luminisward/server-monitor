<template>
  <el-table
    :data="responseData"
    style="width: 100%"
    :default-sort = "{prop: 'time', order: 'descending'}">
    <el-table-column
      prop="time"
      label="时间"
      sortable>
    </el-table-column>
    <el-table-column
      prop="Average"
      label="平均"
      sortable>
    </el-table-column>
  </el-table>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      responseData() {
        this.$store.state.responseData.map(this.addAttrTime)
        return this.$store.state.responseData
      }
    },
    methods: {
      addAttrTime: response => {
        let date = new Date(response.timestamp)
        let Y = date.getFullYear()
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1)
        let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())
        let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours())
        let m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes())
        let s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds())
        response.time = Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
      }
    }
  }
</script>