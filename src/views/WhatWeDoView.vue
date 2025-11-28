<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-16">
    <!-- Intro -->
    <section class="animate-fade space-y-4 text-center max-w-3xl mx-auto">
      <h1 class="text-3xl lg:text-4xl font-bold text-th8-text">
        Methodology: จาก Pain point → Agentic System
      </h1>
      <p class="text-base text-th8-text/80 leading-relaxed">
        วิธีทำงานของ TH8.AI แบ่งเป็น 2 มุมมองที่ทำงานร่วมกัน:
      </p>
      <div class="grid sm:grid-cols-2 gap-4 text-sm text-left">
        <div class="rounded-2xl border border-th8-border bg-th8-surface px-4 py-3">
          <p class="text-[11px] font-semibold text-th8-primary mb-1">มุมที่ 1 · Project Journey</p>
          <p class="text-th8-text/80">
            6 ขั้นตอนการทำงานร่วมกับทีมคุณ ตั้งแต่คุยโจทย์ → Pilot → ขยายผล
          </p>
        </div>
        <div class="rounded-2xl border border-th8-border bg-th8-surface px-4 py-3">
          <p class="text-[11px] font-semibold text-th8-primary mb-1">มุมที่ 2 · System Design</p>
          <p class="text-th8-text/80">
            7-Layer Framework ที่ใช้เป็น Checklist ตอนออกแบบ Agentic System
          </p>
        </div>
      </div>
    </section>

    <!-- 6-STEP ENGAGEMENT · HOW WE WORK WITH YOU -->
    <section class="animate-fade space-y-6">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h2 class="text-xl font-semibold text-th8-text flex items-center gap-2">
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-xs font-semibold text-th8-primary">1</span>
            <span>6 ขั้นตอนการทำงานร่วมกับ TH8.AI (Project Journey)</span>
          </h2>
          <p class="text-sm text-th8-text/70 mt-1">
            โฟกัสว่า “เราจะเดินไปด้วยกันยังไง” ตั้งแต่วันแรกที่เริ่มคุย จนถึงตอนขยายผลใช้จริงในองค์กร
          </p>
        </div>
      </div>

      <!-- Desktop timeline line -->
      <div class="hidden md:block relative mb-4">
        <div class="absolute left-0 right-0 top-5 h-[2px] bg-slate-100"></div>
        <div class="grid md:grid-cols-6 gap-4 text-center text-[11px]">
          <div class="relative">
            <div class="mx-auto h-8 w-8 rounded-full bg-th8-red text-white flex items-center justify-center font-semibold">1</div>
            <p class="mt-2 text-slate-600">Discover</p>
          </div>
          <div class="relative">
            <div class="mx-auto h-8 w-8 rounded-full bg-th8-red text-white flex items-center justify-center font-semibold">2</div>
            <p class="mt-2 text-slate-600">Map &amp; Model</p>
          </div>
          <div class="relative">
            <div class="mx-auto h-8 w-8 rounded-full bg-th8-red text-white flex items-center justify-center font-semibold">3</div>
            <p class="mt-2 text-slate-600">Design System</p>
          </div>
          <div class="relative">
            <div class="mx-auto h-8 w-8 rounded-full bg-th8-red text-white flex items-center justify-center font-semibold">4</div>
            <p class="mt-2 text-slate-600">Build &amp; Integrate</p>
          </div>
          <div class="relative">
            <div class="mx-auto h-8 w-8 rounded-full bg-th8-red text-white flex items-center justify-center font-semibold">5</div>
            <p class="mt-2 text-slate-600">Pilot</p>
          </div>
          <div class="relative">
            <div class="mx-auto h-8 w-8 rounded-full bg-th8-red text-white flex items-center justify-center font-semibold">6</div>
            <p class="mt-2 text-slate-600">Scale &amp; Govern</p>
          </div>
        </div>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-3 gap-6 text-sm">
        <!-- 1 -->
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <p class="text-[11px] font-semibold text-th8-primary">Step 1 · Discover</p>
          <h3 class="font-semibold text-th8-text">เข้าใจบริบท + เลือกจุดเริ่มต้น</h3>
          <p class="text-th8-text/80 text-[13px]">
            คุย Pain point, ระบบที่ใช้อยู่, ทีมที่เกี่ยวข้อง, KPI ที่อยากขยับ  
            สรุป 1–2 Use case แรกที่ Impact สูงแต่เริ่มได้ไว
          </p>
        </div>

        <!-- 2 -->
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <p class="text-[11px] font-semibold text-th8-primary">Step 2 · Map &amp; Model</p>
          <h3 class="font-semibold text-th8-text">ถอด Workflow + Data + Exception</h3>
          <p class="text-th8-text/80 text-[13px]">
            วาด flow การทำงานจริง, จุดตัดสินใจ, เอกสารที่ใช้, Rule พิเศษ  
            เปลี่ยนความรู้ในหัวทีมงานให้กลายเป็นภาพรวมที่คุยกันรู้เรื่อง
          </p>
        </div>

        <!-- 3 -->
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <p class="text-[11px] font-semibold text-th8-primary">Step 3 · Design Agentic System</p>
          <h3 class="font-semibold text-th8-text">กำหนด Agent + Tool + Interface</h3>
          <p class="text-th8-text/80 text-[13px]">
            ตัดสินใจว่าจะมี Agent กี่ตัว, ทำหน้าที่อะไร, ใช้ Tool / API ไหน  
            และผู้ใช้จะ interact ผ่านช่องทางไหน (Web, LINE, Email ฯลฯ)
          </p>
        </div>

        <!-- 4 -->
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <p class="text-[11px] font-semibold text-th8-primary">Step 4 · Build &amp; Integrate</p>
          <h3 class="font-semibold text-th8-text">สร้าง Prototype ที่แตะข้อมูลจริง</h3>
          <p class="text-th8-text/80 text-[13px]">
            พัฒนา Agent, Workflow, UI แบบเบา ๆ แต่เชื่อมกับระบบ/ข้อมูลจริง  
            เพื่อให้ทีมทดลองใช้ในงานจริงได้เร็วที่สุด
          </p>
        </div>

        <!-- 5 -->
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <p class="text-[11px] font-semibold text-th8-primary">Step 5 · Pilot &amp; Iterate</p>
          <h3 class="font-semibold text-th8-text">ทดลองกับทีมเล็ก ๆ แล้วปรับ</h3>
          <p class="text-th8-text/80 text-[13px]">
            ให้ทีมใช้งานในเคสจริง, เก็บ Feedback, Log, Exception  
            ปรับ Prompt, Rule, UX, Flow ให้ตรงกับหน้างานมากที่สุด
          </p>
        </div>

        <!-- 6 -->
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <p class="text-[11px] font-semibold text-th8-primary">Step 6 · Scale &amp; Govern</p>
          <h3 class="font-semibold text-th8-text">ขยายผล + วาง Governance</h3>
          <p class="text-th8-text/80 text-[13px]">
            ขยายจาก 1 ทีม → หลายทีม/หลายสาขา  
            พร้อมวางสิทธิ์, Monitoring, Audit trail, KPI Report ให้ผู้บริหาร
          </p>
        </div>
      </div>
    </section>

    <!-- TH8 7-LAYER AGENTIC FRAMEWORK · HOW WE DESIGN THE SYSTEM -->
    <section class="animate-fade space-y-6">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h2 class="text-xl font-semibold text-th8-text flex items-center gap-2">
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-xs font-semibold text-th8-primary">2</span>
            <span>TH8 · 7-Layer Agentic Framework (System Design Checklist)</span>
          </h2>
          <p class="text-sm text-th8-text/70 mt-1 max-w-3xl">
            เวลาลงมือออกแบบใน <span class="font-semibold">Step 3–4</span> เราใช้ Framework 7 ชั้นตัวนี้เป็น
            “Checklist” เพื่อไม่ให้หลุดมิติสำคัญของระบบ Agentic AI: ตั้งแต่ปัญหา → Data → Agent → UX → Governance
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-4 text-sm">
        <div class="space-y-3">
          <!-- 1 -->
          <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
            <p class="text-[11px] font-semibold text-th8-primary mb-1">Layer 1</p>
            <h3 class="font-semibold text-th8-text mb-1">Problem &amp; Outcome Layer</h3>
            <p class="text-th8-text/80 text-[13px]">
              นิยามปัญหา, เป้าหมาย, KPI, ข้อจำกัดให้ชัดเจน  
              เช่น Time saved, Error ลดลง, Cost per unit, SLA ลูกค้า
            </p>
          </div>

          <!-- 2 -->
          <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
            <p class="text-[11px] font-semibold text-th8-primary mb-1">Layer 2</p>
            <h3 class="font-semibold text-th8-text mb-1">Process &amp; Exception Layer</h3>
            <p class="text-th8-text/80 text-[13px]">
              วาด Workflow, Decision point, Exception case, SLA  
              เพื่อให้ Agent รองรับ “ความไม่เป๊ะ” ที่เกิดขึ้นจริงทุกวัน
            </p>
          </div>

          <!-- 3 -->
          <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
            <p class="text-[11px] font-semibold text-th8-primary mb-1">Layer 3</p>
            <h3 class="font-semibold text-th8-text mb-1">Data &amp; Knowledge Layer</h3>
            <p class="text-th8-text/80 text-[13px]">
              เชื่อมฐานข้อมูล, เอกสาร, Log, Metadata  
              เตรียม RAG / Data pipeline ให้ Agent ใช้ข้อมูลจริงเมื่อตัดสินใจ
            </p>
          </div>

          <!-- 4 -->
          <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
            <p class="text-[11px] font-semibold text-th8-primary mb-1">Layer 4</p>
            <h3 class="font-semibold text-th8-text mb-1">Agent &amp; Tool Layer</h3>
            <p class="text-th8-text/80 text-[13px]">
              ออกแบบ Agent แต่ละตัว, ความรับผิดชอบ, Prompt, Tool, Memory  
              รวมถึงการแบ่งงานระหว่างหลาย Agent เมื่อเคสซับซ้อน
            </p>
          </div>
        </div>

        <div class="space-y-3">
          <!-- 5 -->
          <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
            <p class="text-[11px] font-semibold text-th8-primary mb-1">Layer 5</p>
            <h3 class="font-semibold text-th8-text mb-1">Orchestration &amp; Human-in-loop</h3>
            <p class="text-th8-text/80 text-[13px]">
              วางลำดับการทำงานของ Agent, เงื่อนไขส่งต่อกัน,  
              จุดที่ต้องให้คนเข้ามา Review / Approve หรือรับ Alert
            </p>
          </div>

          <!-- 6 -->
          <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
            <p class="text-[11px] font-semibold text-th8-primary mb-1">Layer 6</p>
            <h3 class="font-semibold text-th8-text mb-1">Product &amp; Interaction Layer</h3>
            <p class="text-th8-text/80 text-[13px]">
              ออกแบบ UX/UI ในรูปแบบที่ทีมคุ้นเคย (Web portal, LINE, Email, Dashboard)  
              เพื่อให้ Agent แทรกเข้าไปอยู่ในงานประจำวันได้จริง
            </p>
          </div>

          <!-- 7 -->
          <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
            <p class="text-[11px] font-semibold text-th8-primary mb-1">Layer 7</p>
            <h3 class="font-semibold text-th8-text mb-1">Governance &amp; Metric Layer</h3>
            <p class="text-th8-text/80 text-[13px]">
              วางมาตรฐาน Log, Error handling, Monitoring, Access control, Audit  
              และ Dashboard สรุป Impact ให้ฝ่ายบริหารเห็นความคุ้มค่าอย่างต่อเนื่อง
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="animate-fade border-t border-th8-border pt-8 mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      <div>
        <h3 class="text-base font-semibold text-th8-text">
          อยากเห็น 6 ขั้นตอน + 7 Layers ถูกวางบน Use case ขององค์กรคุณ?
        </h3>
        <p class="text-sm text-th8-text/80">
          เราสามารถทำ Session สั้น ๆ ร่วมกับทีม Business + IT  
          เพื่อวาดภาพ Agentic System เบื้องต้นให้เห็นทั้ง Journey และ Architecture
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
