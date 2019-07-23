<template>
  <div class="container_top">
    <div class="header_container_top">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">
          <div class="main-title">刘方磊工作室</div>
        </el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="tabs-wrapper">
         <div
          class="tab-item"
          v-bind:style="{color:textColor}"
          v-bind:class="{ active: activeTabIndex===1 }"
          @click="goPage('/design',1)"
        >设计理念</div>
        <div
          class="tab-item"
          v-bind:style="{color:textColor}"
          v-bind:class="{ active: activeTabIndex===0 }"
          @click="goPage('/home',0)"
        >项目</div>
        <div
          class="tab-item"
          v-bind:style="{color:textColor}"
          v-bind:class="{ active: activeTabIndex===2 }"
          @click="goPage('/news',2)"
        >新闻</div>
        <div
          class="tab-item"
          v-bind:style="{color:textColor}"
          v-bind:class="{ active: activeTabIndex===3 }"
          @click="goPage('/history',3)"
        >文明印记</div>
        <div
          class="tab-item"
          v-bind:style="{color:textColor}"
          v-bind:class="{ active: activeTabIndex===4 }"
          @click="goPage('/about',4)"
        >关于</div>

        <div class="bot-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { singout } from "@/api/getData";
import { baseImgPath } from "@/config/env";
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  props: ["textColor"],
  data() {
    return {
      baseImgPath
    };
  },
  created() {
    if (!this.adminInfo || !this.adminInfo.id) {
      this.getAdminData();
    }
  },
  computed: {
    ...mapState(["adminInfo", "activeTabIndex"])
  },
  mounted() {
    console.log("activeIndex ", this.activeIndex);
  },
  methods: {
    ...mapActions(["getAdminData"]),
    ...mapMutations(["setTabIndex"]),
    goPage(page, index) {
      this.setTabIndex(index);
      this.$router.push(page);
    },
    async handleCommand(command) {
      if (command == "home") {
        this.$router.push("/manage");
      } else if (command == "signout") {
        const res = await singout();
        if (res.status == 1) {
          this.$message({
            type: "success",
            message: "退出成功"
          });
          this.$router.push("/");
        } else {
          this.$message({
            type: "error",
            message: res.message
          });
        }
      }
    }
  }
};
</script>

<style lang="less">
@import "../style/mixin";

.container_top {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  // background-color: #ffffff;

  padding: 10px 180px 40px 180px;
  box-sizing: border-box;

  .header_container_top {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;

    .main-title {
      font-size: 30px;
      color: #ffffff;
      font-weight: bold;
    }

    .tabs-wrapper {
      display: flex;
      flex-direction: row;
      padding-right: 60px;
      box-sizing: border-box;
      .tab-item {
        padding: 20px 15px;
        color: #333;
        font-weight: bold;
      }
    }
  }
}

.active {
  border-bottom: solid 3px #333;
  // width: 40px;
}

.avator {
  .wh(36px, 36px);
  border-radius: 50%;
  margin-right: 37px;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
