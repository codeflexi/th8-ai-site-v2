<!-- src/views/pricing/PricingSolarView.vue -->
<template>
  <div class="bg-slate-50 text-slate-900 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 py-10 space-y-10">
      <!-- HEADER -->
      <header class="space-y-3">
        <p class="text-[11px] uppercase tracking-wide text-amber-500 font-semibold">
          TH8.AI Agentic System · Investment & ROI – Solar / Energy
        </p>
        <h1 class="text-2xl md:text-3xl font-semibold">
          TH8.AI สำหรับธุรกิจ Solar / EPC  
          จาก Lead → Survey → Proposal → Contract → Service
        </h1>
        <p class="text-sm md:text-base text-slate-600 max-w-3xl">
          เน้น Lead ไม่ตกหล่น, วงจรเสนอราคาสั้นลง และควบคุมต้นทุนโปรเจกต์  
          พร้อม Agent ฝั่ง Service หลังติดตั้ง เพื่อดูแลลูกค้าระยะยาว
        </p>
      </header>

      <!-- 3 PILLARS -->
      <section class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
        <h2 class="text-xl font-semibold">
          1) 3 เสาหลักของ TH8.AI สำหรับ Solar / Energy
        </h2>
        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Pillar 1 · AI Agent Suite
            </p>
            <p class="font-semibold">Lead, Proposal &amp; Service Agent</p>
            <p class="text-slate-600 text-xs">
              เช่น Lead &amp; Site Survey Agent, Proposal &amp; BOQ Copilot, Service &amp; Ticket Agent.
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Pillar 2 · Workflow Automation
            </p>
            <p class="font-semibold">ผูก Lead → Project → Billing → Service</p>
            <p class="text-slate-600 text-xs">
              เชื่อม CRM, ERP, Project tool และระบบ Monitoring ให้ไหลเป็น Flow เดียวกัน.
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Pillar 3 · Knowledge &amp; Analytics
            </p>
            <p class="font-semibold">Manual, Standard, FAQ → Copilot</p>
            <p class="text-slate-600 text-xs">
              รวมมาตรฐานการติดตั้ง, ความปลอดภัย, Inverter manual, FAQ ลูกค้า – ถามได้เป็นไทย.
            </p>
          </div>
        </div>
      </section>

      <!-- SOLAR CASE -->
      <section class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p class="text-[11px] uppercase tracking-wide text-amber-500 font-semibold">
              Case · Solar / Multi-branch
            </p>
            <h2 class="text-xl font-semibold">
              TH8.AI สำหรับ Solar EPC – ขยายยอดขายโดยไม่ต้องเพิ่มทีมเท่าตัว
            </h2>
            <p class="text-sm text-slate-600 max-w-2xl">
              Agent ช่วยดู Lead, เตรียมข้อมูลหน้างาน, ช่วยร่าง Proposal + BOQ
              และดู Project dashboard ให้ผู้บริหารเห็นภาพแบบรวม.
            </p>
          </div>

          <div class="text-xs bg-slate-900 text-slate-50 rounded-xl px-4 py-3 space-y-1 max-w-xs">
            <p class="font-semibold text-sm">ภาพรวมการลงทุน (Solar / EPC)</p>
            <p>• Setup + Integration: 350k – 650k</p>
            <p>• รายเดือน (AI + Hosting): 60k – 120k / เดือน</p>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-6 text-sm">
          <!-- Left: Agents -->
          <div class="space-y-3">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p class="font-semibold">✔ Lead &amp; Site Survey Agent</p>
              <p class="text-xs text-slate-700">
                รวม Lead จาก LINE, Facebook, Web, Marketplace → คัดกรองเบื้องต้น  
                แนะนำ Slot survey, ส่ง Checklist ให้ทีมภาคสนาม และสรุปข้อมูลกลับเข้าระบบ.
              </p>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p class="font-semibold">✔ Proposal &amp; BOQ Copilot</p>
              <p class="text-xs text-slate-700">
                ใช้ข้อมูล site, load profile และ policy บริษัท → สร้าง Option เสนอ, BOQ,  
                และประมาณการ IRR/Payback ให้เซลล์นำไปปรับต่อ.
              </p>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p class="font-semibold">✔ Service &amp; Ticket Agent</p>
              <p class="text-xs text-slate-700">
                รับเคสจากลูกค้า → สร้าง Ticket, ดึงข้อมูลจาก Manual/FAQ แนะนำวิธีแก้เบื้องต้น  
                และติดตามสถานะจนปิดงาน พร้อมสรุป Insight ให้ผู้บริหาร.
              </p>
            </div>
          </div>

          <!-- Right: Workflow + Knowledge -->
          <div class="space-y-3">
            <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <p class="font-semibold text-emerald-800">⚙ Workflow Automation (Solar)</p>
              <ul class="mt-2 text-xs text-slate-700 space-y-1">
                <li>• Lead → Survey → Proposal → Contract → Billing เชื่อมกันใน Flow เดียว</li>
                <li>• แจ้งเตือน Lead ที่ยังไม่เสนอราคา / ยังไม่ Follow up</li>
                <li>• ดึงข้อมูลผลิตไฟจริงจาก Inverter/Monitoring เข้า Dashboard ฝ่ายบริหาร</li>
              </ul>
            </div>

            <div class="p-4 rounded-xl bg-blue-50 border border-blue-200">
              <p class="font-semibold text-blue-800">📚 SOP &amp; Manual Copilot</p>
              <p class="text-xs text-slate-700 mt-1">
                รวมมาตรฐานการติดตั้ง, ความปลอดภัย, การรับประกัน, คู่มือ Inverter/Panel  
                ให้ทีมภาคสนามและ Call center ถามเป็นภาษาไทยผ่านมือถือหรือ LINE OA.
              </p>
            </div>
          </div>
        </div>

        <!-- ROI -->
        <div class="border rounded-2xl p-5 bg-slate-900 text-slate-50 space-y-4 text-sm">
          <h3 class="text-lg font-semibold">ROI สำหรับ Solar / EPC (ตัวเลขประมาณการ)</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-xl p-3 space-y-1">
              <p class="text-xs text-slate-300 uppercase">Lead Conversion</p>
              <p class="text-2xl font-bold">+10–20%</p>
              <p class="text-[11px] text-slate-300">เพราะ Lead ไม่ตกหล่น และตอบเร็วขึ้น</p>
            </div>

            <div class="bg-slate-800 rounded-xl p-3 space-y-1">
              <p class="text-xs text-slate-300 uppercase">Cycle Time (Lead → Contract)</p>
              <p class="text-2xl font-bold">สั้นลง 25–40%</p>
              <p class="text-[11px] text-slate-300">โดยเฉพาะโปรเจกต์ที่ต้องอนุมัติหลายขั้น</p>
            </div>

            <div class="bg-slate-800 rounded-xl p-3 space-y-1">
              <p class="text-xs text-slate-300 uppercase">Service Cost / เคส</p>
              <p class="text-2xl font-bold">ลดลง 15–25%</p>
              <p class="text-[11px] text-slate-300">บางเคสลูกค้าแก้เองได้จาก Copilot</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4 pt-3">
            <div>
              <p class="text-xs text-slate-300">Benefit ต่อปี (รวมรายได้ + ลดต้นทุน)</p>
              <p class="text-2xl font-bold text-emerald-400">~ 1.8 – 3.0 ล้านบาท / ปี</p>
            </div>
            <div>
              <p class="text-xs text-slate-300">ค่าใช้จ่ายรวมปีแรก (ประมาณ)</p>
              <p class="text-2xl font-bold text-red-300">~ 1.1 – 1.6 ล้านบาท</p>
            </div>
          </div>

          <div class="mt-2 rounded-xl bg-emerald-600 text-white text-center py-3">
            <p class="text-lg font-semibold">Payback period ประมาณ 6–10 เดือน</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
</script>
