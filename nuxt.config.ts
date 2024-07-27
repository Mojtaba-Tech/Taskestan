// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vesp/nuxt-fontawesome',
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "dayjs-nuxt"
  ],
  googleFonts: {
    families: {
      Roboto: true,
    }
  },
  app: {
    head: {
      title: 'Taskestan'
    },
  },
  css: [
      '@/assets/scss/main.scss'
  ],
  supabase: {
    redirectOptions: {
      login: '/auth/login',
      callback: '/app/boards/boards-list',
      // include: undefined,
      // exclude: [],
      // cookieRedirect: false,
    }
  }
})