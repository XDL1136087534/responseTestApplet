import Vue from 'vue'
import App from './App'
import share from '@/static/js/mixins/base.js'

Vue.config.productionTip = false
Vue.mixin(share)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
