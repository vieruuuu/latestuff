<template>
  <q-card
    @click="mobile ? beforePlay(item) : null"
    @dblclick="mobile ? null : $router.push(`/watch/${item.id}`)"
    v-ripple="!mobile"
    :class="{ 'bg-black': $root.useBlackTheme }"
  >
    <q-img
      :src="
        `https://image.tmdb.org/t/p/${mobile ? 'w185' : 'w342'}/${item.cover}`
      "
      :placeholder-src="`https://image.tmdb.org/t/p/w92/${item.cover}`"
      :alt="item.title"
      class="q-mt-md img"
      crossorigin="Anonymous"
      basic
    >
      <div v-if="!mobile" class="text-h5 absolute-bottom text-right">
        <q-btn
          @click="$router.push(`/watch/${item.id}`)"
          size="sm"
          icon="play_arrow"
          round
          flat
          :ripple="false"
        />
      </div>
    </q-img>
  </q-card>
</template>

<script>
export default {
  props: ["mobile", "item"],
  methods: {
    beforePlay(item) {
      this.$set(this.$root, "clickedItem", item);
      this.$root.beforePlay = true;
    }
  }
};
</script>
