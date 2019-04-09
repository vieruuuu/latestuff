<template>
  <div class="wrapper fixed-center text-center">
    <div>
      <h5>Loading {{ text || "movies" }}...</h5>
    </div>
    <q-spinner color="primary" size="4em" />
  </div>
</template>

<script>
export default {
  props: ["text"]
};
</script>
