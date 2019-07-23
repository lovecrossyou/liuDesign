<template>
  <div class="container">
    <div class="content">
      <head-top textColor="#fff"></head-top>

      <map :center="center" :zoom="7" class="map">
        <marker
          v-for="m in markers"
          :position.sync="m.position"
          :clickable="true"
          :draggable="true"
          @g-click="center=m.position"
          :key="m.id"
        ></marker>
      </map>
    </div>
  </div>
</template>

<script>
import headTop from "@/components/headTop";
import { mapState } from "vuex";
import { load, Map, Marker } from "vue-google-maps";
load("AIzaSyB59tFRny_neBuSc0WWh82a-QtgXkYyetg", "");

export default {
  components: {
    headTop,
    Map,
    Marker
  },
  computed: {
    ...mapState("shop", ["shoplist"])
  },
  data() {
    return {
      center: { lat: 10.0, lng: 10.0 },
      markers: [
        {
          id:'001',
          position: { lat: 10.0, lng: 10.0 }
        },
        {
           id:'002',
          position: { lat: 11.0, lng: 11.0 }
        }
      ]
    };
  },
  methods: {
    goNext() {
      this.$router.push("home");
    }
  },
  created() {
    console.log("shoplist ", this.shoplist);
  },
};
</script>

<style  scoped>
.map{
  width: 600px;
  height: 600px;
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