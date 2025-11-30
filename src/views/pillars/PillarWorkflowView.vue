<template>
  <div class="bg-slate-50 min-h-screen">
    <main class="max-w-6xl mx-auto px-4 py-12 space-y-10">
      <header class="space-y-3">
        <p class="text-xs font-semibold tracking-wide text-emerald-600 uppercase">
          Pillar 2 · AI Workflow Automation
        </p>
        <h1 class="text-2xl md:text-3xl font-bold text-th8-text">
          AI Workflow Automation — เชื่อมระบบให้ทำงานแทนคนคีย์มือ
        </h1>
        <p class="text-sm md:text-base text-slate-600 max-w-2xl">
          เห็นภาพ Flow การทำงานตั้งแต่หน้าบ้าน (LINE / Web / POS) ไปจนถึง ERP, WMS, CRM
          และจุดที่ Agent เข้าไปช่วยลดงานตามงาน ลดการเช็กข้ามระบบ
        </p>
      </header>

       <!-- ===================================== -->
    <!-- PILLAR 2 – WORKFLOW AUTOMATION -->
    <!-- ===================================== -->
    <section
      class="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 md:p-6 space-y-5"
    >
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            DASHBOARD· AI Workflow Automation
          </p>
          <h2 class="text-lg md:text-xl font-semibold text-slate-900">
            หน้าจอ Workflow Automation · ทำให้ระบบ “คุยกันเอง” ลดคีย์มือ ลดเช็กข้ามระบบ
          </h2>
          <p class="text-xs md:text-sm text-slate-600 mt-1 max-w-xl">
            เชื่อมระบบ ERP, WMS, CRM, Sheet, Email, LINE OA  
            ทำให้ข้อมูลไหลอัตโนมัติ ลดเคสตกหล่น และเห็นสถานะงานปลายทางชัดขึ้นทั้งทีมหน้า–หลังบ้าน
          </p>
        </div>

        <!-- Pillar 2 mini icon -->
        <div class="flex items-center gap-2 text-[11px] text-slate-500">
          <div class="flex -space-x-1">
            <div
              class="h-7 w-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px]"
            >
              ERP
            </div>
            <div
              class="h-7 w-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px]"
            >
              WMS
            </div>
            <div
              class="h-7 w-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]"
            >
              FLOW
            </div>
          </div>
          <span>ระบบเดิม + Flow ใหม่</span>
        </div>
      </div>

      <div class="grid md:grid-cols-[1.1fr_0.9fr] gap-5 text-xs md:text-sm">
        <!-- FRONTLINE: MY WORKFLOWS -->
        <div class="space-y-4">
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-[11px] font-medium text-slate-700">
                  My Workflows · หน้าจอพนักงาน
                </p>
                <p class="text-[10px] text-slate-500">
                  ให้พนักงานเห็นว่า Automation ทำอะไรแทนอยู่แล้ว และตรงไหนที่ยังต้องกดเอง
                </p>
              </div>
              <div
                class="h-8 w-8 rounded-xl bg-slate-900 text-white flex items-center justify-center text-[11px]"
              >
                WF
              </div>
            </div>

            <!-- list workflows -->
            <div class="space-y-2">
              <div
                class="bg-white rounded-lg border border-slate-200 p-2.5 flex items-start justify-between gap-2"
              >
                <div>
                  <p class="text-[11px] font-semibold text-slate-800">
                    Auto Create Invoice จาก Delivery Note
                  </p>
                  <p class="text-[10px] text-slate-500">
                    เมื่อ WMS ปิดงานส่งของ · ระบบสร้าง Draft Invoice ใน ERP ให้โดยอัตโนมัติ
                  </p>
                  <p class="text-[10px] text-emerald-600 mt-0.5">
                    ทำงานอัตโนมัติ · 186 ครั้งใน 7 วันที่ผ่านมา
                  </p>
                </div>
                <div class="flex flex-col items-end gap-1">
                  <span
                    class="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] text-emerald-700"
                  >
                    Active
                  </span>
                  <button class="text-[10px] underline text-slate-500">
                    ดูตัวอย่าง Invoice
                  </button>
                </div>
              </div>

              <div
                class="bg-white rounded-lg border border-slate-200 p-2.5 flex items-start justify-between gap-2"
              >
                <div>
                  <p class="text-[11px] font-semibold text-slate-800">
                    Sync Order จาก LINE OA → ERP
                  </p>
                  <p class="text-[10px] text-slate-500">
                    เมื่อมีคำสั่งซื้อจาก LINE OA · ระบบแปลงเป็น Sales Order โดยใช้ Mapping ที่กำหนดไว้
                  </p>
                  <p class="text-[10px] text-amber-600 mt-0.5">
                    มี 9 เคสล่าสุดที่ต้องตรวจสอบข้อมูลลูกค้า
                  </p>
                </div>
                <div class="flex flex-col items-end gap-1">
                  <span
                    class="px-2 py-0.5 rounded-full bg-amber-50 border border-amber-100 text-[10px] text-amber-700"
                  >
                    Human check
                  </span>
                  <button class="text-[10px] underline text-slate-500">
                    เปิดเคสค้าง
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Timeline / Activity -->
          <div class="bg-white border border-slate-200 rounded-xl p-3 space-y-3">
            <div class="flex items-center justify-between">
              <p class="text-[11px] font-medium text-slate-700">
                วันนี้ Automation ทำอะไรไปแล้วบ้าง?
              </p>
              <span class="text-[10px] text-slate-500">Activity Timeline</span>
            </div>
            <div class="space-y-2 text-[10px]">
              <div class="flex items-start gap-2">
                <div class="mt-1 h-2 w-2 rounded-full bg-emerald-500"></div>
                <div>
                  <p class="text-slate-800">
                    09:12 · สร้าง Draft Invoice 24 ใบ จาก Delivery Note ของเมื่อวาน
                  </p>
                  <p class="text-slate-500">
                    Workflow: Auto Create Invoice · ไม่มี Error
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-2">
                <div class="mt-1 h-2 w-2 rounded-full bg-amber-500"></div>
                <div>
                  <p class="text-slate-800">
                    10:03 · พบ 3 Order จาก LINE OA ที่ไม่มี Tax ID
                  </p>
                  <p class="text-slate-500">
                    Workflow: Sync Order LINE → ERP · ส่งแจ้งเตือนให้ทีม CS ผ่าน Email
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-2">
                <div class="mt-1 h-2 w-2 rounded-full bg-slate-400"></div>
                <div>
                  <p class="text-slate-800">
                    10:45 · อัปเดตสถานะ “จัดส่งแล้ว” ใน CRM จากข้อมูลขนส่ง
                  </p>
                  <p class="text-slate-500">
                    Workflow: Delivery Status Sync · 58 เคส
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- BACK OFFICE: WORKFLOW DESIGN & MONITOR -->
        <div class="space-y-4">
          <!-- Designer / Catalog -->
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div
                  class="h-8 w-8 rounded-xl bg-slate-900 text-white flex items-center justify-center text-[11px]"
                >
                  DW
                </div>
                <div>
                  <p class="text-[11px] font-medium text-slate-800">
                    Workflow Catalog &amp; Designer
                  </p>
                  <p class="text-[10px] text-slate-500">สำหรับ IT / Process Owner</p>
                </div>
              </div>
              <button
                class="px-2.5 py-1 rounded-full border border-slate-300 bg-white text-[10px]"
              >
                + สร้าง Workflow ใหม่
              </button>
            </div>

            <!-- simple flow view (concept) -->
            <div class="bg-white border border-slate-200 rounded-lg p-2.5 space-y-2 text-[10px]">
              <p class="text-slate-600 font-medium">
                ตัวอย่าง Flow: Sync Order จาก LINE → ERP
              </p>
              <div class="flex items-center justify-between gap-1">
                <div class="flex-1 flex items-center justify-center">
                  <div
                    class="px-2 py-1 rounded-lg bg-slate-900 text-white text-[10px]"
                  >
                    LINE Webhook
                  </div>
                </div>
                <span class="text-slate-400">→</span>
                <div class="flex-1 flex items-center justify-center">
                  <div
                    class="px-2 py-1 rounded-lg bg-slate-100 border border-slate-200 text-[10px]"
                  >
                    Data Mapping &amp; Validation
                  </div>
                </div>
                <span class="text-slate-400">→</span>
                <div class="flex-1 flex items-center justify-center">
                  <div
                    class="px-2 py-1 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px]"
                  >
                    Create Sales Order (ERP)
                  </div>
                </div>
              </div>
              <p class="text-slate-500 mt-1">
                สามารถกำหนดได้ว่า ถ้าข้อมูลไม่ครบ · ให้ส่งเคสไปให้ทีม CS หรือย้อนกลับไปหา Agent Suite ช่วยถามเพิ่ม
              </p>
            </div>
          </div>

          <!-- Monitoring & Error Panel -->
          <div class="bg-white border border-slate-200 rounded-xl p-3 space-y-3">
            <div class="flex items-center justify-between">
              <p class="text-[11px] font-medium text-slate-800">
                Monitoring &amp; Error Tracking
              </p>
              <span class="text-[10px] text-slate-500">มุมมองรวมทุก Workflow</span>
            </div>

            <div class="grid grid-cols-3 gap-2 text-[10px]">
              <div class="bg-slate-50 rounded-lg border border-slate-200 p-2">
                <p class="text-slate-500">Workflow ที่ Active</p>
                <p class="text-base font-semibold text-slate-900">27</p>
              </div>
              <div class="bg-slate-50 rounded-lg border border-slate-200 p-2">
                <p class="text-slate-500">Success rate</p>
                <p class="text-base font-semibold text-emerald-700">96.4%</p>
              </div>
              <div class="bg-slate-50 rounded-lg border border-slate-200 p-2">
                <p class="text-slate-500">Error/วัน</p>
                <p class="text-base font-semibold text-amber-700">18</p>
              </div>
            </div>

            <!-- table-ish per flow -->
            <div class="space-y-1 pt-1">
              <div class="flex items-center justify-between text-[10px]">
                <span class="text-slate-600">
                  Auto Create Invoice
                </span>
                <span class="text-emerald-700 font-medium">
                  99.2% · 2 Error
                </span>
              </div>
              <div class="flex items-center justify-between text-[10px]">
                <span class="text-slate-600">
                  Sync Order LINE → ERP
                </span>
                <span class="text-amber-700 font-medium">
                  91.3% · 11 Error (ข้อมูลลูกค้าไม่ครบ)
                </span>
              </div>
              <div class="flex items-center justify-between text-[10px]">
                <span class="text-slate-600">
                  Delivery Status Sync
                </span>
                <span class="text-slate-800 font-medium">
                  97.8% · 5 Error (Tracking หาย)
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between pt-1 text-[10px]">
              <p class="text-slate-500">
                Error สามารถโยนเข้า Exception Library (Pillar 3) เพื่อให้อัปเดต SOP / Flow ต่อไป
              </p>
              <button
                class="px-2.5 py-1 rounded-full border border-slate-300 bg-slate-50"
              >
                ดู Log รายละเอียด
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section class="grid md:grid-cols-3 gap-6">
        <RouterLink
          :to="{ name: 'workflow-line-order' }"
          class="group rounded-2xl border border-th8-border bg-white p-5 hover:border-th8-primary hover:shadow-md transition space-y-2"
        >
          <h2 class="font-semibold text-th8-text">Flow 1 · Sync Order จาก LINE → ERP</h2>
          <p class="text-xs text-slate-500">เชื่อม LINE OA เข้ากับ ERP พร้อม Agent ตรวจสอบคำสั่งซื้อ</p>
          <p class="text-[13px] text-slate-600">
            เห็นตัวอย่างข้อมูลลูกค้า รายการสินค้า และสถานะการซิงก์ทีละขั้นตอน
          </p>
          <p class="text-xs font-medium text-th8-primary group-hover:underline">เปิด Flow &rarr;</p>
        </RouterLink>

        <RouterLink
          :to="{ name: 'workflow-order-stock-loading' }"
          class="group rounded-2xl border border-th8-border bg-white p-5 hover:border-th8-primary hover:shadow-md transition space-y-2"
        >
          <h2 class="font-semibold text-th8-text">
            Flow 2 · Confirm Sale Order → ตัดสต็อก &amp; เตรียมโหลดสินค้า
          </h2>
          <p class="text-xs text-slate-500">
            เห็นจุดเชื่อมระหว่าง Sale Order, WMS, Loading plan และ Agent ที่ช่วยตรวจสอบ
          </p>
          <p class="text-[13px] text-slate-600">
            ใช้กับทีมขาย คลังสินค้า และลานโหลด เพื่อลดเคสผิดสินค้า ผิดจำนวน
          </p>
          <p class="text-xs font-medium text-th8-primary group-hover:underline">เปิด Flow &rarr;</p>
        </RouterLink>

        <RouterLink
          :to="{ name: 'workflow-procurement-ap' }"
          class="group rounded-2xl border border-th8-border bg-white p-5 hover:border-th8-primary hover:shadow-md transition space-y-2"
        >
          <h2 class="font-semibold text-th8-text">
            Flow 3 · จัดซื้อวัตถุดิบ → รับสินค้า → ตรวจเอกสาร &amp; ตั้งหนี้
          </h2>
          <p class="text-xs text-slate-500">
            เห็นทั้งฝั่งคลัง, จัดซื้อ, ฝ่ายผลิต และบัญชี AP ใน Flow เดียว
          </p>
          <p class="text-[13px] text-slate-600">
            AI Agent เข้ามาช่วยเทียบเอกสาร ตรวจยอด และแจ้งเตือนเคสผิดปกติให้ทีม
          </p>
          <p class="text-xs font-medium text-th8-primary group-hover:underline">เปิด Flow &rarr;</p>
        </RouterLink>
      </section>


    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
