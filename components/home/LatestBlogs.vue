<template>
  <section class="section bg-gray-50 dark:bg-gray-900">
    <div class="container">
      <div class="flex flex-col md:flex-row items-center justify-between mb-16">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-2">Latest From The Blog</h2>
          <p class="text-gray-600 dark:text-gray-400">Tutorials, tips, and industry insights for 3D artists.</p>
        </div>
        <NuxtLink to="/blog" class="btn btn-primary mt-4 md:mt-0">
          View All Posts
        </NuxtLink>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(post, index) in blogPosts" 
          :key="post.slug" 
          class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 group"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 100 * index } }"
        >
          <div class="relative aspect-video overflow-hidden">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-4 left-4 bg-primary-500 text-white px-2 py-1 rounded text-sm font-medium">
              {{ post.category }}
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
              <span>{{ post.date }}</span>
              <span class="mx-2">•</span>
              <span>{{ post.readTime }} min read</span>
            </div>
            <h3 class="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">{{ post.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ post.excerpt }}</p>
            <NuxtLink :to="`/blog/${post.slug}`" class="inline-flex items-center text-primary-500 font-medium">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const blogPosts = [
  {
    title: '10 Essential Blender Shortcuts Every Animator Should Know',
    slug: 'essential-blender-shortcuts',
    excerpt: 'Speed up your workflow with these must-know keyboard shortcuts that will make your animation process much more efficient.',
    image: 'https://images.pexels.com/photos/636243/pexels-photo-636243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'Apr 15, 2025',
    readTime: 6,
    category: 'Workflow Tips'
  },
  {
    title: 'Mastering Character Rigging: From Basics to Advanced Techniques',
    slug: 'mastering-character-rigging',
    excerpt: 'Learn how to create flexible, animation-ready character rigs that will bring your characters to life with natural movement.',
    image: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'Apr 3, 2025',
    readTime: 12,
    category: 'Character Animation'
  },
  {
    title: 'Creating Realistic Materials in Blender: A Complete Guide',
    slug: 'realistic-materials-in-blender',
    excerpt: 'Explore the principles of physically-based rendering and learn to create stunning, realistic materials for your 3D assets.',
    image: 'https://images.pexels.com/photos/2928158/pexels-photo-2928158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'Mar 28, 2025',
    readTime: 10,
    category: 'Materials & Texturing'
  }
]
</script>