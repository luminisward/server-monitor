<template>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item v-for="(server,key) in servers" :key="key" :index="server.instanceId">
        <span>{{ server.name }}</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
  import serverInfo from '../serverInfo.json'

  export default {
    data() {
      return {
        servers: serverInfo.servers
      } 
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>