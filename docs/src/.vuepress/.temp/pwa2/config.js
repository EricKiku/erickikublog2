import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "H:/2022web开发/VuePress/blog-theme-hope/docs/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "H:/2022web开发/VuePress/blog-theme-hope/docs/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});