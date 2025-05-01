<template>
  <div>
    <section class="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div class="container text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Aniverse Academy</h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">Structured learning paths to master 3D animation and Blender.</p>
      </div>
    </section>
    
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Accelerate Your Animation Journey</h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg">
            Our structured learning paths take you from the fundamentals to professional-level skills,
            with guided progression and mentorship along the way.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl">
            <div class="h-1 bg-primary-500"></div>
            <div class="p-6">
              <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-2">Structured Learning Paths</h3>
              <p class="text-gray-600 dark:text-gray-400 text-center">
                Follow curated learning paths designed to build your skills progressively from fundamentals to advanced techniques.
              </p>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl">
            <div class="h-1 bg-secondary-500"></div>
            <div class="p-6">
              <div class="w-16 h-16 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-secondary-600 dark:text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-2">Community & Feedback</h3>
              <p class="text-gray-600 dark:text-gray-400 text-center">
                Join a community of fellow learners and receive feedback on your work from instructors and peers.
              </p>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl">
            <div class="h-1 bg-accent-500"></div>
            <div class="p-6">
              <div class="w-16 h-16 bg-accent-100 dark:bg-accent-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-accent-600 dark:text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-2">Professional Certification</h3>
              <p class="text-gray-600 dark:text-gray-400 text-center">
                Earn certificates that demonstrate your proficiency in specialized areas of 3D animation.
              </p>
            </div>
          </div>
        </div>
        
        <div class="max-w-5xl mx-auto">
          <h2 class="text-2xl font-bold mb-8 text-center">Learning Paths</h2>
          
          <div class="space-y-8">
            <div v-for="(path, index) in learningPaths" :key="path.id" class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <div class="md:flex">
                <div class="md:w-1/3 bg-gray-100 dark:bg-gray-700 p-6 flex flex-col justify-between">
                  <div>
                    <h3 class="text-xl font-bold mb-2">{{ path.title }}</h3>
                    <div class="flex items-center mb-4">
                      <div class="bg-primary-100 dark:bg-gray-600 text-primary-800 dark:text-primary-300 text-xs px-2 py-1 rounded-full">
                        {{ path.level }}
                      </div>
                      <div class="ml-2 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                        {{ path.duration }}
                      </div>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">{{ path.description }}</p>
                  </div>
                  <div>
                    <NuxtLink :to="`/academy/path/${path.id}`" class="btn btn-primary w-full">
                      View Path
                    </NuxtLink>
                  </div>
                </div>
                <div class="md:w-2/3 p-6">
                  <h4 class="text-lg font-medium mb-4">What You'll Learn:</h4>
                  <ul class="space-y-3">
                    <li v-for="skill in path.skills" :key="skill" class="flex items-start">
                      <svg class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-gray-700 dark:text-gray-300">{{ skill }}</span>
                    </li>
                  </ul>
                  
                  <div class="mt-6">
                    <h4 class="text-lg font-medium mb-4">Included Courses:</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div v-for="course in path.courses" :key="course.id" class="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div class="w-10 h-10 rounded-full bg-primary-100 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                          <span class="text-primary-700 dark:text-primary-300 font-medium">{{ course.order }}</span>
                        </div>
                        <div class="ml-3">
                          <h5 class="font-medium text-gray-800 dark:text-gray-200">{{ course.title }}</h5>
                          <p class="text-xs text-gray-500 dark:text-gray-400">{{ course.duration }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-16 bg-gray-100 dark:bg-gray-800">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p class="text-gray-600 dark:text-gray-400">Everything you need to know about the Academy learning experience.</p>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div class="space-y-4">
            <div v-for="(question, index) in faq" :key="index" class="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <button 
                class="w-full px-6 py-4 text-left font-medium flex justify-between items-center focus:outline-none"
                @click="question.isOpen = !question.isOpen"
              >
                <span>{{ question.question }}</span>
                <svg 
                  class="w-5 h-5 transition-transform" 
                  :class="{ 'transform rotate-180': question.isOpen }"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div v-if="question.isOpen" class="px-6 py-4 border-t dark:border-gray-600">
                <p class="text-gray-600 dark:text-gray-300">{{ question.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'Academy | Aniverse Academy',
  meta: [
    { name: 'description', content: 'Structured learning paths to master 3D animation and Blender with professional guidance.' }
  ]
})

const learningPaths = [
  {
    id: 'complete-3d-artist',
    title: 'Complete 3D Artist Path',
    level: 'Beginner to Advanced',
    duration: '6 months',
    description: 'A comprehensive path that takes you from complete beginner to professional 3D artist with all the skills needed for a career in animation.',
    skills: [
      'Master Blender from beginner to advanced level',
      'Create professional 3D models, materials, and animations',
      'Design entire 3D scenes with proper lighting and composition',
      'Develop a professional portfolio of 3D work',
      'Apply industry-standard workflows and techniques'
    ],
    courses: [
      { id: 'blender-fundamentals', title: 'Blender Fundamentals', order: '01', duration: '4 weeks' },
      { id: 'modeling-essentials', title: 'Modeling Essentials', order: '02', duration: '4 weeks' },
      { id: 'materials-texturing', title: 'Materials & Texturing', order: '03', duration: '4 weeks' },
      { id: 'lighting-rendering', title: 'Lighting & Rendering', order: '04', duration: '3 weeks' },
      { id: 'animation-basics', title: 'Animation Fundamentals', order: '05', duration: '4 weeks' },
      { id: 'portfolio-project', title: 'Portfolio Project', order: '06', duration: '5 weeks' }
    ]
  },
  {
    id: 'character-animation-specialist',
    title: 'Character Animation Specialist',
    level: 'Intermediate to Advanced',
    duration: '4 months',
    description: 'Specialize in bringing characters to life through animation, from basic movements to complex emotions and performances.',
    skills: [
      'Apply the 12 principles of animation to character movement',
      'Create convincing weight, timing, and anticipation',
      'Animate dialogue and facial expressions',
      'Develop personality and emotion in characters',
      'Build a specialized animation demo reel'
    ],
    courses: [
      { id: 'animation-principles', title: 'Animation Principles', order: '01', duration: '3 weeks' },
      { id: 'character-rigging', title: 'Character Rigging', order: '02', duration: '4 weeks' },
      { id: 'body-mechanics', title: 'Body Mechanics', order: '03', duration: '3 weeks' },
      { id: 'acting-animation', title: 'Acting for Animation', order: '04', duration: '4 weeks' },
      { id: 'demo-reel', title: 'Demo Reel Project', order: '05', duration: '4 weeks' }
    ]
  },
  {
    id: 'environment-artist',
    title: 'Environment Artist Path',
    level: 'Intermediate',
    duration: '3 months',
    description: 'Learn to create stunning 3D environments from concept to final render, perfect for games, films, or architectural visualization.',
    skills: [
      'Design cohesive 3D environments and scenes',
      'Create modular and optimized environmental assets',
      'Master environmental texturing techniques',
      'Apply lighting principles for atmosphere and mood',
      'Build environment portfolios for games or film'
    ],
    courses: [
      { id: 'environment-design', title: 'Environment Design Principles', order: '01', duration: '3 weeks' },
      { id: 'hard-surface-modeling', title: 'Hard Surface Modeling', order: '02', duration: '3 weeks' },
      { id: 'environment-texturing', title: 'Environment Texturing', order: '03', duration: '3 weeks' },
      { id: 'lighting-composition', title: 'Lighting & Composition', order: '04', duration: '3 weeks' }
    ]
  }
]

const faq = ref([
  {
    question: 'How do learning paths differ from individual courses?',
    answer: 'Learning paths provide a structured curriculum of multiple courses designed to be taken in sequence. They offer a more comprehensive education with a clear progression, mentorship, and often include projects to build your portfolio.',
    isOpen: true
  },
  {
    question: 'Do I need prior experience to start a learning path?',
    answer: 'It depends on the path. Some paths like "Complete 3D Artist" are designed for complete beginners, while others may require some foundational knowledge. Each path clearly indicates the recommended experience level.',
    isOpen: false
  },
  {
    question: 'How long do I have access to the courses in a learning path?',
    answer: 'Once enrolled in a learning path, you have lifetime access to all included courses and materials. You can revisit lessons anytime, even after completing the path.',
    isOpen: false
  },
  {
    question: 'Is there a schedule I need to follow?',
    answer: 'Learning paths are self-paced, so you can progress through them according to your own schedule. However, we provide recommended timeframes for each module to help you stay on track.',
    isOpen: false
  },
  {
    question: 'Can I get feedback on my work?',
    answer: 'Yes, academy students can submit assignments for review and feedback from instructors. Additionally, you can share your work with the community for peer feedback through our dedicated forums.',
    isOpen: false
  },
  {
    question: 'What hardware/software do I need?',
    answer: "You'll need a reasonably modern computer capable of running Blender (which is free). We recommend at least 16GB RAM, a dedicated graphics card, and a 3-button mouse. Detailed requirements are provided in each path description.",
    isOpen: false
  }
])
</script>