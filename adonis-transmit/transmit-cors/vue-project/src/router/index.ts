import { createRouter, createWebHistory } from "vue-router";
import ChatApp from "@/views/ChatApp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "chat",
      component: ChatApp,
    },
  ],
});

export default router;
