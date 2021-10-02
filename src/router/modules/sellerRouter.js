export default [
  {
    path: "/seller/register",
    name: "sellerRegister",
    component: () => import("../../views/Seller/auth/Register.vue"),
  },
  {
    path: "/seller/login",
    name: "sellerLogin",
    component: () => import("../../views/Seller/auth/Login.vue"),
  },

  {
    path: "/sellerpanel",
    name: "sellerPanel",
    component: () => import("../../layout/sellerPanel/index.vue"),
    children: [

      // Product
      {
        path: "product/create",
        name: "createProduct",
        component: () => import("../../views/Seller/product/Create.vue"),
      },
      {
        path: "product/update",
        name: "UpdateProduct",
        component: () => import("../../views/Seller/product/Update.vue"),
      },
      {
        path: "product/index",
        name: "IndexProduct",
        component: () => import("../../views/Seller/product/Index.vue"),
      },

      //Order
      {
        path: "order/index",
        name: "IndexOrder",
        component: () => import("../../views/Seller/order/Index.vue"),
      },
      {
        path: "order/info",
        name: "IndexOrder",
        component: () => import("../../views/Seller/order/Info.vue"),
      },
      {
        path: "order/update",
        name: "updateOrder",
        component: () => import("../../views/Seller/order/Update.vue"),
      },
    ],
  },
];
