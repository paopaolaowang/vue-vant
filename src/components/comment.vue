<template>
    <div class="comment">

      <h4>可以BB一下哟:</h4>
      <textarea class="text" id="area" autofocus maxlength="120" placeholder="最多输入120字">

      </textarea>
      <van-button type="primary">发表评论</van-button>
      <div class="content" v-for="(item,index) in comms" :key="index">
        <h3 class="title">第{{index+1}}楼  用户：{{item.user_name}}  发表时间：{{item.add_time}}</h3>
        <van-notice-bar :scrollable="false" >
          {{item.content}}
        </van-notice-bar>
      </div>

      <van-button plain type="warning" @click="getMore">{{islast?'最后一页了':'加载更多'}}</van-button>
    </div>

</template>

<script>

    export default {
        name: "comment",
      created(){
        this.getComment();
      },
      props:{
        id:{
          type:String,
        }
      },
      data(){
        return {
          pageindex:1,
          limit:2,
          artid:this.id,
          comms:[],
          islast:false
        }
      },
      methods:{
          async getComment(){
            var res=await this.$http.get(`/api/getcomments/${this.artid}?pageindex=${this.pageindex}&limit=${this.limit}`)
            console.log(res)
            if (res.data.status===0){
              this.comms=this.comms.concat(res.data.message);
            }
          },
        getMore(){
          this.pageindex++;
          if(this.pageindex>=this.comms[0].total){
            this.islast=true;
            return
          }
          this.getComment();
        }
      }
    }
</script>

<style lang="less" scoped>
  .comment{
    h4{
      margin: 5px 0;
      padding: 0;
      color:#333;
    }
    .content{
      .title{
        margin: 0;
        background-color: #ccc;
        font-size: 12px;
        height: 25px;
        line-height: 25px;
      }
    }
    .text{
      width: 100%;
      box-sizing: border-box;
      border:1px solid #999;
      background-color: rgba(0,0,0,.1);
      height: 100px;
      font-size: 10px;
    }
    .van-button--primary{
      width: 100%;
      background-color:#226aff;
      border: 0;
    }
    .van-button--warning{
      display: block;
      height: 30px;
      line-height: 30px;
      width: 120px;
      margin: 0 auto;
    }
  }
</style>
