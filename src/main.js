import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './main.css'
import App from './App.vue'

const bus = new Vue()

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})

