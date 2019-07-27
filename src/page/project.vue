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
        
      >
        <!-- 001-->
        <el-carousel-item>
          <div class="intro-wrapper">
            <img src="../../static/works/left_arrow.jpg" v-if="!isFirstPage" class="leftarrow" @click="goNext"/>
            <img src="../../static/works/right_arrow.jpg" v-if="!isLastPage" class="rightarrow"  @click="goNext"/>
            <div class="works-w">
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/项目_001.jpg" @click="goPage('workdetail')"/>
                <div class="work-desc">第九届厦门金砖会晤--会议中心及会展中心</div>
              </div>
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/项目_002.jpg"  @click="goPage('workdetail')"/>
                <div class="work-desc">第22届APEC（北京APEC）峰会主会场</div>
              </div>
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/项目_003.jpg"  @click="goPage('workdetail')"/>
                <div class="work-desc">雁栖湖国际会展中心</div>
              </div>
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/项目_004.jpg"  @click="goPage('workdetail')"/>
                <div class="work-desc">福州数字会展中心</div>
              </div>
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/项目_005.jpg"  @click="goPage('workdetail')"/>
                <div class="work-desc">安平丝网会展中心</div>
              </div>
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/项目_006.jpg"  @click="goPage('workdetail')"/>
                <div class="work-desc">北京香港马会会所</div>
              </div>
            </div>
          </div>
        </el-carousel-item>

      <!-- 002-->
        <el-carousel-item>
          <div class="intro-wrapper">
             <img src="../../static/works/left_arrow.jpg" v-if="!isFirstPage" class="leftarrow" @click="goNext"/>
            <img src="../../static/works/right_arrow.jpg" v-if="!isLastPage" class="rightarrow"  @click="goNext"/>
            <div class="works-w">
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/项目_001.jpg" />
                <div class="work-desc">第九届厦门金砖会晤--会议中心及会展中心</div>
              </div>
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/项目_002.jpg" />
                <div class="work-desc">第22届APEC（北京APEC）峰会主会场</div>
              </div>
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/项目_003.jpg" />
                <div class="work-desc">雁栖湖国际会展中心</div>
              </div>
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/项目_004.jpg" />
                <div class="work-desc">福州数字会展中心</div>
              </div>
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/项目_005.jpg" />
                <div class="work-desc">安平丝网会展中心</div>
              </div>
              <div class="work-wrapper">
                <img class="intro-person" src="../../static/works/项目_006.jpg" />
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
  computed:{
    isFirstPage(){
      return this.currentIndex === 0;
    },
    isLastPage(){
      return this.currentIndex === 1;
    }
  },
  watch:{
    currentIndex(){
      
    }
  },
  methods: {
    goPage(page){
      this.$router.push(page)
    },
    goNext() {
      const nextIndex = (this.currentIndex + 1)%this.totalCount;
      this.currentIndex = nextIndex;
      this.$refs.carousel.setActiveItem(nextIndex);
      console.log('goNext ', this.currentIndex);
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
      .works-w {
        width: 80%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 4px;
        .intro-person {
          width: 264px;
          height: 264px;
          // margin-right: 25px;
          margin-bottom: 6px;
          background-color: #fff;
        }
        .work-desc{
          text-align: center;
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