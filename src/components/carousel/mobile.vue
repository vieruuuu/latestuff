<template>
  <div>
    <div v-for="categorie in categories" :key="categorie.key">
      <br />
      <p class="text-h5">{{ categorie.name }}</p>
      <div class="row">
        <div
          class="col-6 col-md-4"
          v-for="item in categorie.content"
          :key="item.key"
        >
          <card :style="size" :item="item" :mobile="true"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./card/card";
import "./styles.css";

export default {
  components: {
    Card
  },
  props: ["categories"],
  computed: {
    size() {
      let size = 0;
      let screenSize = this.$q.screen.width;
      if (screenSize > 580) {
        size = 240;
      } else if (screenSize <= 580 && screenSize > 500) {
        size = 210;
      } else if (screenSize <= 500 && screenSize > 422) {
        size = 170;
      } else if (screenSize <= 422 && screenSize > 348) {
        size = 135;
      } else if (screenSize < 348 && screenSize >= 328) {
        size = 130;
      } else {
        size = 115;
      }

      return `width: ${size}px;`;
    }
  }
};
</script>

<style scoped>
.carousel {
  display: inline-block;
}
</style>
