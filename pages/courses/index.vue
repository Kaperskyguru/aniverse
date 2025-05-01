<template>
  <div>
    <section class="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Animation & Blender Courses</h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive courses to help you master 3D animation at your own pace.</p>
      </div>
    </section>
    
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container">
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Filters sidebar -->
          <div class="w-full md:w-1/4">
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 sticky top-24">
              <h3 class="text-lg font-bold mb-4">Filter Courses</h3>
              
              <!-- Search -->
              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search</label>
                <input 
                  type="text" 
                  placeholder="Search courses..." 
                  class="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <!-- Categories -->
              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Categories</label>
                <div class="space-y-2">
                  <div v-for="category in categories" :key="category.id" class="flex items-center">
                    <input 
                      type="checkbox" 
                      :id="category.id" 
                      class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label :for="category.id" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      {{ category.name }}
                    </label>
                  </div>
                </div>
              </div>
              
              <!-- Difficulty Level -->
              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Difficulty Level</label>
                <div class="space-y-2">
                  <div v-for="level in levels" :key="level" class="flex items-center">
                    <input 
                      type="checkbox" 
                      :id="level.toLowerCase()" 
                      class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label :for="level.toLowerCase()" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      {{ level }}
                    </label>
                  </div>
                </div>
              </div>
              
              <!-- Price range -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price Range</label>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="sr-only">Min</label>
                    <input 
                      type="number" 
                      placeholder="Min" 
                      class="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label class="sr-only">Max</label>
                    <input 
                      type="number" 
                      placeholder="Max" 
                      class="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>
              
              <button class="btn btn-primary w-full mt-6">Apply Filters</button>
            </div>
          </div>
          
          <!-- Courses grid -->
          <div class="w-full md:w-3/4">
            <div class="mb-8 flex flex-col sm:flex-row items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <p class="mb-2 sm:mb-0 text-gray-700 dark:text-gray-300">Showing <span class="font-bold">12</span> courses</p>
              <div class="flex items-center space-x-2">
                <label class="text-sm text-gray-700 dark:text-gray-300">Sort by:</label>
                <select class="px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                v-for="course in courses" 
                :key="course.id" 
                class="card group hover:shadow-glow transition-all duration-300"
              >
                <div class="relative aspect-video overflow-hidden">
                  <img :src="course.image" :alt="course.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
                  <div class="absolute top-4 right-4 bg-accent-500 text-white px-2 py-1 rounded text-sm font-bold">
                    {{ course.level }}
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-2">{{ course.title }}</h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">{{ course.description }}</p>
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
                <div class="bg-gray-100 dark:bg-gray-700 p-4 flex items-center justify-between">
                  <div class="flex items-center text-sm text-gray-600 dark:text-gray-400">
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
            
            <!-- Pagination -->
            <div class="mt-12 flex justify-center">
              <div class="flex space-x-1">
                <button class="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">Previous</button>
                <button class="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-primary-500 text-white">1</button>
                <button class="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">2</button>
                <button class="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">3</button>
                <button class="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Courses | Aniverse Academy',
  meta: [
    { name: 'description', content: 'Comprehensive 3D animation and Blender courses for all skill levels.' }
  ]
})

const categories = [
  { id: 'modeling', name: 'Modeling' },
  { id: 'animation', name: 'Animation' },
  { id: 'materials', name: 'Materials & Texturing' },
  { id: 'lighting', name: 'Lighting & Rendering' },
  { id: 'rigging', name: 'Rigging' },
  { id: 'vfx', name: 'Visual Effects' },
  { id: 'game-art', name: 'Game Art' }
]

const levels = ['Beginner', 'Intermediate', 'Advanced']

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
  },
  {
    id: 'character-modeling',
    title: 'Character Modeling Workshop',
    description: 'Create detailed character models suitable for animation, games, and films.',
    image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    level: 'Intermediate',
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.6,
    reviews: 142,
    duration: '26 hours of content'
  },
  {
    id: 'environment-design',
    title: 'Environment Design',
    description: 'Create detailed and immersive 3D environments for games, animation, and film.',
    image: 'https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    level: 'Intermediate',
    price: 64.99,
    originalPrice: 94.99,
    rating: 4.7,
    reviews: 118,
    duration: '30 hours of content'
  },
  {
    id: 'lighting-mastery',
    title: 'Lighting & Rendering Mastery',
    description: 'Learn professional lighting techniques to create cinematic renders and animations.',
    image: 'https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    level: 'Advanced',
    price: 74.99,
    originalPrice: 109.99,
    rating: 4.8,
    reviews: 96,
    duration: '22 hours of content'
  }
]
</script>