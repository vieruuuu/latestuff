import VueAnalytics from "vue-analytics";

export default async ({ app, router, Vue }) => {
  Vue.use(VueAnalytics, {
    id: "UA-133910194-1",
    router,
    debug: {
      sendHitTask: process.env.NODE_ENV === "production"
    },
    disabled: !window.useAnalytics
  });
};
