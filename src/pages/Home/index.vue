<template>
  <div>
    <h1>欢迎来到首页！</h1>
    <p>这是我们的新网站，希望你喜欢。</p>
    <el-button @click="jumpTo(`\about`)">跳转到about</el-button>
  </div>
</template>

<script setup name="Home" lang="ts">
import useCommon from '@/hooks/useCommon';


const { jumpTo } = useCommon();


</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
