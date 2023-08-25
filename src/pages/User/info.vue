<template>
  <div class="view-my">
    <div class="title">基本信息</div>

    <el-form label-width="100px" :model="form" :disabled="loading">
      <!-- todo:头像，头像先不做，之后在做 -->
      <!-- <el-form-item label="头像">
        <cl-upload is-space v-model="form.head_img" />
      </el-form-item> -->

      <el-form-item label="昵称">
        <el-input v-model="form.nick_name" placeholder="请填写昵称" />
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" :disabled="loading" @click="save">保存修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" name="my-info" setup>
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
// import { useBase } from "/$/base";
// import { useCool } from "/@/cool";
import { cloneDeep } from "lodash-es";

// const { service } = useCool();
// const { user } = useBase();

// 表单数据
// const form = reactive<any>(cloneDeep(user.info));
const form = reactive<any>(cloneDeep({}));

// 保存状态
const loading = ref(false);

// 保存
async function save() {
  const { head_img, nick_name, password } = form;

  loading.value = true;

  // await service.base.comm
  // 	.personUpdate({
  // 		head_img,
  // 		nick_name,
  // 		password
  // 	})
  // 	.then(() => {
  // 		form.password = "";
  // 		ElMessage.success("修改成功");
  // 		user.get();
  // 	})
  // 	.catch((err) => {
  // 		ElMessage.error(err.message);
  // 	});

  loading.value = false;
}
</script>

<style lang="scss">
.view-my {
  background-color: var(--el-bg-color);
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  .el-form {
    width: 400px;
    max-width: 100%;
  }

  .title {
    margin-bottom: 30px;
    font-size: 15px;
  }
}
</style>
