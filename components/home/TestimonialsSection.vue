<template>
  <section class="section bg-gray-800 text-white">
    <div class="container">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
        <p class="text-gray-400 max-w-3xl mx-auto">Hear from our students who have transformed their skills through our courses.</p>
      </div>
      
      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 600 } }"
      >
        <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-gray-700 rounded-lg p-6 border border-gray-600">
          <div class="flex items-center mb-4">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full mr-4">
            <div>
              <h4 class="font-bold">{{ testimonial.name }}</h4>
              <p class="text-gray-400 text-sm">{{ testimonial.role }}</p>
            </div>
          </div>
          <div class="flex text-yellow-400 mb-2">
            <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="{ 'text-gray-500': i > testimonial.rating }" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <p class="text-gray-300 mb-4">{{ testimonial.testimonial }}</p>
          <p class="text-primary-400 text-sm font-medium">{{ testimonial.course }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Freelance Animator",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    testimonial: "The character animation course completely transformed my workflow. The techniques I learned helped me land my first major client project!",
    course: "Character Animation Masterclass"
  },
  {
    name: "Marcus Johnson",
    role: "Game Developer",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    testimonial: "As a game developer, I needed to quickly learn Blender to create assets. This course was perfect - practical, efficient, and focused on exactly what I needed.",
    course: "Blender Fundamentals"
  },
  {
    name: "Elena Rodriguez",
    role: "Architectural Visualizer",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4,
    testimonial: "The lighting and materials course helped me take my architectural renders from good to stunning. My clients have been amazed by the improvement.",
    course: "Advanced Materials & Texturing"
  },
  {
    name: "David Kim",
    role: "Student",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    testimonial: "I started with zero 3D experience, but the step-by-step approach made learning Blender so much easier than I expected. Now I'm creating my own short films!",
    course: "Blender Fundamentals"
  },
  {
    name: "Sophia Williams",
    role: "Digital Artist",
    avatar: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    testimonial: "The instructor's explanations are crystal clear and the project-based approach keeps you motivated throughout the entire course.",
    course: "Character Creation Workshop"
  },
  {
    name: "Michael Thompson",
    role: "Motion Designer",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4,
    testimonial: "Coming from After Effects, I was intimidated by 3D. This course broke down complex concepts into manageable chunks. Highly recommended!",
    course: "3D Motion Graphics"
  }
]
</script>