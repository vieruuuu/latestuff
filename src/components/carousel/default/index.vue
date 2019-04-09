<template>
  <div>
    <div
      v-for="(categorie, i) in categories"
      :key="categorie.key"
      :style="{
        height: categorieHeight * 4 + 'px',
        marginTop: (i > 0 ? -categorieHeight * 3 : -categorieHeight * 2) + 'px'
      }"
      v-observe-visibility="isVisible => (categorie.isVisible = isVisible)"
    >
      <div :style="{ height: categorieHeight * 2 + 'px' }"></div>
      <transition appear enter-active-class="animated fadeIn">
        <div v-if="true || categorie.isVisible || categorie.isPrerendered">
          <p class="text-h5">{{ categorie.name }}</p>
          <br />
          <carousel
            :navigationEnabled="true"
            :autoplayHoverPause="true"
            :autoplay="autoplay"
            :autoplayTimeout="10000"
            :perPage="2"
            :perPageCustom="[...pages]"
          >
            <slide v-for="item in categorie.content" :key="item.key">
              <card :item="item" :mobile="false"></card>
            </slide>
          </carousel>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import Slide from "./Slide.vue";
import Card from "./../card/card";
import "./../styles.css";

export default {
  data() {
    return {
      pages: [
        [1000, 3],
        [1330, 4],
        [1660, 5],
        [1990, 6],
        [2320, 7],
        [2650, 8],
        [2980, 9],
        [3310, 10],
        [3640, 11],
        [3970, 12],
        [4300, 13],
        [4630, 14],
        [4960, 15],
        [5290, 16],
        [5620, 17],
        [5950, 18],
        [6280, 19],
        [6610, 20],
        [6940, 21],
        [7270, 22],
        [7600, 23],
        [7930, 24],
        [8260, 25],
        [8590, 26]
      ],
      categorieHeight: 560
    };
  },
  components: {
    Carousel,
    Slide,
    Card
  },
  props: ["categories", "autoplay"]
};
</script>
