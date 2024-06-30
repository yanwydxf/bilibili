// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //是否开启 ssr 服务端渲染
  ssr:true,
  devtools: { enabled: true },
  //应用模块
  modules:["@vant/nuxt"],
})
