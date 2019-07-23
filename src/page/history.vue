<template>
  <div class="container">
    <div class="content">
      <head-top textColor="#fff"></head-top>
      <div class="amap-wrapper">
      <el-amap  class="amap-box" :vid="'amap-vue'" mapStyle="light"  isHotspot="true" :zoom="zoom"></el-amap>
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
    return {
      // zooms:[3,18],
      zoom:3
    };
  },
  methods: {
    goNext() {
      this.$router.push("home");
    }
  },
  created() {
    window.title = "地图";
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