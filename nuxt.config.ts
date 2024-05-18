// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  // googleFonts: {
  //   families: {
  //     Poppins: {wght: '300..700'}
  //   },
  // },
  googleFonts: {
    families: {
      Roboto: true,
      Poppins: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      Inter: '200..700',
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      }
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
