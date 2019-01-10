// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from 'axios'
// import VeeValidate from 'vee-validate'
import moment from 'moment'
// import api from '../static/api/request'
axios.defaults.withCredentials=true

Vue.prototype.$http = axios
Vue.prototype.moment = moment
// Vue.prototype.$API= api
Vue.use(ElementUI)
Vue.config.productionTip = false

// Vue.use(VeeValidate)

Vue.prototype.HOST = '/absmis'

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
