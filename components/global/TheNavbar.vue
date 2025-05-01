<template>
  <header
    :class="[
      'fixed w-full top-0 z-50 transition-all duration-300',
      {
        'bg-gray-900/80 backdrop-blur-md shadow-lg':
          isScrolled || mobileMenuOpen,
      },
    ]"
  >
    <nav class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="text-primary-500 h-8 w-8">
            <Logo />
          </div>
          <span class="font-heading text-xl font-bold text-white">
            Aniverse<span class="text-primary-400"> Studio</span>
          </span>
        </NuxtLink>

        <!-- Desktop menu -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-300 hover:text-white transition-colors py-2 text-sm font-medium"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="ml-4">
            <button class="btn btn-primary">Enroll Now</button>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMobileMenu"
            class="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              v-if="!mobileMenuOpen"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              v-else
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 space-y-2">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
        <div class="pt-4">
          <button class="w-full btn btn-primary">Enroll Now</button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const navItems = [
  { label: "Home", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "Courses", path: "/courses" },
  { label: "Academy", path: "/academy" },
  { label: "About", path: "/about" },
];

const mobileMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Track scroll position
onMounted(() => {
  const checkScroll = () => {
    isScrolled.value = window.scrollY > 10;
  };

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Check initial scroll position

  onUnmounted(() => {
    window.removeEventListener("scroll", checkScroll);
  });
});
</script>