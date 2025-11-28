<template>
  <div class="bg-slate-50">
    <!-- HERO -->
    <section class="bg-th8-surface border-b border-th8-border">
      <div
        class="max-w-6xl mx-auto px-4 lg:px-6 py-14 lg:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
      >
        <!-- Left: Messaging -->
        <div class="space-y-6">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-th8-border bg-slate-50 px-3 py-1 text-[11px] text-slate-600"
          >
            <span class="h-2 w-2 rounded-full bg-th8-primary"></span>
            <span>ลดงาน Routine · ลด Error · เชื่อมระบบด้วย Agentic AI</span>
          </div>

          <h1 class="text-3xl lg:text-4xl font-semibold leading-tight text-th8-text">
            ลดงาน Routine <span class="text-th8-primary">30–50%</span> และลด Error
            <span class="text-th8-primary">20–40%</span>
            ด้วย <span class="underline decoration-th8-primary/60">Agentic AI</span> ที่เข้าไปเสริมกำลังให้ Workflow ของทีมคุณ
          </h1>

          <p class="text-sm lg:text-base text-th8-text/80 leading-relaxed max-w-xl">
            ไม่ใช่แค่ Prompt + LLM + API แต่คือการวาง
            <span class="font-semibold">Agentic System</span>
            ที่เชื่อม <span class="font-semibold">Workflow, Data และ Process</span> เข้าด้วยกัน
            ให้ Agent คุยกับ ERP, WMS, CRM, POS, Data warehouse และ LINE OA ช่วยคน
            ในงาน Accounting &Finance, Operations และ Logistics
          </p>

          <!-- Hero Metrics -->
          <div class="grid grid-cols-3 gap-3 text-[11px] lg:text-xs">
            <div class="rounded-2xl border border-th8-border bg-white p-3 shadow-sm">
              <p class="text-[10px] uppercase tracking-wide text-slate-500 mb-1">TIME SAVED</p>
              <p class="text-lg font-semibold text-th8-text">30–50%</p>
              <p class="text-[11px] text-slate-600">ลดงานคีย์มือ & งานติดตามงาน</p>
            </div>
            <div class="rounded-2xl border border-th8-border bg-white p-3 shadow-sm">
              <p class="text-[10px] uppercase tracking-wide text-slate-500 mb-1">ERROR ลดลง</p>
              <p class="text-lg font-semibold text-th8-text">20–40%</p>
              <p class="text-[11px] text-slate-600">เช็คเอกสาร / Transaction ข้ามระบบ</p>
            </div>
            <div class="rounded-2xl border border-th8-border bg-white p-3 shadow-sm">
              <p class="text-[10px] uppercase tracking-wide text-slate-500 mb-1">DESIGNED FOR</p>
              <p class="text-lg font-semibold text-th8-text">Enterprise & SME</p>
              <p class="text-[11px] text-slate-600">ออกแบบจากประสบการณ์ระบบระดับธนาคาร</p>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-wrap gap-3 pt-2">
            <RouterLink
              :to="{ name: 'contact' }"
              class="inline-flex items-center rounded-full bg-th8-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-th8-accent transition"
            >
              คุยโจทย์จริงกับทีม TH8.AI
            </RouterLink>
            <RouterLink
              :to="{ name: 'services' }"
              class="inline-flex items-center rounded-full border border-th8-border px-5 py-2.5 text-sm text-th8-text hover:border-th8-primary bg-white/80"
            >
              ดู Solutions &amp; Agent Suite
            </RouterLink>
          </div>
        </div>

        <!-- Right: Card แบบง่าย -->
        <div class="relative">
          <div class="absolute -inset-5 rounded-3xl bg-th8-primary/5 blur-2xl"></div>
          <div
            class="relative rounded-3xl border border-th8-border bg-white p-5 lg:p-6 shadow-md text-[11px] space-y-3"
          >
            <div class="flex items-center justify-between text-slate-500 mb-1">
              <span class="font-semibold text-th8-text">TH8 Agentic Flow</span>
              <span>Data → Agent → Workflow → UX</span>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <p class="font-semibold text-slate-800 mb-1">Business Workflow</p>
              <p class="text-slate-500">
                PO → Invoice → Stock<br />
                FP&amp;A → Scenario<br />
                Order → Picking → Delivery
              </p>
            </div>

            <div class="rounded-2xl border border-th8-border bg-red-50/70 p-3 flex items-center gap-3">
              <div>
                <p class="font-semibold text-th8-text mb-1">TH8 Agent Layer</p>
                <p class="text-th8-text/80">
                  Task Planner · Tool calling · RAG · Exception handling · Human-in-the-loop
                </p>
              </div>
              <div
                class="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-th8-primary text-white text-[15px]"
              >
                🤖
              </div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <p class="font-semibold text-slate-800 mb-1">Systems &amp; Data</p>
              <p class="text-slate-500">
                ERP / WMS / CRM<br />
                Data warehouse / DB<br />
                SOP, Policy, Contract
              </p>
            </div>

              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <p class="font-semibold text-slate-800 mb-1">Interface Layer</p>
              <p class="text-slate-500">
              LINE OA · Web portal · API · Google Sheet · Email
                Order → Picking → Delivery
              </p>
            </div>

            <p class="text-[11px] text-slate-500">
              เป้าหมายคือให้ Agent กลายเป็น “คนในทีม” ที่คุยกับระบบแทนมนุษย์  
              ไม่ใช่แค่โปรเจกต์ PoC ที่จบลงบนสไลด์
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- KEY SEGMENTS -->
    <section class="bg-white border-b border-th8-border py-16">
      <div class="max-w-6xl mx-auto px-4 space-y-10">
        <!-- Title -->
        <div class="text-center space-y-3">
          <h2 class="text-2xl font-bold text-th8-text">เราทำงานกับทีมแบบไหน?</h2>
          <p class="text-sm text-th8-text/70">
             TH8.AI ทำงานใกล้ชิดกับทีมที่ “แตะข้อมูลและระบบทุกวัน”  
              ไม่ว่าจะเป็นการเงิน ปฏิบัติการ หรือโลจิสติกส์
          </p>
        </div>

        <!-- 3 Columns -->
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Finance -->
          <div class="p-6 rounded-2xl border border-th8-border bg-slate-50">
            <h3 class="font-semibold text-th8-text mb-2">Finance &amp; FP&amp;A</h3>
            <p class="text-sm text-th8-text/70 mb-4">
              ลดเวลาปิดงบ วิเคราะห์ตัวเลขอัตโนมัติ เตรียม Insight ให้ผู้บริหาร
            </p>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Time saved 30–50%</li>
              <li>• ลด Human-error จากไฟล์ Excel / Sheet</li>
              <li>• FP&amp;A Copilot / Scenario Engine</li>
            </ul>
          </div>

          <!-- Ops -->
          <div class="p-6 rounded-2xl border border-th8-border bg-slate-50">
            <h3 class="font-semibold text-th8-text mb-2">Operations &amp; Inventory</h3>
            <p class="text-sm text-th8-text/70 mb-4">
              เชื่อมระบบเดิม + จัดการ Order, Stock, Exception แบบอัตโนมัติ
            </p>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Error ลดลง 20–40%</li>
              <li>• Inventory Health &amp; Replenishment</li>
              <li>• Order Intake &amp; Validation Agent</li>
            </ul>
          </div>

          <!-- Logistics -->
          <div class="p-6 rounded-2xl border border-th8-border bg-slate-50">
            <h3 class="font-semibold text-th8-text mb-2">Logistics &amp; Delivery</h3>
            <p class="text-sm text-th8-text/70 mb-4">
              Route planning, Dispatch, Follow-up และ Exception ช่วยลดภาระทีมขนส่ง
            </p>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• ลดค่าน้ำมัน / เพิ่ม Drop per trip</li>
              <li>• Route Planner &amp; Exception Engine</li>
              <li>• Delivery Reconciliation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 3 PILLARS / SOLUTIONS OVERVIEW -->
    <section class="bg-th8-surface border-b border-th8-border py-16">
      <div class="max-w-6xl mx-auto px-4 space-y-8">
        <!-- Title -->
        <div class="space-y-2">
          <h2 class="text-2xl font-bold text-th8-text">3 เสาหลักของ TH8.AI Solutions</h2>
          <p class="text-sm text-slate-600 max-w-xl">
            เราไม่ได้ขายแค่โมเดล AI แต่ขาย “ระบบที่ทำงานแทนทีมคุณ” ผ่าน Agent, Workflow
            และ Knowledge ที่ออกแบบรอบบริบทองค์กรของคุณจริง ๆ
          </p>
        </div>

        <!-- Columns -->
        <div class="grid md:grid-cols-3 gap-6 text-sm">
          <div class="rounded-2xl border border-th8-border bg-white p-5 shadow-sm space-y-3">
            <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Pillar 1 · AI Agent Suite
            </p>
            <h3 class="font-bold text-th8-text">Agent สำหรับงานหลักขององค์กร</h3>
            <p class="text-[13px] text-slate-700">
              FP&amp;A Copilot, Inventory &amp; Replenishment, Route Planner, Document QC  
              ที่ออกแบบมาจาก Use case จริงในองค์กรไทย
            </p>
          </div>

          <div class="rounded-2xl border border-th8-border bg-white p-5 shadow-sm space-y-3">
            <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Pillar 2 · AI Workflow Automation
            </p>
            <h3 class="font-bold text-th8-text">เชื่อม Agent เข้ากับระบบเดิมของคุณ</h3>
            <p class="text-[13px] text-slate-700">
              ERP, WMS, CRM, Google Sheet, Email, LINE OA  
              ให้ข้อมูลไหลอัตโนมัติแทนการคีย์มือและไล่เช็กข้ามระบบ
            </p>
          </div>

          <div class="rounded-2xl border border-th8-border bg-white p-5 shadow-sm space-y-3">
            <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Pillar 3 · AI Knowledge &amp; Analytics
            </p>
            <h3 class="font-bold text-th8-text">เปลี่ยนเอกสารกองใหญ่ให้ใช้การได้จริง</h3>
            <p class="text-[13px] text-slate-700">
              RAG, Document pipeline, Exception library และ Dashboard  
              ให้ AI เข้าใจ “ความมั่วซั่วจริง” ขององค์กรคุณและนำไปใช้ตัดสินใจได้
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- KPI / TRUST SECTION -->
    <section class="bg-slate-50 border-b border-th8-border py-16">
      <div class="max-w-6xl mx-auto px-4 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-bold text-th8-text">
            ตัวเลขที่องค์กรไทยคาดหวังได้จาก TH8 Agentic System
          </h2>
          <p class="text-sm text-slate-600 max-w-2xl">
            เป้าหมายชัดเจน: ไม่ใช่แค่ “ลองใช้ AI ดู” แต่ต้องกลับมาเป็นตัวเลขที่วัดได้จริง
            ทั้งเรื่องเวลา ความผิดพลาด และต้นทุนในการทำงานของทีม
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-4 text-sm">
          <div class="rounded-2xl border border-th8-border bg-white p-4 shadow-sm">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Routine Work</p>
            <p class="text-2xl font-semibold text-th8-text mb-1">30–50%</p>
            <p class="text-[12px] text-slate-600">
              ลดงานคีย์มือ ไล่เช็กเอกสาร และงานตามงานข้ามระบบ
            </p>
          </div>

          <div class="rounded-2xl border border-th8-border bg-white p-4 shadow-sm">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Error</p>
            <p class="text-2xl font-semibold text-th8-text mb-1">20–40%</p>
            <p class="text-[12px] text-slate-600">
              ลด Human error ใน PO, Invoice, Stock และ Transaction
            </p>
          </div>

          <div class="rounded-2xl border border-th8-border bg-white p-4 shadow-sm">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Cycle Time</p>
            <p class="text-2xl font-semibold text-th8-text mb-1">25–35%</p>
            <p class="text-[12px] text-slate-600">
              ลดเวลาปิดงบ เคลียร์งานสะสม และเคสค้างในระบบ
            </p>
          </div>

          <div class="rounded-2xl border border-th8-border bg-white p-4 shadow-sm">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Visibility</p>
            <p class="text-2xl font-semibold text-th8-text mb-1">Real-time</p>
            <p class="text-[12px] text-slate-600">
              ดึงข้อมูลจากหลายระบบมาอยู่ในมุมมองเดียวให้ทีมตัดสินใจได้เร็วขึ้น
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW WE WORK + PLAYBOOK -->
    <section class="bg-white py-16">
      <div class="max-w-6xl mx-auto px-4 space-y-12">
        <!-- 3 Steps -->
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-center text-th8-text">
            ทำงานกับเราแบบเป็นระบบ ชัดเจนตั้งแต่วันแรก
          </h2>
          <div class="grid md:grid-cols-3 gap-6 text-sm">
            <div
              class="bg-slate-50 rounded-2xl border border-th8-border shadow-sm p-6 text-center space-y-2"
            >
              <div
                class="w-10 h-10 mx-auto bg-th8-red text-white rounded-full flex items-center justify-center font-bold text-lg mb-1"
              >
                1
              </div>
              <h3 class="font-semibold text-th8-text">คุยโจทย์ &amp; วาดภาพรวม</h3>
              <p class="text-[13px] text-slate-700">
                เข้าใจบริบทธุรกิจ, ระบบที่ใช้อยู่, KPI ที่อยากเปลี่ยน  
                แล้วช่วยกันเลือก Use case แรกที่ Impact สูง
              </p>
            </div>

            <div
              class="bg-slate-50 rounded-2xl border border-th8-border shadow-sm p-6 text-center space-y-2"
            >
              <div
                class="w-10 h-10 mx-auto bg-th8-red text-white rounded-full flex items-center justify-center font-bold text-lg mb-1"
              >
                2
              </div>
              <h3 class="font-semibold text-th8-text">Prototype &amp; Pilot</h3>
              <p class="text-[13px] text-slate-700">
                สร้าง Prototype ที่แตะข้อมูลจริงและ Workflow จริง  
                ให้ทีมลองใช้ พร้อมเก็บ Feedback, Time saved, Error
              </p>
            </div>

            <div
              class="bg-slate-50 rounded-2xl border border-th8-border shadow-sm p-6 text-center space-y-2"
            >
              <div
                class="w-10 h-10 mx-auto bg-th8-red text-white rounded-full flex items-center justify-center font-bold text-lg mb-1"
              >
                3
              </div>
              <h3 class="font-semibold text-th8-text">Scale &amp; Roll-out</h3>
              <p class="text-[13px] text-slate-700">
                ขยายจาก 1 ทีม → ทั้งฝ่าย หรือหลายสาขา  
                พร้อม Governance, Training และ Monitoring
              </p>
            </div>
          </div>
        </div>

        <!-- Playbook CTA -->
        <div class="max-w-4xl mx-auto">
          <div
            class="rounded-2xl border border-th8-border bg-th8-surface p-8 shadow-sm space-y-4 text-center"
          >
            <p class="text-[11px] font-semibold uppercase tracking-wide text-th8-primary">
              สำหรับทีม IT / Data / Process Owner
            </p>
            <h3 class="text-lg font-semibold text-th8-text">อยากเห็นภาพเชิงเทคนิคมากขึ้น?</h3>
            <p class="text-sm text-th8-text/80 max-w-2xl mx-auto">
              Methodology แบบเต็ม, 7-layer framework, Diagram และตัวอย่าง Implementation  
              รวบรวมไว้ที่หน้า Playbook เพื่อใช้คุยเชิงลึกกับทีมภายในของคุณ
            </p>
            <RouterLink
              to="/playbook"
              class="inline-flex items-center rounded-full bg-th8-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-th8-accent mt-2"
            >
              เปิดดู Playbook
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="border-t border-th8-border bg-th8-surface">
      <div
        class="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div>
          <h2 class="text-lg font-semibold text-th8-text mb-1">
            อยากเห็น Agent ทำงานกับข้อมูลจริงของบริษัทคุณ?
          </h2>
          <p class="text-sm text-slate-600">
            เราช่วยคุณเลือกจุดเริ่มต้นที่ Impact สูง แต่ไม่ disrupt ทีมงานเกินไป
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <a
            href="https://line.me"
            target="_blank"
            class="inline-flex items-center justify-center rounded-full border border-th8-border px-4 py-2 text-xs font-medium text-th8-text hover:bg-slate-50"
          >
            แอด LINE สอบถาม
          </a>
          <RouterLink
            :to="{ name: 'contact' }"
            class="inline-flex items-center justify-center rounded-full bg-th8-primary px-4 py-2 text-xs font-semibold text-white hover:bg-th8-accent"
          >
            ส่งโจทย์ให้เราช่วยคิด
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
