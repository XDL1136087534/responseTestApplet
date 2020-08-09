import Vue from 'vue'
import App from './App'
import mixin from '@/static/js/mixins/base.js'

Vue.config.productionTip = false
Vue.mixin(mixin)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
