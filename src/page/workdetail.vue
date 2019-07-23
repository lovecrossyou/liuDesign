<template>
  <div class="container">
    <div class="content">
      <head-top white></head-top>
      <div class="main-content">
        <div class="top">
          <div class="top_left">
            
          </div>
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
  methods: {
    
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
    
    .main-content{
      width: 100%;
      background-color: #fbfbfb;
      height: 600px;
    }
  }
}
</style>