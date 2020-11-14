<template>
  <div class="box">
    <!-- 顶部导航开始 -->
      <router-link class="mtop" to="/register">免费注册</router-link>
    <!-- 顶部导航结束 -->
    <!-- 表单区域开始 -->
    <div class="text_input">
      <span>欢迎登录</span>
      <mt-field class="input_1"
        label="用户名"
        placeholder="请输入用户名"
        type="text"
        v-model="username"
        :state="usernameState"
        @blur.native.capture="checkUsername"
      >
      </mt-field>
      <mt-field class="input_2"
        label="密码"
        placeholder="请输入密码"
        type="password"
        v-model="password"
        :state="passwordState"
        @blur.native.capture="checkPassword"
      >
      </mt-field>
      <mt-button type="primary" size="large" @click="handle">快速登录</mt-button>
    </div>
    
    <!-- 表单区域结束 -->
    <div class="wq">
      <!-- <div><img src="../assets/weixin.png" alt=""></div> -->
      <!-- <div><img src="../assets/QQ.png" alt=""></div> -->
    </div>

    <div>
    
    <span><input type="radio">我已阅读并同意减肥吧用户协议和隐私安全</span>
  </div>
  </div>
  
</template>
<style>
.box{
  width: 375px;
  height: 667px;
  background-image:url('../assets/image/login_bg/log_bg.jpg');
  background-size: 100% 100%;

}
.box>.mtop{
  /* width: 30px;
  height: 30px; */
  display: block;
  padding-top: 20px;
  border: 0px solid red;
  margin-left: 75%;
  font-size: 16px;
 color: #ffffff;
 text-decoration: none;
}
.mint-field-core{
  background-color: transparent;

}
  .mint-cell-text{
    margin-left: 25px;
  }
  /* .mint-button--large{
    background-color: rgb(50, 205, 71);
  }   此处效果不显示*/
.mint-cell-wrapper{
 background-color: rgba(235, 232, 232, 0);
}
.mint-cell-wrapper::-webkit-input-placeholder {
/* placeholder颜色  */

/* placeholder字体大小  */
font-size: 12px;
/* placeholder位置  */
 text-align: right;
 padding-left: 15px;
 }
 /*两个文本框  */
.input_1{
  /* width: 80%; */
  background: none;
   border-radius:13px;
   margin-bottom: 30px;
   border: none;
   text-align: center;
  
}
.input_2{
   width: 80%;
   border-radius:13px;
  background-color:#cccccc;
  

  /* border-radius:50px 50px 50px 50px ; */
  margin-bottom: 30px;
  border: none;
}
.text_input{
  margin-top: 150px;
}
/* 欢迎登录 */
.text_input>span{
  display:block;
  margin-bottom: 30px;
  font-size: 24px;
  color: #e7e7e7;
  margin-top: -70px;
  margin-left: 15px;
}
.wq{
  margin-top: 80px;
  border:0px solid  red;
  height: 50px;
}
.wq div{
  float: left;
  margin-left: 80px;
}
/* 第三方微信qq图 */
.wq img{
 width: 50px;
 height: 50px;
 background-color: #ffffff;
 border-radius:50px 50px 50px 50px ;
}
/* 最后一段协议 协议页面没做*/
.box>div:last-child{
  margin-top: 45px;
  width: 100%;
  color: #ffffff;
  font-size: 12px;
  border: 0px solid red;
  
}
.box>div:last-child>span{
  display:block;
  margin-right:100px;
  border: 0px solid yellow;
  position: relative;
  left: 50px;
  
}
</style>
<script>
export default {
  data() {
    return {
      //用户名、密码的变量
      username: "",
      password: "",
      usernameState:"",
      passwordState:""
    };
  },
  methods: {
    //单击免费注册按钮时校验表单
    handle(){
      //会引发短路现象
      if(this.checkUsername() && this.checkPassword()){
        //现在要发送相关的用户名、密码到WEB服务器
        this.axios.post('/login','username=' + this.username + '&password=' + this.password).then(res=>{
            //代表用户登录成功
            if(res.data.code == 1){
              this.$router.push('/');
            } else {
              //this.username ='';
              //this.password='';
              this.$messagebox('登录提示','用户名或密码错误');
            }
        });
      }
    },
    //检测用户名
    checkUsername() {
      let username = this.username;
      let usernameReg = /^[0-9a-zA-Z]{6,12}$/;
      if (usernameReg.test(username)) {
        this.usernameState='success'
        return true;
      } else {
        // 显示短消息提示框(简捷写法)
        // this.$toast("用户名格式或内容错误");
        // 显示短消息提示框(标准写法)
        this.$toast({
          message: "用户名格式或内容错误",
          position: "middle",
          duration: 5000,
        });
        this.usernameState='error'
        //终止函数的执行
        return false;
      }
    },
    //检测密码
    checkPassword() {
      let password = this.password;
      let passwordReg = /^[0-9A-Za-z\.\-_]{8,15}$/;
      if (passwordReg.test(password)) {
        this.passwordState='success'
        return true;
      } else {
        this.$toast({
          message: "密码错误",
          position: "middle",
          duration: 5000,
        });
        this.passwordState='error'
        return false;
      }
    }
  },
};
</script>