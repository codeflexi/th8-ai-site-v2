<!-- src/views/ProductionQualityIncidentMockup.vue -->
<template>
  <div class="min-h-screen bg-slate-50">
    <main class="max-w-6xl mx-auto px-4 md:px-8 py-10">
      <!-- Header / Breadcrumb -->
      <section class="mb-6 space-y-3">
        <nav class="text-xs md:text-sm text-slate-500 flex items-center gap-1">
          <RouterLink to="/" class="hover:text-slate-700">TH8.AI</RouterLink>
          <span>/</span>
          <RouterLink to="/services" class="hover:text-slate-700">Solutions</RouterLink>
          <span>/</span>
          <RouterLink to="/solutions/production-quality-incident" class="hover:text-slate-700">
            Production &amp; Quality Incident (Story)
          </RouterLink>
          <span>/</span>
          <span class="text-slate-700">Mockup UI</span>
        </nav>

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-[0.18em] text-emerald-500 font-semibold">
              UI Mockup • Production &amp; Quality Incident Agent
            </p>
            <h1 class="text-2xl md:text-3xl font-semibold text-slate-900">
              Mockup: Incident &amp; Quality Console สำหรับโรงงานไทย
            </h1>
            <p class="text-sm md:text-base text-slate-600 max-w-2xl">
              หน้านี้ออกแบบเป็น <b>Infographic + Screen Mockup</b> สำหรับนำเสนอให้
              ทีมผลิต, QC, วิศวกร และผู้บริหารโรงงาน เห็นภาพว่า Incident Agent
              จะช่วย “เก็บ–จัดระเบียบ–เล่าเรื่องปัญหา” ได้อย่างไร.
            </p>
          </div>
          <RouterLink
            to="/solutions/production-quality-incident"
            class="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
          >
            ← ย้อนกลับไปอ่าน Story / Use case
          </RouterLink>
        </div>
      </section>

      <!-- Canvas Wrapper (Infographic) -->
      <section class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div class="absolute -top-16 -right-20 w-72 h-72 rounded-full bg-emerald-500 opacity-10"></div>
        <div class="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-slate-900 opacity-5"></div>

        <div class="relative p-6 md:p-10">
          <!-- Header -->
          <div class="flex items-center justify-between gap-4 mb-6">
            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="px-2.5 py-1 rounded-full text-white text-xs tracking-wide bg-emerald-500">
                  TH8.AI
                </div>
                <span class="text-xs text-slate-500">Infographic • Ready to Present / Print</span>
              </div>
              <h2 class="text-2xl md:text-3xl font-semibold leading-tight text-slate-900">
                จาก
                <span class="underline decoration-emerald-500 decoration-4 underline-offset-4">
                  ไลน์แจ้งเคส
                </span>
                สู่ Incident Console ที่เห็น pattern ปัญหาคุณภาพทั้งโรงงาน
              </h2>
              <p class="mt-3 text-sm md:text-base text-slate-600 max-w-3xl">
                บริบทโรงงานไทยที่มีหลายไลน์ผลิต, หลายกะ, หลายสินค้า
                ใช้ทั้ง <b>LINE, Excel, ERP, MES, ระบบใบแจ้งซ่อม</b> ในการแจ้งและตามเคสคุณภาพ/เครื่องจักร.
              </p>
            </div>
          </div>

          <div class="mt-3 flex flex-wrap items-center gap-2">
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              🧵 LINE / Chat
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              📄 Excel / NCR
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              🏭 MES / SCADA
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              📊 ERP
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              🤖 Incident &amp; Quality Agent
            </span>
          </div>

          <!-- Before vs After -->
          <div class="grid md:grid-cols-2 gap-6 mt-8">
            <!-- BEFORE -->
            <div class="rounded-2xl border border-slate-200 bg-white">
              <div class="flex items-center justify-between p-5 border-b border-slate-200">
                <h3 class="text-base md:text-lg font-semibold">ก่อนใช้ AI (Painpoints)</h3>
                <span
                  class="text-[11px] font-medium px-2.5 py-1 rounded-full border border-emerald-200 text-emerald-700 bg-emerald-50"
                >
                  ข้อมูลกระจัดกระจาย • Trace back ยาก
                </span>
              </div>
              <ol class="p-5 space-y-4 text-xs md:text-sm">
                <li class="flex gap-3">
                  <div class="mt-0.5">💬</div>
                  <div>
                    <b>แจ้งเคสผ่านไลน์เป็นหลัก</b> — บางเคสมีรูป, บางเคสมีแต่ข้อความ,
                    บางเคสไม่มี lot/เวลา → เวลาไล่ย้อนหลังต้อง scroll chat ยาวมาก.
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">📄</div>
                  <div>
                    <b>เปิด NCR/Excel ย้อนหลังยาก</b> — ฟอร์มไม่เหมือนกันทุกไลน์ผลิต,
                    บางครั้งพลาดการกรอกฟิลด์สำคัญ (ลูกค้า, เครื่อง, product code).
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">⏱️</div>
                  <div>
                    <b>ทำรายงาน 8D / CAPA ช้า</b> — ใช้เวลามากกับการถาม–เก็บข้อมูลย้อนหลัง
                    มากกว่าการวิเคราะห์ root cause จริง ๆ.
                  </div>
                </li>
              </ol>
            </div>

            <!-- AFTER -->
            <div class="rounded-2xl border border-slate-200 bg-white">
              <div class="flex items-center justify-between p-5 border-b border-slate-200">
                <h3 class="text-base md:text-lg font-semibold">หลังใช้ AI (Workflow ใหม่)</h3>
                <span
                  class="text-[11px] font-medium px-2.5 py-1 rounded-full border border-emerald-200 text-emerald-700 bg-emerald-50"
                >
                  เก็บครบ • เห็น pattern • พร้อมใช้ทำปรับปรุง
                </span>
              </div>
              <ol class="p-5 space-y-4 text-xs md:text-sm">
                <li class="flex gap-3">
                  <div class="mt-0.5">🧠</div>
                  <div>
                    <b>Incident Hub เดียว</b> — แจ้งเคสผ่าน LINE/ฟอร์ม → AI อ่านข้อความ+รูป
                    และเติมโครงสร้างข้อมูลให้ครบมากที่สุดเท่าที่จะทำได้.
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">🧱</div>
                  <div>
                    <b>ผูกข้อมูลกับ line/เครื่อง/กะ</b> — ทุกเคสถูกผูกกับไลน์ผลิต, เครื่อง, product code,
                    ลูกค้า, เวลา, กะ, เปลี่ยนสูตร/เปลี่ยนบรรจุภัณฑ์หรือไม่.
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">📊</div>
                  <div>
                    <b>เห็น heatmap ปัญหาแบบ real-time</b> — เห็นว่าสัปดาห์นี้ปัญหากองอยู่ที่ไลน์ไหน,
                    กะไหน, สินค้าอะไร → ใช้คุยใน meeting ได้ทันที.
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <!-- How it works pipeline -->
          <div class="mt-8 grid md:grid-cols-5 gap-4 text-xs md:text-sm">
            <div class="col-span-5">
              <h3 class="text-sm md:text-base font-semibold">
                AI ทำงานอย่างไร (ภาพรวม 5 ขั้น)
              </h3>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">📥</div>
              <b>1) Capture</b>
              <p>รับ incident จาก LINE/ฟอร์ม/ระบบใบแจ้งซ่อม → รวมไว้ที่ศูนย์กลาง.</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">🔎</div>
              <b>2) Extract</b>
              <p>AI อ่านข้อความ+รูป → ดึงข้อมูลสำคัญ (line, machine, product, lot, time, customer).</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">🧱</div>
              <b>3) Structure</b>
              <p>จัดเก็บเป็น incident record ที่เชื่อมกับ ERP/MES เพื่อใช้ trace back และวิเคราะห์.</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">📣</div>
              <b>4) Notify</b>
              <p>แจ้งเคสสำคัญให้หัวหน้าไลน์/QC/วิศวกร พร้อม context ครบในครั้งเดียว.</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">📈</div>
              <b>5) Analyse</b>
              <p>สร้าง pattern/heatmap/summary รายสัปดาห์–รายเดือน เพื่อใช้ใน meeting คุณภาพ.</p>
            </div>
          </div>

          <!-- Role-based view -->
          <div class="mt-8">
            <h3 class="text-sm md:text-base font-semibold mb-3">
              ใน 1 วัน AI Agent ตัวนี้ช่วย “ใคร” ทำอะไรบ้าง?
            </h3>
            <p class="text-xs md:text-sm text-slate-600 mb-4">
              ให้ทุกคนในโรงงานเห็นตรงกันว่า Agent ตัวนี้เข้ามาเสริมตรงไหน ไม่ได้มาแทนคนหน้างานหรือ QC.
            </p>
            <div class="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
              <!-- Production Line Lead -->
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
                <div
                  class="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 w-fit"
                >
                  <span>🏭</span>
                  <span>หัวหน้าไลน์ผลิต</span>
                </div>
                <p class="font-semibold text-slate-900">
                  จาก “รู้ว่ามีปัญหา” → “รู้ว่าปัญหาที่หนักสุดอยู่ตรงไหน”
                </p>
                <ul class="mt-1 space-y-1.5 text-slate-700">
                  <li>• เห็น incident วันนี้แยกตาม line/เครื่อง/กะ.</li>
                  <li>• เห็นว่าเคสไหนต้องรีบเคลียร์ก่อน เพราะกระทบ shipment ใหญ่.</li>
                  <li>• มีข้อมูลพร้อมคุยกับ QC/maintenance โดยไม่ต้องไล่ถามย้อนหลัง.</li>
                </ul>
              </div>

              <!-- QC / Quality -->
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
                <div
                  class="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 w-fit"
                >
                  <span>🔍</span>
                  <span>QC / Quality</span>
                </div>
                <p class="font-semibold text-slate-900">
                  จาก “เดือนนี้เคสเยอะ” → “เคสเยอะแต่รู้ว่าเยอะตรงไหน”
                </p>
                <ul class="mt-1 space-y-1.5 text-slate-700">
                  <li>• ดู incident pattern รายสัปดาห์–เดือน สำหรับเตรียม 8D/CAPA.</li>
                  <li>• มีข้อมูลครบ (lot, ลูกค้า, line, กะ) โดยไม่ต้องไล่ถามทุกครั้ง.</li>
                  <li>• ใช้ insight จริงไปคุยกับ production และ management.</li>
                </ul>
              </div>

              <!-- Management -->
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
                <div
                  class="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 w-fit"
                >
                  <span>📊</span>
                  <span>Plant / Management</span>
                </div>
                <p class="font-semibold text-slate-900">
                  จาก “เวลาประชุมคุยกันคนละมุม” → “คุยจากข้อมูลชุดเดียวกัน”
                </p>
                <ul class="mt-1 space-y-1.5 text-slate-700">
                  <li>• เห็น trend defect/incident แยกตามสายการผลิตและสินค้า.</li>
                  <li>• รู้ว่าต้องลงทุน/ปรับปรุงที่จุดไหนก่อน.</li>
                  <li>• ใช้ข้อมูลจริงคุยกับลูกค้าเวลามีเคสใหญ่หรือ audit.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Mini Screen Mockup – Incident Console -->
          <div class="mt-10">
            <h3 class="text-sm md:text-base font-semibold mb-3">
              ตัวอย่างหน้าจอ “Incident Console” – เวลาเปิดมาจะเห็นอะไร?
            </h3>
            <p class="text-xs md:text-sm text-slate-600 mb-4">
              เน้นให้ทีมเห็น journey และองค์ประกอบข้อมูลสำคัญมากกว่าความสวยงามของ UI.
            </p>

            <div class="rounded-2xl border border-slate-200 bg-slate-900 text-slate-50 p-5 md:p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="space-y-1">
                  <p class="text-[11px] uppercase tracking-[0.18em] text-emerald-300">
                    Incident Console • Today
                  </p>
                  <h4 class="text-sm md:text-base font-semibold">
                    เคสปัญหาไลน์ผลิต &amp; คุณภาพที่ต้องดูในช่วง 24 ชั่วโมงล่าสุด
                  </h4>
                </div>
                <div class="flex items-center gap-2 text-[10px]">
                  <span class="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">
                    Logged in as: qa.th8@factory.co.th
                  </span>
                </div>
              </div>

              <div class="grid md:grid-cols-[1.1fr,1.3fr] gap-4">
                <!-- Left: list -->
                <div class="bg-slate-800 rounded-xl border border-slate-700 p-3 flex flex-col gap-3">
                  <!-- Filters -->
                  <div class="flex flex-wrap items-center gap-2 text-[11px]">
                    <span class="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
                      Last 24h
                    </span>
                    <span class="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
                      Line: All
                    </span>
                    <span class="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
                      Severity: High / Medium
                    </span>
                  </div>

                  <!-- List header -->
                  <div
                    class="flex justify-between items-center text-[11px] text-slate-400 border-b border-slate-700 pb-1"
                  >
                    <span>Incident</span>
                    <span>สถานะ</span>
                  </div>

                  <!-- Rows -->
                  <div class="space-y-1.5 text-[11px]">
                    <div
                      class="flex items-center justify-between px-2 py-1.5 rounded-lg bg-slate-900/70 border border-rose-500/60"
                    >
                      <div>
                        <p class="font-medium text-slate-50">
                          INC-2025-0102 · Defect ซีลไม่สนิท
                        </p>
                        <p class="text-slate-400 text-[10px]">
                          Line 3 · Product: น้ำผลไม้ 250ml · ลูกค้า: 7-Eleven
                        </p>
                      </div>
                      <span
                        class="text-[10px] px-2 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/40"
                      >
                        ❌ Open – High
                      </span>
                    </div>

                    <div
                      class="flex items-center justify-between px-2 py-1.5 rounded-lg bg-slate-900/70 border border-amber-500/60"
                    >
                      <div>
                        <p class="font-medium text-slate-50">
                          INC-2025-0103 · เครื่อง Filler error ซ้ำ
                        </p>
                        <p class="text-slate-400 text-[10px]">
                          Line 1 · Machine: Filler-01 · กะดึก
                        </p>
                      </div>
                      <span
                        class="text-[10px] px-2 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/40"
                      >
                        ⚠️ In progress
                      </span>
                    </div>

                    <div
                      class="flex items-center justify-between px-2 py-1.5 rounded-lg bg-slate-900/70 border border-emerald-500/60"
                    >
                      <div>
                        <p class="font-medium text-slate-50">
                          INC-2025-0104 · กล่องบุบจาก pallet
                        </p>
                        <p class="text-slate-400 text-[10px]">
                          Warehouse · Product: ขนมขบเคี้ยว · ลูกค้า: Modern trade
                        </p>
                      </div>
                      <span
                        class="text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                      >
                        ✅ Closed
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Right: detail -->
                <div
                  class="bg-slate-800 rounded-xl border border-slate-700 p-4 flex flex-col gap-3 text-[11px] md:text-[12px]"
                >
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-slate-400 text-[10px]">Selected:</p>
                      <p class="font-semibold text-slate-50">
                        INC-2025-0102 · Defect ซีลไม่สนิท
                      </p>
                    </div>
                    <div class="inline-flex items-center gap-2">
                      <span
                        class="px-2 py-1 rounded-full bg-rose-500/10 text-rose-200 border border-rose-500/40 text-[10px]"
                      >
                        ❌ High severity · ลูกค้า key account
                      </span>
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-3">
                    <!-- Left detail -->
                    <div class="space-y-2">
                      <p class="text-slate-400 text-[10px] uppercase tracking-[0.18em]">
                        รายละเอียด &amp; Timeline
                      </p>
                      <div class="bg-slate-900 rounded-lg border border-slate-700 p-3 space-y-1.5">
                        <p>Product: <b>น้ำผลไม้ 250ml</b></p>
                        <p>Line: 3 · Machine: Packer-03</p>
                        <p>Lot: 2025-05-10-A · กะ: เช้า</p>
                        <p class="text-slate-400 text-[10px]">
                          แจ้งครั้งแรก 09:20 จาก QC line 3:
                          “ซีลหลุดง่าย พบ defect ~3% หลัง start line ใหม่หลัง CIP”.
                        </p>
                      </div>

                      <div class="bg-slate-900 rounded-lg border border-slate-700 p-3 space-y-1.5">
                        <p>ลูกค้า: <b>7-Eleven (key account)</b></p>
                        <p>มี shipment ที่ได้รับผลกระทบ: 3 shipment</p>
                        <p>สถานะ: ยังไม่ส่งออกจากโรงงาน (ยังคุมอยู่ที่ plant)</p>
                      </div>
                    </div>

                    <!-- Right actions -->
                    <div class="space-y-2">
                      <p class="text-slate-400 text-[10px] uppercase tracking-[0.18em]">
                        AI Insight &amp; Action
                      </p>
                      <div class="bg-slate-900 rounded-lg border border-slate-700 p-3 space-y-2">
                        <p class="text-[11px] text-slate-200">
                          AI Insight:
                        </p>
                        <ul class="list-disc pl-4 space-y-1 text-[11px] text-slate-300">
                          <li>เดือนที่ผ่านมา เคสซีลไม่สนิท 80% เกิดบน line 3 หลังการ CIP.</li>
                          <li>เคสคล้ายกันเคยเกิดเมื่อ 2 สัปดาห์ก่อน (INC-2025-0087).</li>
                          <li>มี pattern ชัดเจนเชื่อมกับการตั้งค่าอุณหภูมิซีลหลัง start line.</li>
                        </ul>
                      </div>

                      <div class="bg-slate-900 rounded-lg border border-slate-700 p-3 space-y-2">
                        <p class="text-[11px] text-slate-200">
                          AI Suggestion (สำหรับ meeting CAPA):
                        </p>
                        <ul class="list-disc pl-4 space-y-1 text-[11px] text-slate-300">
                          <li>รีวิว procedure start-up หลัง CIP เฉพาะ line 3.</li>
                          <li>เพิ่ม step การเช็กอุณหภูมิซีลใน 10 นาทีแรกของการรัน.</li>
                          <li>เก็บ sample เพิ่มเพื่อเช็กความสัมพันธ์กับ supplier ฟิล์มซีล.</li>
                        </ul>
                      </div>

                      <div class="flex flex-wrap gap-2 text-[11px]">
                        <button
                          class="px-3 py-1.5 rounded-full bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400 transition"
                        >
                          ✅ Mark as under CAPA
                        </button>
                        <button
                          class="px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-200 border border-amber-500/40 hover:bg-amber-500/30 transition"
                        >
                          📝 สร้าง 8D Report Draft
                        </button>
                        <button
                          class="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 transition"
                        >
                          📤 แชร์ให้ทีมผลิต &amp; maintenance
                        </button>
                      </div>

                      <p class="text-[10px] text-slate-400">
                        ทุก action จะถูกเก็บ log พร้อม user, เวลา และเหตุผล
                        เพื่อใช้ทบทวนใน meeting คุณภาพและรองรับ audit จากลูกค้า/หน่วยงาน.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p class="mt-4 text-[10px] text-slate-400">
                หมายเหตุ: หน้านี้เป็น mockup เพื่อให้เห็น journey และ field ข้อมูลสำคัญ
                ในการ implement จริงสามารถเชื่อมเข้ากับ MES/ERP/ระบบใบแจ้งซ่อมที่มีอยู่แล้วได้.
              </p>
            </div>
          </div>

          <!-- Footer / Credit -->
          <div
            class="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-slate-500"
          >
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span>TH8.AI • AI Agent &amp; Automation for Thai Manufacturing</span>
            </div>
            <div>Designed for print/screen • A4-friendly • TailwindCSS</div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
