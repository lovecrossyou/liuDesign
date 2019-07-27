<template>
  <div class="container">
    <div class="content">
      <div class="title">LFL</div>

      <div class="p-wrapper">
        <div class="p-item">项目 ARTICLE</div>
        <div class="p-item">关于 ABOUT</div>
        <div class="p-item">设计理念 DESIGN CONCEPT</div>
        <div class="p-item">新闻 NEWS</div>
        <div class="p-item">联系 CONATCT</div>
      </div>

      <div class="intros">
        <div class="next-btn" @click="goNext">
          <div class="next">NEXT</div>
          <img src="../../static/home/right_btn.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  padding: 60px 80px;
}
.bg {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: -1;
}

.title-wrapper {
  /* height: 50px; */
}

.title {
  font-size: 40px;
  font-weight: bold;
  color: #ffffff;
}

.p-wrapper {
  margin-top: 60px;
}

.p-item {
  padding: 30px 0px;
  color: #ffffff;
  font-size: 14px;
  font-weight: blod;
}

.intros {
  display: flex;
  /* flex: 1; */
  flex-direction: column;
  position: absolute;
  right: 0px;
  top: 45%;
}

.next-btn {
  position: absolute;
  right: 40px;
  top: 25%;

  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
}
.next {
  margin-right: 10px;
}

.about-name {
  padding-top: 20px;
  padding-left: 50px;
  padding-bottom: 20px;
  box-sizing: border-box;
  font-size: 40px;
  background: #fff;
}
</style>