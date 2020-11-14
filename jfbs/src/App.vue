<template>
  <div id="app">    
    <router-view></router-view>
      <!-- 底部导航开始 -->
      <mt-tabbar v-model="selectedTab" fixed>
            <mt-tab-item id="index" @click.native="jump('/')">
                <img slot="icon" src="./assets/image/index_img/footer_icon/home.png" v-if="selectedTab=='index'">
                <img slot="icon" src="./assets/image/index_img/footer_icon/home1.png" v-else>
                  动态
            </mt-tab-item>
            <mt-tab-item id="message" @click.native="jump('/message')">
                  消息
                  <img slot="icon" src="./assets/image/index_img/footer_icon/message.png" v-if="selectedTab=='message'">
                  <img slot="icon" src="./assets/image/index_img/footer_icon/message1.png" v-else>
            </mt-tab-item>
            <mt-tab-item id="me" @click.native="jump('/me')" >
                 <img slot="icon" src="./assets/image/index_img/footer_icon/wode.png" v-if="selectedTab=='me'">
                  <img slot="icon" src="./assets/image/index_img/footer_icon/wode1.png" v-else>
                我的
               
            </mt-tab-item>
        </mt-tabbar>
        <!-- 底部导航结束 -->
  </div>
</template>
<script>
export default {
  data(){
    return {
      selectedTab:'index'
    }
  },
  methods:{
    jump(url){
       this.$router.push(url);
    }
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.top{
    text-decoration: none;
    color: #3C3C3C;
}
</style>
