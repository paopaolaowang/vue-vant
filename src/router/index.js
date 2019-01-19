import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Cart from '../components/cart'
import Search from '../components/search'
import Member from '../components/member'
import newslist from '../components/news/newslist'
import newsinfo from '../components/news/newsinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/member',
      component:Member
    },
    {
      path:'/home/newslist',
      component:newslist
    },
    {
      path:'/home/newsinfo/:id',
      component:newsinfo
    }
  ]
})
