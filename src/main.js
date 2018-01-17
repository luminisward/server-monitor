import Vue from 'vue'
import ElementUI from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import './main.css'
import App from './components/App.vue'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
