<template>
  <div class="bg-slate-50 min-h-screen">
    <!-- Hero -->
    <section class="border-b border-th8-border bg-white">
      <div class="max-w-6xl mx-auto px-4 py-8 space-y-3">
        <p class="text-[11px] uppercase tracking-wide text-th8-primary font-semibold">
          Pillar 1 · FP&amp;A Copilot
        </p>
        <h1 class="text-2xl md:text-3xl font-semibold text-th8-text">
          FP&amp;A Suite สำหรับ Saengthai &amp; SolarWing – จาก P&amp;L รวม ไปจนถึง Drilldown
        </h1>
        <p class="text-sm md:text-base text-slate-600 max-w-3xl">
          ตัวอย่าง Cockpit สำหรับ CFO / FP&amp;A ที่เห็นภาพรวม P&amp;L,
          รายได้แยกสาขา/สินค้า และ Drilldown เทียบ Actual vs Budget พร้อม Data set ที่ Agent ใช้เบื้องหลัง
        </p>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <!-- 1. Top dashboard -->
      <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
        <!-- Left: P&L + KPI -->
        <div class="space-y-4">
          <div class="rounded-2xl border border-th8-border bg-white p-5 md:p-6 space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
                  CFO Cockpit
                </p>
                <h2 class="text-lg font-semibold text-th8-text">Consolidated P&amp;L Overview</h2>
              </div>
              <span class="text-[11px] text-slate-500">Saengthai + SolarWing</span>
            </div>

            <div class="grid md:grid-cols-4 gap-3 text-[12px]">
              <div class="rounded-xl bg-slate-50 border border-slate-200 p-3">
                <p class="text-[10px] uppercase tracking-wide text-slate-500">Revenue (YTD)</p>
                <p class="text-xl font-semibold text-th8-text">฿ 2,350m</p>
                <p class="text-[11px] text-emerald-700">+ 8.4% vs LY</p>
              </div>
              <div class="rounded-xl bg-slate-50 border border-slate-200 p-3">
                <p class="text-[10px] uppercase tracking-wide text-slate-500">Gross Margin</p>
                <p class="text-xl font-semibold text-th8-text">18.7%</p>
                <p class="text-[11px] text-amber-700">- 1.2 pt vs Budget</p>
              </div>
              <div class="rounded-xl bg-slate-50 border border-slate-200 p-3">
                <p class="text-[10px] uppercase tracking-wide text-slate-500">OPEX Ratio</p>
                <p class="text-xl font-semibold text-th8-text">9.4%</p>
                <p class="text-[11px] text-emerald-700">ดีกว่าเป้า 0.6 pt</p>
              </div>
              <div class="rounded-xl bg-slate-50 border border-slate-200 p-3">
                <p class="text-[10px] uppercase tracking-wide text-slate-500">Net Profit</p>
                <p class="text-xl font-semibold text-th8-text">฿ 145m</p>
                <p class="text-[11px] text-slate-600">Scenario: +10% ถ้า RM ลด 2%</p>
              </div>
            </div>

            <!-- P&L mini table -->
            <div class="rounded-xl bg-white border border-slate-200 p-4 space-y-3 text-[11px]">
              <div class="flex items-center justify-between">
                <p class="text-[11px] uppercase tracking-wide text-slate-500">
                  P&amp;L Summary (YTD) – ตัวอย่าง
                </p>
                <span class="text-slate-500">ล้านบาท</span>
              </div>
              <div class="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2 font-medium text-slate-500">
                <span>รายการ</span><span>Actual</span><span>Budget</span><span>Variance</span>
              </div>
              <div class="space-y-1 text-slate-700">
                <div class="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2">
                  <span>Revenue</span><span>2,350</span><span>2,320</span>
                  <span class="text-emerald-700">+30</span>
                </div>
                <div class="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2">
                  <span>COGS</span><span>1,910</span><span>1,860</span>
                  <span class="text-amber-700">-50</span>
                </div>
                <div class="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2">
                  <span>Gross Profit</span><span>440</span><span>460</span>
                  <span class="text-amber-700">-20</span>
                </div>
                <div class="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2">
                  <span>OPEX</span><span>220</span><span>230</span>
                  <span class="text-emerald-700">+10</span>
                </div>
                <div class="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2 font-semibold">
                  <span>Net Profit</span><span>145</span><span>150</span>
                  <span class="text-amber-700">-5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Scenario panel / commentary -->
        <div class="space-y-4">
          <div class="rounded-2xl border border-th8-border bg-white p-5 md:p-6 space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
                  Scenario Engine
                </p>
                <h2 class="text-lg font-semibold text-th8-text">
                  “What if” สำหรับราคาวัตถุดิบและ Mix สินค้า
                </h2>
              </div>
            </div>

            <!-- Scenario list -->
            <div class="grid gap-2 text-[12px]">
              <div class="rounded-xl bg-slate-50 border border-slate-200 p-3">
                <p class="font-semibold text-th8-text">Scenario #1 – RM price -2%</p>
                <p class="text-slate-600">
                  ปรับราคาวัตถุดิบหลักลง 2% (เหล็กม้วน) → GP เพิ่ม +18m, Net Profit เพิ่ม ~ +12m
                </p>
              </div>
              <div class="rounded-xl bg-slate-50 border border-slate-200 p-3">
                <p class="font-semibold text-th8-text">
                  Scenario #2 – Shift mix ไป SolarWing 10%
                </p>
                <p class="text-slate-600">
                  ขยับ Volume จากแผ่นเมทัลชีทไป SolarRoof เพิ่ม 10% → GP รวมดีขึ้น +0.8 pt
                  แต่ต้องเพิ่ม Capex Line Solar อีก 15m
                </p>
              </div>
            </div>

            <div class="rounded-xl bg-slate-900 text-white p-4 text-[12px] space-y-1">
              <p class="font-semibold">บทบาทของ Agent</p>
              <p>• ดึงข้อมูลจาก P&amp;L / Volume / Cost driver จาก Saengthai + SolarWing</p>
              <p>• สร้าง Scenario sheet อัตโนมัติ พร้อมสรุป Insight ให้ผู้บริหาร</p>
              <p>• ให้คนเลือก Scenario ที่จะเอาเข้าวงประชุม หรือปรับตัวเลขเองเพิ่มเติม</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Drilldown: Revenue by branch by product -->
      <div class="rounded-2xl border border-th8-border bg-white p-5 md:p-6 space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Drilldown View
            </p>
            <h2 class="text-lg font-semibold text-th8-text">
              Revenue by Branch × Product – Actual vs Budget
            </h2>
          </div>
          <span class="text-[11px] text-slate-500">ตัวอย่างข้อมูล</span>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto text-[11px]">
          <table class="min-w-full text-left">
            <thead class="border-b border-slate-200 text-slate-500">
              <tr>
                <th class="py-1 pr-3">Branch</th>
                <th class="py-1 pr-3">Product Group</th>
                <th class="py-1 pr-3">Actual</th>
                <th class="py-1 pr-3">Budget</th>
                <th class="py-1 pr-3">Var</th>
                <th class="py-1 pr-3">% Var</th>
                <th class="py-1">Comment / Insight (จาก Agent)</th>
              </tr>
            </thead>
            <tbody class="text-slate-700">
              <tr class="border-b border-slate-100">
                <td class="py-1.5 pr-3">Saengthai – Chiang Mai</td>
                <td class="py-1.5 pr-3">Metal Sheet</td>
                <td class="py-1.5 pr-3">320</td>
                <td class="py-1.5 pr-3">300</td>
                <td class="py-1.5 pr-3 text-emerald-700">+20</td>
                <td class="py-1.5 pr-3 text-emerald-700">+6.7%</td>
                <td class="py-1.5">
                  Volume งานโครงการเพิ่มขึ้นจาก SolarWing referral + โปร Q2
                </td>
              </tr>
              <tr class="border-b border-slate-100">
                <td class="py-1.5 pr-3">Saengthai – Lampang</td>
                <td class="py-1.5 pr-3">Accessories</td>
                <td class="py-1.5 pr-3">85</td>
                <td class="py-1.5 pr-3">110</td>
                <td class="py-1.5 pr-3 text-amber-700">-25</td>
                <td class="py-1.5 pr-3 text-amber-700">-22.7%</td>
                <td class="py-1.5">
                  Agent แจ้งว่า Lost deal หลายเคสจากเรื่อง lead time + stock ไม่พอ
                </td>
              </tr>
              <tr>
                <td class="py-1.5 pr-3">SolarWing – CM</td>
                <td class="py-1.5 pr-3">SolarRoof</td>
                <td class="py-1.5 pr-3">140</td>
                <td class="py-1.5 pr-3">120</td>
                <td class="py-1.5 pr-3 text-emerald-700">+20</td>
                <td class="py-1.5 pr-3 text-emerald-700">+16.7%</td>
                <td class="py-1.5">
                  Conversion rate ดีขึ้นจากแคมเปญใหม่ + cross-sell ผ่านลูกค้า Saengthai เดิม
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="rounded-xl bg-slate-50 border border-dashed border-slate-300 p-3 text-[12px]">
          <p class="font-semibold text-th8-text mb-1">
            เวลา Drilldown จริง Agent ทำอะไรให้ทีม FP&amp;A?
          </p>
          <p class="text-slate-700">
            • กรองเฉพาะสาขา/สินค้าที่ variance สูงผิดปกติ<br />
            • ดึง data เพิ่มจาก CRM / Inventory / Project pipeline มาประกอบ<br />
            • สรุปเป็น Insight ภาษาไทยอ่านง่ายแนบเข้า deck ให้ CFO ใช้ในประชุม
          </p>
        </div>
      </div>

      <!-- 3. FP&A Data set -->
      <div class="rounded-2xl border border-th8-border bg-white p-5 md:p-6 space-y-4">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              FP&amp;A Data set (ตัวอย่าง)
            </p>
            <h2 class="text-lg font-semibold text-th8-text">
              ชุดข้อมูลที่ Agent ใช้สำหรับ Saengthai + SolarWing
            </h2>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-3 text-[12px]">
          <div class="rounded-xl bg-slate-50 border border-slate-200 p-3">
            <p class="font-semibold text-th8-text mb-1">1) Financial Data</p>
            <ul class="space-y-1 text-slate-700">
              <li>• GL / Trial balance รายเดือน</li>
              <li>• P&amp;L by Branch / Product</li>
              <li>• Budget / Forecast version ต่าง ๆ</li>
            </ul>
          </div>
          <div class="rounded-xl bg-slate-50 border border-slate-200 p-3">
            <p class="font-semibold text-th8-text mb-1">2) Volume &amp; Operational</p>
            <ul class="space-y-1 text-slate-700">
              <li>• Sales volume by SKU / Channel</li>
              <li>• Cost driver – RM price, Yield, Scrap</li>
              <li>• Capacity / Utilization ของโรงงาน</li>
            </ul>
          </div>
          <div class="rounded-xl bg-slate-50 border border-slate-200 p-3">
            <p class="font-semibold text-th8-text mb-1">3) Reference &amp; Meta</p>
            <ul class="space-y-1 text-slate-700">
              <li>• Mapping Branch → Region → Business</li>
              <li>• Product hierarchy: Group / Family / SKU</li>
              <li>• Scenario catalog + สมมติฐานหลัก</li>
            </ul>
          </div>
        </div>

        <div class="rounded-xl bg-slate-900 text-white p-4 text-[12px] space-y-1">
          <p class="font-semibold">แนวคิดสำคัญ</p>
          <p>
            ไม่จำเป็นต้องทำ Data warehouse ใหญ่ก่อน
            แต่เลือก Data set ที่ใช้ทำงบ/วิเคราะห์อยู่แล้วมาจัดระเบียบ
            ให้ Agent ใช้เป็นจุดเริ่มต้นได้ก่อน
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
