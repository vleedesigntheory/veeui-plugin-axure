const routes = [
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/",
      name: '/',
      component: () => import("@/views/Home.vue")
    },
    {
      path: "*",
      name: "NotFound",
      component: () => import("@/views/NotFound.vue"),
    },
  ];

  export default routes;