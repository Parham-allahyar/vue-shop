export default [
  {
    path: "/user/login",
    name: "userLogin",
    component: () => import("../../views/user/auth/GetPhoneNumber.vue"),
  },

  {
    path: "/user/verify",
    name: "",
    component: () => import("../../views/user/auth/SendVerificationCode.vue"),
  },
  {
    path: "/user/profile",
    name: "profile",
    component: () => import("../../layout/user/Index.vue"),
    children: [
      {
        path: "info",
        name: "",
        component: () => import("../../views/user/panel/UserInfo.vue"),
      },
      {
        path: "comment",
        name: "",
        component: () => import("../../views/user/panel/Comment.vue"),
      },
      {
        path: "address",
        name: "",
        component: () => import("../../views/user/panel/Address.vue"),
      },
      {
        path: "useraddress",
        name: "",
        component: () => import("../../views/user/panel/UserAddress.vue"),
      },
      {
        path: "order",
        name: "",
        component: () => import("../../views/user/panel/UserOrder.vue"),
      },
    ],
  },
];
