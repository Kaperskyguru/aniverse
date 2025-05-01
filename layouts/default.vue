<template>
  <div class="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
    <TheNavbar />
    
    <main class="flex-grow">
      <slot />
    </main>
    
    <TheFooter />
  </div>
</template>