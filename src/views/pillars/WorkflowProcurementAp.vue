<template>
  <div class="bg-slate-50 min-h-screen">
    <!-- Hero -->
    <section class="border-b border-th8-border bg-white">
      <div class="max-w-6xl mx-auto px-4 py-8 space-y-3">
        <p class="text-[11px] uppercase tracking-wide text-th8-primary font-semibold">
          Flow 3 · Procurement → GR → AP → Payment
        </p>
        <h1 class="text-2xl md:text-3xl font-semibold text-th8-text">
          ตั้งแต่ใบขอซื้อ → ใบสั่งซื้อ → ใบรับของ → Invoice → ตั้งหนี้ &amp; จ่ายเงิน
        </h1>
        <p class="text-sm md:text-base text-slate-600 max-w-3xl">
          Flow ที่ปกติเต็มไปด้วยกระดาษและการ Reconcile ข้ามระบบ
          Agent เข้าไปช่วยตรวจความตรงกันของเอกสาร, เช็คราคา-ปริมาณ, และเตือนเคสผิดปกติ
        </p>

  <!-- 🔗 CTA ไปหน้า Mockup -->
        <div class="pt-2">
          <RouterLink
            :to="{ name: 'pillar2-procurement-mockup' }"
            class="inline-flex items-center rounded-full border border-th8-border bg-white px-4 py-2 text-[11px] md:text-xs font-medium text-th8-text hover:bg-slate-50"
          >
            ดูหน้าจอ Mockup: LINE → Procurement Workflow
          </RouterLink>
        </div>

      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
      <!-- LEFT: High-level flow -->
      <div class="space-y-4">
        <div class="rounded-2xl border border-th8-border bg-white p-5 md:p-6 space-y-5 text-[13px]">
          <h2 class="text-lg font-semibold text-th8-text">
            Process Overview – Company System × AI Agent × Human
          </h2>

          <div class="space-y-4">
            <!-- 1. Purchase Request -->
            <div class="border-l-4 border-slate-300 pl-3 space-y-1">
              <p class="text-[11px] uppercase tracking-wide text-slate-500">1) Purchase Request</p>
              <p class="font-semibold text-th8-text">
                ฝ่ายวางแผน / คลัง สร้าง PR ใน ERP จากแผนการผลิตหรือสต็อกที่ขาด
              </p>
              <p class="text-slate-600">
                🔹 Agent สามารถเสนอปริมาณที่ควรขอซื้อ และแนบเหตุผล (Demand + Safety stock)
              </p>
            </div>

            <!-- 2. Purchase Order -->
            <div class="border-l-4 border-th8-primary pl-3 space-y-1">
              <p class="text-[11px] uppercase tracking-wide text-th8-primary">2) Purchase Order</p>
              <p class="font-semibold text-th8-text">
                ทีมจัดซื้อออก PO ให้ Supplier พร้อมราคา เงื่อนไขชำระเงิน และวันที่รับของ
              </p>
              <p class="text-slate-600">
                🔹 Agent ช่วยเช็คราคาล่าสุดเทียบกับสัญญา / PO ย้อนหลัง แจ้งเตือนถ้าแพงผิดปกติ
              </p>
            </div>

            <!-- 3. Goods Receipt -->
            <div class="border-l-4 border-emerald-500 pl-3 space-y-1">
              <p class="text-[11px] uppercase tracking-wide text-emerald-600">3) Goods Receipt</p>
              <p class="font-semibold text-th8-text">
                คลังรับของ → บันทึก GR ใน ERP/WMS พร้อมระบุ Lot, Qty, Location
              </p>
              <p class="text-slate-600">
                🔹 Agent ตรวจ GR vs PO: ปริมาณ, หน่วย, วันที่รับ ถ้าไม่ตรงให้ flag เป็น Exception
              </p>
            </div>

            <!-- 4. Invoice & AP -->
            <div class="border-l-4 border-sky-500 pl-3 space-y-1">
              <p class="text-[11px] uppercase tracking-wide text-sky-600">4) Invoice &amp; AP</p>
              <p class="font-semibold text-th8-text">
                ฝ่ายบัญชีรับใบ Invoice จาก Supplier และตั้งหนี้ (AP)
              </p>
              <p class="text-slate-600">
                🔹 Agent อ่าน Invoice จากไฟล์/รูป → ดึงเลขที่ PO, จำนวน, ราคา, VAT<br />
                🔹 เปรียบเทียบ 3-way match: PO vs GR vs Invoice
              </p>
            </div>

            <!-- 5. Payment -->
            <div class="border-l-4 border-slate-900 pl-3 space-y-1">
              <p class="text-[11px] uppercase tracking-wide text-slate-900">5) Payment</p>
              <p class="font-semibold text-th8-text">
                ทีมการเงินสร้าง Payment proposal และอนุมัติจ่าย
              </p>
              <p class="text-slate-600">
                🔹 Agent จัดลำดับความสำคัญตาม Due date, ส่วนลดจ่ายเร็ว, สถานะเอกสารครบถ้วน
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: Example 3-way match table -->
      <div class="space-y-4">
        <div class="rounded-2xl border border-th8-border bg-white p-5 md:p-6 space-y-4 text-[11px]">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-th8-text">
              ตัวอย่าง 3-way Match – PO vs GR vs Invoice
            </h2>
            <span class="text-slate-500">ตัวอย่างที่ Agent ตรวจให้</span>
          </div>

          <div class="overflow-x-auto">
            <table class="min-w-full text-left">
              <thead class="border-b border-slate-200 text-slate-500">
                <tr>
                  <th class="py-1 pr-3">Document</th>
                  <th class="py-1 pr-3">เลขที่</th>
                  <th class="py-1 pr-3">Qty</th>
                  <th class="py-1 pr-3">Unit Price</th>
                  <th class="py-1 pr-3">Amount</th>
                  <th class="py-1">Result</th>
                </tr>
              </thead>
              <tbody class="text-slate-700">
                <tr class="border-b border-slate-100">
                  <td class="py-1.5 pr-3">PO</td>
                  <td class="py-1.5 pr-3">PO-2025-00045</td>
                  <td class="py-1.5 pr-3">100 ตัน</td>
                  <td class="py-1.5 pr-3">฿ 22,000</td>
                  <td class="py-1.5 pr-3">฿ 2,200,000</td>
                  <td class="py-1.5">Baseline</td>
                </tr>
                <tr class="border-b border-slate-100">
                  <td class="py-1.5 pr-3">GR</td>
                  <td class="py-1.5 pr-3">GR-2025-00321</td>
                  <td class="py-1.5 pr-3">98 ตัน</td>
                  <td class="py-1.5 pr-3">฿ 22,000</td>
                  <td class="py-1.5 pr-3">฿ 2,156,000</td>
                  <td class="py-1.5 text-amber-700">
                    ปริมาณรับจริงน้อยกว่า PO 2 ตัน – Agent flag
                  </td>
                </tr>
                <tr>
                  <td class="py-1.5 pr-3">Invoice</td>
                  <td class="py-1.5 pr-3">INV-2025-8899</td>
                  <td class="py-1.5 pr-3">100 ตัน</td>
                  <td class="py-1.5 pr-3">฿ 22,500</td>
                  <td class="py-1.5 pr-3">฿ 2,250,000</td>
                  <td class="py-1.5 text-red-600">
                    ราคา/Qty ไม่ตรงทั้ง PO และ GR – ส่งเข้า Exception queue
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="rounded-xl bg-slate-900 text-white p-4 text-[12px] space-y-1">
            <p class="font-semibold">Agent ช่วยทีมบัญชี/จัดซื้ออย่างไร?</p>
            <p>• อ่าน Invoice จาก PDF/รูปภาพ ลดงานคีย์มือ</p>
            <p>• เปรียบเทียบตัวเลขแบบ 3-way match และให้สรุปเป็นประโยคอ่านง่าย</p>
            <p>• ส่งรหัสเหตุผล (Reason code) ให้ทีมเลือกว่าจะอนุมัติ/ตีกลับ/ขอใบลดหนี้</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
