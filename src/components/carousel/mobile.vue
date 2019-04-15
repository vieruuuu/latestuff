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
    <q-dialog
      v-if="$q.screen.lt.sm"
      v-model="$root.beforePlay"
      position="bottom"
      full-width
    >
      <q-card
        flat
        bordered
        :dark="$root.useBlackTheme"
        :class="{
          'bg-black': $root.useBlackTheme
        }"
      >
        <!--  -->
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6">
                {{ $root.clickedItem.title }}
                <q-badge align="middle">{{ $root.clickedItem.type }}</q-badge>
              </div>
              <div class="text-subtitle2">{{ $root.clickedItem.release }}</div>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <p class="text-body1">
            {{ $root.clickedItem.description }}
          </p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn color="primary" flat v-close-popup>Cancel</q-btn>
          <q-btn
            color="primary"
            flat
            @click="$router.push(`/watch/${$root.clickedItem.id}`)"
            >Watch</q-btn
          >
        </q-card-actions>
      </q-card>
    </q-dialog>
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
