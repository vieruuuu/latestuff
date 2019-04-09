// import something here
import { LoadingBar } from "quasar";

//LoadingBar.stop()

// leave the export, even if you don't use it
export default async ({ app, router, Vue }) => {
  router.beforeEach((to, from, next) => {
    LoadingBar.start();
    next();
  });
  router.afterEach((to, from) => {
    LoadingBar.stop();
  });
};
