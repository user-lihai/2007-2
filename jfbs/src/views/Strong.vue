<template>
  
</template>

<style>
/* 轮播图 */
.swipe{
  width: 100%;
  height: 100%;
}
/* 如果需要修改样式 请找到要修改元素 把边框加上 修改完再删除
 所有的 宽度不要改
 */
.box {
  border: 1px solid red;
  height: 120px;
}
.box > .head > .head_img {
  float: left;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  margin: 10px 0px 0 5px;
}
.box > .head > .head_img > img:first-child {
  width: 100px;
  height: 100px;
}
/* 宽度不能改 因为是浮动 改宽度还被挤下去  图 和文字 一座一右*/
.box > .head > .head_text {
  width: 285px;
  height: auto;
  border: 1px solid yellow;
  float: left;
  margin: 5px 0 0 3px;
  color: #cccccc;
}
.box > .head > .head_text > span:first-child {
  display: inline-block;
  border: 1px solid black;
  margin: 2px 8px 0px 0px;
  font-weight: bold;
  color: #000000;
}
.box > .head > .head_text > p:nth-of-type(1) {
  display: block;
  border: 1px solid black;

  margin: 15px 0px 5px 0px;
  font-size: 14px;
  width: 200px;
}
/* 规模  教练数  客户 */
.box > .head > .head_text > p:nth-of-type(1) > span {
  margin: 0px 5px 0px 5px;
  border: 1px solid black;
}
/* 简介   文字用了省略号*/
.box > .head > .head_text > p:nth-of-type(2) {
  margin: 10px 0px 0px 5px;
  border: 1px solid black;
  /* height: 96px; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
}
/* 详细地址 */
.box > .head > .head_text > :last-child {
  display: block;
  margin: 10px 0px 0px 5px;
  border: 1px solid black;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
}
</style>
<script>
export default {
  data() {},
  methods: {},
};
</script>