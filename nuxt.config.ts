// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxthq/studio",
  ],
  css: [`assets/css/main.css`],
});
