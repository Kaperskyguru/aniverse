// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@vueuse/motion/nuxt",
  ],

  css: ["~/assets/css/main.css"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Aniverse Academy | 3D Animation & Blender Courses",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Learn 3D animation and Blender from an experienced creator. Courses, tutorials, and resources for all skill levels.",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },

  colorMode: {
    classSuffix: "",
    preference: "dark",
    fallback: "dark",
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      "Space Grotesk": [500, 700],
    },
    display: "swap",
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: "github-dark",
    },
  },

  build: {
    transpile: ["gsap"],
  },
});
