<template>
  <div class="bg-slate-50 min-h-screen">
    <!-- Hero -->
    <section class="border-b border-th8-border bg-white">
      <div class="max-w-6xl mx-auto px-4 py-8 space-y-3">
        <p class="text-[11px] uppercase tracking-wide text-th8-primary font-semibold">
          Flow 1 · LINE OA → ERP Sales Order
        </p>
        <h1 class="text-2xl md:text-3xl font-semibold text-th8-text">
          รับออร์เดอร์จาก LINE → ตรวจความครบถ้วน → สร้าง Sales Order ใน ERP อัตโนมัติ
        </h1>
        <p class="text-sm md:text-base text-slate-600 max-w-3xl">
          ตัวอย่าง Journey จริงที่ลูกค้าส่งข้อความเข้ามาใน LINE OA
          แล้วให้ Agent ช่วยอ่าน, ตรวจข้อมูล, Map กับรหัสสินค้า และสร้าง Sales Order
          ใน ERP โดยยังให้พนักงานตรวจได้ก่อนกดอนุมัติ
        </p>

        <!-- 🔗 CTA ไปหน้า Mockup -->
        <div class="pt-2">
          <RouterLink
            :to="{ name: 'pillar2-sale-mockup' }"
            class="inline-flex items-center rounded-full border border-th8-border bg-white px-4 py-2 text-[11px] md:text-xs font-medium text-th8-text hover:bg-slate-50"
          >
            ดูหน้าจอ Mockup: LINE → Sales Order Workflow
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
      <!-- LEFT: Timeline -->
      <div class="space-y-4">
        <div class="rounded-2xl border border-th8-border bg-white p-5 md:p-6">
          <h2 class="text-lg font-semibold text-th8-text mb-4">
            Journey: จากข้อความใน LINE ไปเป็น Sales Order
          </h2>

          <ol class="space-y-4 text-[13px]">
            <li class="flex gap-3">
              <div class="flex flex-col items-center">
                <div class="h-6 w-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-[11px]">
                  1
                </div>
                <div class="flex-1 w-px bg-slate-200"></div>
              </div>
              <div>
                <p class="font-semibold text-th8-text">ลูกค้าส่งข้อความสั่งของผ่าน LINE OA</p>
                <p class="text-slate-600">
                  ตัวอย่าง: “สั่งแผ่นเมทัลชีท 0.47 หนา 24 เมตร สีเทา ตรม.ลอนคู่ 80 แผ่น ส่งสาขาเชียงใหม่
                  ภายในศุกร์นี้”
                </p>
              </div>
            </li>

            <li class="flex gap-3">
              <div class="flex flex-col items-center">
                <div class="h-6 w-6 rounded-full bg-th8-primary text-white flex items-center justify-center text-[11px]">
                  2
                </div>
                <div class="flex-1 w-px bg-slate-200"></div>
              </div>
              <div>
                <p class="font-semibold text-th8-text">
                  AI Agent อ่านข้อความ → แยก Entity และตรวจข้อมูล
                </p>
                <p class="text-slate-600">
                  แยกเป็น: ลูกค้า, สาขา, รุ่นสินค้า, ความหนา, สี, จำนวน, วันส่งของ
                  และตรวจว่าในระบบมีรหัสสินค้าที่ match หรือไม่
                </p>
              </div>
            </li>

            <li class="flex gap-3">
              <div class="flex flex-col items-center">
                <div class="h-6 w-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[11px]">
                  3
                </div>
                <div class="flex-1 w-px bg-slate-200"></div>
              </div>
              <div>
                <p class="font-semibold text-th8-text">
                  ถ้าข้อมูลไม่ครบ / ไม่ชัด → Agent ถามกลับใน LINE อัตโนมัติ
                </p>
                <p class="text-slate-600">
                  เช่น ขอรหัสสีที่แน่นอน หรือยืนยันสาขารับของ โดยใช้ภาษาคนธรรมชาติ
                  และเก็บ log ทั้งหมดไว้ในระบบ
                </p>
              </div>
            </li>

            <li class="flex gap-3">
              <div class="flex flex-col items-center">
                <div class="h-6 w-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[11px]">
                  4
                </div>
                <div class="flex-1 w-px bg-slate-200"></div>
              </div>
              <div>
                <p class="font-semibold text-th8-text">
                  เมื่อครบแล้ว → Agent สร้าง “Draft Sales Order” ใน ERP
                </p>
                <p class="text-slate-600">
                  Map ข้อมูลกับรหัสสินค้า, ราคา, ส่วนลดมาตรฐาน, เงื่อนไขเครดิตลูกค้า
                  แล้วส่งให้พนักงาน back-office ตรวจรอบสุดท้าย
                </p>
              </div>
            </li>

            <li class="flex gap-3">
              <div class="flex flex-col items-center">
                <div class="h-6 w-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[11px]">
                  5
                </div>
              </div>
              <div>
                <p class="font-semibold text-th8-text">
                  พนักงานกด “Approve” → Confirm กลับลูกค้าใน LINE
                </p>
                <p class="text-slate-600">
                  ระบบส่งข้อความยืนยันยอด, วันที่ส่ง, เงื่อนไขชำระเงิน
                  และเลขที่ออร์เดอร์จาก ERP ให้ลูกค้าโดยอัตโนมัติ
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <!-- RIGHT: Example data mapping -->
      <div class="space-y-4">
        <div class="rounded-2xl border border-th8-border bg-white p-5 md:p-6 space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-th8-text">
              ตัวอย่าง Mapping: ข้อความ LINE → Sales Order ERP
            </h2>
            <span class="text-[11px] text-slate-500">ตัวอย่างข้อมูล</span>
          </div>

          <!-- Example -->
          <div class="rounded-xl bg-slate-50 border border-slate-200 p-3 text-[12px]">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 mb-1">
              ข้อความจาก LINE OA
            </p>
            <p class="text-slate-700">
              “สั่งแผ่นเมทัลชีท 0.47 หนา 24 เมตร สีเทา ลอนคู่ 80 แผ่น ส่งสาขาเชียงใหม่ ภายในศุกร์นี้
              บจก.แสงไทยคอนสตรัคชั่น”
            </p>
          </div>

          <div class="overflow-x-auto text-[11px]">
            <table class="min-w-full text-left">
              <thead class="border-b border-slate-200 text-slate-500">
                <tr>
                  <th class="py-1 pr-3">Field (ERP)</th>
                  <th class="py-1 pr-3">ค่าที่บันทึก</th>
                  <th class="py-1 pr-3">ที่มา</th>
                  <th class="py-1">ตรวจโดย</th>
                </tr>
              </thead>
              <tbody class="text-slate-700">
                <tr class="border-b border-slate-100">
                  <td class="py-1.5 pr-3">Customer Code</td>
                  <td class="py-1.5 pr-3">CUST-TH-00123</td>
                  <td class="py-1.5 pr-3">Match จากชื่อบริษัทในข้อความ</td>
                  <td class="py-1.5">AI + Manual override ถ้าไม่แน่ใจ</td>
                </tr>
                <tr class="border-b border-slate-100">
                  <td class="py-1.5 pr-3">Ship-to Branch</td>
                  <td class="py-1.5 pr-3">CHIANGMAI-01</td>
                  <td class="py-1.5 pr-3">“สาขาเชียงใหม่” → Branch master</td>
                  <td class="py-1.5">AI</td>
                </tr>
                <tr class="border-b border-slate-100">
                  <td class="py-1.5 pr-3">Item Code</td>
                  <td class="py-1.5 pr-3">MS-047-24M-GREY-DOUBLE</td>
                  <td class="py-1.5 pr-3">ค้นจาก Catalog ตาม ความหนา/สี/ลอน</td>
                  <td class="py-1.5">AI + Rule</td>
                </tr>
                <tr>
                  <td class="py-1.5 pr-3">Delivery Date</td>
                  <td class="py-1.5 pr-3">ศุกร์ถัดไปจากวันที่สั่ง</td>
                  <td class="py-1.5 pr-3">Natural language → วันที่จริง</td>
                  <td class="py-1.5">AI</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="rounded-xl bg-slate-900 text-white p-4 text-[12px] space-y-1">
            <p class="font-semibold">จุดที่ Agent ช่วยลดงาน manual</p>
            <p>• อ่านข้อความ free-text และ Map กับรหัสลูกค้า/สินค้าอัตโนมัติ</p>
            <p>• เตือนถ้าข้อมูลไม่ครบ เช่น ยังไม่ระบุสี, ไม่ระบุสาขา</p>
            <p>• ลดการคีย์ Sales Order ซ้ำซ้อนจากทีม CS/Back-office</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
