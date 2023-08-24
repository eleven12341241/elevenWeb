import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { BasicLayout } from "@/layouts";
import Home from "@/pages/Home/index.vue";
import BasicLayoutVue from "@/layouts/BasicLayout.vue";
import { pa } from "element-plus/es/locale";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    // name: "home",
    component: BasicLayoutVue,
    redirect: { name: "home" },
    // meta: {
    //   title: "首页",
    //   icon: "el-icon-s-home",
    //   breadcrumb: true,
    // },
    children: [
      {
        path: "/home",
        name: "home",
        // component: Home,
        redirect: { name: "about" },
        meta: {
          title: "首页",
          breadcrumb: true,
        },
        children: [
          {
            name: "about",
            path: "/home/about",
            meta: {
              title: "关于",
            },
            component: () => import("@/pages/About/index.vue"),
          },
          {
            name: "login",
            path: "/home/login",
            meta: {
              title: "登录",
            },
            component: () => import("@/pages/Login/index.vue"),
          },
          {
            name: "xiaogong",
            path: "/home/xiaogong",
            meta: {
              title: "宵宫",
            },
            component: () => import("@/pages/Xiaogong/index.vue"),
          },
          {
            name: "linnite",
            path: "/home/linnite",
            meta: {
              title: "琳妮特",
            },
            component: () => import("@/pages/Linnite/index.vue"),
          },
        ],
      },
    ],
    // redirect:{name:'home'},  打开这个会导致一直报错，Uncaught RangeError: Maximum call stack size exceeded，之后记得看一下啊
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   meta: {
  //     title: "登录",
  //     icon: "el-icon-s-home",
  //     breadcrumb: true,
  //   },
  //   component: () => import("@/pages/Login/index.vue"),
  // },
  // {
  //   path: "/about",
  //   name: "about",
  //   meta: {
  //     title: "关于",
  //     icon: "el-icon-s-home",
  //     breadcrumb: true,
  //   },
  //   component: () => import("@/pages/About/index.vue"),
  // },
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
router.beforeEach((to, from, next) => {
  const loggedIn =
    localStorage.getItem(
      "token"
    ); /* 判断用户是否已登录，例如从用户状态中获取 */
  console.log(loggedIn, "loggedIn");
  if (to.name !== "login" && !loggedIn) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
