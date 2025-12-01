<!-- src/views/pricing/PricingLogisticsView.vue -->
<template>
  <div class="bg-slate-50 text-slate-900 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 py-10 space-y-10">
      <header class="space-y-3">
        <p class="text-[11px] uppercase tracking-wide text-red-500 font-semibold">
          TH8.AI Agentic System · Investment & ROI – Logistics & Fulfillment
        </p>
        <h1 class="text-2xl md:text-3xl font-semibold">
          TH8.AI สำหรับ Fulfillment / 3PL / e-Commerce  
          จัดการ Order, Warehouse, Delivery, Billing ให้ลื่นขึ้นแบบวัดได้
        </h1>
        <p class="text-sm md:text-base text-slate-600 max-w-3xl">
          เหมาะสำหรับคลังสินค้า, Fulfillment, 3PL และบริษัท Logistics
          ที่ต้องการลดงานคีย์ซ้ำ, ลดเคสตกหล่น และทำให้ลูกค้าเห็น status แบบ Real-time.
        </p>
      </header>

      <!-- 3 pillars, case, ROI – โครงเหมือนด้านบน (ย่อหน่อยเพื่อไม่ให้ยาวเกิน) -->
      <section class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
        <h2 class="text-xl font-semibold">1) 3 เสาหลักสำหรับ Logistics & Fulfillment</h2>
        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Pillar 1 · AI Agent Suite
            </p>
            <p class="font-semibold">Order, Warehouse &amp; Delivery Agents</p>
            <p class="text-xs text-slate-600">
              เช่น Order Routing Agent, Slot &amp; Route Planner, Exception &amp; Claim Agent, Billing Copilot.
            </p>
          </div>
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Pillar 2 · Workflow Automation
            </p>
            <p class="font-semibold">ทำให้ระบบคุยกันเองระหว่าง Shop / OMS / WMS / TMS / ERP</p>
            <p class="text-xs text-slate-600">
              Order เข้า → Wave picking → Loading → POD → Billing แบบอัตโนมัติและเห็นภาพรวมได้.
            </p>
          </div>
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Pillar 3 · Knowledge &amp; Analytics
            </p>
            <p class="font-semibold">SLA, SOP, Tariff → Copilot + Dashboard</p>
            <p class="text-xs text-slate-600">
              ให้ทีมหน้า–หลังบ้านถาม SLA, Pricing, Policy, SOP และดู Performance dashboard ได้เลย.
            </p>
          </div>
        </div>
      </section>

      <section class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Case · Logistics / Fulfillment
            </p>
            <h2 class="text-xl font-semibold">
              TH8.AI สำหรับ Fulfillment – จาก Order เข้า → Pick/Pack → ส่งของ → Billing
            </h2>
            <p class="text-sm text-slate-600 max-w-2xl">
              โฟกัสลดงานคีย์จาก Marketplace/Shop, ลด Error ระหว่าง WMS–ขนส่ง–Billing
              และทำให้ลูกค้าเห็นสถานะสินค้าแบบ Real-time.
            </p>
          </div>
          <div class="text-xs bg-slate-900 text-slate-50 rounded-xl px-4 py-3 space-y-1 max-w-xs">
            <p class="font-semibold text-sm">ภาพรวมการลงทุน (Fulfillment)</p>
            <p>• Setup + Integration: 400k – 750k</p>
            <p>• รายเดือน (AI + Hosting): 70k – 130k / เดือน</p>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-6 text-sm">
          <div class="space-y-3">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p class="font-semibold">✔ Order &amp; Routing Agent</p>
              <p class="text-xs text-slate-700">
                รวม Order จากหลายช่องทาง → ตรวจความครบถ้วน → ส่งเข้าคลัง/สาขาที่เหมาะสม
                พร้อม flag เคสผิดปกติเข้า Exception.
              </p>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p class="font-semibold">✔ Delivery &amp; Exception Agent</p>
              <p class="text-xs text-slate-700">
                ติดตาม shipment, delay, failed delivery → แจ้งเตือนและเสนอ Action ให้ CS/ลูกค้า.
              </p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <p class="font-semibold text-emerald-800">⚙ Workflow Automation</p>
              <ul class="mt-2 text-xs text-slate-700 space-y-1">
                <li>• Order จาก shop/marketplace → WMS → Delivery → POD → Billing</li>
                <li>• Reconcile COD/ค่าขนส่งกับ Billing / Accounting</li>
              </ul>
            </div>
            <div class="p-4 rounded-xl bg-blue-50 border border-blue-200">
              <p class="font-semibold text-blue-800">📚 SLA &amp; Tariff Copilot</p>
              <p class="text-xs text-slate-700 mt-1">
                ให้ทีมตอบลูกค้าเรื่อง SLA, ค่าขนส่ง, Policy ได้เร็วขึ้น และเห็นผลกระทบต่อ Margin ทันที.
              </p>
            </div>
          </div>
        </div>

        <div class="border rounded-2xl p-5 bg-slate-900 text-slate-50 space-y-4 text-sm">
          <h3 class="text-lg font-semibold">ROI สำหรับ Logistics / Fulfillment</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-xl p-3 space-y-1">
              <p class="text-xs text-slate-300 uppercase">ลดงานคีย์ / Reconcile</p>
              <p class="text-2xl font-bold">30–50%</p>
            </div>
            <div class="bg-slate-800 rounded-xl p-3 space-y-1">
              <p class="text-xs text-slate-300 uppercase">ลดเคสตกหล่น / Lost order</p>
              <p class="text-2xl font-bold">ลดลง 50–80%</p>
            </div>
            <div class="bg-slate-800 rounded-xl p-3 space-y-1">
              <p class="text-xs text-slate-300 uppercase">Visibility ลูกค้า</p>
              <p class="text-2xl font-bold">ดีขึ้นมาก</p>
              <p class="text-[11px] text-slate-300">ช่วยเรื่อง retention และ upsell</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
</script>
