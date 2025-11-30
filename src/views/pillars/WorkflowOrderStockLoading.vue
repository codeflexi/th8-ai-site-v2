<template>
  <div class="bg-slate-50 min-h-screen">
    <!-- Hero -->
    <section class="border-b border-th8-border bg-white">
      <div class="max-w-6xl mx-auto px-4 py-8 space-y-3">
        <p class="text-[11px] uppercase tracking-wide text-th8-primary font-semibold">
          Flow 2 · Sales Order → Stock → Loading Yard
        </p>
        <h1 class="text-2xl md:text-3xl font-semibold text-th8-text">
          ยืนยันออร์เดอร์ → คำนวณวัตถุดิบ → ตัดสต็อก → เตรียมของที่ลานโหลด
        </h1>
        <p class="text-sm md:text-base text-slate-600 max-w-3xl">
          เห็นภาพตั้งแต่ Sales Order ใน ERP จนถึง Pick list ในคลัง
          และสถานะงานที่ลานโหลด พร้อมจุดที่ Agent เข้าไปช่วยตรวจความครบถ้วน
          ลดผิดพลาด และอัปเดตสถานะให้ทุกทีมเห็นภาพเดียวกัน
        </p>

          <!-- 🔗 CTA ไปหน้า Mockup -->
        <div class="pt-2">
          <RouterLink
            :to="{ name: 'pillar2-stock-mockup' }"
            class="inline-flex items-center rounded-full border border-th8-border bg-white px-4 py-2 text-[11px] md:text-xs font-medium text-th8-text hover:bg-slate-50"
          >
            ดูหน้าจอ Mockup: LINE → Stock Issue Workflow
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
      <!-- LEFT: Step-by-step flow -->
      <div class="space-y-4">
        <div class="rounded-2xl border border-th8-border bg-white p-5 md:p-6 space-y-4">
          <h2 class="text-lg font-semibold text-th8-text">
            Step Flow – Company System vs AI Agent
          </h2>

          <div class="space-y-5 text-[13px]">
            <!-- Step 1 -->
            <div class="border-l-4 border-slate-300 pl-3 space-y-1">
              <p class="text-[11px] uppercase tracking-wide text-slate-500">
                ขั้นตอนที่ 1 · Sales Order ยืนยันแล้ว (ERP)
              </p>
              <p class="font-semibold text-th8-text">
                ERP: แสดง Sales Order ที่ “Released” พร้อมข้อมูลลูกค้า, สาขา, วันส่ง, รายการสินค้า
              </p>
              <p class="text-slate-600">
                🔹 ต้นทางของ Flow ทั้งหมด คือ SO ที่ผ่านการตรวจราคาส่วนลด เครดิต และ stock
                ระดับพื้นฐานแล้ว
              </p>
            </div>

            <!-- Step 2 -->
            <div class="border-l-4 border-th8-primary pl-3 space-y-1">
              <p class="text-[11px] uppercase tracking-wide text-th8-primary">
                ขั้นตอนที่ 2 · Material Planning Agent
              </p>
              <p class="font-semibold text-th8-text">Agent: แตก BOM และคำนวณวัตถุดิบที่ต้องใช้</p>
              <p class="text-slate-600">
                🔹 แปลงรายการขาย (Finished goods) → วัตถุดิบที่ต้องใช้<br />
                🔹 ตรวจว่า On hand พอหรือไม่ · ถ้าไม่พอให้สร้าง Replenishment request / PO draft
              </p>
            </div>

            <!-- Step 3 -->
            <div class="border-l-4 border-emerald-500 pl-3 space-y-1">
              <p class="text-[11px] uppercase tracking-wide text-emerald-600">
                ขั้นตอนที่ 3 · สร้าง Pick list / งานให้ทีมคลัง
              </p>
              <p class="font-semibold text-th8-text">
                WMS: สร้าง Pick list ตาม Location + Lot ที่เหมาะสม
              </p>
              <p class="text-slate-600">
                🔹 Agent ช่วยจัดลำดับ pick ตาม route ในคลัง, หนัก-เบา, ระยะทางเดิน<br />
                🔹 แจ้งเตือนถ้ามี Lot ที่กำลังจะหมดอายุ / อยู่ในสถานะต้องตรวจคุณภาพก่อน
              </p>
            </div>

            <!-- Step 4 -->
            <div class="border-l-4 border-sky-500 pl-3 space-y-1">
              <p class="text-[11px] uppercase tracking-wide text-sky-600">
                ขั้นตอนที่ 4 · Loading &amp; Handover
              </p>
              <p class="font-semibold text-th8-text">
                ระบบ Loading yard + Agent ติดตามสถานะ”ของโหลดแล้ว / รอลูกค้าตรวจรับ”
              </p>
              <p class="text-slate-600">
                🔹 ตัดสต็อกเมื่อของออกจากคลัง / ย้ายไปสถานะ “On truck”<br />
                🔹 Agent แจ้งเตือนทีมหน้าบ้าน / ลูกค้า ถ้าสถานะค้างนานผิดปกติ
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: Example data from systems -->
      <div class="space-y-4">
        <!-- Sales Order snippet -->
        <div class="rounded-2xl border border-th8-border bg-white p-5 md:p-6 space-y-3 text-[11px]">
          <p class="text-[11px] uppercase tracking-wide text-slate-500">
            ตัวอย่างข้อมูลจาก ERP · Sales Order
          </p>
          <div class="overflow-x-auto">
            <table class="min-w-full text-left">
              <thead class="border-b border-slate-200 text-slate-500">
                <tr>
                  <th class="py-1 pr-3">SO No.</th>
                  <th class="py-1 pr-3">Customer</th>
                  <th class="py-1 pr-3">Delivery Date</th>
                  <th class="py-1 pr-3">Total Qty</th>
                  <th class="py-1">Status</th>
                </tr>
              </thead>
              <tbody class="text-slate-700">
                <tr>
                  <td class="py-1.5 pr-3">SO-2025-000121</td>
                  <td class="py-1.5 pr-3">บจก. ตัวอย่างวัสดุก่อสร้าง</td>
                  <td class="py-1.5 pr-3">02/03/2025</td>
                  <td class="py-1.5 pr-3">160</td>
                  <td class="py-1.5">
                    <span
                      class="inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700 border border-emerald-200"
                    >
                      Released
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Pick list / warehouse -->
        <div class="rounded-2xl border border-th8-border bg-white p-5 md:p-6 space-y-3 text-[11px]">
          <p class="text-[11px] uppercase tracking-wide text-slate-500">
            ตัวอย่างข้อมูลจาก WMS · Pick list
          </p>
          <div class="overflow-x-auto">
            <table class="min-w-full text-left">
              <thead class="border-b border-slate-200 text-slate-500">
                <tr>
                  <th class="py-1 pr-3">Pick No.</th>
                  <th class="py-1 pr-3">Location</th>
                  <th class="py-1 pr-3">Product</th>
                  <th class="py-1 pr-3">Qty</th>
                  <th class="py-1 pr-3">UOM</th>
                  <th class="py-1">Status</th>
                </tr>
              </thead>
              <tbody class="text-slate-700">
                <tr>
                  <td class="py-1.5 pr-3">PICK-2025-0045</td>
                  <td class="py-1.5 pr-3">A-01-02</td>
                  <td class="py-1.5 pr-3">MS-047-24M-GREY</td>
                  <td class="py-1.5 pr-3">80</td>
                  <td class="py-1.5 pr-3">แผ่น</td>
                  <td class="py-1.5">
                    <span
                      class="inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[10px] text-amber-700 border border-amber-200"
                    >
                      Picking
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="rounded-xl bg-slate-900 text-white p-4 mt-2 text-[12px] space-y-1">
            <p class="font-semibold">Agent ทำอะไรในขั้นนี้?</p>
            <p>• จัดลำดับ Pick list ให้ใช้เส้นทางเดินที่สั้นที่สุด</p>
            <p>• เตือนถ้าคลังเลือก Lot ที่ไม่ควรใช้ (เช่น ใกล้หมดอายุ / QC ยังไม่ผ่าน)</p>
            <p>• อัปเดตสถานะให้ทีมหน้าบ้านเห็นว่าออร์เดอร์ไหนกำลังโหลดอยู่</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
