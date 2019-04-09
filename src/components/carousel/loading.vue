<template>
  <div class="wrapper">
    <div>
      <h2>Loading {{ text || "movies" }}...</h2>
    </div>
    <q-spinner
       color="primary"
       size="4em"
    />
  </div>
</template>

<script>
import "./loading.css";

export default {
  props: ["text"]
};
</script>
