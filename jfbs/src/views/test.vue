<template>
    <div class="dox">
         <div id="pl" @click="pl">
            <img src="../assets/image/all_small_image/pl.png" alt="">
            <span>{{num}}</span>
        </div>
        <div v-show="show">
            <input type="text" placeholder="请输入评论">
            <button>发送</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:857,
           show:false
        }
    },
    methods:{
        pl(){
            this.show=!this.show;
        }
        
    }
}
</script>
<style>
/* 按钮 */
.dox>div:nth-of-type(2){
    margin: 0 auto;
    width: 300px;
    border: 0px solid red;
}
.dox>div:nth-of-type(2)>input{
  width: 240px;
  height: 25px;
  border-radius: 5px 0px 0px 5px;
  border-right:none;
  /* box-shadow: ; */
}
.dox>div:nth-of-type(2)>button{
    /* border: none; */
    width: 40px;
    background-color: #cccccc;
    height: 29px;
    margin-top: 2px;
    border-left:none;
    border-radius: 0px 5px 5px 0px;
    padding-bottom:2px ;
}
    #pl{
        display: inline-block;
        position: relative;
        /* border: 1px solid black; */
        font-size: 13px;
    }
    #pl>img{
        width: 25px;
        height: 25px;
        margin-left: 5px;
        margin-right: 5px;
    }
    #pl>span{
        vertical-align: super;
    }
    #pl>div:last-child{
        position:absolute;
        width: 370px;
        height: 35px;
        border: 1px solid green;
       top: 100%;
       text-align: center;
      
      
    }

</style>
