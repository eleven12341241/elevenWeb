<template>
  <div class="topbar">
    <div class="user-info">
      <el-dropdown trigger="click" hide-on-click @command="onCommand" class="user-dropdown">
        <span class="el-dropdown-link">
          <span class="name">管理员</span>
          <!-- <cl-avatar :size="32" :src="user.info.head_img" /> -->
        </span>

        <template #dropdown>
          <el-dropdown-menu class="user-dropdown-menu">
            <el-dropdown-item command="my">
              <el-icon>
                <UserFilled />
              </el-icon>
              <span>个人中心</span>
            </el-dropdown-item>
            <el-dropdown-item command="exit">
              <el-icon>
                <RemoveFilled />
              </el-icon>
              <span>退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();


const onCommand = (name: string) => {
  switch (name) {
    case "my":
      router.push("/home/info");
      break;
    case "exit":
      // todo: 退出登录
      router.push("/login");
      // await service.base.comm.logout();
      // user.logout();
      break;
  }
};
</script>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #ece4e4;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-dropdown {
  position: relative;
  margin-right: 20px;
}

.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.name {
  margin-right: 20px;
}

.user-dropdown-menu {
  /* top: 35px; */
  right: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
