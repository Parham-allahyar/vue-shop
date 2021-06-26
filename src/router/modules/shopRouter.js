export default [
  {
    path: "/",
    name: "",
    component: () => import("../../views/shop/Landing.vue"),
  },
  {
    path: "/auth",
    name: "",
    component: () => import("../../views/shop/Auth.vue"),
  },
];
