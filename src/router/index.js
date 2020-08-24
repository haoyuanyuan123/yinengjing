import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    // / 代表根路径.   根路径对应 Index 组件
    // App.vue 中的 router-view 标签, 在根路径下就会切换成 Index组件
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue"),
  },
  {
    path: "/news_detail/:nid",
    name: "NewsDetail",
    component: () => import("../views/NewsDetail.vue"),
  },
  {
    //开启属性传参 <router-link to="/product/1">
    props:true,
    path: "/product/:type",
    name: "Product",
    component: () => import("../views/Product.vue"),
  },
  {
    path: "/product_detail/:pid",
    name: "ProductDetail",
    component: () => import("../views/ProductDetail.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
