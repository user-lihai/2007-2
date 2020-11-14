<template>
  <!--详情页  -->
  <div>
    <!-- 头部 -->
    <div>
      <mt-header>
        <div slot="left">
          <mt-button icon="back">动态详情</mt-button>
        </div>
        <div slot="right">
          <mt-button icon="more"></mt-button>
        </div>
      </mt-header>
      <div id="details_show">
          <div>
              <div>
                               
              </div>
              <div></div>
          </div>
          <!-- 内容区域 -->
          <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum doloremque voluptatem magnam tempora autem delectus. Quas doloribus temporibus iusto fugiat itaque sequi facere ipsum cupiditate neque. Assumenda et repellat dolor!</p>
          </div>
          <!-- 图片 -->
          <div>
              <div>
                  <div>
                      <img src="../assets/image/carousel/banner1.jpg" alt="">
                  </div>
              </div>
              <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo reprehenderit ipsum quia quos. Ratione sed eos beatae nisi adipisci? Nisi consequuntur iste consectetur nulla, odit ut impedit omnis dolorem!
              </div>
          </div>

      </div>
    </div>
  </div>
</template>
<style scoped>
    #details_show{
        padding: 5px;
        border: 1px solid black;
    }
</style>