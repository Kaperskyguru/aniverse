<template>
  <div>
    <section class="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Animation & Blender Blog</h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">Tutorials, tips, and insights to help you master 3D animation.</p>
      </div>
    </section>
    
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container">
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Blog posts grid -->
          <div class="w-full md:w-2/3">
            <div class="grid grid-cols-1 gap-8">
              <div v-for="post in blogPosts" :key="post.slug" class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row">
                <div class="md:w-1/3 aspect-video md:aspect-auto">
                  <img :src="post.image" :alt="post.title" class="w-full h-full object-cover">
                </div>
                <div class="p-6 md:w-2/3">
                  <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span class="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-2 py-1 rounded text-xs font-medium">{{ post.category }}</span>
                    <span class="mx-2">•</span>
                    <span>{{ post.date }}</span>
                    <span class="mx-2">•</span>
                    <span>{{ post.readTime }} min read</span>
                  </div>
                  <h2 class="text-xl font-bold mb-2 hover:text-primary-500 transition-colors">{{ post.title }}</h2>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">{{ post.excerpt }}</p>
                  <NuxtLink :to="`/blog/${post.slug}`" class="inline-flex items-center text-primary-500 font-medium">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
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
          
          <!-- Sidebar -->
          <div class="w-full md:w-1/3">
            <!-- Categories -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
              <h3 class="text-lg font-bold mb-4">Categories</h3>
              <ul class="space-y-2">
                <li v-for="category in categories" :key="category.slug" class="flex justify-between items-center">
                  <NuxtLink :to="`/blog/category/${category.slug}`" class="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                    {{ category.name }}
                  </NuxtLink>
                  <span class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs">{{ category.count }}</span>
                </li>
              </ul>
            </div>
            
            <!-- Popular posts -->
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 class="text-lg font-bold mb-4">Popular Posts</h3>
              <ul class="space-y-4">
                <li v-for="post in popularPosts" :key="post.slug" class="flex space-x-3">
                  <div class="flex-shrink-0 w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
                    <img :src="post.image" :alt="post.title" class="w-full h-full object-cover">
                  </div>
                  <div>
                    <NuxtLink :to="`/blog/${post.slug}`" class="font-medium text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 line-clamp-2">
                      {{ post.title }}
                    </NuxtLink>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ post.date }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Blog | Aniverse Academy',
  meta: [
    { name: 'description', content: 'Tutorials, tips, and insights on 3D animation and Blender.' }
  ]
})

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
  },
  {
    title: 'Animation Principles: Bringing Your Characters to Life',
    slug: 'animation-principles',
    excerpt: 'Discover the fundamental principles of animation that have been used by professionals since the golden age of animation.',
    image: 'https://images.pexels.com/photos/14940127/pexels-photo-14940127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'Mar 15, 2025',
    readTime: 8,
    category: 'Animation Fundamentals'
  },
  {
    title: 'Optimizing Your 3D Scenes for Better Performance',
    slug: 'optimizing-3d-scenes',
    excerpt: 'Learn how to make your Blender projects run smoother with these performance optimization techniques for complex scenes.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'Mar 10, 2025',
    readTime: 7,
    category: 'Technical Tips'
  }
]

const categories = [
  { name: 'Animation Fundamentals', slug: 'animation-fundamentals', count: 12 },
  { name: 'Character Animation', slug: 'character-animation', count: 8 },
  { name: 'Materials & Texturing', slug: 'materials-texturing', count: 15 },
  { name: 'Modeling Techniques', slug: 'modeling-techniques', count: 10 },
  { name: 'Workflow Tips', slug: 'workflow-tips', count: 7 },
  { name: 'Technical Tips', slug: 'technical-tips', count: 9 },
  { name: 'Industry Insights', slug: 'industry-insights', count: 5 }
]

const popularPosts = [
  {
    title: 'How to Create Cinematic Lighting in Blender',
    slug: 'cinematic-lighting-blender',
    image: 'https://images.pexels.com/photos/6985132/pexels-photo-6985132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'Feb 20, 2025'
  },
  {
    title: 'Understanding the Graph Editor for Better Animation',
    slug: 'understanding-graph-editor',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'Feb 12, 2025'
  },
  {
    title: 'Creating Stylized Character Hair in Blender',
    slug: 'stylized-character-hair',
    image: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'Jan 28, 2025'
  },
  {
    title: 'Procedural Texturing: Creating Unique Materials',
    slug: 'procedural-texturing',
    image: 'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'Jan 15, 2025'
  }
]
</script>