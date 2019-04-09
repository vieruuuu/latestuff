<template>
  <q-page padding>
    <carousel :categories="$root.categories" />
  </q-page>
</template>

<script>
import carousel from "./../components/carousel/carousel";
export default {
  components: { carousel }
};
</script>
