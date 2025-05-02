<template>
  <div>
    <HeroSection />
    <FeaturedCourses />
    <FeatureSection />
    <TestimonialsSection />
    <LatestBlogs />
    <CTASection />
  </div>
</template>

<script setup>
// Import components for homepage
import HeroSection from "~/components/home/HeroSection.vue";
import FeaturedCourses from "~/components/home/FeaturedCourses.vue";
import FeatureSection from "~/components/home/FeatureSection.vue";
import TestimonialsSection from "~/components/home/TestimonialsSection.vue";
import LatestBlogs from "~/components/home/LatestBlogs.vue";
import CTASection from "~/components/home/CTASection.vue";

// Set page metadata
useHead({
  title: "Aniverse Academy | 3D Animation & Blender Courses",
  meta: [
    {
      name: "description",
      content:
        "Learn 3D animation and Blender from a professional creator. Comprehensive courses for all skill levels.",
    },
  ],
});
</script>