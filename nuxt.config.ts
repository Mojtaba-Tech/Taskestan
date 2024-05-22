// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@vesp/nuxt-fontawesome'],
  googleFonts: {
    families: {
      Poppins: true,
    }
  },
  app: {
    head: {
      title: 'Taskestan'
    }
  },
  css: [
      '@/assets/scss/main.scss'
  ]
})
