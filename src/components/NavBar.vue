<template>
  <header class="border-b border-th8-border bg-th8-surface/80 backdrop-blur sticky top-0 z-20">
    <nav class="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-xl bg-th8-red flex items-center justify-center text-xs font-bold text-white shadow-sm">
          TH8
        </div>
        <div class="flex flex-col leading-tight">
          <span class="font-semibold tracking-tight text-th8-text">TH8.AI</span>
          <span class="text-[10px] uppercase text-slate-500">Agentic AI & Automation</span>
        </div>
      </RouterLink>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex items-center gap-6 text-sm">
        <li>
          <RouterLink
            :to="{ name: 'home' }"
            class="hover:text-th8-primary text-th8-text/80"
          >
            หน้าหลัก
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'services' }"
            class="hover:text-th8-primary text-th8-text/80"
          >
            Solutions & Product Suite
          </RouterLink>
        </li>
<li>
  <RouterLink
    :to="{ name: 'PlanSphere' }"
    class="hover:text-th8-primary text-th8-text font-semibold inline-flex items-center gap-1"
  >
    <span>PlanSphere™</span>
    <span class="text-[10px] text-red-400 uppercase tracking-[0.16em]">FP&A</span>
  </RouterLink>
</li>
        <li>
          <RouterLink
            :to="{ name: 'what-we-do' }"
            class="hover:text-th8-primary text-th8-text/80"
          >
            Methodology
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'case-studies' }"
            class="hover:text-th8-primary text-th8-text/80"
          >
            Case Studies
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'financial' }"
            class="inline-flex items-center gap-1 px-2 py-1 rounded-full border border-th8-border text-[11px] font-medium text-th8-primary bg-red-50/70 hover:border-th8-primary"
          >
            <span>AI FP&A Suite</span>
          </RouterLink>
        </li>
      </ul>

      <!-- Desktop CTA -->
      <div class="hidden md:flex items-center gap-2">
        <RouterLink
          :to="{ name: 'contact' }"
          class="inline-flex items-center gap-2 rounded-full bg-th8-primary px-4 py-1.5 text-xs font-semibold text-white hover:bg-th8-accent transition"
        >
          <span>คุยกับทีม TH8.AI</span>
        </RouterLink>
      </div>

      <!-- Mobile Toggle -->
      <button
        class="md:hidden inline-flex items-center justify-center rounded-full border border-th8-border px-2 py-1 text-[11px] text-th8-text bg-th8-surface"
        @click="open = !open"
        type="button"
      >
        <span v-if="!open">เมนู</span>
        <span v-else>ปิด</span>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="open"
      class="md:hidden border-t border-th8-border bg-th8-surface"
    >
      <div class="max-w-6xl mx-auto px-4 py-3 space-y-3 text-sm">
        <RouterLink
          :to="{ name: 'home' }"
          class="block py-1 text-th8-text/80 hover:text-th8-primary"
          @click="open = false"
        >
          หน้าหลัก
        </RouterLink>
        <RouterLink
          :to="{ name: 'services' }"
          class="block py-1 text-th8-text/80 hover:text-th8-primary"
          @click="open = false"
        >
          Solutions & Product Suite
        </RouterLink>

<RouterLink
  :to="{ name: 'PlanSphere' }"
  class="block py-1 text-th8-text font-semibold hover:text-th8-primary"
  @click="open = false"
>
  PlanSphere™ · FP&A
</RouterLink>
        <RouterLink
          :to="{ name: 'what-we-do' }"
          class="block py-1 text-th8-text/80 hover:text-th8-primary"
          @click="open = false"
        >
          Methodology
        </RouterLink>
        <RouterLink
          :to="{ name: 'case-studies' }"
          class="block py-1 text-th8-text/80 hover:text-th8-primary"
          @click="open = false"
        >
          Case Studies
        </RouterLink>
        <RouterLink
          :to="{ name: 'financial' }"
          class="block py-1 text-th8-primary font-semibold"
          @click="open = false"
        >
          AI FP&A Suite
        </RouterLink>
        <RouterLink
          :to="{ name: 'contact' }"
          class="block mt-2 rounded-full bg-th8-primary text-center text-xs font-semibold text-white py-2"
          @click="open = false"
        >
          คุยกับทีม TH8.AI
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const open = ref(false)
</script>
