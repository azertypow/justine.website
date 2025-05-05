// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: '/',
      head: {
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png', sizes: '180x180'},
            { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32'},
            { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16'},
            { rel: 'manifest', href: '/manifest.json'},
        ]
      },
  },
  css: [
      '@/assets/_main.scss'
  ],
})
