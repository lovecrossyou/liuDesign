<template>
  <div class="container">
    <div class="content">
      <head-top textColor="#fff"></head-top>
    </div>
  </div>
</template>

<script>
import headTop from "@/components/headTop";
import { mapState } from 'vuex';

export default {
  components: {
    headTop
  },
  computed:{
    ...mapState('shop',['shoplist'])
  },
  methods: {
    goNext() {
      this.$router.push("home");
    }
  },
  created(){
    console.log('shoplist ', this.shoplist);
  }
};
</script>

<style  scoped>
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