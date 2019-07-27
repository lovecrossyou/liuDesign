<template>
  <div class="container">
    <div class="content">
      <head-top white></head-top>
      <baidu-map
        scroll-wheel-zoom
        :mapStyle="mapStyle"
        class="bm-view"
        :zoom="zoom"
        @ready="handler"
        center="北京"
      >
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <!-- 版权信息 -->
        <!-- <bm-copyright
          anchor="BMAP_ANCHOR_TOP_RIGHT"
          :copyright="[{id: 1, content: 'LFL', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<div></div>'}]"
        ></bm-copyright>-->
        <!-- 显示标注 -->
        <bm-label
          @click="click"
          content
          :position="{lng: 116.404, lat: 39.915}"
          :labelStyle="{backgroundColor:'#666666',color: '#666666', fontSize : '24px',width:'6px',height:'6px',borderRadius: '50%'}"
          title="Hover me"
        />
        <bm-label
          @click="click"
          content
          :position="{lng: 120.404, lat: 39.915}"
          :labelStyle="{backgroundColor:'#666666',color: '#666666', fontSize : '24px',width:'6px',height:'6px',borderRadius: '50%'}"
          title="Hover me"
        />

        <bm-label
          @click="click"
          content
          :position="{lng: 121.404, lat: 39.915}"
          :labelStyle="{backgroundColor:'#666666',color: '#666666', fontSize : '24px',width:'6px',height:'6px',borderRadius: '50%'}"
          title="Hover me"
        />

        <bm-label
          @click="click"
          content
          :position="{lng: 32.404, lat: 39.915}"
          :labelStyle="{backgroundColor:'#666666',color: '#666666', fontSize : '24px',width:'6px',height:'6px',borderRadius: '50%'}"
          title="Hover me"
        />

        <bm-label
          @click="click"
          content
          :position="{lng: 58.404, lat: 39.915}"
          :labelStyle="{backgroundColor:'#666666',color: '#666666', fontSize : '24px',width:'6px',height:'6px',borderRadius: '50%'}"
          title="Hover me"
        />

        <bm-label
          @click="click"
          content
          :position="{lng: 86.404, lat: 39.915}"
          :labelStyle="{backgroundColor:'#666666',color: '#666666', fontSize : '24px',width:'6px',height:'6px',borderRadius: '50%'}"
          title="Hover me"
        />

        <bm-label
          @click="click"
          content
          :position="{lng: 86.404, lat: 60.915}"
          :labelStyle="{backgroundColor:'#666666',color: '#666666', fontSize : '24px',width:'6px',height:'6px',borderRadius: '50%'}"
          title="Hover me"
        />

        <bm-label
          @click="click"
          content
          :position="{lng: 70.404, lat: 60.915}"
          :labelStyle="{backgroundColor:'#666666',color: '#666666', fontSize : '24px',width:'6px',height:'6px',borderRadius: '50%'}"
          title="Hover me"
        />

        <bm-label
          @click="click"
          content
          :position="{lng: 100.404, lat: 39.915}"
          :labelStyle="{backgroundColor:'#666666',color: '#666666', fontSize : '24px',width:'6px',height:'6px',borderRadius: '50%'}"
          title="Hover me"
        />

        <!-- 弹出层 -->
        <bm-info-window
          :position="winPosition"
          title
          :show="infoWindow.show"
          @close="infoWindowClose"
          @open="infoWindowOpen"
        >
          <img style="width:100%;" src="http://qnimage.xiteng.com/%E9%A1%B9%E7%9B%AE_07.jpg" alt />
          <div class="designer-wrapper">
            <div class="designer">北京雁栖湖国际会展中心</div>
            <div class="designer">设计师 : 刘方磊</div>
            <div class="designer-time">设计时间 : 2019-07-10</div>
          </div>
        </bm-info-window>
      </baidu-map>

      <div class="fix-view">
        <div class=" menu-item">历史遗迹</div>
        <div class="menu-item-active menu-item">现代建筑</div>
        <div class=" menu-item">流行景点</div>
        <div class=" menu-item">神秘探索</div>

      </div>
    </div>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import headTop from "@/components/headTop";
import { fail } from "assert";

export default {
  data() {
    return {
      circlePath: {
        center: {
          lng: 116.404,
          lat: 39.915
        },
        radius: 80
      },
      center: {
        lng: 0,
        lat: 0
      },
      zoom: 3,
      infoWindow: {
        show: false,
        contents: "Lorem ipsum dolor sit amet,"
      },
      mapStyle: {
        styleJson: [
          {
            featureType: "all",
            elementType: "all",
            stylers: {
              lightness: 34,
              saturation: -74
            }
          }
        ]
      },
      winPosition: {
        lng: 116.404,
        lat: 39.915
      }
    };
  },
  methods: {
    updateCirclePath(e) {
      // this.circlePath.center = e.target.getCenter();
      // this.circlePath.radius = e.target.getRadius();
    },
    handler({ BMap, map }) {
      // console.log(BMap, map);
      // this.center.lng = 116.404;
      // this.center.lat = 39.915;
      // this.zoom = 15;
    },
    infoWindowClose(e) {
      this.infoWindow.show = false;
    },
    infoWindowOpen(e) {
      this.infoWindow.show = true;
    },
    clear() {
      this.infoWindow.contents = "";
    },
    click({ type, target, point, pixel }) {
      this.winPosition = point;
      this.infoWindow.show = true;
    }
  },
  components: {
    BaiduMap,
    headTop
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.content {
  width: 100%;
  height: 100%;
  position: relative;
}

.bm-view {
  width: 100%;
  height: 100%;
}

.prompt {
  width: 100px;
  height: 200px;
  background-color: beige;
}

.fix-view {
  position: fixed;
  top: 110px;
  left: 50%;

  width: 260px;
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  /* background-color: #ffffff; */
}

.menu-item{
  height: 30px;
  border: solid 1px #333;
  font-size: 12px;
  color: #333;
  text-align: center;
  line-height: 30px;
  font-weight: bold;

  padding: 0px 4px;
  box-sizing: border-box;
  
}

.menu-item-active{
  background-color: #333;
  color: #ffffff;
}

.anchorBL {
  display: none;
}

.designer-wrapper {
  margin-top: 4px;
}
.designer {
  font-size: 10px;
}

.designer-time {
  font-size: 8px;
  color: gray;
  padding-bottom: 2px;
  box-sizing: border-box;
}
</style>
