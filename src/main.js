import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

Vue.config.productionTip = false

new Vue({
  iconfont: 'fa', // Fontawesome
  render: h => h(App),
}).$mount('#app')

