<template>
    <div @click.stop="test">
        <div id="index_head">
             <!-- 头部导航条开始 -->
        <mt-header class="index_header" >
            <div slot="left" to="/">
                <p class="index_font">首页</p>
            </div>
             <div slot="right" to="/">
                    <a class="index_user">
                        <img src="../assets/image/index_img/head_icon/plus-line.png" alt="">
                    </a>
                    <a class="index_searth">
                        <img src="../assets/image/index_img/head_icon/sousuo.png" alt="">
                    </a>
            </div>
        </mt-header>
        <!--头部导航栏结束 -->
        <!-- 顶部选项卡开始 -->
        <mt-navbar v-model="active" id="index_nav_bar">
            <mt-tab-item id="1" >动态
            <img slot="icon" src="../assets/image/all_small_image/dt.png">

            </mt-tab-item>
            <mt-tab-item id="2">健身公司
                 <img slot="icon" src="../assets/image/all_small_image/gs.png">
            </mt-tab-item>
            <mt-tab-item id="3">健身达人
                 <img slot="icon" src="../assets/image/all_small_image/js.png">
            </mt-tab-item>
        </mt-navbar>
        <!-- 顶部选修卡结束 -->
        </div>
       
        
       <div>
           <!-- 主体开始 -->
            <mt-tab-container v-model="active" >
                <mt-tab-container-item id="1"  class="index_min" >
                    <!-- 主体背景灰色 -->
                <div id="index_card" >
                            <!--用户卡片 背景白色-->
                        <div class="index_card_show">
                            <div class="index_card_title">
                                <div>
                                    <div>
                                        <img src="../assets/image/all_small_image/head_1.jpg" alt="">
                                    </div>
                                    <div>
                                        <p>keep会员</p>
                                        <p>30.9万人关注了ta</p>
                                    </div>
                                </div>
                                <gz-button></gz-button>
                            </div>
                            <!-- content 卡片内容区域 -->
                            <div class="index_card_content">
                                <p>结合现代人的特点和身体状态...</p>
                                <div class="index_card_content_poto">
                                    <div>
                                        <img src="../assets/image/carousel/banner1.jpg" alt="">
                                    </div>
                                    <div>
                                        <img src="../assets/image/carousel/banner1.jpg" alt="">
                                    </div>
                                    <div>
                                        <img src="../assets/image/carousel/banner1.jpg" alt="">
                                    </div>    
                                </div>
                                <!-- 点赞评论区域 -->
                                <div class="index_card_comment">
                                    <div>
                                        <!-- 点赞 -->
                                        <dz-button></dz-button>
                                        <!-- 评论 -->
                                        <pl-button></pl-button>
                                    </div>
                                    <div @click.stop="share">
                                      <a href="#">
                                          <img src="../assets/image/all_small_image/gd.png" alt="">
                                      </a>
                                    </div>
                                </div>
                                <!-- 评论结束 -->
                            </div>
                        </div>
                        <!-- 卡片结束 -->

                    </div>
                    <!-- <div id="log" @click="upload" :class="lodbg">
                       <img src="../assets/image/all_small_image/sc.png" alt="">
                    </div> -->
                     <div id="share" :style="pop">
                        <p><a href="#">分享</a></p>
                        <p><a href="#">收藏</a></p>
                        <p><a href="#">举报</a></p>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                   <!-- 健身公司开始 -->
                <!-- <div class="tox">
                    
                <mt-swipe  :auto="2000" :show-indicators="true">
                <mt-swipe-item><img src="../assets/image/carousel/1.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/image/carousel/2.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/image/carousel/3.jpg" alt=""></mt-swipe-item>
                </mt-swipe>
                    <div class="tox_head">
                    <div class="head_img">
                        <img src="../assets/image/all_small_image/head_1.jpg" alt="" />
                    </div>
                    <div class="head_text">
                        <span>公司名从数据库拿</span>
                        <p>
                        <span>规模 中</span>
                        <span>教练数 10</span>
                        <span>客户 36</span>
                        </p>
                        <p>
                        <span>简介</span>
                        567GO健身教练培训隶属倍新（北京）体育管理有限公司，
                        创立于2005年的零基础健身教练培训学校。也是被国家体育总局
                        和中国健美协会双重授 权的专业健身教练培训基地。在2018年全
                        国健美工作会议中，荣获 CBBA优秀健美健身活动组织奖、 CBBA专业
                        健身教练十佳金牌培训机构、“CBBA专业健身教练培训基地” 等荣誉称号。
                        </p>
                        <span>详细地址:郑州市金水区文化路任寨北街56号567GO健身运动馆</span>
                    </div>
                    </div>
                </div> -->
                <!-- 结束了 -->
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    3
                </mt-tab-container-item>
            </mt-tab-container>
            <!-- 主体结束 -->
            <!-- 分享 -->
           
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:'1',
            selectedTab:'index',
            dz:true,
            lodbg:'',
            pay:true,
            pop:{
                bottom:'-135px'
            },
            share_k:false
            
        }
    },
    methods:{
        test(){

            // console.log(111);
            // 恢复分享 隐藏
              this.pop.bottom='-135px'
        },
        //分享e
        share(e){
            // console.log(e);
            if( this.pop.bottom=='-135px'){
                this.pop.bottom=0+'px';
               
            }else{
                 this.pop.bottom='-135px'
                 
            }

            
        }
    },
    

}
</script>
<style>
    #index_head{
        position: fixed;
        /* padding-bottom: 175px; */
        width: 100%;    
        z-index: 999;
        margin-bottom: 200px;
    }
     #index_head>.index_header{
        background-color: #fff;
        /* border: 1px solid black; */
        font-size: 20px;
        font-weight: bold;
        box-shadow:0px 1px 5px #ece9e9;
       
    }
     .index_header p{
          color: #3C3C3C;
     }
    .index_user,.index_searth{
        display: inline-block;
        /* border: 1px solid black ; */
        margin-left: 8px;
    }
     .index_user img,.index_searth img{
         width: 28px;
         height: 28px;
     }
     /* navbar 的item 偏高自定义类进行修改 */
     #index_nav_bar>a{
         padding: 5px;
     }
     /* ************************************************************* */
     /* 这个是控制内容区域的背景为 淡灰色，展示卡片背景为白色 */
     .index_min{
         background-color:#fdf9f9;
         margin-top: 97px;
     }
     #index_card{
         background-color: #fff;
         border: 1px solid rgb(230, 230, 230);
         border-radius: 5px;
         padding: 5px;
         width: 350px;
         margin: 0 auto;
     }
     /* 卡片布局 */
     #index_card>.index_card_show>.index_card_title{
         display: flex;
         justify-content: space-between;
         font-size: 13px;
         /* padding: 5px; */
     }
     #index_card>.index_card_show>.index_card_title>div{
         display: flex;
         /* border: 1px solid black; */
         height: 35px;
     }
     #index_card>.index_card_show>.index_card_title>div:last-child{
         padding-left: 4px;
        
     }
     #index_card>.index_card_show>.index_card_title>div>div{
         margin-left:5px ;
     }
     #index_card>.index_card_show>.index_card_title>div>div:first-child>img{
         width: 25px;
         height: 25px;
         border-radius: 50%;
         line-height: 25px;
         margin-top: 5px;
     }
      #index_card>.index_card_show>.index_card_title>div>div:last-child>p:first-child{
        font-size: 15px;
        font-weight: bold;
      }
      #index_card>.index_card_show>.index_card_content{
          overflow: hidden;
      }
      #index_card>.index_card_show>.index_card_content p{
          font-size: 15px;
      }
      /* 展示图片布局 */
       #index_card>.index_card_show>.index_card_content>.index_card_content_poto{
           display: flex;
           justify-content: space-around;
           margin-top: 2px;
           margin-bottom: 2px;
       }
       #index_card>.index_card_show>.index_card_content>.index_card_content_poto>div{
           width: 115px;
           height: 115px;
           /* border: 1px solid black; */
           overflow: hidden;
           text-align: center
       }
       #index_card>.index_card_show>.index_card_content>.index_card_content_poto>div>img{
           width:115px;
           height: 115px;
       }
       /* 评论点赞 */
       #index_card>.index_card_show>.index_card_content>.index_card_comment{
           display: flex;
           justify-content: space-between;
           /* border: 1px solid black; */
           height: 25px;
       }
       #index_card>.index_card_show>.index_card_content>.index_card_comment>div:first-child{
           display: flex;
       }
       #index_card>.index_card_show>.index_card_content>.index_card_comment>div:last-child>a>img{
           width: 25px;
           height: 25px;
       }


       /* 分享style */
       #share{
        
           position: fixed;
           width: 100%;
           /* height: 100px; */
           background: #fff;
           border: 1px solid rgb(199, 198, 198);
           border-top-left-radius: 8px;
           border-top-right-radius: 8px;
           /* bottom: 0px; */
           overflow: hidden;
           z-index: 999;
           bottom: -135px;
           transition:all 0.5s;
           
       }
       #share>p{
           height: 29px;
           line-height: 29px;
           /* border: 1px solid black; */
           font-size: 15px;
           padding: 8px 10px;
           transition:all 0.5s;
       }
       #share>p>a{
           text-decoration: none;
           color: black;

       }
       #share>p:hover{
           background: rgb(227, 228, 228);
       }
</style>