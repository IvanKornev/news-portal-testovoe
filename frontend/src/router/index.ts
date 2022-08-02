import { createRouter, createWebHistory } from "vue-router";

const AllNewsPage = () => import("@/pages/AllNewsPage.vue");
const SelectedNewsPage = () => import("@/pages/SelectedNewsPage.vue");

const routes = [
  {
    path: "/",
    name: "allNews",
    component: AllNewsPage,
  },
  {
    path: "/:id",
    name: "selectedNews",
    component: SelectedNewsPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
