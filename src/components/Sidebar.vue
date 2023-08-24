<template>
  <el-row class="tac">

    <el-col :span="24">
      <h5 class="mb-2">Custom colors</h5>
      <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="login"
        router="true" text-color="#fff" @open="handleOpen" @close="handleClose">
        <!-- 导航栏加上 router= "true" 就可以了进行导航栏的页面跳转了 -->
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="login">
              <router-link to="/home/login">Login</router-link>
            </el-menu-item>
            <el-menu-item index="Linnite">
              <router-link to="/home/linnite">琳妮特</router-link>
            </el-menu-item>
            <!-- <el-menu-item> 的 index 属性来设置和路由路径对应的路由名称（name），而不是随意设置一个字符串。 -->
            <el-menu-item index="Xiaogong">
              <router-link to="/home/xiaogong">宵宫</router-link>
            </el-menu-item>

          </el-menu-item-group>

        </el-sub-menu>
        <!-- <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon>
            <document />
          </el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting />
          </el-icon>
          <span>Navigator Four</span>
        </el-menu-item> -->
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
