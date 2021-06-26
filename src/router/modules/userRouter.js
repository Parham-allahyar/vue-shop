export default [
    {
        path:'/user/login',
        name:'userLogin',
        component:() =>import("../../views/user/auth/GetPhoneNumber.vue")
    },
  
    {
        path:'/user/verify',
        name:'',
        component:() =>import("../../views/user/auth/SendVerificationCode.vue")
    },
    {
        path:'/user/profile',
        name:'profile',
        component:() =>import("../../layout/user/Index.vue"),
        children:[
            {
                path:'test',
                name:'yy',
                component:() =>import("../../views/user/auth/SendVerificationCode.vue"),
                // beforeEnter: (to, from, next) => {
                //    if(localStorage.getItem("admin_token") {
                //     next({ name: "adminLogin" })
                //    }
                // }
            },
        ]
    },
     ]
    