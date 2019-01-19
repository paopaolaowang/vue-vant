import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { Button, NavBar,Tabbar, TabbarItem,Icon,Swipe,SwipeItem,Card,Panel,NoticeBar} from 'vant';
axios.defaults.baseURL = 'http://127.0.0.1:5000/';
Vue.prototype.$http=axios;
Vue.use(Button)
  .use(NavBar)
  .use(Tabbar)
  .use(Icon)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Card)
  .use(Panel)
  .use(NoticeBar)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
