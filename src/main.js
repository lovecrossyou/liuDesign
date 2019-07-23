import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import VueAMap from 'vue-amap';
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.use(VueAMap);
Vue.use(ElementUI);
VueAMap.initAMapApiLoader({
  key: 'c4f5a7dd2f0fb710f8fe13e797a71081',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
