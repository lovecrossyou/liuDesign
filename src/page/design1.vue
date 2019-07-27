<template>
  <div class="container">
    <head-top textColor="#fff"></head-top>
    <div class="content">
      <div class="main">
        <div class="next-btn" @click="goNext">
          <div class="next">NEXT</div>
          <img src="../../static/home/right_btn.png" alt />
        </div>
<div class="bg-box"></div>
        <div class="poem-wrapper">
          
          <div class="poem-item">银河在望,天汉未央;</div>
          <div>两汉悠长,国士无双;</div>
          <div>回顾千年,中华脊梁;</div>
          <div>心怀高远,礼仪兴邦;</div>
          <div>上国衣冠,广袖博带;</div>
          <div>清淡平和,宽厚仁爱;</div>
          <div>兴于两汉,始于炎黄;</div>
          <div>上衣下裳,其色玄黄</div>
          <div>衣正裳间;右衽领交,</div>
          <div>而今吟唱,其志飞扬,</div>
          <div>汉服抒怀,国运辉煌.</div>
        </div>

        <div class="desc-wrapper">
          <div class="desc-text">汉服之赋 • 2019-夏</div>
          <div class="line"></div>
          <div class="desc-text">刘方磊</div>
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
  background-color: rgb(18, 18, 18);

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

  background: #ffffff;
  background-size: 100% 100%;
}

.line {
  height: 2px;
  background-color: #ffffff;
  width: 40px;
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

.poem-wrapper{
  padding-top: 60px;
  box-sizing: border-box;

  position: absolute;
  /* background-color: #e1e1e1; */
  padding: 10px 50px;
  box-sizing: border-box;

  left: 35%;
  top:30px;
}

.bg-box{
  /* position: absolute; */
  background-color: #F8F8F8;
  /* left: 50%; */
  /* z-index: 1; */
  width: 60%;
  height: 60%;
  margin-top: 90px;
}
.poem-wrapper >div{
  font-size: 30px;
  font-weight: bold;
  color: #333;

}



.next {
  margin-right: 10px;
}

.desc-text {
  color: #ffffff;
  font-size: 14px;
}
</style>