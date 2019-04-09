<template>
  <div
    class="q-pa-md"
    :class="{
      'bg-black': $root.useBlackTheme,
      'text-white': $root.useBlackTheme
    }"
  >
    <q-layout view="lHh lpr lFf">
      <q-header
        reveal
        bordered
        class="text-primary"
        style="border-width: 2px"
        :style="{
          'border-color': $root.useBlackTheme ? '#181818' : '#E6E6E6'
        }"
      >
        <q-toolbar
          :class="{
            'bg-black': $root.useBlackTheme,
            'bg-white': !$root.useBlackTheme
          }"
        >
          <q-toolbar-title
            @click="$router.push('/')"
            class="cursor-pointer text-h5"
            :class="{ 'text-center': $q.screen.lt.md }"
          >
            <!-- <q-avatar>
              <img src="https://cdn.quasar-framework.org/img/quasar-logo.png" />
            </q-avatar> -->
            LateStuff
          </q-toolbar-title>
          <q-tabs no-caps narrow-indicator v-if="!$q.screen.lt.md" shrink>
            <q-route-tab
              v-for="item in navigation"
              :key="item.key"
              :label="item.name"
              :to="item.to"
              exact
            />
          </q-tabs>
        </q-toolbar>
      </q-header>

      <q-footer
        style="border-width: 2px"
        :style="{
          'border-color': $root.useBlackTheme ? '#181818' : '#E6E6E6'
        }"
        v-if="$q.screen.lt.md"
        bordered
        class="text-primary"
        :class="{
          'bg-black': $root.useBlackTheme,
          'bg-white': !$root.useBlackTheme
        }"
      >
        <q-tabs
          no-caps
          active-color="primary"
          indicator-color="transparent"
          class="text-grey"
          dense
        >
          <q-route-tab
            v-for="item in navigation"
            :key="item.key"
            :label="item.name"
            :to="item.to"
            :icon="item.icon"
            exact
          />
        </q-tabs>
      </q-footer>

      <q-page-container>
        <transition appear enter-active-class="animated fadeIn">
          <router-view />
        </transition>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import "./../css/animations.css";
import navigation from "./navigation.js";

export default {
  name: "LayoutDefault",

  data() {
    return {
      navigation
    };
  },
  mounted() {
    this.$q.notify({
      message: "Hello! This website is still in development, bugs may appear.",
      actions: [
        {
          label: "OK",
          handler: () => null,
          color: "primary"
        }
      ]
    });
  }
};
</script>
