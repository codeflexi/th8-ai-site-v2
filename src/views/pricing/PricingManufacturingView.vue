<!-- src/views/pricing/PricingManufacturingView.vue -->
<template>
  <div class="bg-slate-50 text-slate-900 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 py-10 space-y-10">
      <!-- HEADER -->
      <header class="space-y-3">
        <p class="text-[11px] uppercase tracking-wide text-red-500 font-semibold">
          TH8.AI Agentic System · Investment & ROI – Manufacturing
        </p>
        <h1 class="text-2xl md:text-3xl font-semibold">
          TH8.AI สำหรับโรงงานผลิตโลหะ / พลาสติก / ชิ้นส่วน  
          ลงทุน AI Agent อย่างไรให้คุ้ม และต่อยอดจากระบบเดิม
        </h1>
        <p class="text-sm md:text-base text-slate-600 max-w-3xl">
          สรุปภาพรวมการลงทุน, โมดูลที่ได้รับ และผลตอบแทน (ROI)  
          บน 3 เสาหลักของ TH8.AI:
          <span class="font-semibold">Agent Suite · Workflow Automation · Knowledge &amp; Analytics</span>
          สำหรับโรงงานที่ต้องการยกระดับ OEE, ลด Scrap และเชื่อม MES/ERP/WMS เข้าด้วยกัน
        </p>
      </header>

      <!-- 3 PILLARS -->
      <section class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5">
        <h2 class="text-xl font-semibold">
          1) 3 เสาหลักของ TH8.AI สำหรับโรงงานผลิต
        </h2>
        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Pillar 1 · AI Agent Suite
            </p>
            <p class="font-semibold">Production, OEE &amp; Planning Agent</p>
            <p class="text-slate-600 text-xs">
              เช่น Production/OEE Copilot, Quality &amp; Scrap Agent, Maintenance Agent, Material &amp; Replenishment Agent.
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Pillar 2 · Workflow Automation
            </p>
            <p class="font-semibold">ทำให้ระบบ “คุยกันเอง” ระหว่าง iMF / MES / ERP / WMS</p>
            <p class="text-slate-600 text-xs">
              เช่น Job Order → Machine Schedule, Production Report → ERP, Defect Ticket → Maintenance.
            </p>
          </div>

          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Pillar 3 · Knowledge &amp; Analytics
            </p>
            <p class="font-semibold">Manual / SOP / Best Practice → Knowledge Copilot</p>
            <p class="text-slate-600 text-xs">
              เช่น SOP ตั้งค่าเครื่อง, วิธีแก้ Defect ยอดฮิต, PM Checklist, Safety Manual – ถามเป็นภาษาไทยได้.
            </p>
          </div>
        </div>
      </section>

      <!-- MANUFACTURING CASE -->
      <section class="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              Case · Manufacturing Plant
            </p>
            <h2 class="text-xl font-semibold">
              TH8.AI สำหรับโรงงานฉีดพลาสติก / โลหะ – จาก Job Order → ผลิต → QC → ส่งของ
            </h2>
            <p class="text-sm text-slate-600 max-w-2xl">
              โฟกัสลด Downtime, ลด Scrap, เห็น OEE ชัดเจนทุกเครื่อง
              และเชื่อมข้อมูลการผลิตกลับไปยัง ERP/F&amp;A โดยไม่ต้องรื้อระบบเดิม
            </p>
          </div>

          <div class="text-xs bg-slate-900 text-slate-50 rounded-xl px-4 py-3 space-y-1 max-w-xs">
            <p class="font-semibold text-sm">ภาพรวมการลงทุน (Manufacturing)</p>
            <p>• Setup + Integration: 500k – 900k</p>
            <p>• รายเดือน (AI + Hosting): 80k – 140k / เดือน</p>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-6 text-sm">
          <!-- Left: Agents -->
          <div class="space-y-3">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p class="font-semibold">✔ Production / OEE Copilot</p>
              <p class="text-xs text-slate-700">
                ดึงข้อมูลจาก iMF / MES / PLC → แสดง OEE, Availability, Performance, Quality ตามกะ / เครื่อง / Mold  
                ช่วยไฮไลต์เครื่องที่ประสิทธิภาพตก และแนะนำ Action ตาม Pattern เดิม.
              </p>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p class="font-semibold">✔ Quality &amp; Scrap Agent</p>
              <p class="text-xs text-slate-700">
                ติดตาม Defect code, Scrap rate, Pareto chart ของของเสีย  
                แจ้งเตือนเมื่อ Scrap rate เกิน Threshold ต่อเนื่อง และสร้าง Ticket ให้ทีม QC / Maintenance.
              </p>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p class="font-semibold">✔ Maintenance Agent</p>
              <p class="text-xs text-slate-700">
                รวม Alarm, Runtime hours, PM schedule และประวัติซ่อม  
                แนะนำงาน PM ล่วงหน้า และช่วยสรุป Root cause หลังเคสปิด.
              </p>
            </div>
          </div>

          <!-- Right: Workflow + Knowledge -->
          <div class="space-y-3">
            <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <p class="font-semibold text-emerald-800">⚙ Workflow Automation (Manufacturing)</p>
              <ul class="mt-2 text-xs text-slate-700 space-y-1">
                <li>• Job Order ใน ERP → สร้าง Production Schedule ใน iMF/MES</li>
                <li>• Production result (OK/NG) → Post กลับ ERP / WMS</li>
                <li>• Defect สูงผิดปกติ → สร้าง Ticket ให้ QC &amp; Maintenance พร้อม Context</li>
              </ul>
            </div>

            <div class="p-4 rounded-xl bg-blue-50 border border-blue-200">
              <p class="font-semibold text-blue-800">📚 Manual &amp; SOP Copilot (ภาษาไทย)</p>
              <p class="text-xs text-slate-700 mt-1">
                รวมคู่มือเครื่องจักร, SOP ตั้งค่า, PM Checklist, Case แก้ปัญหาเดิม ๆ  
                ให้หัวหน้ากะและช่างถามเป็นภาษาไทยได้จากมือถือ / Tablet / LINE OA.
              </p>
            </div>
          </div>
        </div>

        <!-- ROI -->
        <div class="border rounded-2xl p-5 bg-slate-900 text-slate-50 space-y-4 text-sm">
          <h3 class="text-lg font-semibold">ROI สำหรับโรงงานผลิต (ตัวเลขประมาณการ)</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-slate-800 rounded-xl p-3 space-y-1">
              <p class="text-xs text-slate-300 uppercase">ลด Scrap / ของเสีย</p>
              <p class="text-2xl font-bold">ลดลง 10–25%</p>
              <p class="text-[11px] text-slate-300">ลด Material cost และ Load งาน QC</p>
            </div>

            <div class="bg-slate-800 rounded-xl p-3 space-y-1">
              <p class="text-xs text-slate-300 uppercase">เพิ่ม OEE</p>
              <p class="text-2xl font-bold">+3–8 จุด</p>
              <p class="text-[11px] text-slate-300">มูลค่าเพิ่มจาก Capacity ที่ใช้ได้จริง</p>
            </div>

            <div class="bg-slate-800 rounded-xl p-3 space-y-1">
              <p class="text-xs text-slate-300 uppercase">ลดเวลาเตรียม Report</p>
              <p class="text-2xl font-bold">ลด 50–70%</p>
              <p class="text-[11px] text-slate-300">Auto Report ให้ผู้บริหารทุกสัปดาห์</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-4 pt-3">
            <div>
              <p class="text-xs text-slate-300">Benefit ต่อปี (รวมหลายด้าน)</p>
              <p class="text-2xl font-bold text-emerald-400">~ 2.5 – 4.5 ล้านบาท / ปี</p>
            </div>
            <div>
              <p class="text-xs text-slate-300">ค่าใช้จ่ายรวมปีแรก (ประมาณ)</p>
              <p class="text-2xl font-bold text-red-300">~ 1.5 – 2.2 ล้านบาท</p>
            </div>
          </div>

          <div class="mt-2 rounded-xl bg-emerald-600 text-white text-center py-3">
            <p class="text-lg font-semibold">Payback period ประมาณ 6–9 เดือน</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
</script>
