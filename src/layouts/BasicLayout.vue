<template>
  <div class="layout">
    <div class="topbar">
      <Topbar />
    </div>
    <div class="sidebar">
      <Sidebar />
    </div>
    <!-- 需要这样加上router-view要不然就看不到别的页面的东西了 -->
    <!-- 它将根据路由的变化来显示不同的页面内容。确保你的路由配置正确，对应的组件会在这个位置被渲染出来。 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts" name="BasicLayout">
import { ref } from "vue";
import Sidebar from "@/components/Sidebar.vue";
import Topbar from "@/components/Topbar.vue";

const isCollapsed = ref(false); // 侧边栏折叠状态

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100%;
  background-color: #2f3447;
  color: #fff;
  overflow-y: auto;
  transition: width 0.3s;
  z-index: 1000;
}

.el-menu-vertical {
  background-color: transparent;
}

.collapse-button {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #001529;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.collapse-button:hover {
  background-color: #1890ff;
}

.collapse-button .el-icon-menu {
  font-size: 20px;
}

.collapse-button .el-icon-close {
  font-size: 18px;
  transform: rotate(180deg);
}
</style>
