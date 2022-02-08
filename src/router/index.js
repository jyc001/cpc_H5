import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import store from "@/store";

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"index",
    component:Home,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("@/views/Detail"),
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from, failure) => {
  if (failure){
    this.$message.error("路由跳转失败");
    return false;
  }
  store.dispatch("change_route", to.path).then(() => {
  }).catch(() => {
  })
})
export default router
