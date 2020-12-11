import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'

// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(axios)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')