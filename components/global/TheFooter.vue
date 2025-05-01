<template>
  <footer class="bg-gray-900 text-gray-400 pt-16 pb-8">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="text-primary-500 h-8 w-8">
              <Logo />
            </div>
            <span class="font-heading text-xl font-bold text-white">
              Aniverse<span class="text-primary-400"> Studio</span>
            </span>
          </div>
          <p class="mb-4">
            Premium 3D Animation and Blender tutorials to take your skills to
            the next level.
          </p>
          <div class="flex space-x-4">
            <a
              href="https://www.youtube.com/@Aniverseworld"
              target="_blank"
              rel="noopener"
              class="text-gray-400 hover:text-red-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="hover:text-primary-400 transition-colors"
                >Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/courses"
                class="hover:text-primary-400 transition-colors"
                >Courses</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/blog"
                class="hover:text-primary-400 transition-colors"
                >Blog</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/academy"
                class="hover:text-primary-400 transition-colors"
                >Academy</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4">Resources</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/free-resources"
                class="hover:text-primary-400 transition-colors"
                >Free Resources</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/faq"
                class="hover:text-primary-400 transition-colors"
                >FAQ</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/support"
                class="hover:text-primary-400 transition-colors"
                >Support</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/privacy"
                class="hover:text-primary-400 transition-colors"
                >Privacy Policy</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-4">Subscribe</h4>
          <p class="mb-4">
            Join our newsletter for the latest tutorials and updates.
          </p>
          <form class="space-y-2">
            <div>
              <input
                type="email"
                placeholder="Your email address"
                class="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button type="submit" class="btn btn-primary w-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8">
        <p class="text-center text-sm">
          &copy; {{ new Date().getFullYear() }} Aniverse Academy. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
</template>