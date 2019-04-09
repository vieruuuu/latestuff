<template>
  <q-page padding class="text-body1 block">
    <q-list>
      <q-item-label header>Privacy</q-item-label>
      <q-item :dark="$root.useBlackTheme" tag="label">
        <q-item-section>
          <q-item-label>
            Send Anonymous data through Google Analytics
          </q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="$root.useAnalytics" />
        </q-item-section>
      </q-item>
      <q-separator :dark="$root.useBlackTheme" spaced />
      <q-item-label header>Ads</q-item-label>
      <q-item :dark="$root.useBlackTheme" tag="label">
        <q-item-section>
          <q-item-label>Disable cryptocurrency miner and see ads</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="$root.useAds" />
        </q-item-section>
      </q-item>
      <q-separator :dark="$root.useBlackTheme" spaced />
      <q-item-label header>Theming</q-item-label>
      <q-item :dark="$root.useBlackTheme" tag="label">
        <q-item-section>
          <q-item-label>Use black theme</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="$root.useBlackTheme" />
        </q-item-section>
      </q-item>

      <q-item :dark="$root.useBlackTheme" tag="label">
        <q-item-section>
          <q-item-label>RBG accent color</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="$root.useRGBAccentColor" />
        </q-item-section>
      </q-item>

      <q-item
        :dark="$root.useBlackTheme"
        :disable="$root.useRGBAccentColor"
        tag="label"
      >
        <q-item-section>
          <q-item-label>RBG color change delay (ms)</q-item-label>
        </q-item-section>
        <q-item-section v-if="!$q.screen.lt.sm">
          <q-slider
            :disable="$root.useRGBAccentColor"
            :dark="$root.useBlackTheme"
            :value="$root.RGBSpeed"
            @change="
              val => {
                $root.RGBSpeed = val;
              }
            "
            :min="100"
            :max="1000"
            :step="10"
            color="primary"
            label
          />
        </q-item-section>
      </q-item>
      <q-item
        :dark="$root.useBlackTheme"
        :disable="$root.useRGBAccentColor"
        tag="label"
        v-if="$q.screen.lt.sm"
      >
        <q-item-section>
          <q-slider
            :disable="$root.useRGBAccentColor"
            :dark="$root.useBlackTheme"
            :value="$root.RGBSpeed"
            @change="
              val => {
                $root.RGBSpeed = val;
              }
            "
            :min="100"
            :max="1000"
            :step="10"
            color="primary"
            label
          />
        </q-item-section>
      </q-item>
      <q-item
        :disable="$root.useRGBAccentColor"
        @click="clickedAccentColor"
        :dark="$root.useBlackTheme"
        tag="label"
      >
        <q-item-section>
          <q-item-label>Accent color</q-item-label>
        </q-item-section>
        <q-item-section avatar
          ><q-input
            v-if="!$q.screen.lt.md"
            :dark="$root.useBlackTheme"
            :disable="$root.useRGBAccentColor"
            filled
            v-model="$root.primaryColor"
          >
            <template v-slot:append>
              <q-icon name="colorize" class="cursor-pointer">
                <q-menu anchor="center middle" self="center middle">
                  <q-color
                    :dark="$root.useBlackTheme"
                    v-model="$root.primaryColor"
                  />
                </q-menu>
              </q-icon>
            </template>
          </q-input>
          <q-icon
            v-if="$q.screen.lt.md"
            name="colorize"
            class="cursor-pointer"
          />
        </q-item-section>
      </q-item>
      <q-separator :dark="$root.useBlackTheme" spaced />
      <q-btn
        @click="restore"
        outline
        color="red"
        :size="$q.screen.lt.md ? 'md' : 'lg'"
        no-caps
        class="full-width q-mt-md"
      >
        <span v-if="restoreText">Restore default settings</span>
        <div v-else>
          Reload page for changes to apply <br />
          (click again to reload)
        </div>
      </q-btn>
    </q-list>
    <q-dialog
      v-if="$q.screen.lt.md"
      v-model="dialog"
      persistent
      full-height
      full-width
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-card-section>
          <div class="text-h6">Select color</div>
        </q-card-section>

        <q-card-section>
          <q-color
            style="max-width:100%;width: 100%;"
            :dark="true"
            v-model="$root.primaryColor"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat @click="cancelAccentColor">CANCEL</q-btn>
          <q-btn flat @click="dialog = false">OK</q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      restoreText: true,
      dialog: false,
      oldAccent: null
    };
  },
  methods: {
    cancelAccentColor() {
      this.$root.primaryColor = this.oldAccent;
      this.dialog = false;
    },
    clickedAccentColor() {
      if (this.$q.screen.lt.md) {
        this.dialog = true;
        this.oldAccent = this.$root.primaryColor;
      }
    },
    restore() {
      if (this.restoreText) {
        this.$q.localStorage.clear();
        this.restoreText = false;
      } else {
        location.reload();
      }
      //;
    }
  },
  watch: {
    "$root.useBlackTheme"(val) {
      this.$q.localStorage.set("useBlackTheme", val);
    },
    "$root.RGBSpeed"(val) {
      this.$q.localStorage.set("RGBSpeed", val);
      if (this.$root.useRGBAccentColor) {
        clearInterval(this.interval);
        this.$root.RGBMagic();
      }
    },
    "$root.useRGBAccentColor"(val) {
      this.$q.localStorage.set("useRGBAccentColor", val);
    },
    "$root.useAds"(val) {
      this.$q.localStorage.set("useAds", val);
    },
    "$root.useAnalytics"(val) {
      this.$q.localStorage.set("useAnalytics", val);
    }
  }
};
</script>

<style scoped>
.q-page {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
