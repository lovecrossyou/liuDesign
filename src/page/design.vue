<template>
  <div class="container">
    <head-top textColor="#fff"></head-top>
    <div class="content">
      <div class="main">
        <div class="next-btn" @click="goNext">
          <div class="next">NEXT</div>
          <img src="../../static/home/right_btn.png" alt />
        </div>

        <div class="desc-wrapper">
          <div class="desc-text">北京怀柔雁西湖国际会议中心</div>
          <div class="line"></div>
          <div  class="desc-text">汉唐飞扬 鸿雁展翼</div>
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
  },
  methods: {
    goNext() {
      this.$router.push("home");
    }
  }
};
</script>

<style  scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../../static/index/首页_02.png") no-repeat fixed top;
  background-size: 100% 100%;
  /* position: relative; */
}
.content {
  width: 100%;
  height: 700px;
  box-sizing: border-box;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.desc-wrapper {
  position: absolute;
  bottom: 60px;
  left: 0px;
  width: 280px;
  height: 80px;
  background-color: rgb(18,18,18);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0px;
  box-sizing: border-box;
}

.main {
  width: 85%;
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  background: url('../../static/design/设计灵感_03.jpg')no-repeat ;
  background-size: 100% 100%;
}

.line{
  height: 4px;
  background-color: #ffffff;
  width: 25px;
}

.next-btn {
  position: absolute;
  right: 40px;
  top: 40%;

  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
}

.next {
  margin-right: 10px;
}

.desc-text{
  color: #ffffff;
  font-size: 14px;
}

</style>