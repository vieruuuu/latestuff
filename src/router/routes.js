import DefaultLayout from "layouts/MyLayout.vue";
import SearchComponent from "pages/Search.vue";
import MoreComponent from "pages/More.vue";

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
        path: "/trending",
        name: "trending",
        component: () => import("pages/Trending.vue")
      },
      {
        path: "/search",
        name: "search",
        component: SearchComponent
      },
      {
        path: "/search/:text",
        name: "search2",
        component: () => import("pages/Search2.vue")
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
        path: "/more",
        name: "more",
        component: MoreComponent
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
