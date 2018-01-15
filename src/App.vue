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
import Tabs from './components/Tabs.vue'
import NavMenu from './components/NavMenu.vue'
import DateTimePicker from './components/DateTimePicker.vue'

export default {
  components: {
    DateTimePicker,
    NavMenu,
    Tabs
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
