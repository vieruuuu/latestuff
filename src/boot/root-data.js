// import something here

import _categories from "./categories.js";
import featured from "./featured";
import methods from "./methods";

// leave the export, even if you don't use it
export default async ({ app, router, Vue }) => {
  // something to do
  let categories = [];
  _categories.forEach(categorie =>
    categories.push({
      ...categorie,
      isVisible: false,
      isPreloaded: false
    })
  );
  app.methods = methods;
  app.data = function() {
    return {
      featured,
      categories,
      useAds: this.getFromStorage("useAds", false),
      useBlackTheme: this.getFromStorage("useBlackTheme", true),
      useRGBAccentColor: this.getFromStorage("useRGBAccentColor", false),
      RGBSpeed: this.getFromStorage("RGBSpeed", 600),
      primaryColor: this.getFromStorage("primaryColor", "#d32f2f"),
      useAnalytics: this.getFromStorage("useAnalytics", true),
      interval: null
    };
  };

  app.created = async function() {
    
    if (this.useBlackTheme) window.JSEDarkMode = 1;

    if (this.useAds) {
      window.JSENoMining = 1;
    }

    this.setBrand("primary", this.primaryColor);
    this.$q.addressbarColor.set(this.primaryColor);
    if (this.useRGBAccentColor) {
      this.RGBMagic();
    }
    const res = await fetch(`https://${location.hostname}/movies`)
    const categories = await res.text()
    
    console.log(categories)
    // this.categories = categories
  };

  app.watch = {
    useRGBAccentColor(val) {
      clearInterval(this.interval);
      if (val) {
        this.RGBMagic();
      }
    },
    primaryColor(val) {
      const isSettings = this.$route.name === "settings";
      if (this.useRGBAccentColor || isSettings) {
        this.$root.setBrand("primary", val);
        if (isSettings) this.$q.localStorage.set("primaryColor", val);
        this.$q.addressbarColor.set(val);
      }
    }
  };
};
