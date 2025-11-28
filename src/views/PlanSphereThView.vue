<template>
  <div class="min-h-screen bg-th8-surface text-th8-text">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-12 lg:space-y-16">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-[11px] text-slate-500">
        <RouterLink to="/services" class="hover:text-th8-primary cursor-pointer">
          Solutions
        </RouterLink>
        <span>/</span>
        <span class="text-slate-700 font-medium">PlanSphere™ FP&amp;A Suite</span>
      </div>

      <!-- Language switch -->
      <div class="flex justify-end">
        <div
          class="inline-flex items-center gap-1 rounded-full border border-th8-border bg-white/80 px-2 py-1 text-[11px] text-slate-600 shadow-sm"
        >
          <RouterLink
            :to="{ name: 'PlanSphere' }"
            class="px-2 py-0.5 rounded-full"
            :class="$route.name === 'PlanSphere' ? 'bg-th8-primary text-white' : 'text-slate-600 hover:text-th8-primary'"
          >
            EN
          </RouterLink>
          <RouterLink
            :to="{ name: 'plansphere-th' }"
            class="px-2 py-0.5 rounded-full"
            :class="$route.name === 'plansphere-th' ? 'bg-th8-primary text-white' : 'text-slate-600 hover:text-th8-primary'"
          >
            TH
          </RouterLink>
        </div>
      </div>

      <!-- HERO -->
      <section class="grid lg:grid-cols-[1.4fr,1fr] gap-8 lg:gap-10 items-center">
        <!-- Left: copy -->
        <div class="space-y-5">
          <p class="text-[11px] uppercase tracking-[0.25em] text-th8-primary flex items-center gap-2">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-th8-primary" />
            PlanSphere™ · FP&amp;A AI Suite สำหรับธุรกิจไทย
          </p>

          <h1 class="text-3xl lg:text-4xl font-semibold leading-tight">
            เปลี่ยนงานวางงบและวิเคราะห์ผลประกอบการ<br class="hidden sm:block" />
            ให้กลายเป็น <span class="text-th8-primary">ระบบตัดสินใจด้วย AI</span>
          </h1>

          <p class="text-sm lg:text-base text-slate-600 max-w-xl">
            PlanSphere™ คือแพลตฟอร์ม FP&amp;A ของ TH8 ที่ออกแบบมาสำหรับ CFO และทีมการเงินในไทย
            รวมทุกอย่างที่ทำอยู่ใน Excel และ BI — Budgeting, Forecasting, Actual vs Plan, Scenario และ AI FP&amp;A Copilot —
            ไว้ใน Workflow เดียว ที่ใช้จริงได้ทุกเดือน.
          </p>

          <!-- CFO bullet value -->
          <div class="grid sm:grid-cols-3 gap-3 text-xs">
            <div class="bg-white border border-th8-border rounded-xl p-3 shadow-sm">
              <p class="text-slate-500 mb-1">เวลาปิดงบ</p>
              <p class="font-semibold">ลดลง 40–70%</p>
            </div>
            <div class="bg-white border border-th8-border rounded-xl p-3 shadow-sm">
              <p class="text-slate-500 mb-1">ความแม่นยำ Forecast</p>
              <p class="font-semibold">เพิ่มขึ้น 10–25%</p>
            </div>
            <div class="bg-white border border-th8-border rounded-xl p-3 shadow-sm">
              <p class="text-slate-500 mb-1">ไฟล์ Excel manual</p>
              <p class="font-semibold">ลดลง 50–80%</p>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-wrap items-center gap-3">
            <RouterLink
              :to="{ name: 'contact' }"
              class="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium bg-th8-primary text-white shadow-sm hover:bg-th8-accent transition-colors"
            >
              นัดดู Demo 60 นาที
            </RouterLink>
            <RouterLink
              :to="{ name: 'fpa-playbook' }"
              class="inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs font-medium border border-th8-border bg-white text-slate-800 hover:border-th8-primary transition-colors"
            >
              ดู TH8 · FP&amp;A Playbook
            </RouterLink>
          </div>

          <!-- Who it's for -->
          <div class="flex flex-wrap gap-2 text-[11px] text-slate-600">
            <span class="px-3 py-1 rounded-full bg-white border border-th8-border">
              CFO &amp; Head of Finance
            </span>
            <span class="px-3 py-1 rounded-full bg-white border border-th8-border">
              FP&amp;A / Business Planning
            </span>
            <span class="px-3 py-1 rounded-full bg-white border border-th8-border">
              บริษัทไทยที่มีพนักงาน 50–5,000 คน
            </span>
          </div>
        </div>

        <!-- Right: journey card -->
        <div class="relative">
          <div
            class="absolute -inset-1 rounded-3xl bg-gradient-to-br from-red-200/70 via-slate-50 to-red-100 blur-xl opacity-70"
          />
          <div class="relative bg-white border border-th8-border rounded-3xl p-4 lg:p-5 shadow-xl space-y-4">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">
              เส้นทางของ CFO บน PlanSphere
            </p>

            <div class="space-y-3 text-xs text-slate-700">
              <div class="flex gap-3 items-start">
                <div
                  class="mt-0.5 w-6 h-6 flex items-center justify-center rounded-full bg-th8-primary text-white text-[11px] font-semibold"
                >
                  1
                </div>
                <div>
                  <p class="font-semibold text-th8-text">เชื่อมตัวเลขจริง</p>
                  <p class="text-slate-600">
                    ดึง P&amp;L, driver, cost center, product/channel จาก ERP, WMS หรือ Excel เข้าโมเดลเดียวกัน.
                  </p>
                </div>
              </div>

              <div class="flex gap-3 items-start">
                <div
                  class="mt-0.5 w-6 h-6 flex items-center justify-center rounded-full bg-slate-900 text-white text-[11px] font-semibold"
                >
                  2
                </div>
                <div>
                  <p class="font-semibold text-th8-text">รัน Workflow FP&amp;A รายเดือน</p>
                  <p class="text-slate-600">
                    Budget, Forecast และ Actual vs Plan ทำบนโมเดลเดียวกัน
                    ไม่ต้องตามไฟล์ Excel 10–20 ไฟล์อีกต่อไป.
                  </p>
                </div>
              </div>

              <div class="flex gap-3 items-start">
                <div
                  class="mt-0.5 w-6 h-6 flex items-center justify-center rounded-full bg-slate-900 text-white text-[11px] font-semibold"
                >
                  3
                </div>
                <div>
                  <p class="font-semibold text-th8-text">ถาม AI FP&amp;A แล้วได้คำตอบแบบพร้อมเข้า Board</p>
                  <p class="text-slate-600">
                    “ทำไม Margin Q2 ลดลง?”, “ถ้าขึ้นราคา 3% จะเกิดอะไรขึ้น?” — AI ตอบให้บนฐานตัวเลขจริง.
                  </p>
                </div>
              </div>
            </div>

            <div class="border-t border-dashed border-th8-border pt-3">
              <p class="text-[11px] text-slate-500">
                PlanSphere ทำงานร่วมกับ ERP/BI เดิมของบริษัท
                ไม่ต้องเปลี่ยนระบบใหญ่.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION: Why existing tools are not enough -->
      <section class="space-y-5">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              เมื่อ Excel + BI + TM1 ยังไม่ตอบโจทย์
            </p>
            <h2 class="text-xl lg:text-2xl font-semibold">
              ทำไมเครื่องมือเดิม ๆ ถึงไม่ช่วย FP&amp;A เท่าที่ควร
            </h2>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-2">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              Excel
            </p>
            <p class="font-semibold text-th8-text">ยืดหยุ่นมาก แต่เปราะบาง</p>
            <p class="text-slate-600 text-xs">
              ใช้ได้ทุกอย่าง แต่ควบคุมยาก เสี่ยงผิดพลาดสูง เวอร์ชันเยอะ
              และแทบเป็นไปไม่ได้ถ้าจะทำ Scenario หลายปี หลาย BU แบบจริงจัง.
            </p>
          </div>

          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-2">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              BI dashboards
            </p>
            <p class="font-semibold text-th8-text">เก่งด้าน “เกิดอะไรขึ้น”</p>
            <p class="text-slate-600 text-xs">
              BI ดีสำหรับดูย้อนหลัง แต่ไม่ได้ช่วยคิดในมุม Volume–Price–Mix, driver-based planning
              หรือ business rule ที่ซับซ้อน — ทีมยังต้องคิดเองใน Excel.
            </p>
          </div>

          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-2">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              Heavy FP&amp;A systems
            </p>
            <p class="font-semibold text-th8-text">ทรงพลัง แต่เกินความจำเป็น</p>
            <p class="text-slate-600 text-xs">
              TM1/Anaplan ฯลฯ มีศักยภาพสูง แต่ราคาแพง
              ใช้เวลาทำระบบนาน และต้องมีทีม modeler เต็มตัว — ไม่เหมาะกับองค์กรไทยส่วนใหญ่.
            </p>
          </div>
        </div>

        <div class="bg-white border border-red-100 rounded-2xl p-4 flex flex-col md:flex-row md:items-center gap-3">
          <div class="text-sm text-slate-700">
            <span class="font-semibold text-th8-text">PlanSphere™</span> อยู่กึ่งกลางที่พอดี:
            โมเดลการเงินแบบ TM1, ความเร็วแบบ modern data stack และความยืดหยุ่นของ AI —
            ในราคาที่ออกแบบมาสำหรับบริษัทไทย.
          </div>
        </div>
      </section>

      <!-- SECTION: How PlanSphere works -->
      <section class="space-y-5">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              How PlanSphere works
            </p>
            <h2 class="text-xl lg:text-2xl font-semibold">
              จาก “ข้อมูลกระจัดกระจาย” → “การตัดสินใจ FP&amp;A ที่ชัดเจน” ใน Workflow เดียว
            </h2>
          </div>
        </div>

        <div class="grid lg:grid-cols-[1.3fr,1fr] gap-6">
          <!-- Journey steps -->
          <div class="space-y-4">
            <div
              v-for="(step, index) in journeySteps"
              :key="index"
              class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm flex gap-3"
            >
              <div
                class="mt-0.5 w-8 h-8 flex items-center justify-center rounded-full bg-slate-900 text-white text-xs font-semibold"
              >
                {{ index + 1 }}
              </div>
              <div class="text-sm space-y-1">
                <p class="font-semibold text-th8-text">
                  {{ step.title }}
                </p>
                <p class="text-slate-600 text-xs">
                  {{ step.description }}
                </p>
                <p v-if="step.example" class="text-[11px] text-slate-500">
                  ตัวอย่าง: <span class="text-slate-800">{{ step.example }}</span>
                </p>
              </div>
            </div>
          </div>

          <!-- FP&A flow mini-diagram -->
          <div class="bg-white border border-th8-border rounded-2xl p-4 lg:p-5 shadow-sm space-y-3 text-xs">
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Monthly FP&amp;A Flow
            </p>

            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500" />
                <span class="font-semibold text-th8-text">Month-end close</span>
              </div>
              <p class="text-slate-600">
                โหลด Actual จาก ERP/WMS → อัปเดต P&amp;L cube → engine ชี้จุด variance ที่ควรสนใจ.
              </p>
            </div>

            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-blue-500" />
                <span class="font-semibold text-th8-text">Rolling forecast</span>
              </div>
              <p class="text-slate-600">
                ปรับ driver (volume, price, cost, headcount) → สร้าง forecast scenario ใหม่ เก็บเป็น version.
              </p>
            </div>

            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-th8-primary" />
                <span class="font-semibold text-th8-text">CFO decision</span>
              </div>
              <p class="text-slate-600">
                CFO ใช้ AI FP&amp;A Copilot ถามคำถามจริง และลอง 2–3 scenario ก่อนตัดสินใจ.
              </p>
            </div>

            <div class="border-t border-dashed border-th8-border pt-3 mt-2">
              <p class="text-[11px] text-slate-500">
                PlanSphere ทำงานบน stack เดิมของบริษัท (ERP, BI) ได้
                ไม่ต้องเริ่มใหม่ทั้งหมด.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION: Capabilities -->
      <section class="space-y-5">
        <div class="flex items-baseline justify-between gap-4">
          <div>
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Capabilities
            </p>
            <h2 class="text-xl lg:text-2xl font-semibold">
              แพลตฟอร์มเดียว ครบ 5 ส่วนหลักของ FP&amp;A
            </h2>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-1.5">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              1 · Budgeting
            </p>
            <p class="font-semibold text-th8-text">Budget input แบบ driver-based</p>
            <p class="text-slate-600 text-xs">
              Template P&amp;L กลาง ที่ทุก BU ใช้ร่วมกัน — รองรับ Product, Channel, Cost center, BU
              แทนไฟล์ Excel หลายเวอร์ชัน.
            </p>
          </div>

          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-1.5">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              2 · Forecast
            </p>
            <p class="font-semibold text-th8-text">Rolling forecast ตาม driver จริง</p>
            <p class="text-slate-600 text-xs">
              Volume, price, promo, headcount, cost assumption — ทุกอย่างเชื่อมกลับเข้า P&amp;L และ scenario.
            </p>
          </div>

          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-1.5">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              3 · Actual vs Plan
            </p>
            <p class="font-semibold text-th8-text">Variance engine</p>
            <p class="text-slate-600 text-xs">
              คำนวณ variance ให้ทั้งเชิงตัวเลข และตาม driver (volume, price, mix) — ชี้ว่าควรดูตรงไหนก่อน.
            </p>
          </div>

          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-1.5">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              4 · Scenario engine
            </p>
            <p class="font-semibold text-th8-text">What-if ในไม่กี่วินาที</p>
            <p class="text-slate-600 text-xs">
              “ขึ้นราคา 3%, ลด trade spend 10%, volume -2%” → เห็นผลกระทบต่อ EBITDA แยกตาม BU/ช่องทางทันที.
            </p>
          </div>

          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-1.5">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              5 · AI FP&amp;A Copilot
            </p>
            <p class="font-semibold text-th8-text">ถามเป็นภาษาคน ใช้ข้อมูลจริงตอบกลับ</p>
            <p class="text-slate-600 text-xs">
              ถามว่า “สาขาไหนกำลังรั่วกำไร?”, “ถ้าปิด warehouse 1 แห่งจะเกิดอะไรขึ้น?” —
              ระบบตอบพร้อมตัวเลขและเหตุผล.
            </p>
          </div>
        </div>

        <!-- Link to detailed flow mockup -->
        <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
          <div class="text-slate-700">
            อยากเห็นภาพ End-to-End Flow ตั้งแต่ Budget → Forecast → Actual vs Plan → AI Insight → Scenario?
          </div>
          <RouterLink
            :to="{ name: 'plansphere-flow' }"
            class="inline-flex items-center justify-center px-4 py-2 rounded-full text-[11px] font-medium bg-th8-primary text-white shadow-sm hover:bg-th8-accent transition-colors"
          >
            ดู FP&amp;A Flow Mockup ตัวอย่าง
          </RouterLink>
        </div>
      </section>

      <!-- SECTION: Case studies -->
      <section class="space-y-5">
        <div class="flex items-baseline justify-between gap-4">
          <div>
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Example scenarios
            </p>
            <h2 class="text-xl lg:text-2xl font-semibold">
              ตัวอย่างจริง: FMCG &amp; Logistics warehouse
            </h2>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-5 text-sm">
          <!-- FMCG case -->
          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-2">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              FMCG · Snack brand
            </p>
            <p class="font-semibold text-th8-text">
              จาก Excel หลายไฟล์ → P&amp;L driver-based พร้อม AI อธิบาย variance
            </p>
            <ul class="list-disc list-inside text-slate-700 text-xs space-y-1">
              <li>แทนที่ Excel > 15 ไฟล์ที่ใช้ทำงบและ variance รายไตรมาส.</li>
              <li>สร้าง P&amp;L แยกตามสินค้า/ช่องทาง พร้อม driver volume/price/promo.</li>
              <li>AI FP&amp;A สรุปสาเหตุ margin drop/gain รายไตรมาส เป็นไทย/อังกฤษ.</li>
              <li>Scenario “ขึ้นราคา 3% ลด trade spend 10%” → EBITDA +12 ล้านบาท/ปี.</li>
            </ul>
            <RouterLink
              :to="{ name: 'fpa-cases' }"
              class="inline-flex items-center mt-2 text-[11px] text-th8-primary hover:underline"
            >
              ดู FP&amp;A Case Studies →
            </RouterLink>
          </div>

          <!-- Logistics case -->
          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-2">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              Logistics &amp; warehouse
            </p>
            <p class="font-semibold text-th8-text">
              จาก Cost per drop ที่ต้องคำนวณมือ → FP&amp;A model + AI แนะนำ route/ลูกค้าที่ควรรีวิว
            </p>
            <ul class="list-disc list-inside text-slate-700 text-xs space-y-1">
              <li>เชื่อม FP&amp;A model กับ order, route, fuel cost, warehouse overhead.</li>
              <li>เห็น Actual vs Plan ที่ระดับ “cost per drop / cost per route”.</li>
              <li>AI ชี้ route/ลูกค้าที่กำไรต่ำกว่าที่ควรจะเป็น.</li>
              <li>Scenario “ลด empty run 10%” → ประหยัดได้ ~9.4 ล้านบาท/ปี.</li>
            </ul>
          </div>
        </div>

        <div
          class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm"
        >
          <div class="text-slate-700">
            ถ้าใช้ตัวเลขจริงของบริษัทคุณ PlanSphere จะหา Insight อะไรให้ได้บ้าง?
          </div>
          <RouterLink
            :to="{ name: 'contact' }"
            class="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium bg-th8-primary text-white shadow-sm hover:bg-th8-accent transition-colors"
          >
            นัดคุยกับทีม TH8 เรื่อง FP&amp;A
          </RouterLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const journeySteps = [
  {
    title: 'เชื่อมและจัดโครงสร้าง P&L + Drivers',
    description:
      'ช่วย map chart of accounts, product, channel, BU, cost center ให้กลายเป็นโมเดล FP&A กลางบน Postgres/Cube.js.',
    example:
      'GL_4000–4010 เป็น Revenue, GL_5000 series เป็น COGS + driver volume/price/promo ตามสินค้า/ช่องทาง.'
  },
  {
    title: 'รัน Budget, Forecast, และ Actual vs Plan ในโมเดลเดียว',
    description:
      'ทีมการเงินกรอก Budget/Forecast ผ่าน template กลาง ขณะที่ Actual ไหลจาก ERP/WMS เข้ามาอัตโนมัติทุกเดือน.',
    example: 'ทีม Finance ปรับ assumption forecast แล้ว PlanSphere คำนวณ P&L/margin ต่อ BU/ช่องทางให้ใหม่ทั้งหมด.'
  },
  {
    title: 'ให้ AI FP&A ช่วยอธิบายว่า “อะไรเปลี่ยน” และ “เพราะอะไร”',
    description:
      'Agent บน LangGraph ใช้ข้อมูลจาก cube และ driver ช่วยอธิบาย variance และสรุป insight พร้อมภาษาที่ management อ่านเข้าใจง่าย.',
    example: '“ทำไม EBITDA Q2 ดีกว่าแผน ทั้งที่ COGS/Marketing เกินงบ?”'
  },
  {
    title: 'ลอง scenario ก่อนตัดสินใจจริง',
    description:
      'DuckDB scenario engine ช่วยจำลองผลกระทบจากการเปลี่ยน price, volume, cost, trade spend ต่อ P&L.',
    example: '“ขึ้นราคา 3%, ลด trade spend 10%, volume -2%” → เห็น impact ต่อ EBITDA/margin แยกตาม BU/ช่องทาง.'
  }
]
</script>

<style scoped>
/* ใช้ฟอนต์ Prompt จาก main.css อยู่แล้ว */
</style>
