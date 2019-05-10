<template>
  <q-list padding class="text-grey" :dark="$root.useBlackTheme">
    <q-item to="/settings" exact>
      <q-item-section avatar>
        <q-icon name="settings" />
      </q-item-section>
      <q-item-section>Settings</q-item-section>
    </q-item>
    <q-item to="/about" exact>
      <q-item-section avatar>
        <q-icon name="help" />
      </q-item-section>
      <q-item-section>About</q-item-section>
    </q-item>
  </q-list>
</template>
