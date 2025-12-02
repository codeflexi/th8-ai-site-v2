<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-12">
    <!-- Intro -->
    <section class="animate-fade space-y-4">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div class="space-y-3 max-w-2xl">
          <h1 class="text-3xl font-bold text-th8-text">
            Solutions &amp; Product Suite
          </h1>
          <p class="text-sm text-th8-text/80">
            TH8.AI ไม่ได้ขายแค่โมเดล AI สำเร็จรูป  
            แต่ประกอบ <span class="font-semibold">Agent + Workflow + Data</span>
            ให้ทำงานร่วมกันเพื่อเปลี่ยน KPI ขององค์กรคุณจริง ๆ
          </p>
        </div>

        <!-- Small visual summary -->
        <div class="grid grid-cols-3 gap-3 text-[11px]">
          <div class="rounded-2xl border border-th8-border bg-th8-surface px-3 py-2.5 shadow-sm">
            <div class="flex items-center gap-2 mb-1.5">
              <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-[14px]">฿</span>
              <span class="font-semibold text-th8-text">Finance</span>
            </div>
            <p class="text-slate-600">FP&amp;A, งบการเงิน, Scenario</p>
          </div>
          <div class="rounded-2xl border border-th8-border bg-th8-surface px-3 py-2.5 shadow-sm">
            <div class="flex items-center gap-2 mb-1.5">
              <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-[14px]">⚙️</span>
              <span class="font-semibold text-th8-text">Operations</span>
            </div>
            <p class="text-slate-600">Order, Warehouse, Route</p>
          </div>
          <div class="rounded-2xl border border-th8-border bg-th8-surface px-3 py-2.5 shadow-sm">
            <div class="flex items-center gap-2 mb-1.5">
              <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-[14px]">📚</span>
              <span class="font-semibold text-th8-text">Knowledge</span>
            </div>
            <p class="text-slate-600">SOP, Policy, Document</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Hero: PlanSphere FP&A Suite -->
    <section class="animate-fade space-y-4 border border-th8-border rounded-3xl bg-th8-surface px-4 py-5">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div class="space-y-3 max-w-xl">
          <p class="text-[11px] uppercase tracking-[0.25em] text-th8-primary flex items-center gap-2">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-th8-primary"></span>
            Hero Product · FP&A
          </p>
          <h2 class="text-2xl font-semibold text-th8-text">
            PlanSphere™ · AI FP&A Suite สำหรับองค์กรไทย
          </h2>
          <p class="text-sm text-th8-text/80">
            ทำ Budgeting, Forecasting, Actual vs Plan และ Scenario บน Platform เดียว
            พร้อม AI FP&A ที่ช่วยหาสาเหตุของตัวเลขและเขียน Insight ให้ผู้บริหารอัตโนมัติ
          </p>
          <ul class="text-[12px] text-slate-600 space-y-1.5">
            <li>• เหมาะสำหรับ Hospital, FMCG, Logistics, Manufacturing, Retail Chain</li>
            <li>• ใช้ข้อมูลจาก ERP / Excel เดิม ไม่ต้องเปลี่ยนระบบ</li>
            <li>• Implement ภายใน 6–8 สัปดาห์</li>
          </ul>
          <div class="flex flex-wrap items-center gap-3 pt-1">
            <RouterLink
              :to="{ name: 'PlanSphere' }"
              class="inline-flex items-center gap-2 rounded-full bg-th8-primary px-5 py-2 text-xs font-semibold text-white hover:bg-th8-accent"
            >
              <span>ดูรายละเอียด PlanSphere™</span>
            </RouterLink>
            <RouterLink
              :to="{ name: 'fpa-playbook' }"
              class="text-[11px] font-semibold text-th8-primary hover:underline"
            >
              เปิด FP&A Playbook → 
            </RouterLink>
            <RouterLink
              :to="{ name: 'fpa-cases' }"
              class="text-[11px] font-semibold text-th8-primary hover:underline"
            >
              อ่าน FP&A Case Studies →
            </RouterLink>
          </div>
        </div>

        <!-- Highlight metrics -->
        <div class="w-full md:w-72 grid grid-cols-2 gap-3 text-[11px]">
          <div class="rounded-2xl border border-th8-border bg-th8-surface px-3 py-3">
            <p class="text-slate-500 mb-1">ลดเวลาทำงบ / report</p>
            <p class="text-xl font-semibold text-th8-text">50–70%</p>
          </div>
          <div class="rounded-2xl border border-th8-border bg-th8-surface px-3 py-3">
            <p class="text-slate-500 mb-1">ลด Excel version chaos</p>
            <p class="text-xl font-semibold text-th8-text">3–5×</p>
          </div>
          <div class="rounded-2xl border border-th8-border bg-th8-border/60 bg-slate-50 px-3 py-3 col-span-2">
            <p class="text-slate-500 mb-1">เหมาะกับบริษัทที่ต้อง consolidate หลาย BU / หลายสาขา</p>
            <p class="text-[11px] text-slate-700">
              เครือโรงพยาบาล, Distributor, 3PL, Fulfillment, Manufacturer ที่อยาก “คุยกับตัวเลข” แบบ Real-time
            </p>
          </div>
        </div>
      </div>
    </section>


    <!-- 3 Pillars -->
    <section class="animate-fade space-y-5">
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <h2 class="text-lg font-semibold text-th8-text flex items-center gap-2">
          <span class="inline-block h-6 w-6 rounded-full bg-red-100 text-[13px] flex items-center justify-center text-th8-primary">3</span>
          <span>3 เสาหลักของ TH8.AI Solutions</span>
        </h2>

        <!-- 🔗 Link ไปหน้า 3 Tracks / Methodology -->
        <RouterLink
          to="/solutions"
          class="text-[11px] font-semibold text-th8-primary hover:underline flex items-center gap-1"
        >
          ดู 3 Tracks &amp; วิธีการ Implement แบบละเอียด
          <span>→</span>
        </RouterLink>
      </div>

      <div class="grid md:grid-cols-3 gap-6 text-sm">
        <!-- Pillar 1 -->
        <div class="p-5 border border-th8-border rounded-2xl bg-th8-surface shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-[11px] uppercase tracking-wide text-slate-500">Pillar 1</p>
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-[14px]">🤖</span>
          </div>
          <h3 class="font-semibold text-th8-text">AI Agent Suite</h3>
          <p class="text-th8-text/80 text-[13px]">
            Agent ที่ออกแบบมาสำหรับ Finance, Ops, Logistics, Warehouse
          </p>
          <ul class="text-[12px] text-slate-600 space-y-1 mt-1">
            <li>• FP&amp;A Copilot Agent</li>
            <li>• Inventory &amp; Replenishment Agent</li>
            <li>• Route Planner &amp; Dispatch Agent</li>
            <li>• Document QC &amp; Reconciliation Agent</li>
          </ul>
        </div>

        <!-- Pillar 2 -->
        <div class="p-5 border border-th8-border rounded-2xl bg-th8-surface shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-[11px] uppercase tracking-wide text-slate-500">Pillar 2</p>
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-[14px]">🔗</span>
          </div>
          <h3 class="font-semibold text-th8-text">AI Workflow Automation</h3>
          <p class="text-th8-text/80 text-[13px]">
            ให้ข้อมูลไหลอัตโนมัติระหว่างระบบเดิม โดยมี Agent เป็นคนกลาง
          </p>
          <ul class="text-[12px] text-slate-600 space-y-1 mt-1">
            <li>• เชื่อม ERP, WMS, CRM, Sheet, Email, LINE OA</li>
            <li>• Trigger จากเอกสารหรือ Event</li>
            <li>• Human-in-the-loop สำหรับเคสพิเศษ</li>
          </ul>
        </div>

        <!-- Pillar 3 -->
        <div class="p-5 border border-th8-border rounded-2xl bg-th8-surface shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <p class="text-[11px] uppercase tracking-wide text-slate-500">Pillar 3</p>
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-[14px]">📊</span>
          </div>
          <h3 class="font-semibold text-th8-text">AI Knowledge &amp; Analytics</h3>
          <p class="text-th8-text/80 text-[13px]">
            ทำให้ AI เข้าใจเอกสาร, Log งาน และ Tacit knowledge ของทีม
          </p>
          <ul class="text-[12px] text-slate-600 space-y-1 mt-1">
            <li>• RAG + Vector DB + Document Pipeline</li>
            <li>• Exception Library &amp; Guardrail</li>
            <li>• Dashboard วัด Time, Error, Cost</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Packaged Solutions -->
    <section class="animate-fade space-y-5">
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <h2 class="text-lg font-semibold text-th8-text flex items-center gap-2">
          <span class="inline-block h-6 w-6 rounded-full bg-red-100 text-[13px] flex items-center justify-center text-th8-primary">★</span>
          <span>Packaged Solutions สำหรับเริ่มต้นเร็ว</span>
        </h2>
        <p class="text-[12px] text-th8-text/60">
          เลือกเริ่มจาก 1 ทีมก่อน แล้วค่อยขยาย
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 text-sm">
        <!-- FP&A -->
        <div class="p-5 border border-th8-border rounded-2xl bg-th8-surface shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-[14px]">฿</span>
              <h3 class="font-semibold text-th8-text">AI FP&amp;A Suite</h3>
            </div>
            <RouterLink
              :to="{ name: 'financial' }"
              class="text-[11px] font-semibold text-th8-primary hover:underline"
            >
              รายละเอียด →
            </RouterLink>
          </div>
          <p class="text-th8-text/80 text-[13px]">
            Copilot สำหรับทีมการเงิน ช่วยอ่านงบ วิเคราะห์ตัวเลข และทำ Scenario
          </p>
          <ul class="text-[12px] text-slate-600 space-y-1">
            <li>• ดึงข้อมูลจาก DW / Excel / GSheet</li>
            <li>• วิเคราะห์ Margin, Cost, Trend</li>
            <li>• แนะนำ Scenario “ถ้าลด/เพิ่ม” ได้ทันที</li>
          </ul>
        </div>

        <!-- Ops & Logistics -->
        <div class="p-5 border border-th8-border rounded-2xl bg-th8-surface shadow-sm space-y-3">
          <div class="flex items-center gap-2">
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-[14px]">🚚</span>
            <h3 class="font-semibold text-th8-text">Logistics &amp; Warehouse Agent Suite</h3>
          </div>
          <p class="text-th8-text/80 text-[13px]">
            Agent สำหรับรับออเดอร์ วางสต็อก วางเส้นทาง และติดตามส่งมอบ
          </p>
          <ul class="text-[12px] text-slate-600 space-y-1">
            <li>• Order Intake &amp; Validation Agent</li>
            <li>• Inventory Health &amp; Replenishment Advisor</li>
            <li>• Route Planning &amp; Exception Handling Agent</li>
          </ul>
        </div>

        <!-- Knowledge / Document -->
        <div class="p-5 border border-th8-border rounded-2xl bg-th8-surface shadow-sm space-y-3">
         
   <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-[14px]">฿</span>
              <h3 class="font-semibold text-th8-text">AI Knowledge Base &amp; Document Copilot</h3>
            </div>
            <RouterLink
              :to="{ name: 'pillar-knowledge' }"
              class="text-[11px] font-semibold text-th8-primary hover:underline"
            >
              รายละเอียด →
            </RouterLink>
          </div>

      
          <p class="text-th8-text/80 text-[13px]">
            เปลี่ยน PDF, Policy, SOP, Log งาน และคำถามซ้ำ ๆ ใน LINE/Teams ให้กลายเป็นระบบความรู้ที่ AI ใช้ได้จริง พร้อม Dashboard วัด Accuracy, Coverage และ Painpoint ที่ยังต้องปรับปรุง.
          </p>
          <ul class="text-[12px] text-slate-600 space-y-1">
            <li>• RAG บน SOP, Policy, Contract, Manual</li>
            <li>• แยกสิทธิ์ตามทีม/ระดับผู้ใช้</li>
            <li>• Log ทุกคำถามเพื่อใช้ปรับปรุง Training</li>
          </ul>
        </div>

        <!-- Custom / Co-build -->
        <div class="p-5 border border-th8-border rounded-2xl bg-th8-surface shadow-sm space-y-3">
          <div class="flex items-center gap-2">
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-[14px]">🧩</span>
            <h3 class="font-semibold text-th8-text">Co-build Enterprise AI Agent</h3>
          </div>
          <p class="text-th8-text/80 text-[13px]">
            สำหรับองค์กรที่มีโจทย์เฉพาะ หรือระบบภายในซับซ้อน
          </p>
          <ul class="text-[12px] text-slate-600 space-y-1">
            <li>• Design workshop ร่วมทีม Business &amp; IT</li>
            <li>• ออกแบบ Agentic Architecture เฉพาะองค์กร</li>
            <li>• วาง Governance, Monitoring, Handover</li>
          </ul>
        </div>

        <!-- ✅ ใหม่: AI AP & Reconcile สำหรับ F&B -->
        <div class="p-5 border border-th8-border rounded-2xl bg-th8-surface shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-[14px]">🧾</span>
              <h3 class="font-semibold text-th8-text">AI AP &amp; Reconcile · F&amp;B</h3>
            </div>
            <RouterLink
              :to="{ name: 'accounting-ap-fnb' }"
              class="text-[11px] font-semibold text-th8-primary hover:underline"
            >
              ดู use case →
            </RouterLink>
          </div>
          <p class="text-th8-text/80 text-[13px]">
            AI Agent สำหรับทีมบัญชีฝั่ง AP ในธุรกิจ Food &amp; Beverage
            ที่ยังใช้กระดาษ + PDF + Teams เป็นหลัก
          </p>
          <ul class="text-[12px] text-slate-600 space-y-1">
            <li>• รับใบวางบิล / ใบรับของจาก Teams → แปลงเป็นข้อมูลอัตโนมัติ</li>
            <li>• Match PO / GR / Invoice กับ ERP (SAP / Oracle) พร้อม flag exception</li>
            <li>• Dashboard ติดตามสถานะตั้งหนี้–จ่ายเงิน และคอขวดของเอกสารราย supplier</li>
          </ul>
        </div>

          <div class="p-5 border border-th8-border rounded-2xl bg-th8-surface shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-[14px]">🧾</span>
              <h3 class="font-semibold text-th8-text">AI Agent สำหรับ ธนาคาร · สินเชื่อ · ประกัน</h3>
            </div>
            <RouterLink
              :to="{ name: 'bfsi-agent-suite' }"
              class="text-[11px] font-semibold text-th8-primary hover:underline"
            >
              ดู use case →
            </RouterLink>
          </div>
          <p class="text-th8-text/80 text-[13px]">
            สร้าง Agent Layer ที่ทำงานร่วมกับระบบ Core Banking, LOS, Collection, CRM และ Data Warehouse ได้ทันที — ลดภาระงานทีมสินเชื่อ การเงิน ปฏิบัติการ และ Compliance เพื่อให้องค์กร BFSI ขยายธุรกิจได้เร็วและปลอดภัยขึ้น
          </p>
          <ul class="text-[12px] text-slate-600 space-y-1">
            <li>•  อ่านเอกสารลูกค้า: สลิปเงินเดือน, Statement, เอกสารธุรกิจ</li>
            <li>• Extract ข้อมูลสำคัญ: รายได้, ภาระหนี้, Cashflow</li>
            <li>• Extract ข้อมูลสำคัญ: ตรวจ Rule เช่น DSR, อายุงาน, เงื่อนไขผลิตภัณฑ์</li>
            <li>• สร้างสรุปไฟล์ Case Summary ให้เจ้าหน้าที่ตัดสินใจต่อ</li>
          </ul>
        </div>
      </div>
    </section>


 

    <!-- Unfair Advantage -->
    <section class="animate-fade space-y-5">
      <h2 class="text-lg font-semibold text-th8-text flex items-center gap-2">
        <span class="inline-block h-6 w-6 rounded-full bg-red-100 text-[13px] flex items-center justify-center text-th8-primary">∞</span>
        <span>สิ่งที่ทำให้ TH8.AI แตกต่างจาก Solution ทั่วไป</span>
      </h2>

      <div class="grid md:grid-cols-3 gap-6 text-sm">
        <div class="p-5 border border-th8-border rounded-2xl bg-th8-surface shadow-sm space-y-2">
          <div class="flex items-center gap-2">
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-[14px]">🧪</span>
            <h3 class="font-semibold text-th8-text">เริ่มจากงานจริง ไม่ใช่ Model</h3>
          </div>
          <ul class="text-[12px] text-th8-text/80 space-y-1 mt-1">
            <li>• โจทย์หลักคือ Pain point &amp; KPI</li>
            <li>• ไม่เริ่มจาก “อยากลอง LLM ตัวนี้ก่อน”</li>
          </ul>
        </div>

        <div class="p-5 border border-th8-border rounded-2xl bg-th8-surface shadow-sm space-y-2">
          <div class="flex items-center gap-2">
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-[14px]">⚡</span>
            <h3 class="font-semibold text-th8-text">องค์กรใหญ่ + ความเร็วสตาร์ตอัป</h3>
          </div>
          <ul class="text-[12px] text-th8-text/80 space-y-1 mt-1">
            <li>• ประสบการณ์ระบบระดับธนาคาร</li>
            <li>• เน้นเห็นผลจริงใน 30–45 วันแรก</li>
          </ul>
        </div>

        <div class="p-5 border border-th8-border rounded-2xl bg-th8-surface shadow-sm space-y-2">
          <div class="flex items-center gap-2">
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-[14px]">🧠</span>
            <h3 class="font-semibold text-th8-text">คิดแบบ Agentic System</h3>
          </div>
          <ul class="text-[12px] text-th8-text/80 space-y-1 mt-1">
            <li>• ออกแบบ Agent + Workflow + Tool + Data + UX</li>
            <li>• ไม่หยุดแค่ Chatbot / Single LLM Call</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="animate-fade border-t border-th8-border pt-8 mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      <div>
        <h3 class="text-base font-semibold text-th8-text">
          ไม่แน่ใจว่าควรเริ่มจาก Solution ไหน?
        </h3>
        <p class="text-sm text-th8-text/80">
          เล่าบริบทองค์กรสั้น ๆ ให้เราฟัง ทีม TH8.AI จะช่วยเลือกจุดเริ่มต้นที่เหมาะที่สุดให้
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
