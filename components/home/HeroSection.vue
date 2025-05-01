<template>
  <section class="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
    <!-- Background gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 z-0"
    ></div>

    <!-- Animated particles background -->
    <div class="absolute inset-0 opacity-30">
      <client-only>
        <ParticlesBackground />
      </client-only>
    </div>

    <div class="container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          >
            Master the Art of <span class="text-primary-400">3D Animation</span>
          </h1>

          <p
            class="text-xl text-gray-300 mb-8 leading-relaxed"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
          >
            Learn Blender and 3D animation from an experienced creator. From
            beginner to professional, unlock your creative potential with
            comprehensive courses and tutorials.
          </p>

          <div
            class="flex flex-col sm:flex-row gap-4"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
          >
            <NuxtLink to="/courses" class="btn btn-primary">
              Explore Courses
            </NuxtLink>
            <a
              href="https://www.youtube.com/@Aniverseworld"
              target="_blank"
              rel="noopener"
              class="btn bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white"
            >
              <svg
                class="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
              YouTube Channel
            </a>
          </div>

          <div
            class="mt-10 flex items-center"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 800 } }"
          >
            <div class="flex -space-x-2">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Student"
                class="w-10 h-10 rounded-full border-2 border-gray-800"
              />
              <img
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Student"
                class="w-10 h-10 rounded-full border-2 border-gray-800"
              />
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Student"
                class="w-10 h-10 rounded-full border-2 border-gray-800"
              />
            </div>
            <div class="ml-4">
              <p class="text-gray-300 text-sm">
                Join
                <span class="text-primary-400 font-bold">1,200+</span> students
                already learning with us
              </p>
            </div>
          </div>
        </div>

        <div
          class="relative"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { delay: 400, duration: 700 },
          }"
        >
          <div
            class="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl shadow-primary-500/20"
          >
            <iframe
              class="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/lvtZrDptmls?si=kQud9m24byfrJWsN"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <!-- Decorative elements -->
          <div
            class="absolute -bottom-5 -right-5 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl"
          ></div>
          <div
            class="absolute -top-5 -left-5 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"
          ></div>
        </div>
      </div>
    </div>

    <!-- Wave bottom divider -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        class="w-full h-12 md:h-16 text-gray-800"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          class="fill-current"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          class="fill-current"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          class="fill-current"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
// The component relies on client-side plugins, so we'll define
// the implementation in a client-only component
</script>