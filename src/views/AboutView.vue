<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-10">
    <!-- Intro -->
    <section class="animate-fade grid lg:grid-cols-[2fr,1.2fr] gap-10 items-start">
      <div class="space-y-4">
        <h1 class="text-3xl font-bold text-th8-text">About TH8.AI</h1>
        <p class="text-sm text-th8-text/80 leading-relaxed">
          TH8.AI เป็นสตูดิโอ Agentic AI &amp; Automation ขนาดเล็กที่โฟกัสการทำงานกับองค์กรในไทย  
          โดยเฉพาะฝั่ง Finance, Supply Chain, Logistics, Warehouse, FMCG และ Manufacturing
        </p>
        <p class="text-sm text-th8-text/80 leading-relaxed">
          เราผสมผสานประสบการณ์จริงจากการทำงานในองค์กรใหญ่ (เช่น ธนาคาร)  
          เข้ากับความเร็วและความยืดหยุ่นแบบทีมเล็ก  
          เพื่อทำให้ AI Agent ใช้งานได้จริง ไม่ใช่แค่ PoC หรือ Demo สวย ๆ
        </p>
        <ul class="text-sm text-th8-text/80 space-y-1">
          <li>• เน้น Business impact และ KPI ที่วัดผลได้</li>
          <li>• ทำงานร่วมกับทีมปฏิบัติการจริง ตั้งแต่วันแรก</li>
          <li>• วาง Architecture ให้เติบโตต่อได้ในระยะยาว</li>
        </ul>
      </div>

      <div class="rounded-2xl border border-th8-border bg-th8-surface p-5 shadow-sm space-y-4">
        <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
          Background &amp; Working Style
        </p>
        <ul class="text-sm text-th8-text/80 space-y-2">
          <li>• ประสบการณ์ออกแบบระบบและ Data platform ให้กับองค์กรขนาดใหญ่ในไทย</li>
          <li>• เข้าใจทั้งมุม Business, Process, Data, และ Engineering</li>
          <li>• ทำงานแบบ Co-build: ช่วยสร้าง + ถ่ายทอดให้ทีมคุณดูแลต่อได้</li>
        </ul>
        <p class="text-[11px] text-slate-500">
          เป้าหมายของเราคือทำให้ทีมของคุณ “เก่งขึ้นด้วย AI”  
          ไม่ใช่ทำให้ต้องพึ่ง Vendor ไปตลอด
        </p>
      </div>
    </section>

    <!-- Principles -->
    <section class="animate-fade space-y-6">
      <h2 class="text-xl font-semibold text-th8-text">
        หลักคิดในการทำงานของ TH8.AI
      </h2>
      <div class="grid md:grid-cols-3 gap-6 text-sm">
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <h3 class="font-semibold text-th8-text">Start from Reality, not Slides</h3>
          <p class="text-th8-text/80 text-sm">
            เริ่มจากปัญหาและบริบทจริงของหน้างาน  
            ลงไปดูว่าคนทำงานจริง ๆ ทำอะไรกันทุกวัน ก่อนออกแบบโซลูชัน
          </p>
        </div>
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <h3 class="font-semibold text-th8-text">Human + AI, ไม่ใช่แทนที่กัน</h3>
          <p class="text-th8-text/80 text-sm">
            มอง AI เป็นเครื่องมือช่วยยกระดับศักยภาพทีม  
            ให้คนมีเวลาไปทำงานที่ใช้การคิดและการตัดสินใจมากขึ้น
          </p>
        </div>
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <h3 class="font-semibold text-th8-text">Architecture before Tools</h3>
          <p class="text-th8-text/80 text-sm">
            เลือก Tech stack ตามโจทย์ ไม่วิ่งตามกระแส  
            และวาง Architecture ให้รองรับการเติบโตในอนาคต
          </p>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="animate-fade space-y-6">
      <h2 class="text-xl font-semibold text-th8-text">
        Tech Stack ที่เราถนัด
      </h2>
      <div class="grid md:grid-cols-2 gap-6 text-sm">
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <h3 class="font-semibold text-th8-text">Agentic &amp; AI Layer</h3>
          <ul class="text-[13px] text-th8-text/80 space-y-1">
            <li>• LangChain, LangGraph, CrewAI</li>
            <li>• Retrieval-Augmented Generation (RAG), HyDE, Tool calling</li>
            <li>• MCP / Connector-based Integration</li>
          </ul>
        </div>
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <h3 class="font-semibold text-th8-text">Backend &amp; Data Platform</h3>
          <ul class="text-[13px] text-th8-text/80 space-y-1">
            <li>• FastAPI, Python, Node.js</li>
            <li>• PostgreSQL, Supabase, OpenSearch, Data warehouse บน Cloud</li>
            <li>• Integration กับ ERP, WMS, CRM, LINE OA, Shopee/Lazada, Google Sheet</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="animate-fade border-t border-th8-border pt-8 mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h3 class="text-base font-semibold text-th8-text">
          ถ้าองค์กรของคุณอยากเริ่มทดลอง Agentic AI แบบลงมือทำจริง
        </h3>
        <p class="text-sm text-th8-text/80">
          เราพร้อมช่วยคิดทั้งมุมกลยุทธ์, สถาปัตยกรรม และลงมือสร้าง Prototype  
          เพื่อให้ทีมของคุณเห็นผลลัพธ์จากข้อมูลจริง
        </p>
      </div>
      <RouterLink
        :to="{ name: 'contact' }"
        class="inline-flex items-center rounded-full bg-th8-primary px-5 py-2 text-xs font-semibold text-white hover:bg-th8-accent"
      >
        คุยกับทีม TH8.AI
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
