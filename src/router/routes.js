import DefaultLayout from "layouts/MyLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/Home.vue")
      },
      {
        path: "/settings",
        name: "settings",
        component: () => import("pages/Settings.vue")
      },
      {
        path: "/about",
        name: "about",
        component: () => import("pages/About.vue")
      },
      {
        path: "/watch/:id",
        name: "watch",
        component: () => import("pages/Watch.vue")
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
