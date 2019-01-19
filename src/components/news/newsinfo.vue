<template>
    <div class="news">
      <h3>{{news.title}}</h3>
      <p class="dep">{{news.zhaiyao}}</p>
      <p class="time">阅读{{news.click}}次 <span>{{news.add_time}}</span></p>
      <div class="content">
        {{news.content}}
      </div>
      <comment :id="id"></comment>
    </div>
</template>

<script>
  import comment from '../comment'
    export default {
        name: "newsinfo",
      data(){
          return {
            id:this.$route.params.id,
            news:{}
          }
      },
      created(){
        this.getInfo();
      },
      mounted(){
      },
      methods:{
        getInfo(){
           this.$http.get(`/api/getnew/${this.id}`).then(res=>{
             if(res.data.status===0){
               this.news=res.data.message;
             }
           })
      }
    },
      components:{
          comment
      }
}
</script>

<style lang="less" scoped>
  .news{
    padding: 0 10px;
    h3{
      font-size: 18px;
    }
    .dep{
      text-align: center;
      font-size: 14px;
    }
    .time{
      font-size:10px;
      color:#226aff;
      span{
        float: right;
      }
    }
    .content{
      padding: 10px 5px;
      border-top: 1px solid #999;
      font-size: 14px;
      border-bottom: 1px solid #999;
    }
  }
</style>
