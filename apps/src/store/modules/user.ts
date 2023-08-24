import { defineStore } from "pinia";
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    name: "",
    email: "",
    permission: "",
    token: "",
  }),
  actions: {
    setUserInfo(userInfo) {
      this.name = userInfo.name;
      this.email = userInfo.email;
      this.permission = userInfo.permission;
      this.token = userInfo.token;
    },
    logout() {
      this.name = "";
      this.email = "";
      this.permission = "";
      this.token = "";
    },
  },
});
