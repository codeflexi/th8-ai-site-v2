<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-10">
    <!-- Intro -->
    <section class="animate-fade space-y-4">
      <h1 class="text-3xl font-bold text-th8-text">
        Case Studies &amp; Example Use Cases
      </h1>
      <p class="text-sm text-th8-text/80 max-w-3xl">
        หน้านี้รวบรวมตัวอย่าง Use case ที่ออกแบบตามบริบทองค์กรไทย
        เพื่อให้เห็นภาพว่า <span class="font-semibold">Agent + Workflow + Data</span>
        สามารถเข้าไปอยู่ “ตรงไหนของงานจริง” ได้บ้าง
        และแต่ละเคสเชื่อมต่อกับหน้า <b>Story / Mockup UI</b> ที่คุณใช้เปิดให้ทีมดูได้ทันที
      </p>
    </section>

    <!-- Section 1: Featured real flows (มี Story + Mockup แล้ว) -->
    <section class="animate-fade space-y-4">
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <h2 class="text-lg font-semibold text-th8-text flex items-center gap-2">
          <span
            class="inline-block h-6 w-6 rounded-full bg-red-100 text-[13px] flex items-center justify-center text-th8-primary"
          >★</span>
          <span>Featured Flows · Story + Mockup พร้อมใช้นำเสนอ</span>
        </h2>
        <p class="text-[12px] text-th8-text/60">
          เหมาะสำหรับใช้เป็นตัวอย่างเปิดประชุมกับทีม Finance, Ops, Management
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 text-sm">
        <!-- Case: AI AP & Reconcile · F&B -->
        <article class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-[11px] uppercase tracking-wide text-rose-500">
                Finance · Accounting AP · F&amp;B
              </p>
              <h2 class="font-semibold text-th8-text mt-1">
                จาก “ห้องบัญชีเต็มไปด้วยกระดาษ” → AI AP &amp; Reconcile สำหรับ F&amp;B
              </h2>
            </div>
            <span
              class="inline-flex items-center px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[11px] text-rose-700"
            >
              Story + Mockup UI
            </span>
          </div>

          <p class="text-[13px] text-th8-text/80">
            บริบทบริษัทเครื่องดื่มในไทยที่ใช้ <b>Teams + SharePoint + ERP (SAP/Oracle)</b>
            แต่กระบวนการรับวางบิล, ตั้งหนี้, Match PO, จ่ายเงิน ยังอยู่บนกระดาษและ Excel เป็นหลัก.
            เคสนี้เล่าว่า AI Agent เข้าไปช่วย “ปิดช่องว่างระหว่างเอกสารกับระบบ” ได้อย่างไร.
          </p>

          <ul class="text-[12px] text-th8-text/80 space-y-1">
            <li>
              <span class="font-semibold text-th8-text">โจทย์:</span>
              เอกสารเดินช้ากว่าข้อมูลใน ERP, ทีมต้องนั่ง reconcile ทีละใบทุกสิ้นเดือน
            </li>
            <li>
              <span class="font-semibold text-th8-text">สิ่งที่ทำ:</span>
              ให้ AI อ่านใบวางบิล/ใบรับของจาก Teams, match กับ ERP, แจ้งเตือนผ่าน Teams
              และเก็บสถานะบน SharePoint
            </li>
            <li>
              <span class="font-semibold text-th8-text">ผลลัพธ์:</span>
              ลดเวลาปิดงบ, ลดงาน manual, เห็นคอขวดเอกสารราย supplier ชัดเจน
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 pt-2 text-[11px]">
            <RouterLink
              :to="{ name: 'accounting-ap-fnb' }"
              class="inline-flex items-center gap-1 rounded-full bg-rose-500 px-4 py-1.5 font-semibold text-white hover:bg-rose-600"
            >
              อ่านฉบับเต็ม (Story) ↗
            </RouterLink>
            <RouterLink
              :to="{ name: 'accounting-ap-fnb-mockup' }"
              class="inline-flex items-center gap-1 rounded-full border border-rose-300 bg-white px-4 py-1.5 font-semibold text-rose-600 hover:bg-rose-50"
            >
              ดูหน้าจอ Mockup UI ↗
            </RouterLink>
          </div>
        </article>

        <!-- Case: PlanSphere / FP&A Suite -->
        <article class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-[11px] uppercase tracking-wide text-slate-500">
                Finance · FP&amp;A
              </p>
              <h2 class="font-semibold text-th8-text mt-1">
                จาก “ปิดงบช้า + สไลด์ล้นทุกเดือน” → PlanSphere™ FP&amp;A Suite
              </h2>
            </div>
            <span
              class="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-700"
            >
              FP&amp;A Copilot + Playbook
            </span>
          </div>

          <p class="text-[13px] text-th8-text/80">
            เคสสำหรับองค์กรที่ต้องทำ Budgeting, Forecasting, Actual vs Plan หลาย BU / หลายสาขา
            โดยยังอยู่บน Excel เป็นหลัก. PlanSphere™ รวมข้อมูลจาก ERP / Excel เดิม
            แล้วให้ AI ช่วยหาสาเหตุตัวเลขและเขียน Insight ให้พร้อมประชุม.
          </p>

          <ul class="text-[12px] text-th8-text/80 space-y-1">
            <li>
              <span class="font-semibold text-th8-text">โจทย์:</span>
              ทีม FP&amp;A ใช้เวลาหลายวันรวมไฟล์, ทำสไลด์, ตอบ ad-hoc question จากผู้บริหาร
            </li>
            <li>
              <span class="font-semibold text-th8-text">สิ่งที่ทำ:</span>
              สร้าง FP&amp;A Copilot บนข้อมูลเดิม, พร้อม Flow การทำ Budget/Forecast/Scenario ชัดเจน
            </li>
            <li>
              <span class="font-semibold text-th8-text">ผลลัพธ์:</span>
              ลดเวลาทำรายงาน 50–70%, ผู้บริหาร “คุยกับตัวเลข” ได้แบบ near real-time
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 pt-2 text-[11px]">
            <RouterLink
              :to="{ name: 'PlanSphere' }"
              class="inline-flex items-center gap-1 rounded-full bg-th8-primary px-4 py-1.5 font-semibold text-white hover:bg-th8-accent"
            >
              ดูรายละเอียด PlanSphere™ ↗
            </RouterLink>
            <RouterLink
              :to="{ name: 'plansphere-flow' }"
              class="inline-flex items-center gap-1 rounded-full border border-th8-border bg-white px-4 py-1.5 font-semibold text-th8-primary hover:bg-slate-50"
            >
              ดู User Journey / Flow ↗
            </RouterLink>
            <RouterLink
              :to="{ name: 'fpa-playbook' }"
              class="inline-flex items-center gap-1 text-[11px] font-semibold text-th8-primary hover:underline"
            >
              เปิด FP&amp;A Playbook →
            </RouterLink>
          </div>
        </article>
      </div>
    </section>

    <!-- Section: Co-build Enterprise AI Agent (3 key use cases) -->
    <section class="animate-fade space-y-4">
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <h2 class="text-lg font-semibold text-th8-text flex items-center gap-2">
          <span
            class="inline-block h-6 w-6 rounded-full bg-red-100 text-[13px] flex items-center justify-center text-th8-primary"
          >◎</span>
          <span>Co-build Enterprise AI Agent · 3 Use Cases สำหรับองค์กรไทย</span>
        </h2>
        <p class="text-[12px] text-th8-text/60">
          เหมาะสำหรับโรงงาน, ธนาคาร, Telco, Logistics ที่อยากเริ่มจาก “เคสเดียวที่มี Impact สูง”
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 text-sm">
        <!-- Production & Quality Incident Agent -->
        <article class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-3">
          <p class="text-[11px] uppercase tracking-wide text-slate-500">
            Manufacturing · Production &amp; Quality
          </p>
          <h3 class="font-semibold text-th8-text">
            Production &amp; Quality Incident Agent (โรงงานไทย)
          </h3>
          <p class="text-[12px] text-th8-text/80">
            สำหรับโรงงานที่มี Line ผลิตหลายเส้น, มี QC report, ใบแจ้ง defect, Excel incident log
            กระจัดกระจาย ทำให้หาต้นตอปัญหายากและ feedback กลับไปยังฝ่ายผลิตช้า.
          </p>
          <ul class="text-[12px] text-th8-text/80 space-y-1">
            <li><span class="font-semibold text-th8-text">โจทย์:</span> ปัญหาคุณภาพเดิม ๆ กลับมาซ้ำ เพราะ incident เก่าถูกเก็บเป็น Excel / กระดาษ ไม่ได้กลายเป็น “ความรู้ที่ค้นหาได้”.</li>
            <li><span class="font-semibold text-th8-text">แนวทาง:</span> รวม incident log, QC result, machine log, action taken ให้ Agent ช่วย classify, หา pattern, และแนะนำ action ต่อไป.</li>
          </ul>
          <RouterLink
            :to="{ name: 'production-quality-incident', query: { topic: 'production-incident-agent' } }"
            class="inline-flex items-center gap-1 mt-2 text-[11px] font-semibold text-th8-primary hover:underline"
          >
            คุยเคส Production &amp; Quality สำหรับโรงงานคุณ →
          </RouterLink>
        </article>

        <!-- Customer Complaint & Retention Agent -->
        <article class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-3">
          <p class="text-[11px] uppercase tracking-wide text-slate-500">
            Banking · Telco · Insurance
          </p>
          <h3 class="font-semibold text-th8-text">
            Customer Complaint &amp; Retention Agent
          </h3>
          <p class="text-[12px] text-th8-text/80">
            สำหรับธนาคาร, Telco, บริษัทประกันในไทยที่มี complaint จากหลายช่องทาง
            (Call center, LINE, App, สาขา) แต่ข้อมูลกระจายและใช้เวลานานกว่าจะสรุป insight.
          </p>
          <ul class="text-[12px] text-th8-text/80 space-y-1">
            <li><span class="font-semibold text-th8-text">โจทย์:</span> ทีม CX/Complaint ต้องอ่านเคสทีละเรื่อง, สรุปมือ, ส่งต่อหลายทีม → ลูกค้าได้คำตอบช้า และยากต่อการทำ retention แบบ pro-active.</li>
            <li><span class="font-semibold text-th8-text">แนวทาง:</span> ให้ Agent อ่าน complaint log, transcript, note ของ staff แล้วช่วยจัดกลุ่ม, หา root cause, แนะนำ next best action และ flag เคสเสี่ยง churn.</li>
          </ul>
          <RouterLink
            :to="{ name: 'customer-complaint-retention', query: { topic: 'complaint-retention-agent' } }"
            class="inline-flex items-center gap-1 mt-2 text-[11px] font-semibold text-th8-primary hover:underline"
          >
            อยากทำ Complaint &amp; Retention Agent สำหรับองค์กรคุณ →
          </RouterLink>
        </article>

        <!-- Logistics Control Tower UI -->
        <article class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-3">
          <p class="text-[11px] uppercase tracking-wide text-slate-500">
            Logistics · 3PL · Fulfillment
          </p>
          <h3 class="font-semibold text-th8-text">
            Logistics Control Tower UI &amp; Exception Agent
          </h3>
          <p class="text-[12px] text-th8-text/80">
            สำหรับทีมขนส่ง / 3PL / Fulfillment ที่ต้องตามสถานะ shipment, delay, failed delivery
            จากหลายระบบ (TMS, WMS, Excel report, LINE group คนขับ).
          </p>
          <ul class="text-[12px] text-th8-text/80 space-y-1">
            <li><span class="font-semibold text-th8-text">โจทย์:</span> ทุกวันต้องเปิดหลายจอ, ตามของตก, ตอบลูกค้า, และหาสาเหตุ delay แบบ manual.</li>
            <li><span class="font-semibold text-th8-text">แนวทาง:</span> ออกแบบ Control Tower UI ที่ดึง order/route/incident เข้ามาหน้าจอเดียว
              และใช้ Agent ช่วยจับ exception, สรุปสาเหตุหลัก, แนะนำ action ให้ dispatcher.</li>
          </ul>
          <RouterLink
            :to="{ name: 'logistics-control-tower', query: { topic: 'logistics-control-tower' } }"
            class="inline-flex items-center gap-1 mt-2 text-[11px] font-semibold text-th8-primary hover:underline"
          >
            ดูตัวอย่าง Control Tower ที่เหมาะกับเส้นทางของคุณ →
          </RouterLink>
        </article>
      </div>
    </section>

    <!-- Section 2: Other example use cases (idea-level + Co-build) -->
    <section class="animate-fade space-y-4">
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <h2 class="text-lg font-semibold text-th8-text flex items-center gap-2">
          <span
            class="inline-block h-6 w-6 rounded-full bg-red-100 text-[13px] flex items-center justify-center text-th8-primary"
          >◎</span>
          <span>Other Example Use Cases · เหมาะสำหรับ Co-build</span>
        </h2>
        <p class="text-[12px] text-th8-text/60">
          เคสด้านล่างนี้ใช้เป็นแนวทางตอนออกแบบร่วมกับทีม Business &amp; IT
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 text-sm">
        <!-- Case: Route Planner / Control Tower -->
        <article class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-3">
          <p class="text-[11px] uppercase tracking-wide text-slate-500">
            Operations · Logistics / Route Planning
          </p>
          <h2 class="font-semibold text-th8-text">
            จาก “วาง Route ด้วยประสบการณ์คนเก่งคนเดียว” → Route Planner &amp; Exception Agent
          </h2>
          <ul class="text-[12px] text-th8-text/80 space-y-1">
            <li>
              <span class="font-semibold text-th8-text">โจทย์:</span>
              ทุกเช้าทีมวางเส้นทางส่งของด้วยมือ โดยอิงจากหัวหน้าทีมคนเดียวที่รู้ constraint ลูกค้าทั้งหมด.
            </li>
            <li>
              <span class="font-semibold text-th8-text">สิ่งที่ทำ:</span>
              ดึง Order จริง, เวลาตัดรอบ, SLA ลูกค้า, เวลาขนของ, ระยะทาง, ประเภทสินค้า
              มาทำให้ Agent เสนอ Route + flag เคสเสี่ยง delay ให้ Control Tower ตัดสินใจ.
            </li>
            <li>
              <span class="font-semibold text-th8-text">ผลลัพธ์:</span>
              Drop/Trip เพิ่มขึ้น, ระยะทางเฉลี่ยต่อ Order ลดลง, ทีมเห็นคอขวดและ delay แบบ real-time แทนที่จะรู้ตอนลูกค้าโทรเคลม.
            </li>
          </ul>
          <p class="text-[11px] text-th8-text/60 pt-1">
            *เคสนี้มักถูกทำร่วมกับทีม Transport / 3PL / Fulfillment ใน format Co-build Enterprise AI Agent
          </p>
        </article>

        <!-- Case: Inventory Health Agent -->
        <article class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-3">
          <p class="text-[11px] uppercase tracking-wide text-slate-500">
            Warehouse · Inventory &amp; Replenishment
          </p>
          <h2 class="font-semibold text-th8-text">
            จาก “เอกสารสต็อกหลายเวอร์ชัน” → Inventory Health Agent
          </h2>
          <ul class="text-[12px] text-th8-text/80 space-y-1">
            <li>
              <span class="font-semibold text-th8-text">โจทย์:</span>
              ข้อมูลสต็อกกระจายหลายระบบ (ERP, WMS, Excel, Google Sheet) ทำให้ทีมวางแผนสั่งซื้อยาก
              และมักเจอทั้ง Out-of-stock และ Over-stock ในเวลาเดียวกัน.
            </li>
            <li>
              <span class="font-semibold text-th8-text">สิ่งที่ทำ:</span>
              รวมข้อมูลยอดขาย, สต็อก, Lead time, MOQ, Constraint Supplier, Promotion Plan
              ให้ Agent วิเคราะห์และแนะนำ “สินค้าที่ต้องโฟกัส” รายสัปดาห์.
            </li>
            <li>
              <span class="font-semibold text-th8-text">ผลลัพธ์:</span>
              เห็นสินค้าที่เสี่ยง Out-of-stock / Over-stock ชัดขึ้น, มีคำแนะนำ reorder ที่อิงข้อมูลจริง
              ไม่ต้องใช้ gut feeling อย่างเดียว.
            </li>
          </ul>
        </article>

        <!-- Case: Knowledge / RAG Copilot -->
        <article class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-3 md:col-span-2">
          <div class="flex items-center justify-between gap-3">
            <div>
              <p class="text-[11px] uppercase tracking-wide text-slate-500">
                Knowledge &amp; Support · RAG / Document Copilot
              </p>
              <h2 class="font-semibold text-th8-text">
                จาก “เปิดเอกสารไม่ทัน” → AI Knowledge Base &amp; Document Copilot
              </h2>
            </div>
            <RouterLink
              :to="{ name: 'pillar-knowledge' }"
              class="text-[11px] font-semibold text-th8-primary hover:underline"
            >
              ดูตัวอย่างหน้าจอ (Knowledge Suite Mockup) ↗
            </RouterLink>
          </div>

          <ul class="text-[12px] text-th8-text/80 space-y-1">
            <li>
              <span class="font-semibold text-th8-text">โจทย์:</span>
              SOP, Policy, คู่มือการทำงาน, FAQ ลูกค้า เยอะจนหาของไม่เจอ
              ทำให้ตอบลูกค้าช้า หรือคำตอบไม่สม่ำเสมอระหว่างทีม.
            </li>
            <li>
              <span class="font-semibold text-th8-text">สิ่งที่ทำ:</span>
              สร้าง RAG บนเอกสารทั้งหมด แยกสิทธิ์ตามทีม/สาขา/ระดับผู้ใช้,
              เก็บ log ทุกคำถามเพื่อใช้ปรับปรุงเอกสารและใช้ต่อยอดเป็น Exception Library.
            </li>
            <li>
              <span class="font-semibold text-th8-text">ผลลัพธ์:</span>
              เวลาค้นหาข้อมูลลดลง, first-time-right สูงขึ้น, และเริ่มเห็น pattern ปัญหาที่ควรแก้ที่ต้นน้ำ.
            </li>
          </ul>
        </article>
      </div>
    </section>

    <!-- How we measure -->
    <section class="animate-fade space-y-6">
      <h2 class="text-xl font-semibold text-th8-text">
        เราวัดผลสำเร็จของโปรเจกต์อย่างไร
      </h2>
      <div class="grid md:grid-cols-3 gap-6 text-sm">
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
          <h3 class="font-semibold text-th8-text mb-1">1. Time &amp; Effort Saved</h3>
          <p class="text-[12px] text-th8-text/80">
            วัดเวลาที่ทีมใช้ก่อน–หลังทำโปรเจกต์ เช่น เวลาทำรายงาน, เวลาเตรียมออเดอร์, เวลาเคลียร์เอกสาร
          </p>
        </div>
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
          <h3 class="font-semibold text-th8-text mb-1">2. Error &amp; Rework ลดลง</h3>
          <p class="text-[12px] text-th8-text/80">
            วัดจำนวน Error, เคสต้องแก้, หรือปัญหาที่เกิดจากข้อมูลไม่ตรงกันระหว่างระบบ
          </p>
        </div>
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
          <h3 class="font-semibold text-th8-text mb-1">3. Business &amp; Customer Impact</h3>
          <p class="text-[12px] text-th8-text/80">
            เช่น ระยะเวลาส่งของ, ระยะเวลาตอบลูกค้า, Margin, Cost per unit
            หรือ KPI อื่น ๆ ตามบริบทของคุณ
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      class="animate-fade border-t border-th8-border pt-8 mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      <div>
        <h3 class="text-base font-semibold text-th8-text">
          อยากเห็น Blueprint สำหรับ Use case ขององค์กรคุณเอง?
        </h3>
        <p class="text-sm text-th8-text/80">
          เราสามารถช่วยออกแบบ <b>Agentic System + Workflow + Data</b>
          ให้เห็นเส้นทางจาก Pain point วันนี้ → ผลลัพธ์ทางธุรกิจที่วัดได้จริง
        </p>
      </div>
      <RouterLink
        :to="{ name: 'contact' }"
        class="inline-flex items-center rounded-full bg-th8-primary px-5 py-2 text-xs font-semibold text-white hover:bg-th8-accent"
      >
        นัดคุยกับทีม TH8.AI
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
