<template>
    <div class="dox">
         <div id="pl" @click="pl">
            <img src="../assets/image/all_small_image/pl.png" alt="">
            <span>{{num}}</span>
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

</style>
