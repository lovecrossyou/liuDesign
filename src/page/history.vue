<template>
  <baidu-map :mapStyle="mapStyle" class="bm-view" :zoom="zoom" @ready="handler" center="北京">
    <bm-copyright
      anchor="BMAP_ANCHOR_TOP_RIGHT"
      :copyright="[{id: 1, content: 'LFL', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a></a>'}]"
    ></bm-copyright>
    <!-- 显示标注 -->
    <bm-label
      @click="click"
      content
      :position="{lng: 116.404, lat: 39.915}"
      :labelStyle="{backgroundColor:'#666666',color: '#666666', fontSize : '24px',width:'10px',height:'10px',borderRadius: '50%'}"
      title="Hover me"
    />
    <bm-label
      @click="click"
      content
      :position="{lng: 86.404, lat: 39.915}"
      :labelStyle="{backgroundColor:'#666666',color: '#666666', fontSize : '24px',width:'10px',height:'10px',borderRadius: '50%'}"
      title="Hover me"
    />
    <bm-label
      @click="click"
      content
      :position="{lng: 100.404, lat: 39.915}"
      :labelStyle="{backgroundColor:'#666666',color: '#666666', fontSize : '24px',width:'10px',height:'10px',borderRadius: '50%'}"
      title="Hover me"
    />

    <!-- 弹出层 -->
    <bm-info-window
      :position="winPosition"
      title="汉唐飞扬"
      :show="infoWindow.show"
      @close="infoWindowClose"
      @open="infoWindowOpen"
    >
      <img
        style="width:100%;"
        src="http://qnimage.xiteng.com/%E9%A1%B9%E7%9B%AE%E8%AF%A6%E6%83%85_14.jpg"
        alt
      />
    </bm-info-window>
  </baidu-map>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
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
      center: { lng: 0, lat: 0 },
      zoom: 3,
      infoWindow: {
        show: true,
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
      this.circlePath.center = e.target.getCenter();
      this.circlePath.radius = e.target.getRadius();
    },
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
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
    BaiduMap
  }
};
</script>

<style>
.bm-view {
  width: 100%;
  height: 100%;
}

.prompt {
  width: 100px;
  height: 200px;
  background-color: beige;
}
</style>