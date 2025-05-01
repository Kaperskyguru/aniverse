<template>
  <section class="py-20 bg-primary-600 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl"></div>
    
    <div class="container relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 
          class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
        >Ready to Start Your Animation Journey?</h2>
        <p 
          class="text-lg text-primary-100 mb-8"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
        >
          Join thousands of students who are transforming their creative potential through our expert-led courses.
        </p>
        <div 
          class="flex flex-col sm:flex-row justify-center gap-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
        >
          <NuxtLink to="/courses" class="btn bg-white text-primary-600 hover:bg-gray-100">
            Browse All Courses
          </NuxtLink>
          <NuxtLink to="/courses/blender-fundamentals" class="btn bg-secondary-500 text-white hover:bg-secondary-600">
            Start with Fundamentals
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>