<template>
    <div class="home">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in message" :key="index"><img  class="swipe-img" :src="item.img" alt=""></van-swipe-item>
      </van-swipe>
      <div class="demo-icon">
        <router-link to="/home/newslist"  class="van-col" tag="a">
          <img src="../assets/images/menu1.png" alt="">
          <span>新闻资讯</span>
        </router-link>
        <a class="van-col">
          <img src="../assets/images/menu2.png" alt="">
          <span>图片分享</span>
        </a>
        <a class="van-col">
          <img src="../assets/images/menu3.png" alt="">
          <span>商品购买</span>
        </a>
        <a class="van-col">
          <img src="../assets/images/menu4.png" alt="">
          <span>留言反馈</span>
        </a>
        <a class="van-col">
          <img src="../assets/images/menu5.png" alt="">
          <span>视频专区</span>
        </a>
        <a class="van-col">
          <img src="../assets/images/menu6.png" alt="">
          <span>联系我们</span>
        </a>

      </div>
    </div>


</template>


<script>

    export default {
        name: "home",
        data(){
          return {
            message:[],
          }
        },
        created(){
          this.getLunbo();
        },
      methods:{
          async getLunbo(){
            var res= await this.$http.get('api/getlunbo')
            if(res.status===200){
                console.log(res);
                this.message=res.data.message;
              }
          }
      }
    }
</script>

<style lang="less" scoped>
  .home{
    .van-swipe{
      height:200px;
      .swipe-img{
        width: 100%;
        display: block;
      }
    }
    a{
      padding: 10px 0;
      display: block;
    }
    .demo-icon {
      font-size: 0;
      padding-top: 10px;
    }
    .demo-icon-list {
      padding-top: 10px;
      box-sizing: border-box;
      min-height: calc(100vh - 65px);
    }
    .demo-icon .van-col  {
      float: none;
      text-align: center;
      height: 100px;
      display: inline-block;
      vertical-align: middle;
      width: 33.333%;
      img{
        width: 60px;
        height: 60px;
        margin-bottom: 10px;
      }
    }
    .demo-icon .van-col span {
      display: block;
      padding: 0 5px;
      font-size: 12px;
      line-height: 14px;
    }
    .demo-icon .van-icon {
      font-size: 32px;
      margin: 15px 0;
      color: #455a64;
    }
  }


</style>
