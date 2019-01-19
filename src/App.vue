<template>
  <div id="app">
    <van-nav-bar fixed class="head-bg"
      title="黑马前端13期"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <transition>
      <router-view></router-view>
    </transition>


    <!--<van-tabbar v-model="active" class="boder-top">-->
      <!--<van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>-->
      <!--<van-tabbar-item icon="friends-o" to="/member" dot>会员</van-tabbar-item>-->
      <!--<van-tabbar-item icon="cart-o" to="/cart" info="5">购物车</van-tabbar-item>-->
      <!--<van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>-->
    <!--</van-tabbar>-->
    <footbar></footbar>
  </div>
</template>

<script>
  import footbar from './components/footbar'
export default {

  name: 'App',
  data(){
    return {}
  },
  methods:{
    onClickLeft(){
      // this.$router.go(-1);
      window.history.back();
    }
  },
  components:{
    footbar,
  }
}
</script>

<style lang="less">

#app {
  box-sizing: border-box;
  padding-top: 46px;
  padding-bottom: 51px;
  overflow-x: hidden;
  .v-enter{
    opacity: 0.5;
    transform: translateX(100%);
  }
  .v-leave-to{
    position: absolute;
    left: -200%;
    /*float: left;*/
    opacity: .5;
    /*transform: translateX(-100%);*/
  }
  .v-enter-active,.v-leave-active{
    transition: all .4s ease-in-out;
  }

  .head-bg{
    background-color: cornflowerblue;
    color:#fff;
     span,i{
      color:inherit;
    }
  }
  .boder-top{
    border-top: 1px solid #999;
  }
}
</style>
