import { createRouter, createWebHistory } from "vue-router";
const Blog = () => import("../components/Blog.vue");
const BlogDetail = () => import("../components/BlogDetail.vue");
const BlogCategory = () => import("../components/BlogCategory.vue");
// const NotFound = () => import("../views/NotFound.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Blog",
      component: Blog,
    },
    {
      path: "/blog-detail",
      name: "BlogDetail",
      component: BlogDetail,
    },
    {
      path: "/category/:id",
      name: "BlogCategory",
      component: BlogCategory,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/"
    },
  ],
});

export default router;
