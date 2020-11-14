<template>
  <div>
    <!-- 顶部标题 -->
    <mt-header class="header">
      <router-link slot="left" to="/">消息</router-link>
      <router-link slot="right" to="/">
        <img src="../assets/image/message/icon.png">
      </router-link>
    </mt-header>
    <!-- 顶部选项卡开始 -->
    <mt-navbar class="main1">
      <mt-tab-item>
        <span class="span1">私信</span>
      </mt-tab-item>
      <mt-tab-item>
        评论
      </mt-tab-item>
      <mt-tab-item>
        @我
      </mt-tab-item>
      <mt-tab-item>
        赞
      </mt-tab-item>
      <mt-tab-item>
        粉丝
      </mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面部区域开始 -->
    <div class="main">
      <mt-tab-container>
        <mt-tab-container-item class="decorate">
           <!-- 单一文章信息开始 -->
          <div class="articleItem">
            <!-- 文章标题开始 -->
            <div class="articleItem-header">
              系统通知
            </div>
              <!-- 文章标题结束 -->
              <!-- 文章图文信息开始 -->
                <div class="articleItem-wrapper">
                  <!-- 文章图像开始  -->
                  <div class="articleImg">
                    <img src="../assets/image/message/1.png"/>
                  </div>
                  <!-- 文章图像结束 -->
                  <!-- 文章简介开始 -->
                <div class="articleDes">
                  Hi,恭喜成为keeper...
                </div>
                  <!-- 文章简介结束 -->
              </div>
              <div class="articleItem-header">
              keep_会员
            </div>
              <!-- 文章标题结束 -->
              <!-- 文章图文信息开始 -->
                <div class="articleItem-wrapper">
                  <!-- 文章图像开始  -->
                  <div class="articleImg">
                    <img src="../assets/image/message/2.png"/>
                  </div>
                  <!-- 文章图像结束 -->
                  <!-- 文章简介开始 -->
                <div class="articleDes">
                  一键定制专属智能训练计划，成为...
                </div>
                  <!-- 文章简介结束 -->
              </div>
              <div class="articleItem-header">
              keep_新人助手
            </div>
              <!-- 文章标题结束 -->
              <!-- 文章图文信息开始 -->
                <div class="articleItem-wrapper">
                  <!-- 文章图像开始  -->
                  <div class="articleImg">
                    <img src="../assets/image/message/3.png"/>
                  </div>
                  <!-- 文章图像结束 -->
                  <!-- 文章简介开始 -->
                <div class="articleDes">
                  Hi,你终于来啦，欢迎你加入...
                </div>
                  <!-- 文章简介结束 -->
              </div>
            <!-- 文章图文信息结束 -->
            
          </div>
          
          <!-- 单一文章信息结束 -->
          
        </mt-tab-container-item>
      </mt-tab-container>
    <!-- 面板区域结束 -->
    
  </div>
</div>
</template>
<script>
export default {
  data(){
    return {
      active: 1,
      selectedTab:'message'
    }
  }
}
</script>
<style>
/* .span1{

} */
.header{
  background-color: #fff !important;
  color: #1a1a1a !important;
}
.header a{
  font-size: 25px;
}
.main{
  margin-bottom: 55px;
}
.main1 a{
  color: #1a1a1a !important;
  border-bottom: 0 !important;
}
.main1 a:nth-child(1){
  border-bottom: 2px solid #515151 !important;
}
.articleItem{
  padding:10px 0;
  margin:0 10px;
}
.articleItem-header{
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.articleItem-wrapper{
  display: flex;
  align-items: center;
  padding-top: 10px;
  width:100%;
}
.articleImg{
  margin-right:15px;
}
.articleImg img{
  /* height: 40px; */
  border-radius: 5px;
}
.articleDes{
  height: 65px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 70px;
  letter-spacing: normal;
  color: #444;
}
.decorate a{
  border-bottom: 0;
}
.text1{
  border-bottom: 3px solid #26a2ff;
}
</style>