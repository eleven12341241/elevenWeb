<template>
	<div class="login-container">
		<el-card class="login-card">
			<h2 class="login-title">用户登录</h2>
			<el-form :model="loginForm" :rules="loginRules">
				<el-form-item label="用户名" prop="username">
					<el-input v-model="loginForm.username"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="loginForm.password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="login">登录</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { useUserStore } from '@/store/modules/user'
const userStore = useUserStore();

const loginForm = ref({
	username: '',
	password: '',
});

const loginRules = {
	username: [
		{ required: true, message: '请输入用户名', trigger: 'blur' },
	],
	password: [
		{ required: true, message: '请输入密码', trigger: 'blur' },
	],
};

const login = () => {
	// 在这里实现登录逻辑
	// 例如，提交登录表单，验证用户信息等
	// 登录成功后，可以跳转到其他页面
	if (loginForm.value.username === 'admin' && loginForm.value.password === '123456') {
		userStore.setUserInfo({
			name: 'admin',
			email: '123@qq.com',
			permission: "admin",
			token: "123456"
		});
		router.push('/');
		return;
	}
};
</script>

<style scoped>
.login-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.login-card {
	width: 400px;
}

.login-title {
	text-align: center;
	font-size: 24px;
	margin-bottom: 20px;
}
</style>
