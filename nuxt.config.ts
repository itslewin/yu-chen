// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
  },
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxthq/studio",
    "@nuxt/image",
    "nuxt-swiper",
  ],
  css: [`assets/css/main.css`],
  compatibilityDate: "2024-10-19",
});
