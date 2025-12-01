<!-- src/views/pricing/PricingFnbView.vue -->
<template>
  <div class="bg-slate-50 text-slate-900 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 py-10 space-y-10">
      <header class="space-y-3">
        <p class="text-[11px] uppercase tracking-wide text-red-500 font-semibold">
          TH8.AI Agentic System · Investment & ROI – F&amp;B / Restaurant Chains
        </p>
        <h1 class="text-2xl md:text-3xl font-semibold">
          TH8.AI สำหรับแบรนด์ร้านอาหารหลายสาขา  
          คุมวัตถุดิบ, Waste, Margin และงาน Back-office ให้ง่ายขึ้น
        </h1>
        <p class="text-sm md:text-base text-slate-600 max-w-3xl">
          เหมาะกับ QSR, ร้านอาหารเครือใหญ่, Cafè chain – เชื่อม POS, Inventory, Procurement, Accounting  
          แล้วให้ Agent + Workflow ช่วยคุมต้นทุนและ P&amp;L รายสาขา.
        </p>
      </header>

      <section class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
        <h2 class="text-xl font-semibold">1) 3 เสาหลักสำหรับ F&amp;B / Restaurant</h2>
        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Pillar 1 · AI Agent Suite
            </p>
            <p class="font-semibold">Demand, Inventory &amp; P&amp;L Agent</p>
            <p class="text-xs text-slate-600">
              เช่น Sales &amp; Demand Agent, Inventory &amp; Waste Agent, P&amp;L / Margin Copilot.
            </p>
          </div>
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Pillar 2 · Workflow Automation
            </p>
            <p class="font-semibold">เชื่อม POS → Inventory → Procurement → Accounting</p>
            <p class="text-xs text-slate-600">
              ลดงานคีย์ใบสั่งซื้อ, GR, Invoice, และ Reconcile.
            </p>
          </div>
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Pillar 3 · Knowledge &amp; Analytics
            </p>
            <p class="font-semibold">Recipe, SOP, Promotion → Copilot</p>
            <p class="text-xs text-slate-600">
              ให้ผู้จัดการสาขาและ Area manager ถามข้อมูลสูตร, SOP, Promotion rule ได้ทันที.
            </p>
          </div>
        </div>
      </section>

      <section class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Case · F&amp;B Chain
            </p>
            <h2 class="text-xl font-semibold">
              TH8.AI สำหรับ F&amp;B – จากยอดขายหน้าร้าน → วัตถุดิบ → Waste → P&amp;L
            </h2>
            <p class="text-sm text-slate-600 max-w-2xl">
              Agent &amp; Workflow ช่วยให้เห็นภาพกำไรระดับสาขา/เมนู และคุมวัตถุดิบไม่ให้หาย/เสียหายเกินจำเป็น.
            </p>
          </div>
          <div class="text-xs bg-slate-900 text-slate-50 rounded-xl px-4 py-3 space-y-1 max-w-xs">
            <p class="font-semibold text-sm">ภาพรวมการลงทุน (F&amp;B Chain)</p>
            <p>• Setup + Integration: 300k – 600k</p>
            <p>• รายเดือน (AI + Hosting): 50k – 100k / เดือน</p>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-6 text-sm">
          <div class="space-y-3">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p class="font-semibold">✔ Sales &amp; Demand Agent</p>
              <p class="text-xs text-slate-700">
                ใช้ยอดขายย้อนหลัง + Seasonality + Promotion → ช่วยคาดการณ์ Demand ระดับสาขา/เมนู.
              </p>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p class="font-semibold">✔ Inventory &amp; Waste Agent</p>
              <p class="text-xs text-slate-700">
                ติดตามวัตถุดิบ, วันหมดอายุ, Waste rate, และ flag สาขาที่ใช้วัตถุดิบผิด Pattern.
              </p>
            </div>
          </div>
          <div class="space-y-3">
            <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <p class="font-semibold text-emerald-800">⚙ Workflow Automation</p>
              <ul class="mt-2 text-xs text-slate-700 space-y-1">
                <li>• POS → แปลงเป็นยอดใช้วัตถุดิบ → สร้าง Draft PO</li>
                <li>• PO → GR → Invoice → GL Post ลดคีย์มือ</li>
              </ul>
            </div>
            <div class="p-4 rounded-xl bg-blue-50 border border-blue-200">
              <p class="font-semibold text-blue-800">📚 Recipe &amp; SOP Copilot</p>
              <p class="text-xs text-slate-700 mt-1">
                ให้ผู้จัดการสาขาถามได้ว่าจานนี้ควรใช้วัตถุดิบเท่าไร, ทำอย่างไรให้ได้ Spec,  
                และ Promotion นี้กระทบ Margin แค่ไหน.
              </p>
            </div>
          </div>
        </div>

        <div class="border rounded-2xl p-5 bg-slate-900 text-slate-50 space-y-4 text-sm">
          <h3 class="text-lg font-semibold">ROI สำหรับ F&amp;B / Restaurant Chain</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-xl p-3 space-y-1">
              <p class="text-xs text-slate-300 uppercase">ลด Waste วัตถุดิบ</p>
              <p class="text-2xl font-bold">ลดลง 10–20%</p>
            </div>
            <div class="bg-slate-800 rounded-xl p-3 space-y-1">
              <p class="text-xs text-slate-300 uppercase">ปรับ Margin เมนูหลัก</p>
              <p class="text-2xl font-bold">+1–3 จุด</p>
            </div>
            <div class="bg-slate-800 rounded-xl p-3 space-y-1">
              <p class="text-xs text-slate-300 uppercase">ลดเวลาทำ Report</p>
              <p class="text-2xl font-bold">ลด 50–70%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
</script>
