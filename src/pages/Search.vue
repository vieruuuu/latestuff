<template>
  <q-page padding>
    <div :style="`width: ${$q.screen.lt.sm ? 100 : 60}%;margin: 26vh auto;`">
      <p :class="`text-h${$q.screen.lt.sm ? 6 : 4}`">Type something ...</p>
      <q-input
        @keyup.enter.native="e => $router.push(`/search/${e.target.value}`)"
        :style="`margin-top: ${!$q.screen.lt.sm ? 40 : 0}px`"
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
