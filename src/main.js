// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vee, { Validator } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'
Validator.extend('mobile', {
  messages: {
    zh_CN: field => {
      return '请输入正确的手机号码'
    }
  },
  validate: value => {
    return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
})
const veeConfig = {
  errorBagName: 'errors',
  delay: 0,
  message: null,
  strict: true,
  locale: 'zh_CN'
}
Validator.addLocale(zhCN)
Vue.use(Vee, veeConfig)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
