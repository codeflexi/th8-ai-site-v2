<!-- src/views/AccountingApFnbStory.vue -->
<template>
  <div class="min-h-screen bg-slate-50">
    <main class="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-10">
      <!-- Breadcrumb + Title -->
      <section class="space-y-3">
        <nav class="text-xs md:text-sm text-slate-500 flex items-center gap-1">
          <RouterLink to="/" class="hover:text-slate-700">TH8.AI</RouterLink>
          <span>/</span>
          <RouterLink to="/services" class="hover:text-slate-700">Solutions</RouterLink>
          <span>/</span>
          <span class="text-slate-700">AI สำหรับทีมบัญชี F&amp;B (AP Workflow)</span>
        </nav>

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="space-y-2">
            <p class="text-xs uppercase tracking-[0.18em] text-rose-500 font-semibold">
              Finance &amp; Accounting Automation
            </p>
            <h1 class="text-2xl md:text-3xl font-semibold text-slate-900">
              จากกระดาษสู่ระบบ:
              <span class="underline decoration-rose-500 decoration-4 underline-offset-4">
                AI สำหรับทีมบัญชี F&amp;B
              </span>
            </h1>
            <p class="text-sm md:text-base text-slate-600 max-w-2xl">
              โฟกัสงานรับวางบิล → ตั้งหนี้ → Match PO → จ่ายเงิน → Fixed Asset → นับสต๊อก
              ในองค์กร F&amp;B ที่ใช้ <b>Microsoft Teams</b>, <b>SharePoint</b> และ <b>ERP (SAP/Oracle)</b>
            </p>
          </div>

          <div class="flex flex-col items-start md:items-end gap-3">
            <div class="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 text-xs">
              <span class="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span class="font-medium text-slate-700">TH8 • AI Agent for Accounting &amp; Finance</span>
            </div>
            <RouterLink
              to="/solutions/accounting-ap-fnb/mockup"
              class="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full bg-rose-500 text-white shadow-sm hover:bg-rose-600 transition"
            >
              ดูตัวอย่างหน้าจอ (Mockup UI)
              <span>↗</span>
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- Story: Before -->
      <section class="grid md:grid-cols-[1.1fr,0.9fr] gap-6">
        <!-- Story block -->
        <article class="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm shadow-slate-100 space-y-4 text-sm md:text-[15px]">
          <header class="space-y-2">
            <h2 class="text-lg md:text-xl font-semibold text-slate-900">
              ห้องบัญชีที่เต็มไปด้วย “กระดาษ” ทุกสิ้นเดือน
            </h2>
            <p class="text-slate-500 text-xs">เล่าจากประสบการณ์จริงของคน IT ในบริษัทเครื่องดื่มรายใหญ่</p>
          </header>

          <p>
            ผมยังจำภาพตอนอยู่ในทีม IT ของบริษัทเครื่องดื่มรายใหญ่ได้ดี —
            ทุกสิ้นเดือนห้องบัญชีจะเต็มไปด้วย “กระดาษ”
          </p>
          <p>
            ใบวางบิล, ใบรับของ, ใบส่งของ, ใบแจ้งหนี้จาก supplier
            วางซ้อนกันเต็มโต๊ะ มีโพสต์อิทแปะบอกว่า
            <span class="italic">“รอตรวจ”, “รอเอกสารจริง”, “ยอดไม่ตรง”</span>
            และมีเสียงถามกันใน Teams ตลอดว่า
          </p>

          <ul class="pl-4 list-disc space-y-1">
            <li>“เอกสารล็อตนี้มาหรือยัง?”</li>
            <li>“Invoice ของ batch ที่ผลิตสัปดาห์ที่แล้วส่งมาหรือยัง?”</li>
            <li>“ตัวนี้ขึ้นระบบแล้วหรือยัง?”</li>
          </ul>

          <p>
            สิ่งที่ผมเห็นในฐานะคน IT คือ ทุกอย่างติดอยู่ที่
            <b>“กระดาษกับเวลา”</b>. ข้อมูลอยู่ในระบบ ERP ก็จริง
            แต่ต้นทาง (จัดซื้อ, คลัง, ขนส่ง) ยังทำงานบนเอกสาร ทุกใบต้องมีคนจับ ต้องมีคนยืนยัน
            สุดท้ายฝ่ายบัญชีต้องนั่ง reconcile ทีละเอกสาร เทียบเลข PO, เทียบยอดรับของ, เทียบใบแจ้งหนี้
          </p>

          <p>
            ในหลายเคส — แค่หาเอกสารที่หาย ก็ใช้เวลาเป็นวัน.
            ผมเห็นพนักงานนั่งเรียงใบ invoice เป็นร้อยใบเพื่อหาตัวที่ยังไม่ได้ลงระบบ
            แล้วจดเลข manual ไปใส่ใน Excel.
          </p>

          <p>
            ทีมผม (ฝ่าย IT) ก็ช่วยได้เท่าที่ระบบอนุญาต เช่น เขียน macro ดึงข้อมูลจาก ERP มาช่วยเทียบยอด
            แต่ก็ยังต้องมีคนตรวจ เพราะเอกสารจริงอยู่บนโต๊ะ ไม่ได้อยู่ในระบบ.
          </p>

          <div class="mt-4 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-xs md:text-sm text-amber-900">
            <b>บทสรุปตอนนั้น:</b> สิ่งที่ช้าไม่ใช่ระบบ…แต่คือ
            <span class="font-semibold">“วิธีทำงานของข้อมูลกับคน”</span>.
            และผมรู้สึกว่า “เราช่วยได้ไม่ถึงครึ่งของปัญหา”.
          </div>
        </article>

        <!-- Painpoints card -->
        <aside class="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm shadow-slate-100 text-sm space-y-4">
          <div class="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700">
            <span>⚠️</span>
            <span>จุดคอขวดหลักที่เห็นชัด</span>
          </div>
          <ul class="space-y-3">
            <li>
              <b>1) เอกสารเดินช้ากว่าข้อมูล</b>
              <p class="text-slate-600">
                เอกสารจริงอยู่ที่โต๊ะ/กล่องเอกสาร แต่ข้อมูลใน ERP เดินไปข้างหน้าแล้ว
                คนต้องวิ่งตามทุกเดือน.
              </p>
            </li>
            <li>
              <b>2) การ match เอกสาร – ระบบทำแบบ manual</b>
              <p class="text-slate-600">
                เทียบเลข PO, ยอดรับของ, ใบแจ้งหนี้ทีละใบ แค่ผิดกัน 0.35 บาทก็ต้องหยุดทั้ง process.
              </p>
            </li>
            <li>
              <b>3) ไม่มี “ภาพรวม” ของสถานะเอกสาร</b>
              <p class="text-slate-600">
                ไม่รู้ว่าเอกสารไหนอยู่กับใคร, ขึ้นระบบหรือยัง, รออะไรอยู่ → ทำให้ต้องถามกันใน Teams ตลอดเวลา.
              </p>
            </li>
            <li>
              <b>4) เวลาและแรงงานของทีมบัญชีถูกใช้ไปกับงานตามเอกสาร</b>
              <p class="text-slate-600">
                แทนที่จะเอาเวลาไปวิเคราะห์ margin, promotion, cost per channel.
              </p>
            </li>
          </ul>
        </aside>
      </section>

      <!-- If we had AI like today -->
      <section class="grid md:grid-cols-2 gap-6">
        <article class="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm shadow-slate-100 text-sm space-y-4">
          <header class="space-y-2">
            <h2 class="text-lg md:text-xl font-semibold text-slate-900">
              ถ้าย้อนเวลากลับไป แล้วมี AI แบบทุกวันนี้…
            </h2>
            <p class="text-slate-500 text-xs">
              สิ่งที่ผมจะทำให้ทีมบัญชี ก่อนจะเริ่มเขียน code หรือทำโปรเจกต์ใหญ่
            </p>
          </header>

          <p>
            ถ้าย้อนกลับไปตอนนั้น แล้วผมมี AI แบบที่เรามีในวันนี้ ผมมั่นใจเลยว่า
            <span class="font-semibold">ผมจะช่วยทีมได้มากกว่านั้นเยอะ.</span>
            ผมจะเริ่มจากจุดที่เขาเหนื่อยที่สุด.
          </p>

          <ul class="space-y-3">
            <li>
              <b>1) ให้ AI อ่านเอกสารจากสแกน / PDF</b>
              <p class="text-slate-600">
                ใบวางบิล / ใบรับของจาก Teams หรืออีเมล → AI แยกเลขที่ PO, Supplier, Invoice ออกมาอัตโนมัติ.
              </p>
            </li>
            <li>
              <b>2) ให้ AI cross-check กับ ERP และแจ้งผลใน Teams</b>
              <p class="text-slate-600">
                ถ้าเอกสารไหนยังไม่เข้า, ยอดไม่ตรง หรือ PO ยังไม่ปิด
                ระบบจะแจ้งเตือนใน channel ของแผนกที่เกี่ยวข้องทันที.
              </p>
            </li>
            <li>
              <b>3) ให้ AI บันทึกสถานะเอกสารบน SharePoint</b>
              <p class="text-slate-600">
                ใครอัปโหลด, ใครตรวจแล้ว, ใครรอเอกสารจริง ทุกคนเห็นสถานะเดียวกันไม่ต้องโทรถาม.
              </p>
            </li>
            <li>
              <b>4) ให้ AI ช่วย reconcile ชุดข้อมูลแบบอัตโนมัติ</b>
              <p class="text-slate-600">
                รวมชุด “ใบรับของ - ใบวางบิล - ใบจ่ายเงิน” เพื่อลดการพิมพ์ตัวเลขเองให้มากที่สุด.
              </p>
            </li>
          </ul>
        </article>

        <!-- Impact card -->
        <aside class="bg-slate-900 text-slate-50 rounded-2xl p-6 md:p-7 flex flex-col justify-between">
          <div class="space-y-4">
            <p class="text-xs uppercase tracking-[0.18em] text-rose-400 font-semibold">
              Impact ถ้าทำให้ครบ loop
            </p>
            <h3 class="text-lg md:text-xl font-semibold">
              “AI ไม่ได้มาแทน ERP แต่มาปิดช่องว่างระหว่างระบบกับคน”
            </h3>
            <p class="text-sm text-slate-200">
              ให้ข้อมูลที่อยู่บนกระดาษเดินทางเร็วเท่ากับข้อมูลในระบบ:
            </p>
            <ul class="text-sm space-y-2">
              <li>• ทีมบัญชีไม่ต้องอยู่ดึกทุกสิ้นเดือน</li>
              <li>• ทีมคลังไม่ต้องแบกกล่องเอกสารมาส่งเป็นกองใหญ่</li>
              <li>• ฝ่ายจัดซื้อไม่ต้องนั่งอธิบายยอดต่างกัน 0.35 บาทกับ supplier</li>
              <li>• ทีม IT ไม่ต้องเขียน script ดึงข้อมูลทีละ batch เหมือนเดิม</li>
            </ul>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-700 text-xs text-slate-400">
            สุดท้าย สิ่งที่ทำให้องค์กรช้าไม่ใช่เพราะ “ไม่มีระบบ”
            แต่เพราะ <span class="font-semibold text-slate-100">ระบบมันเร็วกว่าเอกสารมากเกินไป</span>
            จนคนต้องคอยวิ่งตามมันทุกเดือน.
          </div>
        </aside>
      </section>

      <!-- CTA -->
      <section class="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div class="space-y-2">
          <p class="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold">
            From Story → To Workflow Design
          </p>
          <h2 class="text-lg md:text-xl font-semibold text-slate-900">
            จาก “ประสบการณ์ในห้องบัญชี” → “Blueprint ระบบ AI Agent”
          </h2>
          <p class="text-sm text-slate-600 max-w-xl">
            ถ้าองค์กรของคุณยังมีเอกสารเดินช้ากว่าข้อมูล
            คุณสามารถใช้แนวคิดนี้ไปเริ่มต้น POC เล็ก ๆ บน Teams + SharePoint ได้ทันที
            โดยไม่ต้องรื้อ ERP เดิม.
          </p>
        </div>
        <div class="flex flex-col items-start md:items-end gap-3">
          <RouterLink
            to="/solutions/accounting-ap-fnb/mockup"
            class="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            เปิดดู Mockup: จากกระดาษ → UI ระบบจริง
            <span>↗</span>
          </RouterLink>
          <p class="text-[11px] text-slate-500">
            Mockup นี้ออกแบบสำหรับทีมบัญชี F&amp;B โดยเฉพาะ (AP + FA + Stock)
          </p>
        </div>
      </section>

      <!-- Hashtags -->
      <footer class="pt-2 pb-8 text-[11px] text-slate-500 flex flex-wrap gap-2">
        <span>#TH8AI</span>
        <span>#AIinEnterprise</span>
        <span>#FinanceAutomation</span>
        <span>#AccountingReconcile</span>
        <span>#MSteams</span>
        <span>#SharePoint</span>
        <span>#ERPIntegration</span>
        <span>#FandB</span>
        <span>#DigitalFinance</span>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>
