<template>
  <van-tabbar v-model="active" class="boder-top">
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/member" dot>会员</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/cart" info="5">购物车</van-tabbar-item>
    <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
  </van-tabbar>
</template>

<script>
    export default {
        name: "footbar",
      data(){
          return {
            active:0
          }
      }
    }
</script>

<style scoped>

</style>
