<template>
  <div
    v-show="carousel.pageCount > 1"
    class="VueCarousel-pagination"
    v-bind:class="{
      [`VueCarousel-pagination--${paginationPositionModifierName}`]: paginationPositionModifierName
    }"
  >
    <div
      class="VueCarousel-dot-container"
      role="tablist"
      :style="`margin-top: ${carousel.paginationPadding * 2}px;`"
    >
      <q-btn
        size="sm"
        round
        flat
        :ripple="false"
        :icon="
          isCurrentDot(index)
            ? 'radio_button_checked'
            : 'radio_button_unchecked'
        "
        @click="goToPage(index)"
        v-for="(page, index) in paginationCount"
        :key="`${page}_${index}`"
        aria-hidden="false"
        role="tab"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "pagination",
  inject: ["carousel"],
  computed: {
    paginationPositionModifierName() {
      const { paginationPosition } = this.carousel;
      // guard to add only required class modifiers
      if (paginationPosition.indexOf("overlay") < 0) return;
      return paginationPosition;
    },
    paginationPropertyBasedOnPosition() {
      return this.carousel.paginationPosition.indexOf("top") >= 0
        ? "bottom"
        : "top";
    },
    paginationCount() {
      return this.carousel && this.carousel.scrollPerPage
        ? this.carousel.pageCount
        : this.carousel.slideCount && this.carousel.currentPerPage
        ? this.carousel.slideCount - this.carousel.currentPerPage + 1
        : 0;
    }
  },
  methods: {
    /**
     * Change page by index
     * @param {number} index
     * return {void}
     */
    goToPage(index) {
      /**
       * @event paginationclick
       * @type {number}
       */
      this.$emit("paginationclick", index);
    },

    /**
     * Check on current dot
     * @param {number} index - dot index
     * @return {boolean}
     */
    isCurrentDot(index) {
      return index === this.carousel.currentPage;
    },

    /**
     * Generate dot title
     * @param {number} index - dot index
     * @return {string}
     */
    getDotTitle(index) {
      return this.carousel.$children[index].title
        ? this.carousel.$children[index].title
        : `Page ${index + 1}`;
    }
  }
};
</script>

<style scoped>
.VueCarousel-pagination {
  width: 100%;
  text-align: center;
}

.VueCarousel-pagination--top-overlay {
  position: absolute;
  top: 0;
}

.VueCarousel-pagination--bottom-overlay {
  position: absolute;
  bottom: 0;
}

.VueCarousel-dot-container {
  display: inline-block;
  margin: 0 auto;
  padding: 0;
}

.VueCarousel-dot {
  display: inline-block;
  cursor: pointer;
  appearance: none;
  border: none;
  background-clip: content-box;
  box-sizing: content-box;
  padding: 0;
  border-radius: 100%;
  outline: none;
}

.VueCarousel-dot:focus {
  outline: 1px solid lightblue;
}
</style>
