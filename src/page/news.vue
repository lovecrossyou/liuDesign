<template>
  <div class="container">
    <div class="content">
      <head-top white></head-top>
      <el-carousel
        :autoplay="false"
        :interval="4000"
        height="600px"
        arrow="never"
        ref="carousel"
        indicator-position="none"
        :change="change"
      >
        <!-- 001-->
        <el-carousel-item>
          <div class="intro-wrapper">
            <img src="../../static/works/left_arrow.jpg" class="leftarrow" @click="goNext"/>
            <img src="../../static/works/right_arrow.jpg" class="rightarrow"  @click="goNext"/>
            <div class="news-w">
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/新闻_03.jpg" />
                <div class="news-time-wrapper">
                  <div class="news-year">2019</div>
                  <div class="news-date">06/02</div>
                </div>
                <div class="work-desc">中央一套（CCTV综合频道）20170603《开讲啦》</div>
              </div>
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/新闻_03.jpg" />
                <div class="news-time-wrapper">
                  <div class="news-year">2019</div>
                  <div class="news-date">06/02</div>
                </div>
                <div class="work-desc">第22届APEC（北京APEC）峰会主会场</div>
              </div>
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/新闻_03.jpg" />
                <div class="news-time-wrapper">
                  <div class="news-year">2019</div>
                  <div class="news-date">06/02</div>
                </div>
                <div class="work-desc">雁栖湖国际会展中心</div>
              </div>
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/新闻_03.jpg" />
                <div class="news-time-wrapper">
                  <div class="news-year">2019</div>
                  <div class="news-date">06/02</div>
                </div>
                <div class="work-desc">福州数字会展中心</div>
              </div>
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/新闻_03.jpg" />
                <div class="news-time-wrapper">
                  <div class="news-year">2019</div>
                  <div class="news-date">06/02</div>
                </div>
                <div class="work-desc">安平丝网会展中心</div>
              </div>
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/新闻_03.jpg" />
                <div class="news-time-wrapper">
                  <div class="news-year">2019</div>
                  <div class="news-date">06/02</div>
                </div>
                <div class="work-desc">北京香港马会会所</div>
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
    height: 600px;
    position: relative;

    // 003 作品集
    .intro-wrapper {
      display: flex;
      flex-direction: row;
      width: 100%;
      background-color: #fbfbfb;
      justify-content: center;
      position: relative;

      .leftarrow{
        position: absolute;
        left: 0;
        top: 45%;

        width:30px;
        height: 60px;
      }

      .rightarrow{
        position: absolute;
        right: 0;
        top: 45%;

        width:30px;
        height: 60px;
      }
      .news-w {
        width: 80%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 4px;
        .intro-person {
          width: 264px;
          height: 164px;
          margin-bottom: 6px;
          background-color: #fff;
        }
        .news-time-wrapper{
            display: flex;
            flex-direction: row;align-items: center;
            height: 30px;
            .news-year{
              font-size: 8px;
            }

            .news-date{
              margin-left: 10px;
              font-size: 16px;
            }
          }
        .work-desc{
          // text-align: center;
          width: 100%;
          font-size: 8px;
          height: 30px;
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