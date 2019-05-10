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
            class="cursor-pointer text-weight-bold text-h5"
            :class="{ 'text-center': $q.screen.lt.md }"
          >
            <!-- <q-avatar>
              <img src="https://cdn.quasar-framework.org/img/quasar-logo.png" />
            </q-avatar> -->
            LateStuff
          </q-toolbar-title>
          <q-space v-if="!$q.screen.lt.md" />
          <q-input
            @keyup.enter.native="e => $router.push(`/search/${e.target.value}`)"
            v-if="!$q.screen.lt.md && $route.name != 'search'"
            style="width: 29%;"
            :dark="$root.useBlackTheme"
            filled
            v-model="$root.searchVal"
            label="Search movies"
          />
          <q-space v-if="!$q.screen.lt.md" />
          <!-- lazy-rules
            :rules="[
              val => (val !== null && val !== '') || 'Please type your age',
              val => (val > 0 && val < 100) || 'Please type a real age'
            ]" -->
          <q-tabs
            no-caps
            v-if="!$q.screen.lt.md"
            shrink
            class="text-grey"
            active-color="primary"
          >
            <q-route-tab label="Home" to="/" exact />
            <q-route-tab label="Trending" to="/trending" exact />
          </q-tabs>
          <q-btn
            :class="{ 'text-grey': !drawerRight, 'text-primary': drawerRight }"
            v-if="!$q.screen.lt.md"
            flat
            @click="drawerRight = !drawerRight"
            round
            dense
            icon="menu"
          />
        </q-toolbar>
      </q-header>

      <q-drawer
        side="right"
        v-model="drawerRight"
        bordered
        :width="300"
        :breakpoint="500"
        :content-class="{
          'bg-black': $root.useBlackTheme,
          'bg-white': !$root.useBlackTheme
        }"
      >
        <q-scroll-area class="fit">
          <more />
        </q-scroll-area>
      </q-drawer>

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
          <q-route-tab label="Home" to="/" icon="home" exact />
          <q-route-tab label="Trending" to="/trending" icon="flash_on" exact />
          <q-route-tab label="Search" to="/search" icon="search" exact />
          <q-route-tab label="More" to="/more" icon="menu" exact />
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
import more from "./../components/more";

export default {
  name: "LayoutDefault",
  components: { more },
  data() {
    return {
      drawerRight: false
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
