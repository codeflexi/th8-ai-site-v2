<template>
  <div class="bg-slate-50 min-h-screen">
    <main class="max-w-6xl mx-auto px-4 py-12 space-y-10">
      <header class="space-y-3">
        <p class="text-xs font-semibold tracking-wide text-th8-primary uppercase">Pillar 1 · AI Agent Suite</p>
        <h1 class="text-2xl md:text-3xl font-bold text-th8-text">
          AI Agent Suite — ผู้ช่วย AI สำหรับทีมปฏิบัติการและการเงินของคุณ
        </h1>
        <p class="text-sm md:text-base text-slate-600 max-w-2xl">
          รวบรวม Agent สำหรับงานหลัก เช่น Inventory, FP&A, Route Planning และ Document QC ออกแบบจากโจทย์จริงขององค์กรไทย
          เพื่อให้เริ่มต้นจาก Use case ที่วัดผลได้ชัดเจน
        </p>
      </header>

      <section class="grid md:grid-cols-2 gap-6">
        <RouterLink
          :to="{ name: 'agent-inventory-demo' }"
          class="group rounded-2xl border border-th8-border bg-white p-6 hover:border-th8-primary hover:shadow-md transition space-y-3"
        >
          <div class="flex items-center gap-3">
            <div class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
              <svg viewBox="0 0 24 24" class="h-6 w-6 text-emerald-600">
                <rect x="4" y="5" width="7" height="5" rx="1.2" class="fill-current opacity-80" />
                <rect x="13" y="7.5" width="7" height="5" rx="1.2" class="fill-current opacity-50" />
                <rect x="8" y="14" width="8" height="5" rx="1.2" class="fill-current opacity-60" />
              </svg>
            </div>
            <div>
              <h2 class="font-semibold text-th8-text">Inventory &amp; Replenishment Agent</h2>
              <p class="text-xs text-slate-500">แดชบอร์ดสต็อก, จุดสั่งซื้อ, Exception และ Back-office data view</p>
            </div>
          </div>
          <p class="text-sm text-slate-600">
            เหมาะสำหรับธุรกิจที่มีหลายสาขา หลายคลังสินค้า และต้องการให้ระบบช่วยเตือนขาด–ล้น พร้อมแนะนำคำสั่งซื้ออัตโนมัติ
          </p>
          <p class="text-xs font-medium text-th8-primary group-hover:underline">ดูตัวอย่างหน้าจอ &rarr;</p>
        </RouterLink>

        <RouterLink
          :to="{ name: 'agent-fpa-demo' }"
          class="group rounded-2xl border border-th8-border bg-white p-6 hover:border-th8-primary hover:shadow-md transition space-y-3"
        >
          <div class="flex items-center gap-3">
            <div class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10">
              <svg viewBox="0 0 24 24" class="h-6 w-6 text-sky-700">
                <path d="M4 18h16" class="stroke-current opacity-60" stroke-width="1.4" stroke-linecap="round" />
                <rect x="5" y="10" width="3" height="6" class="fill-current opacity-50" />
                <rect x="11" y="8" width="3" height="8" class="fill-current opacity-80" />
                <rect x="17" y="6" width="3" height="10" class="fill-current opacity-60" />
              </svg>
            </div>
            <div>
              <h2 class="font-semibold text-th8-text">FP&amp;A Copilot &amp; Scenario Agent</h2>
              <p class="text-xs text-slate-500">แผงวางแผนยอดขาย P&amp;L Scenario และ Drill-down รายละเอียดสาขา</p>
            </div>
          </div>
          <p class="text-sm text-slate-600">
            เหมาะสำหรับ CFO / FP&amp;A team ที่ต้องการเห็นภาพผลกระทบทางการเงินของแต่ละ Scenario แบบ Real-time จากข้อมูลจริง
          </p>
          <p class="text-xs font-medium text-th8-primary group-hover:underline">ดูตัวอย่างหน้าจอ &rarr;</p>
        </RouterLink>
      </section>
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
