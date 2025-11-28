<template>
  <div class="min-h-screen bg-th8-surface text-th8-text">
    <div class="max-w-6xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <!-- Header -->
      <header class="space-y-3">
        <p class="text-[11px] uppercase tracking-[0.25em] text-th8-primary flex items-center gap-2">
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-th8-primary"></span>
          PlanSphere™ · FP&amp;A AI Suite
        </p>
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 class="text-2xl md:text-3xl font-semibold">
              End-to-End FP&amp;A Flow — จาก Budget → Actual → AI Insight
            </h1>
            <p class="text-sm text-slate-600 mt-2 max-w-2xl">
              Mockup หน้าจอ + Flow การทำงาน ตั้งแต่กรอก Budget, ปรับ Forecast, เทียบ Actual vs Plan,
              จนถึงถาม–ตอบกับ AI FP&amp;A และเล่น Scenario — ออกแบบในธีม TH8.ai สำหรับ PlanSphere™.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 text-[11px]">
            <span class="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700">
              FMCG · Snack Example
            </span>
            <span class="px-3 py-1 rounded-full bg-white border border-th8-border text-slate-700">
              MVP Mockup
            </span>
          </div>
        </div>
      </header>

      <!-- Stepper -->
      <section class="bg-white border border-th8-border rounded-2xl p-4">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="space-y-1">
            <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500">
              FP&amp;A User Journey
            </p>
            <p class="text-sm text-slate-700">
              เส้นทางจาก “ตัวเลขกระจัดกระจาย” → “ถาม AI แล้วได้คำตอบพร้อม Scenario”
            </p>
          </div>
          <div class="flex-1">
            <ol class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-[11px] text-slate-700">
              <li class="flex items-center gap-2">
                <span class="w-6 h-6 flex items-center justify-center rounded-full bg-th8-primary text-white text-[11px]">1</span>
                <span>Budget Input</span>
              </li>
              <span class="hidden md:block flex-1 h-px bg-slate-200 mx-2"></span>
              <li class="flex items-center gap-2">
                <span class="w-6 h-6 flex items-center justify-center rounded-full bg-slate-900 text-white text-[11px]">2</span>
                <span>Forecast &amp; Driver</span>
              </li>
              <span class="hidden md:block flex-1 h-px bg-slate-200 mx-2"></span>
              <li class="flex items-center gap-2">
                <span class="w-6 h-6 flex items-center justify-center rounded-full bg-slate-900 text-white text-[11px]">3</span>
                <span>Actual vs Plan</span>
              </li>
              <span class="hidden md:block flex-1 h-px bg-slate-200 mx-2"></span>
              <li class="flex items-center gap-2">
                <span class="w-6 h-6 flex items-center justify-center rounded-full bg-slate-900 text-white text-[11px]">4</span>
                <span>AI Insight</span>
              </li>
              <span class="hidden md:block flex-1 h-px bg-slate-200 mx-2"></span>
              <li class="flex items-center gap-2">
                <span class="w-6 h-6 flex items-center justify-center rounded-full bg-slate-900 text-white text-[11px]">5</span>
                <span>Q&amp;A &amp; Scenario</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <!-- Layout: Sidebar + Screens -->
      <section class="grid md:grid-cols-[240px,minmax(0,1fr)] gap-4 md:gap-6">
        <!-- Left: Flow Text -->
        <aside class="space-y-4">
          <div class="bg-white border border-th8-border rounded-2xl p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500">
              Flow Overview
            </p>
            <ol class="text-[12px] text-slate-700 space-y-1.5">
              <li><strong class="text-th8-primary">Step 1:</strong> ทีม Finance กรอก Budget ตาม Template เดียวกัน</li>
              <li><strong class="text-th8-primary">Step 2:</strong> ปรับ Forecast ตาม Driver (Volume, Price, Promo)</li>
              <li><strong class="text-th8-primary">Step 3:</strong> ดึง Actual จาก ERP/WMS เทียบกับ Plan อัตโนมัติ</li>
              <li><strong class="text-th8-primary">Step 4:</strong> AI FP&amp;A สรุป Insight และ Flag จุดผิดปกติ</li>
              <li><strong class="text-th8-primary">Step 5:</strong> ผู้บริหารถาม–ตอบ + เล่น Scenario “What if…”</li>
            </ol>
          </div>

          <div class="bg-white border border-th8-border rounded-2xl p-4 space-y-2 text-[12px]">
            <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500">
              Dimension &amp; Driver
            </p>
            <p class="text-slate-700">
              ตัวอย่างนี้ใช้ P&amp;L + Driver ของ FMCG (Snack) แบ่งตาม:
            </p>
            <ul class="list-disc list-inside text-slate-700 space-y-1">
              <li>Product: SKU-SNACK-01 “CrunchyJoy”</li>
              <li>Channel: Modern Trade, GT, Online (รวมเป็น All)</li>
              <li>Driver: Volume, Price per unit, Promo depth</li>
            </ul>
          </div>
        </aside>

        <!-- Right: Screens -->
        <div class="space-y-6">

          <!-- Screen 1: Budget Input -->
          <div class="bg-white border border-th8-border rounded-2xl p-4 md:p-5 space-y-4 shadow-sm">
            <div class="flex items-center justify-between gap-3">
              <div class="space-y-1">
                <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  Step 1 · Budget Input
                </p>
                <h2 class="text-sm font-semibold text-th8-text">
                  กรอก Budget / Plan 12 เดือน — ตาม Account หลัก
                </h2>
                <p class="text-[11px] text-slate-500">
                  ทีม Finance ใช้ Template เดียวกันทั้งองค์กร กรอก Revenue, COGS, Marketing, Logistics, Trade, Warehouse, Admin
                </p>
              </div>
              <div class="hidden md:flex items-center gap-2 text-[11px]">
                <span class="px-2.5 py-1 rounded-full bg-slate-50 border border-th8-border text-slate-600">Year: 2025</span>
                <span class="px-2.5 py-1 rounded-full bg-slate-50 border border-th8-border text-slate-600">Product: SKU-SNACK-01</span>
              </div>
            </div>

            <!-- Mock table -->
            <div class="overflow-x-auto rounded-xl border border-th8-border bg-slate-50/60">
              <table class="min-w-full text-[11px]">
                <thead class="bg-slate-100">
                  <tr>
                    <th class="px-3 py-2 text-left font-semibold text-slate-500 w-36">Account</th>
                    <th class="px-3 py-2 text-right font-semibold text-slate-500">Jan</th>
                    <th class="px-3 py-2 text-right font-semibold text-slate-500">Feb</th>
                    <th class="px-3 py-2 text-right font-semibold text-slate-500">Mar</th>
                    <th class="px-3 py-2 text-right font-semibold text-slate-500">Apr</th>
                    <th class="px-3 py-2 text-right font-semibold text-slate-500">…</th>
                    <th class="px-3 py-2 text-right font-semibold text-slate-500">Dec</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
                  <tr>
                    <td class="px-3 py-2 text-slate-800">Revenue</td>
                    <td class="px-3 py-1 text-right">
                      <div class="bg-white rounded px-2 py-1 border border-slate-200 text-slate-800">12,000,000</div>
                    </td>
                    <td class="px-3 py-1 text-right">
                      <div class="bg-white rounded px-2 py-1 border border-slate-200 text-slate-800">11,800,000</div>
                    </td>
                    <td class="px-3 py-1 text-right">
                      <div class="bg-white rounded px-2 py-1 border border-slate-200 text-slate-800">12,200,000</div>
                    </td>
                    <td class="px-3 py-1 text-right">
                      <div class="bg-white rounded px-2 py-1 border border-slate-200 text-slate-800">13,000,000</div>
                    </td>
                    <td class="px-3 py-1 text-right text-slate-400">…</td>
                    <td class="px-3 py-1 text-right">
                      <div class="bg-white rounded px-2 py-1 border border-slate-200 text-slate-800">14,500,000</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-3 py-2 text-slate-800">COGS</td>
                    <td class="px-3 py-1 text-right">
                      <div class="bg-white rounded px-2 py-1 border border-slate-200">6,480,000</div>
                    </td>
                    <td class="px-3 py-1 text-right">
                      <div class="bg-white rounded px-2 py-1 border border-slate-200">6,372,000</div>
                    </td>
                    <td class="px-3 py-1 text-right">
                      <div class="bg-white rounded px-2 py-1 border border-slate-200">6,588,000</div>
                    </td>
                    <td class="px-3 py-1 text-right text-slate-400">…</td>
                    <td class="px-3 py-1 text-right text-slate-400">…</td>
                    <td class="px-3 py-1 text-right">
                      <div class="bg-white rounded px-2 py-1 border border-slate-200">7,830,000</div>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-3 py-2 text-slate-800">Marketing</td>
                    <td class="px-3 py-1 text-right">
                      <div class="bg-white rounded px-2 py-1 border border-red-200">1,200,000</div>
                    </td>
                    <td class="px-3 py-1 text-right">
                      <div class="bg-white rounded px-2 py-1 border border-slate-200">900,000</div>
                    </td>
                    <td class="px-3 py-1 text-right">
                      <div class="bg-white rounded px-2 py-1 border border-slate-200">980,000</div>
                    </td>
                    <td class="px-3 py-1 text-right text-slate-400">…</td>
                    <td class="px-3 py-1 text-right text-slate-400">…</td>
                    <td class="px-3 py-1 text-right">
                      <div class="bg-white rounded px-2 py-1 border border-slate-200">1,500,000</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
              <p>
                ไฟล์ Budget นี้ จะถูกเก็บเป็น
                <span class="text-th8-primary font-semibold">Budget_2025_v1</span> และใช้เป็นฐานเปรียบเทียบในขั้นตอนถัดไป
              </p>
              <div class="flex items-center gap-2">
                <button class="px-3 py-1 rounded-full bg-slate-50 border border-th8-border text-slate-700">
                  Import Excel
                </button>
                <button class="px-3 py-1 rounded-full bg-th8-primary text-white">
                  Save Budget
                </button>
              </div>
            </div>
          </div>

          <!-- Screen 2: Forecast & Driver -->
          <div class="bg-white border border-th8-border rounded-2xl p-4 md:p-5 space-y-4 shadow-sm">
            <div class="flex items-center justify-between gap-3">
              <div class="space-y-1">
                <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  Step 2 · Forecast &amp; Driver
                </p>
                <h2 class="text-sm font-semibold text-th8-text">
                  ปรับ Forecast จาก Driver — Volume, Price, Promo
                </h2>
                <p class="text-[11px] text-slate-500">
                  ทีม FP&amp;A ปรับสมมติฐาน แล้วระบบคำนวณ Forecast ใหม่ทั้งปี พร้อมสรุป impact
                </p>
              </div>
              <div class="hidden md:flex items-center gap-2 text-[11px]">
                <span class="px-2.5 py-1 rounded-full bg-slate-50 border border-th8-border text-slate-600">Scenario: Base</span>
                <span class="px-2.5 py-1 rounded-full bg-slate-50 border border-th8-border text-slate-600">Driver-based</span>
              </div>
            </div>

            <div class="grid md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] gap-4">
              <!-- Driver Panel -->
              <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 text-[11px]">
                <p class="text-slate-800 font-semibold">
                  Driver Assumptions (2025 · FMCG Snack)
                </p>
                <div class="grid grid-cols-2 gap-3">
                  <div class="space-y-1">
                    <p class="text-slate-500">Volume growth vs 2024</p>
                    <div class="flex items-center gap-2">
                      <input
                        type="number"
                        value="8"
                        class="w-16 px-2 py-1 rounded bg-white border border-slate-300 text-right text-slate-800"
                      />
                      <span class="text-slate-500">%</span>
                    </div>
                  </div>
                  <div class="space-y-1">
                    <p class="text-slate-500">Net price change</p>
                    <div class="flex items-center gap-2">
                      <input
                        type="number"
                        value="3"
                        class="w-16 px-2 py-1 rounded bg-white border border-slate-300 text-right text-slate-800"
                      />
                      <span class="text-slate-500">%</span>
                    </div>
                  </div>
                  <div class="space-y-1">
                    <p class="text-slate-500">Promo depth change</p>
                    <div class="flex items-center gap-2">
                      <input
                        type="number"
                        value="-2"
                        class="w-16 px-2 py-1 rounded bg-white border border-slate-300 text-right text-slate-800"
                      />
                      <span class="text-slate-500">pp</span>
                    </div>
                  </div>
                  <div class="space-y-1">
                    <p class="text-slate-500">Raw material cost</p>
                    <div class="flex items-center gap-2">
                      <input
                        type="number"
                        value="4"
                        class="w-16 px-2 py-1 rounded bg-white border border-slate-300 text-right text-slate-800"
                      />
                      <span class="text-slate-500">%</span>
                    </div>
                  </div>
                </div>
                <button class="mt-2 px-3 py-1.5 rounded-full bg-th8-primary text-white text-[11px]">
                  Update Forecast
                </button>
              </div>

              <!-- Forecast Summary -->
              <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-[11px]">
                <p class="text-slate-800 font-semibold">
                  Forecast Summary vs Budget (2025)
                </p>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-slate-500">Revenue</span>
                    <span class="text-slate-800">+3.8% vs Budget</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-slate-500">COGS</span>
                    <span class="text-slate-800">+2.1% vs Budget</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-slate-500">EBITDA</span>
                    <span class="text-emerald-600 font-semibold">+4.5 M THB vs Budget</span>
                  </div>
                </div>
                <p class="text-slate-500 mt-2">
                  Forecast นี้จะถูกเก็บเป็น <span class="text-slate-800 font-semibold">FC_2025_Base_v2</span>
                  และใช้ใน Actual vs Plan เปรียบเทียบกับตัวเลขจริง.
                </p>
              </div>
            </div>
          </div>

          <!-- Screen 3: Actual vs Plan -->
          <div class="bg-white border border-th8-border rounded-2xl p-4 md:p-5 space-y-4 shadow-sm">
            <div class="flex items-center justify-between gap-3">
              <div class="space-y-1">
                <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  Step 3 · Actual vs Plan
                </p>
                <h2 class="text-sm font-semibold text-th8-text">
                  เทียบตัวเลขจริง vs Budget/Forecast — Flag จุดผิดปกติ
                </h2>
              </div>
              <div class="hidden md:flex items-center gap-2 text-[11px]">
                <span class="px-2.5 py-1 rounded-full bg-slate-50 border border-th8-border text-slate-600">Period: Q2 2025</span>
                <span class="px-2.5 py-1 rounded-full bg-slate-50 border border-th8-border text-slate-600">Plan: Budget_2025_v1</span>
              </div>
            </div>

            <div class="space-y-3">
              <!-- Filter bar -->
              <div class="flex flex-wrap items-center gap-2 text-[11px]">
                <div
                  class="px-2.5 py-1 rounded-full bg-slate-50 border border-th8-border flex items-center gap-2 text-slate-600"
                >
                  <span class="">Channel</span>
                  <span class="px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">All</span>
                </div>
                <div
                  class="px-2.5 py-1 rounded-full bg-slate-50 border border-th8-border flex items-center gap-2 text-slate-600"
                >
                  <span>Region</span>
                  <span class="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">Thailand</span>
                </div>
                <div
                  class="px-2.5 py-1 rounded-full bg-slate-50 border border-th8-border flex items-center gap-2 text-slate-600"
                >
                  <span>View</span>
                  <span class="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">P&amp;L summary</span>
                </div>
              </div>

              <!-- Variance table (compact) -->
              <div class="overflow-x-auto rounded-xl border border-th8-border bg-slate-50/60">
                <table class="min-w-full text-[11px]">
                  <thead class="bg-slate-100">
                    <tr>
                      <th class="px-3 py-2 text-left font-semibold text-slate-500">Metric</th>
                      <th class="px-3 py-2 text-right font-semibold text-slate-500">Actual</th>
                      <th class="px-3 py-2 text-right font-semibold text-slate-500">Plan</th>
                      <th class="px-3 py-2 text-right font-semibold text-slate-500">Var</th>
                      <th class="px-3 py-2 text-right font-semibold text-slate-500">Var %</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200">
                    <tr>
                      <td class="px-3 py-2 text-slate-800">Revenue</td>
                      <td class="px-3 py-2 text-right text-slate-800">38,200,000</td>
                      <td class="px-3 py-2 text-right text-slate-800">36,800,000</td>
                      <td class="px-3 py-2 text-right text-emerald-600">+1,400,000</td>
                      <td class="px-3 py-2 text-right text-emerald-600">+3.8%</td>
                    </tr>
                    <tr>
                      <td class="px-3 py-2 text-slate-800">COGS</td>
                      <td class="px-3 py-2 text-right text-slate-800">20,920,000</td>
                      <td class="px-3 py-2 text-right text-slate-800">19,872,000</td>
                      <td class="px-3 py-2 text-right text-red-600">-1,048,000</td>
                      <td class="px-3 py-2 text-right text-red-600">-5.3%</td>
                    </tr>
                    <tr>
                      <td class="px-3 py-2 text-slate-800">Marketing</td>
                      <td class="px-3 py-2 text-right text-slate-800">3,550,000</td>
                      <td class="px-3 py-2 text-right text-slate-800">3,200,000</td>
                      <td class="px-3 py-2 text-right text-red-600">-350,000</td>
                      <td class="px-3 py-2 text-right text-red-600">-10.9%</td>
                    </tr>
                    <tr>
                      <td class="px-3 py-2 text-slate-800">EBITDA</td>
                      <td class="px-3 py-2 text-right text-slate-800">6,980,000</td>
                      <td class="px-3 py-2 text-right text-slate-800">6,100,000</td>
                      <td class="px-3 py-2 text-right text-emerald-600">+880,000</td>
                      <td class="px-3 py-2 text-right text-emerald-600">+14.4%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Screen 4 & 5: AI Insight + Q&A / Scenario -->
          <div class="bg-white border border-th8-border rounded-2xl p-4 md:p-5 space-y-4 shadow-sm">
            <div class="flex items-center justify-between gap-3">
              <div class="space-y-1">
                <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  Step 4–5 · AI Insight &amp; Scenario
                </p>
                <h2 class="text-sm font-semibold text-th8-text">
                  AI FP&amp;A สรุป Insight ให้ + เล่น Scenario “What if…”
                </h2>
              </div>
              <div class="hidden md:flex items-center gap-2 text-[11px]">
                <span class="px-2.5 py-1 rounded-full bg-slate-50 border border-th8-border text-slate-600">Agent: FP&amp;A Analyst</span>
                <span class="px-2.5 py-1 rounded-full bg-slate-50 border border-th8-border text-slate-600">Mode: Thai + English</span>
              </div>
            </div>

            <div class="grid md:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] gap-4">
              <!-- AI Insight Panel -->
              <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 text-[11px]">
                <p class="text-slate-800 font-semibold flex items-center gap-2">
                  AI FP&amp;A Insight (Q2 2025)
                  <span
                    class="px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200 text-[10px] uppercase tracking-[0.18em]"
                  >
                    Auto-generated
                  </span>
                </p>
                <div class="space-y-2 text-slate-800 leading-relaxed">
                  <p>
                    1)
                    <span class="text-th8-primary font-semibold">
                      กำไร (EBITDA) ดีกว่า Budget +14.4%
                    </span>
                    แม้ COGS/Marketing เกินแผน เพราะ Volume โตในช่องทางที่ Margin สูงกว่า (Modern trade + online)
                  </p>
                  <p>
                    2) ค่า COGS เพิ่มจากต้นทุนวัตถุดิบ (มันฝรั่ง+น้ำมัน) สูงกว่าที่วางไว้ ~5%
                    แต่ถูกชดเชยด้วยการปรับราคาเฉลี่ย +3% และ mix สินค้าที่เน้น SKU ขนาดใหญ่
                  </p>
                  <p>
                    3) Marketing overspend ~10% แต่มีผลต่อยอดขายจริง กรณีนี้ “ยังไม่ควรลดทันที”
                    แนะนำให้เก็บ data เพิ่มอีก 1–2 ไตรมาส เพื่อแยก impact promo / media ให้ชัดกว่านี้
                  </p>
                </div>
                <p class="text-slate-500 mt-2">
                  ถ้าต้องการ Drill-down เพิ่ม สามารถถาม AI เพิ่ม เช่น
                  <span class="text-slate-800">
                    “ถ้าเราลด Trade spending 10% ในช่องทางที่ไม่คุ้ม จะกระทบกำไรเท่าไหร่?”
                  </span>
                </p>
              </div>

              <!-- Q&A + Scenario -->
              <div class="space-y-3 text-[11px]">
                <!-- Chat like box -->
                <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                  <p class="text-slate-800 font-semibold">
                    Q&amp;A กับ AI FP&amp;A
                  </p>
                  <div class="space-y-2 max-h-48 overflow-y-auto">
                    <div>
                      <p class="text-slate-500 mb-0.5">คุณถาม:</p>
                      <div class="bg-white rounded-lg px-3 py-2 text-slate-800 border border-slate-200">
                        ทำไม Q2 กำไรดีกว่า Budget ทั้ง ๆ ที่ COGS กับ Marketing เกินแผน?
                      </div>
                    </div>
                    <div>
                      <p class="text-slate-500 mb-0.5 mt-2">AI FP&amp;A ตอบ:</p>
                      <div class="bg-white rounded-lg px-3 py-2 text-slate-800 border border-slate-200">
                        หลัก ๆ มาจาก 3 ปัจจัย:
                        <ol class="list-decimal list-inside mt-1 space-y-0.5">
                          <li>Volume โตในช่องทางที่ Margin สูงกว่า (MT/Online)</li>
                          <li>Net price เฉลี่ยสูงกว่า Budget ~1.8%</li>
                          <li>Mix SKU ขยับไปที่ pack ขนาดใหญ่ ซึ่งมี Margin ดีกว่า</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div class="mt-2 flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="พิมพ์คำถามต่อ เช่น “ถ้าขึ้นราคาอีก 2% จะกระทบ EBITDA เท่าไหร่?”"
                      class="flex-1 px-3 py-2 rounded-full bg-white border border-slate-300 text-[11px] text-slate-800 placeholder:text-slate-400"
                    />
                    <button class="px-3 py-1.5 rounded-full bg-th8-primary text-white">
                      ถาม
                    </button>
                  </div>
                </div>

                <!-- Scenario Card -->
                <div class="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                  <p class="text-slate-800 font-semibold">
                    Scenario Engine (What if…)
                  </p>
                  <div class="grid grid-cols-2 gap-3">
                    <div>
                      <p class="text-slate-500">ขึ้นราคาเพิ่ม</p>
                      <div class="flex items-center gap-2">
                        <input
                          type="number"
                          value="2"
                          class="w-16 px-2 py-1 rounded bg-white border border-slate-300 text-right text-slate-800"
                        />
                        <span class="text-slate-500">%</span>
                      </div>
                    </div>
                    <div>
                      <p class="text-slate-500">ลด Trade spending</p>
                      <div class="flex items-center gap-2">
                        <input
                          type="number"
                          value="-10"
                          class="w-16 px-2 py-1 rounded bg-white border border-slate-300 text-right text-slate-800"
                        />
                        <span class="text-slate-500">%</span>
                      </div>
                    </div>
                    <div>
                      <p class="text-slate-500">สมมติ Volume</p>
                      <div class="flex items-center gap-2">
                        <input
                          type="number"
                          value="-2"
                          class="w-16 px-2 py-1 rounded bg-white border border-slate-300 text-right text-slate-800"
                        />
                        <span class="text-slate-500">%</span>
                      </div>
                    </div>
                  </div>
                  <button class="mt-2 px-3 py-1.5 rounded-full bg-th8-primary text-white">
                    Run Scenario
                  </button>
                  <div class="border-t border-slate-200 pt-2 mt-2 text-slate-800">
                    <p>ผลกระทบโดยประมาณ:</p>
                    <ul class="mt-1 space-y-0.5">
                      <li>• EBITDA เพิ่มขึ้น <span class="text-emerald-600 font-semibold">+3.6 M THB</span></li>
                      <li>
                        • EBITDA margin ขยับจาก 18.0% →
                        <span class="text-emerald-600 font-semibold">19.4%</span>
                      </li>
                      <li>• Risk: อาจกระทบ Volume -2% หากคู่แข่งไม่ขึ้นราคาตาม</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* ใช้ฟอนต์ Prompt จาก main.css */
</style>
