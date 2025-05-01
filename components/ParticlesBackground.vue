<template>
  <canvas ref="canvas" class="absolute top-0 left-0 w-full h-full"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const canvas = ref(null)
let animationId = null
let ctx
let particles = []

const props = defineProps({
  count: {
    type: Number,
    default: 50
  },
  color: {
    type: String,
    default: '#7B68EE'
  },
  speed: {
    type: Number,
    default: 0.5
  }
})

function createParticles() {
  particles = []
  const count = props.count
  
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.value.width,
      y: Math.random() * canvas.value.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * props.speed,
      speedY: (Math.random() - 0.5) * props.speed,
      opacity: Math.random() * 0.5 + 0.1
    })
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  
  particles.forEach(particle => {
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.fillStyle = props.color.replace(')', `, ${particle.opacity})`)
    ctx.fill()
    
    // Update position
    particle.x += particle.speedX
    particle.y += particle.speedY
    
    // Wrap around canvas boundaries
    if (particle.x > canvas.value.width) particle.x = 0
    if (particle.x < 0) particle.x = canvas.value.width
    if (particle.y > canvas.value.height) particle.y = 0
    if (particle.y < 0) particle.y = canvas.value.height
  })
  
  animationId = requestAnimationFrame(drawParticles)
}

function initCanvas() {
  if (!canvas.value) return
  
  ctx = canvas.value.getContext('2d')
  
  // Set canvas dimensions
  const updateCanvasSize = () => {
    canvas.value.width = canvas.value.offsetWidth
    canvas.value.height = canvas.value.offsetHeight
    createParticles()
  }
  
  updateCanvasSize()
  window.addEventListener('resize', updateCanvasSize)
  
  // Start animation
  drawParticles()
  
  return () => {
    window.removeEventListener('resize', updateCanvasSize)
    cancelAnimationFrame(animationId)
  }
}

onMounted(() => {
  initCanvas()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})

watch([() => props.count, () => props.color, () => props.speed], () => {
  createParticles()
})
</script>