import Vue from "vue";
import VueRouter from "vue-router";

//Module
import sellerRouter from "./modules/sellerRouter";
import adminRouter from "./modules/adminRouter";
import userRouter from "./modules/userRouter";
import shopRouter from "./modules/shopRouter"



Vue.use(VueRouter);

const router = new VueRouter({
  routes: [...adminRouter,...shopRouter,...sellerRouter,...userRouter],
  mode: "history",
  base: process.env.BASE_URL,
});

export default router;
