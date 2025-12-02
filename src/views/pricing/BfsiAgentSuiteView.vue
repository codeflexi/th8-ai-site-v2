<template>
  <div class="bg-slate-50 text-slate-900">

    <!-- HERO -->
    <section class="bg-white border-b border-slate-200">
      <div class="max-w-6xl mx-auto px-4 lg:px-6 py-16 space-y-6">

        <p class="text-[11px] uppercase tracking-wider text-red-600 font-semibold">
          TH8.AI · BFSI Agent Suite
        </p>

        <h1 class="text-3xl lg:text-4xl font-bold leading-tight">
          AI Agent สำหรับ <span class="text-red-600">ธนาคาร · สินเชื่อ · ประกัน</span>  
          ลดงานเอกสาร 30–50% ลด Error 20–40% เพิ่มความเร็วอนุมัติ & Compliance
        </h1>

        <p class="text-sm lg:text-base text-slate-600 max-w-3xl leading-relaxed">
          TH8.AI สร้าง Agent Layer ที่ทำงานร่วมกับระบบ Core Banking, LOS,  
          Collection, CRM และ Data Warehouse ได้ทันที — ลดภาระงานทีมสินเชื่อ  
          การเงิน ปฏิบัติการ และ Compliance เพื่อให้องค์กร BFSI ขยายธุรกิจได้เร็วและปลอดภัยขึ้น
        </p>

        <!-- HERO STATS -->
        <div class="grid grid-cols-3 gap-4 text-center pt-4">
          <div class="bg-slate-100 border border-slate-200 rounded-xl p-4">
            <p class="font-bold text-2xl text-slate-900">30–50%</p>
            <p class="text-xs text-slate-600">ลดงานเอกสาร / ตรวจความครบถ้วน</p>
          </div>
          <div class="bg-slate-100 border border-slate-200 rounded-xl p-4">
            <p class="font-bold text-2xl text-slate-900">20–40%</p>
            <p class="text-xs text-slate-600">ลด Human Error ในสินเชื่อ · Compliance</p>
          </div>
          <div class="bg-slate-100 border border-slate-200 rounded-xl p-4">
            <p class="font-bold text-2xl text-slate-900">2–4X</p>
            <p class="text-xs text-slate-600">เร็วขึ้นในการวิเคราะห์ + อนุมัติ</p>
          </div>
        </div>

      </div>
    </section>

    <!-- USE CASES -->
    <section class="max-w-6xl mx-auto px-4 lg:px-6 py-16 space-y-8">
      <h2 class="text-2xl font-bold text-slate-900">Use Cases ที่สร้างผลลัพธ์จริงใน BFSI</h2>
      <div class="grid md:grid-cols-2 gap-6">

        <!-- 1 -->
        <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 class="font-semibold text-lg mb-2 text-red-600">1) Credit & Risk Agent</h3>
          <ul class="text-sm text-slate-700 space-y-1">
            <li>• อ่านเอกสารลูกค้า: สลิปเงินเดือน, Statement, เอกสารธุรกิจ</li>
            <li>• Extract ข้อมูลสำคัญ: รายได้, ภาระหนี้, Cashflow</li>
            <li>• ตรวจ Rule เช่น DSR, อายุงาน, เงื่อนไขผลิตภัณฑ์</li>
            <li>• สร้างสรุปไฟล์ Case Summary ให้เจ้าหน้าที่ตัดสินใจต่อ</li>
          </ul>
        </div>

        <!-- 2 -->
        <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 class="font-semibold text-lg mb-2 text-red-600">2) Compliance & Audit Agent</h3>
          <ul class="text-sm text-slate-700 space-y-1">
            <li>• ตรวจความครบถ้วนของเอกสารเปิดบัญชี / สินเชื่อ</li>
            <li>• เปรียบเทียบสัญญาเดิม–ใหม่ระบุ Section ที่เปลี่ยน</li>
            <li>• เตรียม Audit Package อัตโนมัติ</li>
            <li>• สร้าง Evidence ให้ตรวจสอบย้อนหลังได้</li>
          </ul>
        </div>

        <!-- 3 -->
        <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 class="font-semibold text-lg mb-2 text-red-600">3) FP&A & Finance Agent</h3>
          <ul class="text-sm text-slate-700 space-y-1">
            <li>• สรุปรายได้–ต้นทุนแบบวันต่อวัน</li>
            <li>• แนะนำ Scenario: ดอกเบี้ย, Portfolio shift, NPL impact</li>
            <li>• ทำ Forecast / Rolling plan อัตโนมัติ</li>
            <li>• สร้าง Insight ให้ผู้บริหารใน 30 วินาที</li>
          </ul>
        </div>

        <!-- 4 -->
        <div class="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 class="font-semibold text-lg mb-2 text-red-600">4) Collection & Customer Retention Agent</h3>
          <ul class="text-sm text-slate-700 space-y-1">
            <li>• วิเคราะห์พฤติกรรมลูกหนี้จาก Log การคุย</li>
            <li>• ปรับ Script โทร Outbound อัตโนมัติ</li>
            <li>• วิเคราะห์สาเหตุลูกค้าจะยกเลิก / ปิดบัญชี</li>
            <li>• เสนอ Action: ส่วนลด, รีไฟแนนซ์, ติดต่อถี่ขึ้น</li>
          </ul>
        </div>

      </div>
    </section>

    <!-- SYSTEM FLOW / ARCHITECTURE -->
    <section class="bg-white border-y border-slate-200 py-16">
      <div class="max-w-6xl mx-auto px-4 lg:px-6 space-y-8">
        <h2 class="text-2xl font-bold text-slate-900">ตัวอย่าง Flow การทำงานจริงของ BFSI Agent</h2>

        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm leading-relaxed space-y-4">

          <p class="font-semibold text-slate-700">
            ตัวอย่าง: ลูกค้าขอสินเชื่อบุคคล → ตรวจเอกสาร → วิเคราะห์ → อนุมัติ
          </p>

          <ol class="space-y-2 text-slate-700">
            <li>1) ลูกค้าอัปโหลดเอกสารผ่าน LINE / Portal / Branch</li>
            <li>2) Document Agent ตรวจความครบถ้วน (KYC, Statement, เอกสารธุรกิจ)</li>
            <li>3) Credit Agent ทำ Extraction + Rule checking ทันที</li>
            <li>4) Risk Agent สรุป Red flags, DSR, Anomaly detection</li>
            <li>5) ส่ง Case Summary ให้เจ้าหน้าที่พิจารณา</li>
            <li>6) ระบบบันทึก Evidence เพื่อรองรับ Internal/External Audit</li>
          </ol>

          <p class="text-xs text-slate-500">
            *รองรับการเชื่อมกับ Core Banking, LOS, DWH, CRM, และระบบโทรศัพท์*
          </p>

        </div>
      </div>
    </section>

    <!-- KPI & OUTCOMES -->
    <section class="max-w-6xl mx-auto px-4 lg:px-6 py-16 space-y-10">
      <h2 class="text-2xl font-bold text-slate-900">ผลลัพธ์ที่ BFSI เห็นจริงภายใน 60–90 วัน</h2>

      <div class="grid md:grid-cols-3 gap-6">

        <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <p class="text-3xl font-bold text-red-600 mb-1">–40%</p>
          <p class="text-sm text-slate-700">เวลาตรวจเอกสารสินเชื่อ / Compliance</p>
        </div>

        <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <p class="text-3xl font-bold text-red-600 mb-1">–20%</p>
          <p class="text-sm text-slate-700">Human error ในงานสินเชื่อ / ปฏิบัติการ</p>
        </div>

        <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <p class="text-3xl font-bold text-red-600 mb-1">2–3X</p>
          <p class="text-sm text-slate-700">การอนุมัติเร็วขึ้นสำหรับเคสปกติ</p>
        </div>

      </div>
    </section>

    <!-- PRICING -->
    <section class="bg-white border-t border-slate-200 py-16">
      <div class="max-w-6xl mx-auto px-4 lg:px-6 space-y-8">

        <h2 class="text-2xl font-bold text-slate-900">ช่วงราคาเริ่มต้นสำหรับ BFSI</h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
            <p class="text-sm text-slate-600 mb-1">Setup + Implementation</p>
            <p class="text-3xl font-bold text-slate-900">฿450k – ฿900k</p>
            <p class="text-xs text-slate-500 mt-1">ขึ้นกับจำนวนระบบที่ต้องเชื่อม (Core, LOS, CRM, DWH, Call center)</p>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
            <p class="text-sm text-slate-600 mb-1">Monthly subscription</p>
            <p class="text-3xl font-bold text-slate-900">฿90k – ฿180k / เดือน</p>
            <p class="text-xs text-slate-500 mt-1">รวม AI cost, hosting, monitoring, retraining & support</p>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-6xl mx-auto px-4 text-center space-y-4">
        <h2 class="text-xl font-bold">อยากดู Demo ที่แตะข้อมูลจริงภายในระบบของคุณ?</h2>
        <p class="text-sm text-slate-600 max-w-xl mx-auto">
          TH8.AI สามารถสร้าง BFSI Agent ใช้กับข้อมูลของคุณแบบ Private ภายใน 7–14 วัน  
          เพื่อดูผลลัพธ์จริงก่อนเริ่มทำ Implementation เต็มระบบ
        </p>

        <router-link
          to="/contact"
          class="inline-flex items-center justify-center rounded-full bg-red-600 text-white px-6 py-3 text-sm font-semibold hover:bg-red-700 transition"
        >
          นัดคุยกับทีม TH8.AI →
        </router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
</script>
