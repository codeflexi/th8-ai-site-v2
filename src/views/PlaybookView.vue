<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-14">
    <!-- Intro -->
    <section class="animate-fade space-y-4 text-center max-w-3xl mx-auto">
      <div class="inline-flex items-center gap-2 rounded-full border border-th8-border bg-th8-surface px-3 py-1 text-[11px] text-slate-600">
        <span class="h-2 w-2 rounded-full bg-th8-primary"></span>
        TH8.AI Implementation Playbook
      </div>
      <h1 class="text-3xl lg:text-4xl font-bold text-th8-text">
        Playbook &amp; Deep Docs
      </h1>
      <p class="text-sm lg:text-base text-th8-text/80 leading-relaxed">
        หน้านี้รวบรวมเนื้อหาเชิงลึกสำหรับทีม Business, IT, Data และ Operations  
        ที่อยากเข้าใจว่าเราวาง <span class="font-semibold">Agentic AI System</span> ให้ใช้งานได้จริงในองค์กรอย่างไร
      </p>
    </section>

    <!-- Two main deep-docs -->
    <section class="animate-fade grid md:grid-cols-2 gap-6 text-sm">
      <!-- Deep Services -->
      <article class="relative overflow-hidden rounded-2xl border border-th8-border bg-th8-surface shadow-sm p-6 space-y-4">
        <div class="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-100/60"></div>
        <div class="relative space-y-2">
          <p class="text-[11px] font-semibold uppercase tracking-wide text-th8-primary">
            Deep Doc · Solutions &amp; Product
          </p>
          <h2 class="text-lg font-semibold text-th8-text">
            TH8 Solutions (Deep) – Agent Library &amp; Use cases
          </h2>
          <p class="text-[13px] text-th8-text/80 max-w-md">
            รวมรายละเอียด Agent แต่ละตัว, กลุ่มโซลูชัน, และตัวอย่าง Use case  
            ที่ลงลึกกว่าหน้า Solutions ปกติ เหมาะสำหรับการออกแบบ PoC / Pilot ร่วมกัน
          </p>
          <ul class="text-[12px] text-th8-text/75 space-y-1">
            <li>• FP&amp;A, Inventory, Route Planner, Document QC Agents</li>
            <li>• Mapping Agent → Workflow → ระบบที่ต้องเชื่อมต่อ</li>
            <li>• แนวทางเลือก Use case แรกสำหรับองค์กรของคุณ</li>
          </ul>
        </div>
        <div class="relative pt-3">
          <RouterLink
            :to="{ name: 'services-deep' }"
            class="inline-flex items-center rounded-full bg-th8-primary px-4 py-2 text-xs font-semibold text-white hover:bg-th8-accent"
          >
            เปิดดู Solutions Deep Version
          </RouterLink>
        </div>
      </article>

      <!-- Deep Methodology -->
      <article class="relative overflow-hidden rounded-2xl border border-th8-border bg-th8-surface shadow-sm p-6 space-y-4">
        <div class="absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-slate-100/80"></div>
        <div class="relative space-y-2">
          <p class="text-[11px] font-semibold uppercase tracking-wide text-th8-primary">
            Deep Doc · Methodology &amp; Architecture
          </p>
          <h2 class="text-lg font-semibold text-th8-text">
            Methodology (Deep) – 6 ขั้นตอน + 7-Layer Framework
          </h2>
          <p class="text-[13px] text-th8-text/80 max-w-md">
            เวอร์ชันเต็มของ Methodology ที่อธิบายทั้ง Journey, Framework,  
            และตัวอย่าง Diagram สำหรับใช้ใน Session ร่วมกับทีม Business + IT
          </p>
          <ul class="text-[12px] text-th8-text/75 space-y-1">
            <li>• 6-Step Engagement Model ฉบับเต็ม</li>
            <li>• TH8 · 7-Layer Agentic Framework พร้อมรายละเอียดแต่ละชั้น</li>
            <li>• แนวทางวาง Governance, Monitoring, Audit trail</li>
          </ul>
        </div>
        <div class="relative pt-3">
          <RouterLink
            :to="{ name: 'what-we-do-deep' }"
            class="inline-flex items-center rounded-full border border-th8-border bg-white px-4 py-2 text-xs font-semibold text-th8-text hover:border-th8-primary"
          >
            เปิดดู Methodology Deep Version
          </RouterLink>
        </div>
      </article>
    </section>

    <!-- Who is this for -->
    <section class="animate-fade space-y-6">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 class="text-lg font-semibold text-th8-text">
            หน้านี้เหมาะกับใคร?
          </h2>
          <p class="text-sm text-th8-text/80 max-w-2xl">
            ใช้สำหรับตอนที่คุณต้องคุยเชิงลึกกับทีมภายใน เช่น IT, Data, Process Owner, Finance,  
            หรือเวลาต้องอธิบายให้ผู้บริหารเห็นทั้งภาพ Business + ภาพสถาปัตยกรรมในชุดเดียว
          </p>
        </div>
        <div class="rounded-2xl border border-th8-border bg-th8-surface px-4 py-3 text-[12px] text-th8-text/80 shadow-sm">
          <p class="font-semibold text-th8-text mb-1">ตัวอย่างสถานการณ์ใช้งาน</p>
          <ul class="space-y-1">
            <li>• เตรียมประชุม PoC / Pilot Kick-off</li>
            <li>• ทำ Internal deck เสนอผู้บริหารหรือคณะกรรมการ</li>
            <li>• แชร์ให้ทีม IT/Data เห็นภาพก่อนลงมือ integrate</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Next steps -->
    <section class="animate-fade border-t border-th8-border pt-8 mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h2 class="text-base font-semibold text-th8-text">
          อยากให้เราช่วยออกแบบ Playbook เฉพาะสำหรับองค์กรคุณ?
        </h2>
        <p class="text-sm text-th8-text/80 max-w-2xl">
          เราสามารถช่วยสรุป Pain point, ระบบที่ใช้อยู่, และวาด Agentic System Diagram  
          ให้เหมาะกับ Context ของคุณ แล้วจึงค่อยเลือกว่าจะเริ่มจาก Use case ไหน
        </p>
      </div>
      <RouterLink
        :to="{ name: 'contact' }"
        class="inline-flex items-center rounded-full bg-th8-primary px-5 py-2 text-xs font-semibold text-white hover:bg-th8-accent"
      >
        นัด Session กับทีม TH8.AI
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
