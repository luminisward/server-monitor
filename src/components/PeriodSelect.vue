<template>
  <el-select v-model="value" @change="handleChange" filterable allow-create placeholder="时间间隔秒数，60的倍数">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
        options: [{
          value: '60',
          label: '1分钟'
        }, {
          value: '180',
          label: '3分钟'
        }, {
          value: '600',
          label: '10分钟'
        }, {
          value: '3600',
          label: '1小时'
        }, {
          value: '86400',
          label: '1天'          
        }],
        value: ''
      }
    },
    methods: {
      ...mapMutations([
        'setPeriod'
      ]),
      handleChange(value) {
        this.setPeriod(value)
      }
    }
  }
</script>