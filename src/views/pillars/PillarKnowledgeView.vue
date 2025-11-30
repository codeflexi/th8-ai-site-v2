<template>
  <div class="bg-slate-50 min-h-screen">
    <!-- Hero -->
    <section class="border-b border-th8-border bg-white">
      <div class="max-w-6xl mx-auto px-4 py-10 space-y-4">
        <p class="text-[11px] uppercase tracking-wide text-th8-primary font-semibold">
          Pillar 3 · AI Knowledge &amp; Analytics
        </p>
        <h1 class="text-2xl md:text-3xl font-semibold text-th8-text">
          เปลี่ยนเอกสารกองใหญ่ให้กลายเป็น Knowledge Copilot + Dashboard ที่ทุกคนใช้ได้จริง
        </h1>
        <p class="text-sm md:text-base text-slate-600 max-w-3xl">
          หน้านี้เป็นตัวอย่างหน้าจอสำหรับพนักงานทั่วไป และ Back-office Knowledge Admin
          ที่ใช้จัดการเอกสาร สัญญา SOP และรายงานจากหลายระบบ
          ให้กลายเป็นฐานความรู้ที่ค้นหา–ถามตอบได้ และใช้เป็นแหล่งข้อมูลเดียวกัน (Single source of truth)
        </p>
      </div>
    </section>

    <!-- Main layout -->
    <section class="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">

      <!-- LEFT: Frontline / Staff Portal -->
      <div class="space-y-4">
        <div class="rounded-2xl border border-th8-border bg-white shadow-sm p-5 md:p-6 space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-[11px] uppercase tracking-wide text-th8-primary font-semibold">
                Staff View
              </p>
              <h2 class="text-lg font-semibold text-th8-text">
                Knowledge Copilot สำหรับพนักงานหน้างาน
              </h2>
            </div>
            <span
              class="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] text-emerald-700"
            >
              ใช้งานผ่าน LINE OA / Web
            </span>
          </div>

          <!-- Search + Filters -->
          <div class="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-3">
            <div class="flex flex-col md:flex-row gap-3">
              <div class="flex-1">
                <label class="text-[11px] text-slate-500 block mb-1">ถาม Copilot</label>
                <div class="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2">
                  <span class="text-slate-400 text-xs">🔍</span>
                  <input
                    class="w-full text-[13px] outline-none bg-transparent"
                    placeholder="ตัวอย่าง: ขั้นตอนเคลมสินค้าชำรุดสำหรับลูกค้ากลุ่ม Dealer ?"
                  />
                </div>
              </div>

              <div class="md:w-48">
                <label class="text-[11px] text-slate-500 block mb-1">Context</label>
                <select class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-[13px]">
                  <option>Policy &amp; SOP</option>
                  <option>Contract / Agreement</option>
                  <option>Product &amp; Warranty</option>
                  <option>Internal Process</option>
                </select>
              </div>
            </div>

            <!-- Suggested prompts -->
            <div class="flex flex-wrap gap-2 pt-1">
              <span class="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] text-slate-600">
                📝 วิธีออก Credit Note กรณีส่งของช้า
              </span>
              <span class="inline-flex items-center rounded-full bg-white border border-slate-200 px-3 py-1 text-[11px] text-slate-600">
                📦 ขั้นตอนรับเคลมแผ่นเมทัลชีทเป็นสนิม
              </span>
            </div>
          </div>

          <!-- Answer / Context -->
          <div class="rounded-xl bg-white border border-slate-200 p-4 space-y-3">
            <div class="flex items-center justify-between">
              <p class="text-[11px] uppercase tracking-wide text-slate-500">
                AI Answer · สรุปขั้นตอนจาก SOP + Case จริง
              </p>
              <span class="text-[11px] text-emerald-600">Time saved ~ 5–10 นาทีต่อเคส</span>
            </div>

            <p class="text-[13px] text-slate-700 leading-relaxed">
              1) ตรวจสอบประเภทลูกค้า &gt; Dealer / Project / Retail<br />
              2) เปิดเคสในระบบ CRM พร้อมแนบรูป / หลักฐาน<br />
              3) แจ้งเงื่อนไขเคลมตาม Policy ล่าสุด (ดึงจาก SOP เวอร์ชันล่าสุดอัตโนมัติ)<br />
              4) ถ้าต้องออก Credit Note ระบบจะแนะนำข้อมูลที่ต้องใช้ให้ครบถ้วน
            </p>

            <div class="rounded-lg bg-slate-50 border border-dashed border-slate-300 p-3 text-[11px] text-slate-600 space-y-1">
              <p class="font-semibold text-slate-700">Context ที่ AI ใช้ตอบ</p>
              <p>- SOP-CLAIM-2025-v3.pdf (ข้อ 4.2 – เงื่อนไขเคลม Dealer)</p>
              <p>- CASE-LOG / Q2-2025 / 18 เคสล่าสุด</p>
              <p>- Contract Template: Dealer Tier A + B</p>
            </div>
          </div>
        </div>

        <!-- Staff quick links -->
        <div class="grid md:grid-cols-3 gap-3 text-[12px]">
          <div class="rounded-2xl border border-slate-200 bg-white p-3">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Quick access</p>
            <p class="font-semibold text-th8-text mb-1">SOP &amp; Policy</p>
            <p class="text-slate-600">ขั้นตอนเคลม, ส่วนลด, เงื่อนไขเครดิต, SLA</p>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-white p-3">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 mb-1">For sales / CS</p>
            <p class="font-semibold text-th8-text mb-1">Cheat sheet ตาม Use case</p>
            <p class="text-slate-600">Script คุยลูกค้า, คำถามที่ควรถาม, เอกสารที่ต้องใช้</p>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-white p-3">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Channel</p>
            <p class="font-semibold text-th8-text mb-1">LINE OA + Web Portal</p>
            <p class="text-slate-600">ให้พนักงานใช้ช่องทางเดิม แต่ได้ความรู้ที่อัปเดตเสมอ</p>
          </div>
        </div>
      </div>

      <!-- RIGHT: Back-office / Admin Console -->
      <div class="space-y-4">

        <div class="rounded-2xl border border-th8-border bg-white shadow-sm p-5 md:p-6 space-y-4">

          <div class="flex items-center justify-between">
            <div>
              <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
                Admin Console
              </p>
              <h2 class="text-lg font-semibold text-th8-text">
                จัดการเอกสาร · Version · Exception Library
              </h2>
            </div>

            <!-- ➡️ LINK TO BACKOFFICE CONSOLE -->
            <RouterLink
              :to="{ name: 'backoffice-console' }"
              class="inline-flex items-center rounded-full bg-slate-900 text-white px-3 py-1 text-[10px] hover:bg-th8-primary transition"
            >
              เปิด Console →
            </RouterLink>

          </div>

          <!-- Document pipeline -->
          <div class="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-3">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Document Pipeline</p>
            <div class="grid grid-cols-4 gap-2 text-[11px]">
              <div class="rounded-lg bg-white border border-slate-200 p-2">
                <p class="font-semibold text-th8-text mb-1">Source</p>
                <p>SharePoint</p><p>Google Drive</p><p>ERP / DMS</p>
              </div>
              <div class="rounded-lg bg-white border border-slate-200 p-2">
                <p class="font-semibold text-th8-text mb-1">Processing</p>
                <p>OCR / PDF parse</p><p>Chunking</p><p>Metadata tagging</p>
              </div>
              <div class="rounded-lg bg-white border border-slate-200 p-2">
                <p class="font-semibold text-th8-text mb-1">Knowledge Store</p>
                <p>Vector DB</p><p>Exception library</p><p>Policy index</p>
              </div>
              <div class="rounded-lg bg-white border border-slate-200 p-2">
                <p class="font-semibold text-th8-text mb-1">Governance</p>
                <p>Owner / Reviewer</p><p>Last updated</p><p>Usage log</p>
              </div>
            </div>
          </div>

          <!-- Example table -->
          <div class="rounded-xl bg-white border border-slate-200 p-4 space-y-3">
            <div class="flex items-center justify-between">
              <p class="text-[11px] uppercase tracking-wide text-slate-500">Document Inventory (ตัวอย่าง)</p>
              <span class="text-[11px] text-slate-500">50+ docs · 3 owner</span>
            </div>

            <div class="overflow-x-auto">
              <table class="min-w-full text-[11px] text-left">
                <thead class="border-b border-slate-200 text-slate-500">
                  <tr>
                    <th class="py-1 pr-3">Doc ID</th>
                    <th class="py-1 pr-3">ชื่อเอกสาร</th>
                    <th class="py-1 pr-3">Owner</th>
                    <th class="py-1 pr-3">Version</th>
                    <th class="py-1 pr-3">Last Updated</th>
                    <th class="py-1">Status</th>
                  </tr>
                </thead>
                <tbody class="text-slate-700">
                  <tr class="border-b border-slate-100">
                    <td class="py-1.5 pr-3">SOP-CLAIM-2025-v3</td>
                    <td class="py-1.5 pr-3">SOP การเคลมสินค้า – Dealer</td>
                    <td class="py-1.5 pr-3">Process Owner</td>
                    <td class="py-1.5 pr-3">v3</td>
                    <td class="py-1.5 pr-3">02/03/2025</td>
                    <td class="py-1.5">
                      <span class="inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700 border border-emerald-200">Active</span>
                    </td>
                  </tr>
                  <tr class="border-b border-slate-100">
                    <td class="py-1.5 pr-3">POL-DISC-2024</td>
                    <td class="py-1.5 pr-3">Policy ส่วนลดลูกค้ากลุ่ม Project</td>
                    <td class="py-1.5 pr-3">Finance</td>
                    <td class="py-1.5 pr-3">v1</td>
                    <td class="py-1.5 pr-3">15/11/2024</td>
                    <td class="py-1.5">
                      <span class="inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[10px] text-amber-700 border border-amber-200">Review due</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Exception Library -->
          <div class="rounded-xl bg-slate-50 border border-dashed border-slate-300 p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-wide text-slate-500">
              Exception Library (กรณีที่ต้องให้คนตัดสินใจ)
            </p>
            <ul class="text-[12px] text-slate-700 space-y-1">
              <li>• เคสลูกค้ามียอดค้างชำระ แต่ต้องการสั่งของด่วน</li>
              <li>• เคสส่วนลดเกินสิทธิ์ ที่ต้องให้ผู้จัดการอนุมัติ</li>
              <li>• เคสเคลมที่เกิน SLA แต่มีเหตุจำเป็นพิเศษ</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
