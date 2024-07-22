// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  target: 'static',
  app: {
    baseURL: '/test-ul/',
    buildAssetsDir: 'assets',
  }
})
