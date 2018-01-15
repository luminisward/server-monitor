<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="CPU百分比" name="first"><DataView/></el-tab-pane>
    <el-tab-pane label="专有网络公网流出带宽" name="second">专有网络公网流出带宽</el-tab-pane>
    <el-tab-pane label="专有网络公网流出带宽使用率" name="third">专有网络公网流出带宽使用率</el-tab-pane>
  </el-tabs>
</template>
<script>
  import DataView from './DataTable.vue'
  export default {
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      DataView
    }
  };
</script>