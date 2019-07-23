<template>
  <div class="container">
    <div class="content">
      <head-top textColor="#fff"></head-top>
      <div class="amap-wrapper">
      <el-amap
       :center="center"
        class="amap-box"
        :vid="'amap-vue'"
        mapStyle="light"
        :zoom="zoom">
        </el-amap>
    </div>
    </div>
  </div>
</template>

<script>
import headTop from "@/components/headTop";
import { mapState } from "vuex";
import AMap from "@/utils/AMap";

export default {
  components: {
    headTop,
  },
  computed: {
    ...mapState("shop", ["shoplist"])
  },
  data() {
    const center = [121.59996, 31.197646];
    return {
      zoom:3,
      center,
      markers:[]
    };
  },
  methods: {
    goNext() {
      this.$router.push("home");
    }
  },
  created() {
    window.title = "地图";

    let self = this;
        let markers = [];
        let index = 0;

        let basePosition = [121.59996, 31.197646];
        let num = 10;

        for (let i = 0 ; i < num ; i++) {
          markers.push({
            position: [basePosition[0], basePosition[1] + i * 0.03],
            content: `content ${i}`
          });
        }
        this.markers = markers;
      }
};
</script>

<style  scoped>

.amap-wrapper {
  width: 100%;
  height: 100%;
}
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
}
</style>