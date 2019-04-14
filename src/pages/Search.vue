<template>
  <q-page padding>
    <div
      class="absolute-center"
      :style="`width: ${$q.screen.lt.sm ? 100 : 60}%`"
    >
      <p :class="`text-h${$q.screen.lt.sm ? 6 : 4}`">Type something ...</p>
      <q-input
        :dark="$root.useBlackTheme"
        filled
        v-model="$root.searchVal"
        label="Search movies"
      />
    </div>
  </q-page>
</template>

<script>
export default {};
</script>
