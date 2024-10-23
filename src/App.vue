<template>
  <div class='common-layout'>
    <el-container class='box'>
      <!-- 侧边栏 -->
      <el-aside class='el-aside'>
        <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">

            <el-menu-item index="1">
              <router-link to="/data-import" class="menu-span">数据导入</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/user-profile" class="menu-span">用户画像</router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>

      <el-container>
        <!-- 顶部标题 -->
        <el-header class='header'>
          <h1 class='logoBox'>农网生产负荷行业用户画像及分析工具</h1>
        </el-header>
        <el-main class='el-main'>
          <router-view></router-view> <!-- 显示路由对应的组件 -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const handleOpen = () => {};
const handleClose = () => {};
</script>

<style scoped>
.box {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0%;
}
.header {
  height: 70px;
  background-color: #545c64;
}
.logoBox {
  position: absolute;
  top: 0;
  left: 18px;
  font-family: 'Arial', sans-serif;
  font-size: 22px;
  color: #fff;
  align-items: center;
}
.menu-span {
  font-family: inherit;
  font-weight: inherit;
  font-size: 18px;
}
.el-header .el-menu {
  border-bottom: none;
}
.el-aside .el-menu {
  border-right: none;
}
.el-main {
  background-color: #e9eef3;
}
.el-aside {
  width: 9%;
  height: 100%;
  background: #545c64;
  padding-top: 70px;
}
</style>
