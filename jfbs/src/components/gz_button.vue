<template>
 <div @click="gz">
      <mt-button type="primary" plain v-if="pay==true" class="gz" >关&nbsp;注</mt-button>
      <mt-button type="danger" plain v-else class="gz">已关注</mt-button>
</div>
</template>
<script>
export default {
     data(){
         return{
             pay:true
         }
     },
     methods:{
         // 双态关注按钮
        gz(){
            console.log(111);
           if(this.pay==true){
                this.pay=false;
           }else if(this.pay==false){
               this.pay=true
           }
        },
     }
}
</script>
<style scoped>
      #car>div:last-child>a{
          display: block;
          width: 60px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          text-decoration: none;
          border: 1px solid green;
          /* background: green; */
          color: green;
          border-radius: 5px;
      }
       .mint-button--normal{
          padding: 0;
           width: 60px;
          height: 30px;
      }
     .mint-button--primary.is-plain{
         color:rgb(51, 235, 34);
         background: rgb(198, 246, 194);
         border: none;
        
      }
      .gz{
           border: none;
        border-radius:4px;
         margin-right: 5px;
         font-size: 13px;
      }
</style>