<template>
  <div class="container">
    <div class="content">
      <div class="fix-bg"></div>
      <head-top ></head-top>

      <el-carousel :autoplay="false" :interval="4000" height="800px" arrow="never" ref="carousel" :change="change">
        <!-- 001 -->
        <el-carousel-item>
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
              <div class="next-btn" @click="goNext">
                <div class="next">NEXT</div>
                <img src="../../static/home/right_btn.png" alt />
              </div>
            </div>
          </div>
        </el-carousel-item>
        <!-- 002 作品集 -->
        <el-carousel-item>
          <div>
            <div class="product-title">代表作品及获奖情况</div>
            <div class="intro-wrapper">
              <div class="works">
                <img class="intro-person" src="../../static/home/个人简介3_03.jpg" />
                <img class="intro-person" src="../../static/home/个人简介3_05.jpg" />
                <img class="intro-person" src="../../static/home/个人简介3_09.jpg" />
                <img class="intro-person" src="../../static/home/个人简介3_10.jpg" />
              </div>
              <div class="intros">
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
                <div class="next-btn" @click="goNext">
                  <div class="next">NEXT</div>
                  <img src="../../static/home/right_btn.png" alt />
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
         <!-- 003 作品集 -->
          <el-carousel-item>
          <div>
            <div class="intro-wrapper">
              <div class="works-w">
                <img class="intro-person" src="../../static/home/个人简介4_03.jpg" />
                <img class="intro-person" src="../../static/home/个人简介4_05.jpg" />
                <img class="intro-person" src="../../static/home/个人简介4_07.jpg" />
                <img class="intro-person" src="../../static/home/个人简介4_12.jpg" />
                <img class="intro-person" src="../../static/home/个人简介4_13.jpg" />
                <img class="intro-person" src="../../static/home/个人简介4_14.jpg" />
                 <img class="intro-person" src="../../static/home/个人简介4_18.jpg" />
                <img class="intro-person" src="../../static/home/个人简介4_19.jpg" />
                <img class="intro-person" src="../../static/home/个人简介4_20.png" />
              </div>
              <div class="intros">
                <div class="next-btn" @click="goNext">
                  <div class="next">NEXT</div>
                  <img src="../../static/home/right_btn.png" alt />
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import headTop from "@/components/headTop";

export default {
  components: {
    headTop
  },
  data() {
    return {
      totalCount: 3,
      currentIndex: 0
    };
  },
  methods: {
    goNext() {
      const nextIndex = (this.currentIndex + 1) % this.totalCount;
      this.$refs.carousel.setActiveItem(nextIndex);
      this.currentIndex = nextIndex;
    },
    change(index) {
      this.currentIndex = index;
    }
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

    position: relative;

    .fix-bg {
      position: absolute;
      background-color: #fbfbfb;
      left: 140px;
      top: 200px;
      right: 0px;
      height: 600px;
      z-index: -1;
    }

    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 600px;
      margin: 0;
    }

    .product-title {
      font-size: 24px;
      padding-bottom: 20px;
      box-sizing: border-box;
    }



    //  002 -- 作品集
    .intro-wrapper {
      display: flex;
      flex-direction: row;
      width: 100%;

      .works {
        width: 542px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        border:1px solid #e1e11e;
        padding: 4px;
        .intro-person {
          width: 264px;
          height: 200px;
          margin-bottom: 6px;
        }
      }
      .intro-person {
        width: 542px;
        height: 675px;
      }
    }

    .intro-wrapper {
      display: flex;
      flex-direction: row;
      width: 100%;

      .works {
        width: 542px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        border:1px solid #e1e11e;
        padding: 4px;
        .intro-person {
          width: 264px;
          height: 200px;
          margin-bottom: 6px;
        }
      }
      .intro-person {
        width: 542px;
        height: 675px;
      }
    }

    // 003 作品集
    .intro-wrapper {
      display: flex;
      flex-direction: row;
      width: 100%;
      background-color: #fbfbfb;
      .works-w {
        width: 800px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        // border:1px solid #e11e28;
        padding: 4px;
        .intro-person {
          width: 264px;
          height: 180px;
          margin-bottom: 6px;
          background-color: #fff;
        }
      }
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
      .next-btn {
        position: absolute;
        right: 40px;
        top: 25%;

        display: flex;
        flex-direction: row;
        align-items: center;
        height: 80px;
        .next {
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