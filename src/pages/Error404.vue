<template>
  <div>
    <div class="text-center" style="margin-top: 30vh;">
      <h5>Sorry... this wasn't supposed to happen</h5>
      <h5>Error 404</h5>
      <q-btn color="primary" @click="$router.push('/')">Go back</q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error404"
};

// :class="{
//   'bg-black': $root.useBlackTheme,
//   'text-white': $root.useBlackTheme
// }"
</script>
