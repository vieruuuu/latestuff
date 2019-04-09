<template>
  <div>
    <default
      :autoplay="autoplay"
      :categories="categories"
      v-if="!$q.screen.lt.sm"
    ></default>
    <mobile :categories="categories" v-else></mobile>
  </div>
</template>

<script>
import loading from "./loading";
import errorComp from "./errorComp";

const config = component => ({
  // The component to load (should be a Promise)
  component: async () => loading,
  // A component to use while the async component is loading
  loading,
  // A component to use if the load fails
  error: errorComp,
  // Delay before showing the loading component. Default: 200ms.
  delay: 100,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000
});

const _default = () => config(import("./default/index.vue"));
const mobile = () => config(import("./mobile.vue"));

export default {
  components: {
    mobile,
    default: _default
  },
  props: ["categories", "autoplay"]
};
</script>
