import Vue from 'vue'
import App from './App.vue'


// 引入vant样式

// 引入浏览器样式重置
import 'normalize.css';
// 引入全局样式
import '@/styles/global.scss'
// 引入全局通用样式
import '@/styles/mybase.css'

// 引入vuex
import store from './store'

// 引入vant
import Vant from 'vant';
// import 'vant/lib/index.css';
import 'vant/lib/index.css';
Vue.use(Vant);


// 引入rem
import '@/utils/rem.js'

// 引入路由
import router from './router'



//引入全局过滤器
import * as custom from '@/filter'
// 导出的是对象，可以直接通过 key 和 value 来获得过滤器的名和过滤器的方法
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})



//引入权限

import './permission.js'

//用于判断是进入还是退出
window.addEventListener('popstate', function () {
    router.isBack = true
},false)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
