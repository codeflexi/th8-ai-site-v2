<template>
  <div class="bg-slate-50 min-h-screen">
    <!-- Hero -->
    <section class="border-b border-th8-border bg-white">
      <div class="max-w-6xl mx-auto px-4 py-8 space-y-3">
        <p class="text-[11px] uppercase tracking-wide text-th8-primary font-semibold">
          Pillar 1 · Inventory &amp; Replenishment Agent
        </p>
        <h1 class="text-2xl md:text-3xl font-semibold text-th8-text">
          Inventory Cockpit สำหรับ Planner + Back-office Data View
        </h1>
        <p class="text-sm md:text-base text-slate-600 max-w-3xl">
          ตัวอย่างหน้าจอที่ Planner ใช้ทุกวันควบคู่กับ Back-office view
          ที่แสดง Data set ที่ใช้ในการคำนวณ พร้อมจุดที่ Agent เข้าไปช่วยลดงาน manual
        </p>
      </div>
    </section>

    <!-- Main two-column -->
    <section
      class="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start"
    >
      <!-- LEFT: Frontline dashboard -->
      <div class="space-y-4">
        <div class="rounded-2xl border border-th8-border bg-white shadow-sm p-5 md:p-6 space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
                Planner View
              </p>
              <h2 class="text-lg font-semibold text-th8-text">
                Inventory Health &amp; Replenishment Dashboard
              </h2>
            </div>
            <span
              class="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] text-emerald-700"
            >
              ใช้งานผ่าน Web / Tablet
            </span>
          </div>

          <!-- Top KPIs -->
          <div class="grid md:grid-cols-4 gap-3 text-[12px]">
            <div class="rounded-xl bg-slate-50 border border-slate-200 p-3">
              <p class="text-[10px] uppercase tracking-wide text-slate-500">SKU ทั้งหมด</p>
              <p class="text-xl font-semibold text-th8-text">1,240</p>
              <p class="text-[11px] text-slate-500">Active 980 · Inactive 260</p>
            </div>
            <div class="rounded-xl bg-slate-50 border border-slate-200 p-3">
              <p class="text-[10px] uppercase tracking-wide text-slate-500">Dead stock</p>
              <p class="text-xl font-semibold text-th8-text">6.8%</p>
              <p class="text-[11px] text-amber-700">เป้า &lt; 5%</p>
            </div>
            <div class="rounded-xl bg-slate-50 border border-slate-200 p-3">
              <p class="text-[10px] uppercase tracking-wide text-slate-500">Low stock alert</p>
              <p class="text-xl font-semibold text-th8-text">34</p>
              <p class="text-[11px] text-slate-500">ควรสั่งภายใน 7 วัน</p>
            </div>
            <div class="rounded-xl bg-slate-50 border border-slate-200 p-3">
              <p class="text-[10px] uppercase tracking-wide text-slate-500">AI Suggestion</p>
              <p class="text-xl font-semibold text-th8-text">18</p>
              <p class="text-[11px] text-emerald-700">พร้อมปล่อยให้อนุมัติ</p>
            </div>
          </div>

          <!-- Table: Example SKUs -->
          <div class="rounded-xl bg-white border border-slate-200 p-4 space-y-3">
            <div class="flex items-center justify-between">
              <p class="text-[11px] uppercase tracking-wide text-slate-500">
                รายการแนะนำการสั่งซื้อ (AI Recommendation)
              </p>
              <span class="text-[11px] text-slate-500">ตัวอย่างข้อมูล</span>
            </div>
            <div class="overflow-x-auto">
              <table class="min-w-full text-[11px] text-left">
                <thead class="border-b border-slate-200 text-slate-500">
                  <tr>
                    <th class="py-1 pr-3">SKU</th>
                    <th class="py-1 pr-3">สินค้า</th>
                    <th class="py-1 pr-3">On Hand</th>
                    <th class="py-1 pr-3">Avg. Daily Use</th>
                    <th class="py-1 pr-3">Safety stock</th>
                    <th class="py-1 pr-3">แนะนำสั่ง</th>
                    <th class="py-1 pr-3">Lead time</th>
                    <th class="py-1">เหตุผล/หมายเหตุ</th>
                  </tr>
                </thead>
                <tbody class="text-slate-700">
                  <tr class="border-b border-slate-100">
                    <td class="py-1.5 pr-3">ST-COIL-001</td>
                    <td class="py-1.5 pr-3">เหล็กม้วน 0.47mm</td>
                    <td class="py-1.5 pr-3">120 ตัน</td>
                    <td class="py-1.5 pr-3">3.8 ตัน/วัน</td>
                    <td class="py-1.5 pr-3">80 ตัน</td>
                    <td class="py-1.5 pr-3 font-semibold text-emerald-700">สั่งเพิ่ม 60 ตัน</td>
                    <td class="py-1.5 pr-3">21 วัน</td>
                    <td class="py-1.5">
                      รองรับยอดงานจอง 30 วัน + buffer โปร H2
                    </td>
                  </tr>
                  <tr>
                    <td class="py-1.5 pr-3">ST-ACC-015</td>
                    <td class="py-1.5 pr-3">แผ่นครอบสันโค้ง</td>
                    <td class="py-1.5 pr-3">8,500 ชิ้น</td>
                    <td class="py-1.5 pr-3">50 ชิ้น/วัน</td>
                    <td class="py-1.5 pr-3">4,000 ชิ้น</td>
                    <td class="py-1.5 pr-3 font-semibold text-amber-700">ไม่ต้องสั่ง (ใกล้เพดาน)</td>
                    <td class="py-1.5 pr-3">7 วัน</td>
                    <td class="py-1.5">
                      มี Dead stock ค้างอีก 1,200 ชิ้น → แนะนำใช้ให้หมดก่อน
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- AI vs Human note -->
          <div class="rounded-xl bg-slate-900 text-white p-4 text-[12px] space-y-1">
            <p class="font-semibold">Agent ช่วย Planner ยังไง?</p>
            <p>• รวมข้อมูล Stock, Reservation, BOM, Promotion มาไว้จุดเดียว</p>
            <p>• คำนวณแนะนำการสั่งซื้อให้ พร้อมเหตุผลและผลกระทบ</p>
            <p>• ให้คนตัดสินใจแค่ “อนุมัติ / ปรับ / ไม่สั่ง” ลดเวลาทำไฟล์ Excel</p>
          </div>
        </div>
      </div>

      <!-- RIGHT: Back-office data & connections -->
      <div class="space-y-4">
        <div class="rounded-2xl border border-th8-border bg-white shadow-sm p-5 md:p-6 space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
                Back-office View
              </p>
              <h2 class="text-lg font-semibold text-th8-text">
                Data set + การเชื่อมต่อระบบที่ใช้ใน Inventory Agent
              </h2>
            </div>
          </div>

          <!-- Data sets -->
          <div class="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-3 text-[12px]">
            <p class="text-[11px] uppercase tracking-wide text-slate-500">Core Data set</p>
            <ul class="space-y-1 text-slate-700">
              <li>• SKU Master: รหัสสินค้า, กลุ่มสินค้า, UOM, Min/Max, Supplier หลัก</li>
              <li>• Stock Ledger: On hand, Reserved, Available-to-promise แยกคลัง/สาขา</li>
              <li>• Consumption History: Usage รายวัน/รายสัปดาห์ 6–12 เดือน</li>
              <li>• Purchase Order &amp; Lead time: PO history, GR date, Lead time จริง</li>
              <li>• Promotion / Project Pipeline: งานจองใหญ่, โปรที่กำลังจะเริ่ม</li>
            </ul>
          </div>

          <!-- System connections -->
          <div class="rounded-xl bg-white border border-slate-200 p-4 space-y-3 text-[12px]">
            <p class="text-[11px] uppercase tracking-wide text-slate-500">
              การเชื่อมต่อระบบ (System Integration)
            </p>
            <div class="grid grid-cols-2 gap-3">
              <div class="rounded-lg bg-slate-50 p-3">
                <p class="font-semibold text-th8-text mb-1">ดึงข้อมูลจาก</p>
                <p>• ERP: Stock, PO, GR</p>
                <p>• WMS: Location / Lot</p>
                <p>• CRM / Sales: งานจอง</p>
              </div>
              <div class="rounded-lg bg-slate-50 p-3">
                <p class="font-semibold text-th8-text mb-1">เขียนกลับไปที่</p>
                <p>• ERP: Suggested PO / Replenishment Request</p>
                <p>• Report / Dashboard: สำหรับผู้บริหาร</p>
              </div>
            </div>
          </div>

          <!-- Where AI lives -->
          <div class="rounded-xl bg-slate-900 text-white p-4 text-[12px] space-y-2">
            <p class="text-[11px] uppercase tracking-wide text-slate-400">Agent Layer</p>
            <ul class="space-y-1">
              <li>• Forecast + Safety stock model (ไม่ต้องซับซ้อนมาก แต่เชื่อมกับธุรกิจจริง)</li>
              <li>• Rule-based + LLM สำหรับอธิบายเหตุผลการสั่งในภาษาคน</li>
              <li>• Exception rule สำหรับเคสที่ควรให้คนอนุมัติเอง</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
