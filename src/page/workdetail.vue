<template>
  <div class="container">
    <div class="content">
      <head-top white></head-top>
      <div class="main-content">
        <div class="top">
          <img class="main-pic" src="../../static/workdetail/项目详情_03.jpg" alt srcset />
          <div class="top_right">
            <div>第22届APEC（北京APEC）峰会主会场北京怀柔雁栖湖国际会展中心</div>
            <div class="guimo">建设规模</div>
            <div class="line"></div>
            <div class="mainji">4.2万m</div>

            <div class="guimo">项目获奖</div>
            <div class="line"></div>
            <div class="huojiang-text">2015年全国优秀工程勘察设计行业一等奖</div>
            <div class="huojiang-text">2015年北京市18届优秀工程一等奖</div>
            <div class="huojiang-text">第十三届中国土木工程詹天佑奖</div>
            <div class="huojiang-text">2015中国建设工程鲁班奖</div>
            <div class="huojiang-text">2016年全国质量卓越项目奖</div>
            <div class="huojiang-text">2014年中国设计红星奖特别奖</div>

            <div class="guimo">项目获奖</div>
            <div class="line"></div>
            <div class="huojiang-text">汉唐飞燕 鸿雁展翼</div>
          </div>
        </div>

        <div class="pic-list">
          <img class="main-pic-w" src="../../static/workdetail/项目详情_07.jpg" alt srcset />
          <img class="main-pic-w" src="../../static/workdetail/项目详情_10.jpg" alt srcset />
          <img class="main-pic-w" src="../../static/workdetail/项目详情_14.jpg" alt srcset />
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
  data() {
    return {
      totalCount: 3,
      currentIndex: 0
    };
  },
  methods: {}
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

    .main-content {
      width: 100%;
      background-color: #fbfbfb;
      height: 600px;

      .top {
        display: flex;
        flex-direction: row;
        .top_left {
        }
        .main-pic {
          width: 800px;
          height: 600px;
        }
        .top_right {
          padding: 20px;
          .guimo {
            margin-top: 20px;
          }

          .line {
            width: 40px;
            height: 1px;
            background-color: #999;
            margin-top: 20px;
            margin-bottom: 10px;
          }

          .mainji {
            font-size: 12px;
            color: #999;
          }
          .huojiang-text {
            font-size: 12px;
            color: #999;
            padding: 5px 0;
            box-sizing: border-box;
          }
        }
      }

      .pic-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          .main-pic-w {
            width: 100%;
            margin-bottom: 10px;
          }
        }
    }
  }
}
</style>