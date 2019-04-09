import { colors } from "quasar";
const { setBrand, rgbToHex, hexToRgb } = colors;

export default {
  getFromStorage(key, val) {
    let exists = this.$q.localStorage.has(key);
    if (!exists) {
      this.$q.localStorage.set(key, val);
      return val;
    }
    return this.$q.localStorage.getItem(key);
  },
  RGBMagic() {
    const nr = 10;
    function add(color) {
      if (color + nr > 255) {
        return 255;
      } else {
        return color + nr;
      }
    }
    function substract(color) {
      if (color - nr < 0) {
        return 0;
      } else {
        return color - nr;
      }
    }

    const that = this;
    that.primaryColor = that.rgbToHex({ r: 255, g: 0, b: 0 });
    this.interval = setInterval(() => {
      const oldRGB = that.hexToRgb(that.primaryColor);
      let newRGB = oldRGB;
      if (oldRGB.r === 255 && oldRGB.g !== 255) {
        if (!newRGB.b) {
          newRGB.g = add(newRGB.g);
        } else {
          newRGB.b = substract(newRGB.b);
        }
      } else if (oldRGB.g === 255 && oldRGB.b !== 255) {
        if (!newRGB.r) {
          newRGB.b = add(newRGB.b);
        } else {
          newRGB.r = substract(newRGB.r);
        }
      } else if (oldRGB.b === 255 && oldRGB.r !== 255) {
        if (!newRGB.g) {
          newRGB.r = add(newRGB.r);
        } else {
          newRGB.g = substract(newRGB.g);
        }
      }
      that.primaryColor = that.rgbToHex(newRGB);
    }, this.RGBSpeed);
  },
  setBrand,
  rgbToHex,
  hexToRgb
};
