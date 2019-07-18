<template>
  <div class="container">
    
    <div class="content">
      <div class="fix-bg">

        </div>
      <head-top></head-top>
      <div class="intro-wrapper">
        <img class="intro-person" src="../../static/home/个人简介_03.jpg" />

        
        <div class="intros">
          <div class="about-name">刘方磊</div>
          <div class="about_introduce_list">
            <div>北京市建筑设计研究院有限公司(BIAD)</div>
            <div>公司副总建筑师</div>
            <div>教授级高级建筑师</div>
            <div>国家一级注册建筑师</div>
            <div>北京APEC峰会主会场总建筑师</div>
            <div>一带一路高峰论坛会场总建筑师</div>
            <div>杭州G20峰会主会场总建筑师</div>
            <div>杭州G20峰会室内装修总设计师</div>
            <div>北京雁栖湖国际会展中心总建筑师</div>
            <div>厦门金砖会晤主会场总建筑师</div>
            <div>福州数字中国会展中心总建筑师</div>
            <div>2018北京市国资委支持刘方磊‐国际峰会建筑创作工作室</div>
          </div>

          <div class="next-btn">
            <div class="next">NEXT</div>
            <img src="../../static/home/right_btn.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headTop from "@/components/headTop";

export default {
  components: {
    headTop
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    width: 1164px;
    padding-top: 40px;
    position: relative;

    .fix-bg{
        position: absolute;
        background-color: #fbfbfb;
        left: 140px;
        top: 200px;
        right: 0px;
        height: 600px;
        z-index: -1;
      }
    .intro-wrapper {
      display: flex;
      flex-direction: row;

      .intro-person {
        width: 542px;
        height: 675px;
      }

      
    }
    .intros {
      display: flex;
      flex: 1;
      flex-direction: column;
      position: relative;
      .about-name {
        padding-top: 20px;
        padding-left: 50px;
        padding-bottom: 20px;
        box-sizing: border-box;
        font-size: 40px;
        background: #fff;
      }
      .next-btn{
        position: absolute;
        right: 40px;
        top: 25%;

        display: flex;
        flex-direction: row;
        align-items: center;
        height: 80px;
        .next{
          margin-right: 10px;
        }
      }
    }

    .about_introduce_list {
      line-height: 30px;
      display: flex;
      font-size: 14px;
      // background: #fbfbfb;
      flex-direction: column;
      padding: 20px 50px;
    }
  }
}
</style>