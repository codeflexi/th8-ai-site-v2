<template>
  <div class="min-h-screen bg-slate-50 text-th8-text">
    <NavBar />
    <main class="pt-2">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>
