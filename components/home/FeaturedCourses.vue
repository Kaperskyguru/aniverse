<template>
  <section class="section bg-gray-800 text-white">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
        <p class="text-gray-400 max-w-3xl mx-auto">Dive into comprehensive courses designed to take your 3D animation skills to the professional level.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(course, index) in courses" 
          :key="course.id" 
          class="card group hover:shadow-glow transition-all duration-300"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100 * index } }"
        >
          <div class="relative aspect-video overflow-hidden">
            <img :src="course.image" :alt="course.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            <div class="absolute top-4 right-4 bg-accent-500 text-white px-2 py-1 rounded text-sm font-bold">
              {{ course.level }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ course.title }}</h3>
            <p class="text-gray-400 mb-4">{{ course.description }}</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <span class="text-primary-400 font-bold text-lg">${{ course.price }}</span>
                <span class="text-gray-500 line-through ml-2" v-if="course.originalPrice">${{ course.originalPrice }}</span>
              </div>
              <div class="flex items-center text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="ml-1">{{ course.rating }} ({{ course.reviews }})</span>
              </div>
            </div>
          </div>
          <div class="bg-gray-700 p-4 flex items-center justify-between">
            <div class="flex items-center text-sm text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ course.duration }}
            </div>
            <NuxtLink :to="`/courses/${course.id}`" class="btn btn-primary py-1 px-4">
              View Course
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <NuxtLink to="/courses" class="btn btn-secondary">
          View All Courses
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const courses = [
  {
    id: 'blender-fundamentals',
    title: 'Blender Fundamentals',
    description: 'Learn the core basics of Blender from interface navigation to modeling techniques.',
    image: 'https://images.pexels.com/photos/7988087/pexels-photo-7988087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    level: 'Beginner',
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.7,
    reviews: 234,
    duration: '24 hours of content'
  },
  {
    id: 'character-animation',
    title: 'Character Animation',
    description: 'Create expressive character animations with principles of timing, weight and appeal.',
    image: 'https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    level: 'Intermediate',
    price: 69.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviews: 187,
    duration: '32 hours of content'
  },
  {
    id: 'advanced-materials',
    title: 'Advanced Materials & Texturing',
    description: 'Master realistic materials, texturing techniques and lighting for stunning renders.',
    image: 'https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    level: 'Advanced',
    price: 79.99,
    originalPrice: 119.99,
    rating: 4.9,
    reviews: 156,
    duration: '28 hours of content'
  }
]
</script>