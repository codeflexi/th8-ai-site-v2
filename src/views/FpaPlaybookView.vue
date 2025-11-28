<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-12">
    <!-- Hero / Intro -->
    <section class="space-y-4">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div class="space-y-3 max-w-2xl">
          <p class="text-[11px] uppercase tracking-[0.25em] text-th8-primary flex items-center gap-2">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-th8-primary"></span>
            TH8 · PlanSphere™ · FP&A Playbook
          </p>
          <h1 class="text-3xl font-bold text-th8-text">
            AI FP&amp;A Suite Playbook
          </h1>
          <p class="text-sm text-th8-text/80">
            โครง FP&amp;A ที่ออกแบบเหมือนระบบ TM1 / Enterprise EPM
            แต่ย่อส่วนให้คล่องตัวขึ้นสำหรับองค์กรไทย — จาก Budgeting, Forecasting, Actual vs Plan
            ไปจนถึง Scenario และ AI Insight ที่ตอบคำถามผู้บริหารได้ทันที
          </p>
          <div class="flex flex-wrap items-center gap-3">
            <RouterLink
              :to="{ name: 'contact' }"
              class="inline-flex items-center gap-2 rounded-full bg-th8-primary px-5 py-2 text-xs font-semibold text-white hover:bg-th8-accent"
            >
              <span>ทดลอง Demo 30 นาที</span>
            </RouterLink>
            <p class="text-[11px] text-slate-500">
              ใช้เวลาประชุม 60 นาที เพื่อแม็ป Playbook เข้ากับงบจริงของบริษัทคุณ
            </p>
          </div>
        </div>

        <!-- Summary card -->
        <div class="w-full md:w-80 space-y-3">
          <div class="rounded-3xl border border-th8-border bg-th8-surface shadow-sm p-4 space-y-3">
            <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              FP&amp;A Flow · จากงบประมาณ → Insight
            </p>
            <ol class="text-[12px] text-slate-700 space-y-1.5 list-decimal list-inside">
              <li>ทีมใส่ Budget / Forecast ผ่าน Template เดียวกันทั้งบริษัท</li>
              <li>PlanSphere สร้าง Model &amp; Driver (เหมือน Cube / TM1 แต่เบากว่า)</li>
              <li>เชื่อม Actual จาก ERP / Data warehouse เข้ามาอัตโนมัติ</li>
              <li>AI FP&amp;A ทำ Variance, Scenario, Insight ให้อัตโนมัติ</li>
              <li>ส่งออกเป็น Executive Pack ให้ผู้บริหาร</li>
            </ol>
          </div>
          <div class="grid grid-cols-2 gap-3 text-[11px]">
            <div class="rounded-2xl border border-th8-border bg-th8-surface px-3 py-3">
              <p class="text-slate-500 mb-1">ลดเวลาเตรียมงบ</p>
              <p class="text-xl font-semibold text-th8-text">50–70%</p>
            </div>
            <div class="rounded-2xl border border-th8-border bg-th8-surface px-3 py-3">
              <p class="text-slate-500 mb-1">ลด Excel Error</p>
              <p class="text-xl font-semibold text-th8-text">70–90%</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Structure: Data / Workflow / Decision / Exception / KPI / Timeline / Deliverables -->
    <section class="space-y-6">
      <h2 class="text-lg font-semibold text-th8-text">
        FP&amp;A Playbook Structure
      </h2>

      <div class="grid md:grid-cols-2 gap-6 text-sm">
        <!-- Data Needed -->
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface space-y-2">
          <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            1 · Data Needed
          </p>
          <h3 class="font-semibold text-th8-text">ข้อมูลที่ต้องมี</h3>
          <ul class="text-[13px] text-slate-700 space-y-1.5 mt-1">
            <li>• P&amp;L รายเดือน / รายไตรมาส + Revenue breakdown</li>
            <li>• Driver สำคัญ: Volume, Headcount, Cost driver หลัก</li>
            <li>• Chart of accounts, Cost allocation rules, Business policy</li>
            <li>• Excel/GSheet ที่ทีมใช้วิเคราะห์อยู่แล้ว (จะย้ายมาเป็น model)</li>
          </ul>
        </div>

        <!-- Workflow -->
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface space-y-2">
          <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            2 · Workflow
          </p>
          <h3 class="font-semibold text-th8-text">Flow การทำงานแบบ FP&amp;A จริง</h3>
          <ul class="text-[13px] text-slate-700 space-y-1.5 mt-1">
            <li>• เตรียม Template &amp; ส่งให้ BU กรอก Budget/Forecast</li>
            <li>• PlanSphere รวมงบ + ตรวจ sanity check</li>
            <li>• โหลด Actual เข้าระบบทุกเดือน</li>
            <li>• AI FP&amp;A สร้าง Insight แรก + Flag จุดผิดปกติ</li>
            <li>• FP&amp;A ปรับ fine-tune และส่ง Executive Pack</li>
          </ul>
        </div>

        <!-- Decision Structure -->
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface space-y-2">
          <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            3 · Decision Structure
          </p>
          <h3 class="font-semibold text-th8-text">คำถามที่ AI FP&amp;A ต้องตอบ</h3>
          <ul class="text-[13px] text-slate-700 space-y-1.5 mt-1">
            <li>• ทำไมกำไร / Margin ช่วงนี้เปลี่ยนไป?</li>
            <li>• Driver หลักคือ Volume, Price/Mix หรือ Cost?</li>
            <li>• ถ้าปรับราคา/ค่าใช้จ่าย X% → EBITDA เปลี่ยนเท่าไหร่?</li>
            <li>• BU / Hospital / Warehouse ไหน perform ดีกว่าหรือแย่กว่าค่าเฉลี่ย?</li>
          </ul>
        </div>

        <!-- Exceptions -->
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface space-y-2">
          <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            4 · Exceptions
          </p>
          <h3 class="font-semibold text-th8-text">สิ่งที่มักทำให้งาน FP&amp;A สะดุด</h3>
          <ul class="text-[13px] text-slate-700 space-y-1.5 mt-1">
            <li>• ข้อมูลไม่ครบ / ไม่ตรงช่วงเวลา</li>
            <li>• Mapping GL เปลี่ยนโครงสร้าง</li>
            <li>• ตัวเลขกระโดดผิดปกติ (outlier)</li>
            <li>• Business rule เปลี่ยนแต่ไม่ได้ update model</li>
            <li>→ PlanSphere + AI FP&amp;A จะ log ไว้เป็น Exception Library</li>
          </ul>
        </div>

        <!-- KPI -->
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface space-y-2">
          <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            5 · KPI
          </p>
          <h3 class="font-semibold text-th8-text">ตัวชี้วัดความสำเร็จของ FP&amp;A Suite</h3>
          <ul class="text-[13px] text-slate-700 space-y-1.5 mt-1">
            <li>• เวลาในการเตรียม report / pack ต่อเดือน</li>
            <li>• Cycle time จากปิดงบ → ได้ Insight แรก</li>
            <li>• จำนวนไฟล์ Excel ที่ลดลง</li>
            <li>• จำนวน error / rework ที่ต้องแก้เลขใหม่</li>
          </ul>
        </div>

        <!-- Timeline & Deliverables -->
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface space-y-2">
          <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            6–7 · Timeline &amp; Deliverables
          </p>
          <h3 class="font-semibold text-th8-text">ตัวอย่างแผน 6–8 สัปดาห์</h3>
          <ul class="text-[13px] text-slate-700 space-y-1.5 mt-1">
            <li>• Week 1: Alignment + Data inventory + KPI baseline</li>
            <li>• Week 2–3: เชื่อม data + สร้าง FP&amp;A data mart</li>
            <li>• Week 4–5: Build FP&amp;A Agent + Scenario engine</li>
            <li>• Week 6–7: Pilot กับทีมเล็ก ๆ + refine rules</li>
            <li>• Week 8: Roll-out + Training + Dashboard ติดตามผล</li>
          </ul>
          <p class="text-[12px] text-slate-500 mt-2">
            Deliverables: FP&amp;A Data Blueprint, Agent Spec, Scenario Template, Dashboard, Training Session
          </p>
        </div>
      </div>
    </section>

    <!-- Case Examples -->
    <section class="space-y-5">
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <h2 class="text-lg font-semibold text-th8-text">
          Case Examples — FP&amp;A ใน FMCG &amp; Warehouse
        </h2>
        <RouterLink
          :to="{ name: 'fpa-cases' }"
          class="text-[11px] font-semibold text-th8-primary hover:underline"
        >
          อ่านเรื่องเต็มของแต่ละเคส →
        </RouterLink>
      </div>
      <div class="grid md:grid-cols-2 gap-6 text-sm">
        <!-- FMCG -->
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface space-y-2">
          <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            FMCG / Distribution
          </p>
          <h3 class="font-semibold text-th8-text">Promotion, Channel Mix, Margin</h3>
          <ul class="text-[13px] text-slate-700 space-y-1.5 mt-1">
            <li>• ผูกยอดขายตามช่องทาง (Modern trade, Traditional trade, Online)</li>
            <li>• วิเคราะห์ Promotion impact ต่อ Margin</li>
            <li>• Scenario: ปรับส่วนลด / ราคาขาย แล้วดูผลต่อกำไร</li>
            <li>• AI FP&amp;A สรุป insight เป็นภาษาที่ CFO และ Sales director เข้าใจง่าย</li>
          </ul>
        </div>

        <!-- Warehouse -->
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface space-y-2">
          <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Warehouse / Logistics
          </p>
          <h3 class="font-semibold text-th8-text">Cost per pick, Productivity, Capacity</h3>
          <ul class="text-[13px] text-slate-700 space-y-1.5 mt-1">
            <li>• ผูกค่าแรง, OT, ค่าเช่า, ค่าเดินรถ กับ volume งานจริง</li>
            <li>• วัด Cost per pick / per shipment / per route</li>
            <li>• Scenario: ถ้าเพิ่มกะ / ลดกะ / ปรับ layout → Cost &amp; Service level เปลี่ยนอย่างไร</li>
            <li>• AI FP&amp;A แปลตัวเลขเหล่านี้เป็นแผนปรับปรุงกำไรให้ผู้บริหาร</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="border border-dashed border-th8-border rounded-2xl bg-th8-surface/60 px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div class="space-y-1">
        <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
          Next Step
        </p>
        <p class="text-sm font-semibold text-th8-text">
          อยากเห็น Playbook นี้กับตัวเลขจริงของบริษัทคุณ?
        </p>
        <p class="text-[12px] text-slate-600">
          นัด session 60 นาที เพื่อเอา Trial Data ของคุณเข้ามาใน PlanSphere™ แล้วให้ AI FP&amp;A สรุป Insight ให้ดูสด ๆ
        </p>
      </div>
      <RouterLink
        :to="{ name: 'contact' }"
        class="inline-flex items-center rounded-full bg-th8-primary px-5 py-2 text-xs font-semibold text-white hover:bg-th8-accent"
      >
        จอง Demo 30 นาที
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>