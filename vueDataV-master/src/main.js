import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueParticles from 'vue-particles'
import Vcomp from './components/index'
import Toast from './components/toast'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/assets/styles/base.scss'
import '@/assets/styles/common.scss'
import '@/assets/iconfont/iconfont.css'
import VueResource from 'vue-resource'

Vue.use(vueParticles)
Vue.use(Vcomp)
Vue.use(ElementUI)
Vue.use(VueResource)

Vue.config.productionTip = false

Vue.prototype.$Toast = Toast


router.beforeEach((to, from, next) => {
	if (to.meta.title) {
	  document.title = to.meta.title;
	}
	next();
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')