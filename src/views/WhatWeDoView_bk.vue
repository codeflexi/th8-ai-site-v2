<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-16">
    <!-- Intro -->
    <section class="animate-fade space-y-4 text-center max-w-3xl mx-auto">
      <h1 class="text-3xl lg:text-4xl font-bold text-th8-text">
        Methodology: จาก Pain point → Agentic System
      </h1>
      <p class="text-base text-th8-text/80 leading-relaxed">
        สิ่งที่ทำให้ TH8.AI แตกต่างคือเราไม่ได้มอง AI แค่ “Prompt + LLM”  
        แต่เรามองเป็นระบบที่ประกอบด้วย Process, Data, Agent, Tool, UX และ Governance
      </p>
    </section>

    <!-- 6-STEP ENGAGEMENT -->
    <section class="animate-fade space-y-6">
      <h2 class="text-xl font-semibold text-th8-text">
        6 ขั้นตอนการทำงานร่วมกับ TH8.AI
      </h2>
      <div class="grid md:grid-cols-3 gap-6 text-sm">
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
          <p class="text-[11px] font-semibold text-th8-primary mb-1">Step 1 · Discover</p>
          <h3 class="font-semibold text-th8-text mb-1">เข้าใจบริบท + เลือกจุดเริ่มต้น</h3>
          <p class="text-th8-text/80 text-sm">
            คุย Pain point, ระบบที่ใช้อยู่, ทีมที่เกี่ยวข้อง, KPI ที่ต้องการขยับ  
            แล้วช่วยกันเลือก Use case ที่ Impact สูงแต่เริ่มได้เร็ว
          </p>
        </div>

        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
          <p class="text-[11px] font-semibold text-th8-primary mb-1">Step 2 · Map &amp; Model</p>
          <h3 class="font-semibold text-th8-text mb-1">ถอด Workflow + Data + Exception</h3>
          <p class="text-th8-text/80 text-sm">
            วาดแผนผังกระบวนการ, จุดตัดสินใจ, เอกสารที่เกี่ยวข้อง, Rule พิเศษ  
            เพื่อเปลี่ยน Tacit knowledge เป็นแผนภาพและเอกสารที่ใช้สร้าง Agent ได้
          </p>
        </div>

        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
          <p class="text-[11px] font-semibold text-th8-primary mb-1">Step 3 · Design Agentic System</p>
          <h3 class="font-semibold text-th8-text mb-1">ออกแบบ Agent + Tool + Workflow</h3>
          <p class="text-th8-text/80 text-sm">
            เลือกว่าต้องมี Agent กี่ตัว ใครทำหน้าที่อะไร ใช้ Tool ไหนบ้าง  
            ต้องคุยกับระบบอะไร และใครเป็นคน Approve เมื่อมีเคสพิเศษ
          </p>
        </div>

        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
          <p class="text-[11px] font-semibold text-th8-primary mb-1">Step 4 · Build &amp; Integrate</p>
          <h3 class="font-semibold text-th8-text mb-1">สร้าง Prototype ที่แตะข้อมูลจริง</h3>
          <p class="text-th8-text/80 text-sm">
            สร้าง Agent, API, Workflow, UI แบบเบา ๆ  
            แต่เชื่อมกับระบบ/ข้อมูลจริง เพื่อให้ทีมทดลองได้อย่างเป็นรูปธรรม
          </p>
        </div>

        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
          <p class="text-[11px] font-semibold text-th8-primary mb-1">Step 5 · Pilot &amp; Iterate</p>
          <h3 class="font-semibold text-th8-text mb-1">ทดลองกับทีมเล็ก ๆ แล้วปรับให้เข้าที่</h3>
          <p class="text-th8-text/80 text-sm">
            ให้ทีมใช้ในงานจริง, เก็บ Feedback, Log, Exception  
            แล้วนำมาปรับ Prompt, Rule, UX, Flow จนเสถียร
          </p>
        </div>

        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
          <p class="text-[11px] font-semibold text-th8-primary mb-1">Step 6 · Scale &amp; Govern</p>
          <h3 class="font-semibold text-th8-text mb-1">ขยายผล + วาง Governance</h3>
          <p class="text-th8-text/80 text-sm">
            ขยายจาก 1 ทีม → หลายทีม/หลายสาขา พร้อมวางสิทธิ์, Monitoring, Audit trail  
            และวัดผลเป็นตัวเลขที่ฝ่ายบริหารใช้ได้
          </p>
        </div>
      </div>
    </section>

    <!-- TH8 7-LAYER AGENTIC FRAMEWORK -->
    <section class="animate-fade space-y-6">
      <h2 class="text-xl font-semibold text-th8-text">
        TH8 · 7-Layer Agentic Framework
      </h2>
      <p class="text-sm text-th8-text/80 max-w-3xl">
        เพื่อไม่ให้โปรเจกต์ AI กลายเป็นแค่ “PoC ที่ใช้จริงไม่ได้”
        เราใช้ Framework 7 ชั้นในการออกแบบทุกโซลูชัน Agentic AI
      </p>

      <div class="grid md:grid-cols-2 gap-4 text-sm">
        <div class="space-y-3">
          <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
            <h3 class="font-semibold text-th8-text mb-1">1. Problem &amp; Outcome Layer</h3>
            <p class="text-th8-text/80 text-[13px]">
              ระบุปัญหา, เป้าหมาย, KPI, ข้อจำกัดให้ชัดเจน เช่น Time saved, Error ลดลง, Cost per unit
            </p>
          </div>
          <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
            <h3 class="font-semibold text-th8-text mb-1">2. Process &amp; Exception Layer</h3>
            <p class="text-th8-text/80 text-[13px]">
              วาด Workflow, Decision point, Exception case, SLA  
              เพื่อให้ Agent ทำงานได้จริงในสภาพ “ไม่เป๊ะ” ขององค์กร
            </p>
          </div>
          <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
            <h3 class="font-semibold text-th8-text mb-1">3. Data &amp; Knowledge Layer</h3>
            <p class="text-th8-text/80 text-[13px]">
              เชื่อมฐานข้อมูล, เอกสาร, Log, Metadata  
              และเตรียม RAG pipeline ให้ Agent ใช้ข้อมูลจริงทุกครั้งที่ตัดสินใจ
            </p>
          </div>
          <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
            <h3 class="font-semibold text-th8-text mb-1">4. Agent &amp; Tool Layer</h3>
            <p class="text-th8-text/80 text-[13px]">
              ออกแบบ Agent แต่ละตัว, ความรับผิดชอบ, Prompt, Tool, Memory  
              รวมถึงการแบ่งงานระหว่างหลาย Agent หากจำเป็น
            </p>
          </div>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
            <h3 class="font-semibold text-th8-text mb-1">5. Orchestration &amp; Human-in-loop</h3>
            <p class="text-th8-text/80 text-[13px]">
              กำหนดว่า Agent ตัวไหนทำก่อน–หลัง, เมื่อไรต้องรอคนอนุมัติ,  
              เมื่อไรต้องส่ง Alert ให้ทีมดูแล
            </p>
          </div>
          <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
            <h3 class="font-semibold text-th8-text mb-1">6. Product &amp; Interaction Layer</h3>
            <p class="text-th8-text/80 text-[13px]">
              ออกแบบ UX/UI ในรูปแบบที่ทีมคุ้นเคย (Web, LINE, Email, Dashboard)  
              ให้ทุกอย่างใช้ได้จริงในชีวิตประจำวัน
            </p>
          </div>
          <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
            <h3 class="font-semibold text-th8-text mb-1">7. Governance &amp; Metric Layer</h3>
            <p class="text-th8-text/80 text-[13px]">
              วางมาตรฐาน Log, Error handling, Monitoring, Access control, Audit  
              และรายงานสรุปผลลัพธ์ให้ผู้บริหารเห็นความคุ้มค่า
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="animate-fade border-t border-th8-border pt-8 mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h3 class="text-base font-semibold text-th8-text">
          สนใจดูตัวอย่าง Framework นี้กับ Use case ขององค์กรคุณ?
        </h3>
        <p class="text-sm text-th8-text/80">
          เราสามารถทำ Session สั้น ๆ ร่วมกับทีม Business + IT  
          เพื่อวาดแผนภาพ Agentic System เบื้องต้นให้เห็นภาพร่วมกัน
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
