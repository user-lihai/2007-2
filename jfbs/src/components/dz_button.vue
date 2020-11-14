<template>
    <div>
        <div @click="good(1)" id="dz">
            <img src="../assets/image/all_small_image/zan.png" alt="" v-if='dz==true'>
            <img src="../assets/image/all_small_image/wz.png" alt="" v-else>
             <span>{{num}}</span>
        </div>
    </div>
</template>
<style>
    #dz{
        
        display: inline-block;
       
    }
    #dz>img{
         width: 25px;
        height: 25px;
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 2px;
    }
    #dz>span{
        font-size: 13px;
        line-height: 25px;
        vertical-align: super;
    }
</style>
<script>
export default {
    data(){
        return{
            num:234,
            dz:true
        }
    },
    methods:{
          // 点赞
        good(n){
             if(this.dz==true){
                this.dz=false;
                this.num+=n;
               
           }else{
               this.dz=true
               this.num-=n;
           }
        },
    }
}
</script>