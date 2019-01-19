<template>
  <div class="member">
    <router-link v-for="item in list" :key="item.id" :to="`/home/newsinfo/${item.id}`">
      <van-card
                :desc="item.zhaiyao"
                :title="item.title"
                :thumb="item.img_url"
                :price="`点击${item.click}次`" currency=""
      >

        <div slot="num">
          <span>发表时间：{{item.add_time}}</span>
        </div>
      </van-card>
    </router-link>
  </div>

</template>
<script>

    export default {
        name: "newslist",
        created(){
          this.getNews();
        },
        data(){
          return {
           list:[]
          }
        },
        mounted(){

        },
        methods:{
          getNews(){
            this.$http.get('api/getnewslist').then(res=>{
              if(res.status===200&&res.data.status===0){
                this.list=res.data.message;
              }
            })
          }
        }

    }
</script>

<style scoped>

</style>
