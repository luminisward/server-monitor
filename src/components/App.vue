<template>
<el-container>
  <el-header>
    <DateTimePicker/>
  </el-header>
  <el-container>
    <el-aside><NavMenu/></el-aside>
    <el-main><Tabs/></el-main>
  </el-container>
</el-container>
</template>

<script>
import Tabs from './Tabs.vue'
import NavMenu from './NavMenu.vue'
import DateTimePicker from './DateTimePicker.vue'

export default {
  components: {
    DateTimePicker,
    NavMenu,
    Tabs
  },
  computed: {
    count(){
      return this.$store.state.count
    } 
  }
  
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
