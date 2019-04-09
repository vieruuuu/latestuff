// import something here
import VueAnalytics from 'vue-analytics'

// leave the export, even if you don't use it
export default async ({ app, router, Vue }) => {
    Vue.use(VueAnalytics, {
        id: "UA-133910194-1",
        router,
        debug: { sendHitTask: process.env.NODE_ENV === "production" },
        disabled: false
    })
};
