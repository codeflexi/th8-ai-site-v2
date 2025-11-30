<template>
<div class="max-w-6xl mx-auto space-y-6">
<!-- HEADER -->
<header class="space-y-3">
<p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        Pillar 1 · AI Agent Suite
      </p>
<h1 class="text-2xl md:text-3xl font-semibold">
        FP&amp;A Agent Suite · รวมภาพ P&amp;L, Forecast และ Scenario ของแสงไทย &amp; SolarWing
      </h1>
<p class="text-sm text-slate-600 max-w-2xl">
        ตัวอย่างหน้าจอ FP&amp;A Agent สำหรับทีมการเงิน / FP&amp;A ที่ต้องดูทั้งกลุ่ม  
        เช่น แสงไทยเมทัลชีท กับ SolarWing หลายสาขา และฝั่ง Back Office ที่เห็น data set &amp; การเชื่อมต่อกับ ERP / Data Warehouse / Sheet.
      </p>

    <!-- 🔗 CTA ไปหน้า Mockup -->
        <div class="pt-2">
          <RouterLink
            :to="{ name: 'agent-fpa-demo' }"
            class="inline-flex items-center rounded-full border border-th8-border bg-white px-4 py-2 text-[11px] md:text-xs font-medium text-th8-text hover:bg-slate-50"
          >
            ดูหน้าจอ Mockup: Actual vs Budget · FP&amp;A Agent
          </RouterLink>
        </div>


    <!-- 🔗 CTA ไปหน้า Mockup -->
        <div class="pt-2">
          <RouterLink
            :to="{ name: 'pillar1-fpa-detail' }"
            class="inline-flex items-center rounded-full border border-th8-border bg-white px-4 py-2 text-[11px] md:text-xs font-medium text-th8-text hover:bg-slate-50"
          >
            ดูหน้าจอ Mockup: More Details · FP&amp;A Agent
          </RouterLink>
        </div>
      
      
</header>
<!-- MAIN LAYOUT -->
<div class="grid md:grid-cols-[1.15fr_0.85fr] gap-5 md:gap-6 text-xs md:text-sm">
<!-- ================= FRONTLINE: FP&A AGENT DASHBOARD ================ -->
<section class="space-y-4">
<div class="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 space-y-3">
<div class="flex items-center justify-between gap-2">
<div>
<p class="text-[11px] font-medium text-slate-700">
                FP&amp;A Agent · หน้าจอสำหรับทีมการเงิน / FP&amp;A
              </p>
<p class="text-[10px] text-slate-500">
                ดูภาพรวม P&amp;L กลุ่มธุรกิจ · Variance vs Budget · Rolling Forecast · Scenario Impact.
              </p>
</div>
<!-- TH8 icon -->
<div class="flex items-center gap-1">
<div class="h-8 w-8 rounded-xl bg-slate-900 text-white flex items-center justify-center text-[11px] font-semibold">
                TH8
              </div>
<span class="text-[10px] text-slate-500">FP&amp;A Agent</span>
</div>
</div>
<!-- Top KPI Row -->
<div class="grid grid-cols-3 gap-2 text-[10px] mt-1">
<div class="bg-slate-50 border border-slate-200 rounded-xl p-2">
<p class="text-slate-500">กลุ่มแสงไทย (YTD)</p>
<p class="text-lg font-semibold text-slate-900">฿1,280 ลบ.</p>
<p class="text-[10px] text-slate-500 mt-0.5">
                +8.5% เทียบงบประมาณ · Margin 17.2%
              </p>
</div>
<div class="bg-slate-50 border border-slate-200 rounded-xl p-2">
<p class="text-slate-500">SolarWing รวมทุกสาขา (YTD)</p>
<p class="text-lg font-semibold text-emerald-700">฿420 ลบ.</p>
<p class="text-[10px] text-emerald-700 mt-0.5">
                +12.3% เทียบงบประมาณ · Margin 23.8%
              </p>
</div>
<div class="bg-slate-50 border border-slate-200 rounded-xl p-2">
<p class="text-slate-500">Closing &amp; Forecast</p>
<p class="text-lg font-semibold text-slate-900">ปิดงบใน 3 วัน</p>
<p class="text-[10px] text-slate-500 mt-0.5">
                Rolling Forecast update แล้ว 2 scenario (Base / High)
              </p>
</div>
</div>
<!-- Filters -->
<div class="flex flex-wrap items-center gap-2 pt-2">
<div class="flex flex-wrap items-center gap-1 text-[10px]">
<span class="px-2 py-1 rounded-full border border-slate-300 bg-slate-50">
                Entity: แสงไทยเมทัลชีท + SolarWing Group
              </span>
<span class="px-2 py-1 rounded-full border border-slate-300 bg-slate-50">
                View: Consolidated P&amp;L
              </span>
</div>
<div class="ml-auto flex items-center gap-1">
<select class="border border-slate-300 rounded-full px-2.5 py-1 text-[10px] bg-white focus:outline-none focus:ring-1 focus:ring-slate-400">
<option>YTD 2025 (Jan–Oct)</option>
<option>Q3 2025</option>
<option>Last 12 Months</option>
</select>
</div>
</div>
<!-- Mini P&L Comparison: Saengthai vs SolarWing -->
<div class="mt-2 grid md:grid-cols-2 gap-3">
<!-- Saengthai -->
<div class="border border-slate-200 rounded-xl overflow-hidden">
<div class="bg-slate-900 text-slate-50 px-3 py-2 flex items-center justify-between">
<div>
<p class="text-[11px] font-medium">Saengthai Metalsheet · P&amp;L Snapshot</p>
<p class="text-[10px] text-slate-300">YTD vs Budget</p>
</div>
<span class="text-[10px] bg-emerald-500/20 text-emerald-200 px-2 py-0.5 rounded-full">
                  Variance +5.2%
                </span>
</div>
<div class="bg-white text-[10px] divide-y divide-slate-100">
<div class="px-3 py-2 flex items-center justify-between">
<span class="text-slate-500">Revenue</span>
<div class="text-right">
<p class="text-slate-900 font-semibold">฿820 ลบ.</p>
<p class="text-[10px] text-emerald-700">+4.1% vs Budget</p>
</div>
</div>
<div class="px-3 py-2 flex items-center justify-between">
<span class="text-slate-500">Gross Margin</span>
<div class="text-right">
<p class="text-slate-900 font-semibold">15.8%</p>
<p class="text-[10px] text-amber-600">-0.7 pt vs Budget</p>
</div>
</div>
<div class="px-3 py-2 flex items-center justify-between">
<span class="text-slate-500">OPEX</span>
<div class="text-right">
<p class="text-slate-900 font-semibold">฿126 ลบ.</p>
<p class="text-[10px] text-emerald-700">-3.4% vs Budget</p>
</div>
</div>
<div class="px-3 py-2 flex items-center justify-between">
<span class="text-slate-500">EBIT Margin</span>
<div class="text-right">
<p class="text-slate-900 font-semibold">9.8%</p>
<p class="text-[10px] text-emerald-700">+0.9 pt vs Budget</p>
</div>
</div>
</div>
</div>
<!-- SolarWing -->
<div class="border border-slate-200 rounded-xl overflow-hidden">
<div class="bg-slate-800 text-slate-50 px-3 py-2 flex items-center justify-between">
<div>
<p class="text-[11px] font-medium">SolarWing · Multi-Branch P&amp;L</p>
<p class="text-[10px] text-slate-300">Top 3 สาขาหลัก</p>
</div>
<span class="text-[10px] bg-emerald-500/20 text-emerald-200 px-2 py-0.5 rounded-full">
                  Margin Strong
                </span>
</div>
<div class="bg-white text-[10px] divide-y divide-slate-100">
<div class="px-3 py-2 flex items-center justify-between">
<div>
<p class="font-medium text-slate-800">สาขาเชียงใหม่</p>
<p class="text-[10px] text-slate-500">Revenue ฿180 ลบ. · Margin 25.4%</p>
</div>
<p class="text-emerald-700 font-semibold">+9.2% vs Budget</p>
</div>
<div class="px-3 py-2 flex items-center justify-between">
<div>
<p class="font-medium text-slate-800">สาขาลำพูน</p>
<p class="text-[10px] text-slate-500">Revenue ฿120 ลบ. · Margin 22.1%</p>
</div>
<p class="text-emerald-700 font-semibold">+6.8% vs Budget</p>
</div>
<div class="px-3 py-2 flex items-center justify-between">
<div>
<p class="font-medium text-slate-800">สาขาลำปาง</p>
<p class="text-[10px] text-slate-500">Revenue ฿80 ลบ. · Margin 21.0%</p>
</div>
<p class="text-amber-600 font-semibold">+1.5% vs Budget</p>
</div>
</div>
</div>
</div>
<!-- Scenario & Agent Conversation -->
<div class="mt-3 grid md:grid-cols-2 gap-3">
<!-- Scenario Playbook -->
<div class="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2">
<p class="text-[11px] font-medium text-slate-700">
                Scenario Playbook · ตัวอย่างที่ใช้คุยกับผู้บริหาร
              </p>
<ul class="list-disc list-inside text-[10px] text-slate-600 space-y-0.5">
<li>Scenario A: ปรับราคาขายแผ่นเมทัลชีท +3% · ดูผลกระทบต่อ Volume &amp; Margin</li>
<li>Scenario B: SolarWing เปิดสาขาใหม่ Q4 · Capital Spending + CAPEX payback</li>
<li>Scenario C: ต้นทุนเหล็กขึ้น +10% · จำลองผลกระทบทั้งกลุ่ม</li>
</ul>
<button class="mt-1 inline-flex items-center justify-center rounded-full bg-slate-900 text-white text-[11px] px-3 py-1.5">
                ให้ Agent จำลอง Scenario A + B เทียบกับ Budget
              </button>
</div>
<!-- Agent Response -->
<div class="bg-slate-900 text-slate-50 rounded-xl p-3 space-y-2 text-[11px]">
<p class="font-medium">
                สรุปจาก Scenario A: ปรับราคาขายแผ่นเมทัลชีท +3%
              </p>
<ul class="list-disc list-inside space-y-0.5 text-slate-100/90">
<li>Revenue กลุ่มแสงไทย เพิ่มประมาณ <span class="font-semibold">+฿48 ลบ.</span></li>
<li>คาดว่า Volume ลดลงเล็กน้อย ~1.2% จาก Elasticity เดิม</li>
<li>Gross Margin ดีขึ้นเฉลี่ย <span class="font-semibold">+1.1 pt</span> ถ้าไม่มี Discount เพิ่มเติม</li>
</ul>
<p class="text-[10px] text-emerald-300">
                สามารถดาวน์โหลดผลลัพธ์เป็น Excel หรือส่งเข้า Data Room สำหรับใช้ในบอร์ดได้
              </p>
</div>
</div>
</div>
</section>
<!-- ================= BACK OFFICE: DATA & INTEGRATION ================ -->
<section class="space-y-4">
<!-- Data Set Overview -->
<div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<div class="h-8 w-8 rounded-xl bg-slate-900 text-white flex items-center justify-center text-[11px]">
                DT
              </div>
<div>
<p class="text-[11px] font-medium text-slate-800">FP&amp;A Data Set Overview</p>
<p class="text-[10px] text-slate-500">สำหรับ Back Office / Data / IT</p>
</div>
</div>
<span class="text-[10px] text-slate-500">
              Data refresh: ระดับวัน / ระดับเดือน
            </span>
</div>
<!-- Table list -->
<div class="space-y-2 text-[10px]">
<div class="bg-white rounded-lg border border-slate-200 p-2.5">
<div class="flex items-center justify-between">
<p class="font-medium text-slate-800">fact_gl_monthly</p>
<span class="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">
                  Primary P&amp;L
                </span>
</div>
<p class="text-slate-500 mt-0.5">
                ยอดบัญชีรวมต่อเดือน (GL) แยกตาม Company, Cost Center, Account, Product line.
              </p>
<p class="text-slate-500 mt-0.5">
                Source: ERP แสงไทย / ERP SolarWing · ใช้ทำ P&amp;L Consolidation.
              </p>
</div>
<div class="bg-white rounded-lg border border-slate-200 p-2.5">
<div class="flex items-center justify-between">
<p class="font-medium text-slate-800">fact_sales_margin_daily</p>
<span class="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                  Margin Bridge
                </span>
</div>
<p class="text-slate-500 mt-0.5">
                ยอดขายรายวัน / Margin ต่อ SKU / สาขา ทั้งฝั่ง แสงไทย และ SolarWing.
              </p>
<p class="text-slate-500 mt-0.5">
                Source: POS / Sales module · ใช้เจาะ Gross Profit &amp; Channel Mix.
              </p>
</div>
<div class="bg-white rounded-lg border border-slate-200 p-2.5">
<div class="flex items-center justify-between">
<p class="font-medium text-slate-800">plan_budget_fcst</p>
<span class="px-2 py-0.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700">
                  Budget &amp; Forecast
                </span>
</div>
<p class="text-slate-500 mt-0.5">
                งบประมาณรายปี + Rolling Forecast (Base / High / Low) แยกตาม Company &amp; Cost Center.
              </p>
<p class="text-slate-500 mt-0.5">
                Source: FP&amp;A Template (Excel/Sheet) · Load เข้า Data Warehouse.
              </p>
</div>
<div class="bg-white rounded-lg border border-slate-200 p-2.5">
<div class="flex items-center justify-between">
<p class="font-medium text-slate-800">scenario_assumption</p>
<span class="px-2 py-0.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700">
                  Scenario Config
                </span>
</div>
<p class="text-slate-500 mt-0.5">
                เก็บ assumption เช่น % ปรับราคา, % ต้นทุนวัตถุดิบ, สาขาใหม่, CAPEX plan สำหรับใช้ใน Simulation.
              </p>
<p class="text-slate-500 mt-0.5">
                แก้ไขผ่าน FP&amp;A Console / Google Sheet · Agent อ่านเพื่อนำไปจำลองผลลัพธ์.
              </p>
</div>
</div>
</div>
<!-- Integration Overview -->
<div class="bg-white border border-slate-200 rounded-2xl p-4 space-y-3">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<div class="h-8 w-8 rounded-xl bg-slate-900 text-white flex items-center justify-center text-[11px]">
                IN
              </div>
<div>
<p class="text-[11px] font-medium text-slate-800">Integration Console · การเชื่อมต่อระบบ</p>
<p class="text-[10px] text-slate-500">ERP แสงไทย, ERP SolarWing, Data Warehouse, Sheet</p>
</div>
</div>
<button class="px-2.5 py-1 rounded-full border border-slate-300 bg-slate-50 text-[10px]">
              ดู Mapping &amp; Data Lineage
            </button>
</div>
<!-- Integration cards -->
<div class="grid grid-cols-2 gap-2 text-[10px]">
<!-- ERP Saengthai -->
<div class="bg-slate-50 rounded-lg border border-slate-200 p-2.5 space-y-1">
<p class="font-medium text-slate-800">ERP – แสงไทยเมทัลชีท</p>
<p class="text-slate-500">
                ดึง GL, AR, AP, Fixed Asset และ Cost Center เพื่อทำ P&amp;L &amp; Cash Flow report.
              </p>
<p class="text-[10px] text-emerald-700">
                Status: Connected · Nightly Batch + On-demand Snapshot
              </p>
</div>
<!-- ERP SolarWing -->
<div class="bg-slate-50 rounded-lg border border-slate-200 p-2.5 space-y-1">
<p class="font-medium text-slate-800">ERP – SolarWing Group</p>
<p class="text-slate-500">
                ดึงยอดขาย รายได้ค่าไฟ / ค่าเช่า / Maintenance และค่าใช้จ่ายต่อสาขา.
              </p>
<p class="text-[10px] text-emerald-700">
                Status: Connected · API (REST) · Refresh ทุก 4 ชม.
              </p>
</div>
<!-- Data Warehouse -->
<div class="bg-slate-50 rounded-lg border border-slate-200 p-2.5 space-y-1">
<p class="font-medium text-slate-800">Group Data Warehouse</p>
<p class="text-slate-500">
                เป็นจุดรวมสำหรับ fact_gl_monthly, fact_sales_margin_daily, plan_budget_fcst ฯลฯ.
              </p>
<p class="text-[10px] text-slate-700">
                Status: Primary Source · ใช้ให้ FP&amp;A Agent อ่าน &amp; เขียนผล Scenario
              </p>
</div>
<!-- FP&A Sheet / Template -->
<div class="bg-slate-50 rounded-lg border border-slate-200 p-2.5 space-y-1">
<p class="font-medium text-slate-800">FP&amp;A Template (Excel / Google Sheet)</p>
<p class="text-slate-500">
                ใช้เก็บ Budget / Forecast เวอร์ชันที่ทีมปรับเอง และ comment จากผู้บริหาร.
              </p>
<p class="text-[10px] text-amber-700">
                Status: Connected · Upload ผ่าน Portal · Agent sync เข้า plan_budget_fcst
              </p>
</div>
</div>
<!-- Flow note -->
<div class="border-t border-slate-200 pt-3 mt-1 text-[10px] space-y-1">
<p class="text-slate-700 font-medium">
              Flow การทำงานของ FP&amp;A Agent (สรุป)
            </p>
<ol class="list-decimal list-inside text-slate-500 space-y-0.5">
<li>รวมข้อมูล GL, Sales, Budget, Forecast จากระบบแสงไทยและ SolarWing เข้าสู่ Data Warehouse</li>
<li>คำนวณ P&amp;L Consolidated + Variance vs Budget / Last year</li>
<li>อ่าน config จาก <span class="font-medium">scenario_assumption</span> เพื่อจำลอง Scenario ต่าง ๆ</li>
<li>สร้างรายงาน &amp; Dashboard สำหรับผู้บริหาร + ตอบคำถามผ่าน FP&amp;A Agent</li>
<li>เก็บ Log การใช้งานและผลลัพธ์ เพื่อปรับ model / assumption รอบถัดไป</li>
</ol>
</div>
</div>
</section>
</div>
</div>
</template>

<script setup>
// This view was auto-converted from th8-pilla1-backoffice-fpa.html
// Add any Vue logic here if needed.
</script>
