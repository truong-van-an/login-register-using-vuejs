export default[
    {
        path: '/',
        meta:{
            authRequired: true
        },
        name: 'home',
        component: ()=> import('@/router/Views/home.vue')
    },
    {
        path: '/Login',
        name: 'Login',
        meta: { title: "Login"},
        component: () => import('./Views/Account/Login.vue')
    },
    {
        path: '/Register',
        name: 'Register',
        meta: { title: "Register"},
        component: () => import('./Views/Account/Register.vue')
    },
]