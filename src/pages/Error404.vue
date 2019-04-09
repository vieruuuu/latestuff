<template>
  <div style="margin-top: 30vh;" class="text-center">
    <h5>Sorry... this wasn't supposed to happen</h5>
    <h5>Error 404</h5>
    <q-btn color="primary" @click="$router.push('/')">Go back</q-btn>
  </div>
</template>

<script>
export default {
  name: "Error404"
};
</script>
