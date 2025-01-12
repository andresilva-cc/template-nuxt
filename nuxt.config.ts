// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  css: ['~/assets/css/global.css'],

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@nuxtjs/storybook',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  typescript: {
    typeCheck: true,
  },
});
