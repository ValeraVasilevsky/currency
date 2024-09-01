import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import type { Component } from "vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: (): Component => import("pages/layout.vue"),
      children: [
        {
          path: "",
          name: "main",
          component: (): Component => import("pages/main/index.vue"),
        },
        {
          path: "convert",
          name: "convert",
          component: (): Component => import("pages/convert/index.vue"),
        },
      ],
    },
    {
      path: "/",
      component: (): Component => import("pages/default.vue"),
      children: [
        {
          path: "/:catchAll(.*)",
          name: "not-found",
          component: (): Component => import("pages/NotFound.vue"),
        },
      ],
    },
  ] as RouteRecordRaw[],
});
