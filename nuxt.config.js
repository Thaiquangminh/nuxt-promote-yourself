module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Programming courses',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Learn from amazing courses | Tequyem',
      },
      { hid: 'og:url', name: 'og:url', content: process.env.baseUrl },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80',
      },
      { hid: 'og:locale', name: 'og:locale', content: 'vi_VN' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'My name is Minh and I am an experienced software engineer and freelance developer.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'https://kit.fontawesome.com/d33a83f69c.js' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/filters' },
    { src: '~/plugins/vuelidate' },
    { src: '~/plugins/toasted', ssr: false },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  serverMiddleware: ['~/server/routes/index'],
  /*
   ** Build configuration
   */
  // serverMiddleware: [
  //     '~/server/routes/index',
  // ],
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  telemetry: false,
  target: 'static',
};
