<template>
  <div class="block">
    <el-date-picker
      v-model="startEndTime"
      type="datetimerange"
      :picker-options="pickerOptions2"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
    <PeriodSelect/>
    <Button/>
  </div>
</template>

<script>
  import Button from './RequestButton.vue'
  import PeriodSelect from './PeriodSelect.vue'
  export default {
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一小时',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 1);
              picker.$emit('pick', [start, end]);
            }
          },{
            text: '最近一天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
              picker.$emit('pick', [start, end]);
            }
          },{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }]
        }
      }
    },
    components: {
      Button,
      PeriodSelect
    },
    computed: {
      startEndTime: {
        get() {
          return this.$store.state.startEndTime
        },
        set (value) {
          this.$store.commit('setStartEndTime', value)
        }
      }

    }
  };
</script>