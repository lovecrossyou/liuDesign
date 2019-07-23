<template>
  <div class="container">
    <div class="content">
      <head-top white></head-top>
      
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