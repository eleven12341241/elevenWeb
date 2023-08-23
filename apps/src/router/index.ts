import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { BasicLayout } from "@/layouts";
import { useUserStore } from "@/store/modules/user";
import Home from "@/pages/Home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "首页",
      icon: "el-icon-s-home",
      breadcrumb: true,
    },
    // redirect:{name:'home'},  打开这个会导致一直报错，Uncaught RangeError: Maximum call stack size exceeded，之后记得看一下啊
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
      icon: "el-icon-s-home",
      breadcrumb: true,
    },
    component: () => import("@/pages/Login/index.vue"),
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "关于",
      icon: "el-icon-s-home",
      breadcrumb: true,
    },
    component: () => import("@/pages/About/index.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/pages/Error/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },

  // ...其他路由配置
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫
// router.beforeEach((to, from, next) => {
//   const userStore = useUserStore();
//   const loggedIn =
//     userStore.token; /* 判断用户是否已登录，例如从用户状态中获取 */
//   console.log(loggedIn, "loggedIn");
//   if (to.name !== "login" && !loggedIn) {
//     next({ name: "login" });
//   } else {
//     next();
//   }
// });

export default router;
