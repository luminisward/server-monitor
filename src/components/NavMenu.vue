<template>
    <el-menu
      default-active="i-bp1iu8yarz42qqagrmjt"
      @select="handleSelect">
      <el-menu-item v-for="(server,key) in servers" :key="key" :index="server.instanceId">
        <span>{{ server.name }}</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
  import serverInfo from '../serverInfo.json'
  import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        servers: serverInfo.servers
      } 
    },
    methods: {
      ...mapMutations([
        'setInstanceId'
      ]),
      handleSelect(key) {
        this.setInstanceId(key)
      }
    }
  }
</script>