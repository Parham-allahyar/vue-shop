export default [
    {
      path: "/seller/register",
      name: "sellerRegister",
      component: () => import("../../views/Seller/auth/Register.vue"),
    },
    {
      path:'/seller/login',
      name:"sellerLogin",
      component:() =>import("../../views/Seller/auth/Login.vue")
  },
  ];