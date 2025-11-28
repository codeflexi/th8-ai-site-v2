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
          <RouterLink to="/solutions/logistics-control-tower" class="hover:text-slate-700">
            Logistics Control Tower (Story)
          </RouterLink>
          <span>/</span>
          <span class="text-slate-700">Mockup UI</span>
        </nav>

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-[0.18em] text-sky-500 font-semibold">
              UI Mockup • Logistics Control Tower &amp; Exception Agent
            </p>
            <h1 class="text-2xl md:text-3xl font-semibold text-slate-900">
              Mockup: Control Tower สำหรับทีม Logistics ไทย
            </h1>
            <p class="text-sm md:text-base text-slate-600 max-w-2xl">
              หน้านี้ออกแบบเป็น <b>Infographic + Screen Mockup</b> สำหรับนำเสนอให้ทีม Operation, CS,
              และ Management เห็นภาพว่า AI Agent เข้ามาช่วย “เล่าเรื่อง shipment” ทั้งเส้นทางได้อย่างไร.
            </p>
          </div>
          <RouterLink
            to="/solutions/logistics-control-tower"
            class="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
          >
            ← ย้อนกลับไปอ่าน Story / Use case
          </RouterLink>
        </div>
      </section>

      <!-- Canvas Wrapper (Infographic) -->
      <section class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div class="absolute -top-16 -right-20 w-72 h-72 rounded-full bg-sky-500 opacity-10"></div>
        <div class="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-slate-900 opacity-5"></div>

        <div class="relative p-6 md:p-10">
          <!-- Header -->
          <div class="flex items-center justify-between gap-4 mb-6">
            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="px-2.5 py-1 rounded-full text-white text-xs tracking-wide bg-sky-500">
                  TH8.AI
                </div>
                <span class="text-xs text-slate-500">Infographic • Ready to Present / Print</span>
              </div>
              <h2 class="text-2xl md:text-3xl font-semibold leading-tight text-slate-900">
                จาก
                <span class="underline decoration-sky-500 decoration-4 underline-offset-4">
                  ไลน์ถามของทั้งวัน
                </span>
                สู่ Control Tower ที่เห็น shipment ทั้งเส้นทางแบบ Real-time
              </h2>
              <p class="mt-3 text-sm md:text-base text-slate-600 max-w-3xl">
                บริบทบริษัท 3PL / Distributor ไทยที่ส่งของให้ Modern trade, ร้านค้าปลีก, และลูกค้า Online
                โดยข้อมูลกระจายอยู่ใน <b>TMS, WMS, ERP, GPS, LINE/Teams</b>.
              </p>
            </div>
          </div>

          <div class="mt-3 flex flex-wrap items-center gap-2">
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              🚚 TMS
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              📦 WMS
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              📊 ERP
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              📍 GPS / Telematics
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              💬 LINE / Teams
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              🤖 Control Tower &amp; Exception Agent
            </span>
          </div>

          <!-- Before vs After -->
          <div class="grid md:grid-cols-2 gap-6 mt-8">
            <!-- BEFORE -->
            <div class="rounded-2xl border border-slate-200 bg-white">
              <div class="flex items-center justify-between p-5 border-b border-slate-200">
                <h3 class="text-base md:text-lg font-semibold">ก่อนใช้ AI (Painpoints)</h3>
                <span
                  class="text-[11px] font-medium px-2.5 py-1 rounded-full border border-sky-200 text-sky-700 bg-sky-50"
                >
                  ถามซ้ำ • หาคำตอบช้า • คุมของไม่อยู่
                </span>
              </div>
              <ol class="p-5 space-y-4 text-xs md:text-sm">
                <li class="flex gap-3">
                  <div class="mt-0.5">💬</div>
                  <div>
                    <b>CS ถาม “ของถึงไหนแล้ว?” ทุกวัน</b> — ต้องไล่ถามฮับ, คนขับ, ทีมคลัง, ทีมวางแผน
                    ผ่านไลน์/โทรศัพท์หลายรอบกว่าจะได้คำตอบเดียว.
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">🧩</div>
                  <div>
                    <b>ข้อมูลกระจายหลายระบบ</b> — สถานะอยู่ใน TMS, สต๊อกใน WMS, order ใน ERP, ปัญหาหน้างานอยู่ในไลน์
                    → ไม่มีจอเดียวที่เล่าเรื่องของ shipment แต่ละตัว.
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">⏱️</div>
                  <div>
                    <b>รู้ว่า delay ตอนมันสายไปแล้ว</b> — เห็นจาก complaint หรือ report สิ้นวัน/สิ้นเดือน
                    ไม่ได้เห็นแบบ real-time.
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">📉</div>
                  <div>
                    <b>ผู้บริหารเห็นแต่ KPI รวม</b> — ไม่รู้ว่าปัญหาจริงอยู่ที่เส้นทางไหน, ฮับไหน, หรือประเภท shipment ไหน.
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
                  เห็นภาพรวม • แจ้งเตือนก่อนเวลา • คุมของได้จริง
                </span>
              </div>
              <ol class="p-5 space-y-4 text-xs md:text-sm">
                <li class="flex gap-3">
                  <div class="mt-0.5">🧠</div>
                  <div>
                    <b>AI รวม event จากทุกระบบ</b> — ผูก TMS, WMS, ERP, GPS, LINE เข้ากับ Shipment ID เดียวกัน
                    → เห็น story ของแต่ละ shipment แบบครบ.
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">📍</div>
                  <div>
                    <b>Timeline ต่อ shipment</b> — เห็นว่าล่าสุดอยู่จุดไหนของเส้นทาง, เคยหยุดตรงไหน,
                    มีปัญหาอะไรระหว่างทางบ้าง.
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">🚨</div>
                  <div>
                    <b>แจ้งเตือน shipment เสี่ยง delay</b> — ถ้ารถหยุดนานเกินปกติ, ยังไม่โหลดของตามแผน,
                    หรือเสี่ยงเลย SLA → AI ยกมือเตือนทีมที่เกี่ยวข้องอัตโนมัติ.
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">📣</div>
                  <div>
                    <b>CS ตอบลูกค้าจากจอเดียว</b> — พิมพ์เลข order หรือ shipment
                    → เห็นสถานะพร้อมคำอธิบายจาก AI ว่าติดตรงไหน และควรทำอะไรต่อ.
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
              <b>1) Ingest</b>
              <p>ดึง event จาก TMS, WMS, ERP, GPS, LINE/Teams เข้ามาใน data pipeline เดียว.</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">🧱</div>
              <b>2) Correlate</b>
              <p>ผูก event ทั้งหมดเข้ากับ Shipment ID / Order ID เดียวกัน → ได้ timeline ต่อ shipment.</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">🚨</div>
              <b>3) Detect Exception</b>
              <p>ใช้ rule + AI ตรวจจับ delay, เสี่ยงพลาด SLA, หรือ pattern ผิดปกติ.</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">📣</div>
              <b>4) Notify &amp; Route</b>
              <p>ส่งแจ้งเตือนให้ฮับ, CS, หรือผู้รับผิดชอบ พร้อม context และคำแนะนำแรกเริ่ม.</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">📈</div>
              <b>5) Learn &amp; Improve</b>
              <p>เก็บ log ทุกเคสไว้ปรับ rule, วิเคราะห์คอขวด และทำ continuous improvement.</p>
            </div>
          </div>

          <!-- Role-based view -->
          <div class="mt-8">
            <h3 class="text-sm md:text-base font-semibold mb-3">
              ใน 1 วัน AI Agent ตัวนี้ช่วย “ใคร” ทำอะไรบ้าง?
            </h3>
            <p class="text-xs md:text-sm text-slate-600 mb-4">
              มองภาพแบบ role-based เพื่อให้ทีม Operation, CS, และ Management เห็นตรงกันว่า AI เสริมตรงไหน
              ไม่ได้มาแทนใคร.
            </p>
            <div class="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
              <!-- Operations / Hub -->
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
                <div
                  class="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 w-fit"
                >
                  <span>🏭</span>
                  <span>Operations / Hub</span>
                </div>
                <p class="font-semibold text-slate-900">
                  จาก “รอคนโทรถาม” → “รู้ล่วงหน้าว่าต้องจัดการ shipment ไหนก่อน”
                </p>
                <ul class="mt-1 space-y-1.5 text-slate-700">
                  <li>• เห็น list shipment ที่ “At risk” แบบเรียงตามความเร่งด่วน.</li>
                  <li>• รู้ทันทีว่า delay เพราะอะไร (โหลดช้า, รถติด, เอกสารห้าง, ฯลฯ).</li>
                  <li>• เลือก action ได้จากจอเดียว เช่น เปลี่ยนรถ, แจ้งห้าง, แจ้ง CS.</li>
                </ul>
              </div>

              <!-- CS / Customer Service -->
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
                <div
                  class="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 w-fit"
                >
                  <span>📞</span>
                  <span>CS / Customer Service</span>
                </div>
                <p class="font-semibold text-slate-900">
                  จาก “ถามไปทั่วทั้งบริษัท” → “ตอบจากจอเดียวพร้อม context”
                </p>
                <ul class="mt-1 space-y-1.5 text-slate-700">
                  <li>• พิมพ์เลข order/ใบส่งของ → เห็นสถานะ + สาเหตุ + ETA.</li>
                  <li>• ได้ script แนะนำจาก AI ว่าควรสื่อสารกับลูกค้าอย่างไร.</li>
                  <li>• log ทุกคำตอบไว้เพื่อใช้ทบทวน SLA และคุณภาพบริการ.</li>
                </ul>
              </div>

              <!-- Management -->
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
                <div
                  class="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 w-fit"
                >
                  <span>📊</span>
                  <span>Management</span>
                </div>
                <p class="font-semibold text-slate-900">
                  จาก “เห็น KPI ปลายเดือน” → “เห็นคอขวดจริง ๆ ของระบบรายวัน”
                </p>
                <ul class="mt-1 space-y-1.5 text-slate-700">
                  <li>• Dashboard ดู delay rate แยกตามเส้นทาง/ฮับ/ลูกค้า.</li>
                  <li>• เห็น trend ว่าปัญหาอยู่ที่ process ไหนของทั้ง chain.</li>
                  <li>• ใช้ข้อมูลจริงไปคุยเรื่อง resource, SLA และสัญญากับลูกค้าได้.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Mini Screen Mockup – Control Tower Console -->
          <div class="mt-10">
            <h3 class="text-sm md:text-base font-semibold mb-3">
              ตัวอย่างหน้าจอ “Control Tower Console” – ทีม Operation เปิดมาจะเห็นอะไร?
            </h3>
            <p class="text-xs md:text-sm text-slate-600 mb-4">
              ภาพนี้ไม่ได้เน้น UI สวยที่สุด แต่เน้นให้ทีมเห็นว่าตอนใช้งานจริง Agent จะช่วยจัดลำดับ
              และเล่าเรื่อง shipment แต่ละตัวให้ฟังอย่างไร.
            </p>

            <div class="rounded-2xl border border-slate-200 bg-slate-900 text-slate-50 p-5 md:p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="space-y-1">
                  <p class="text-[11px] uppercase tracking-[0.18em] text-sky-300">
                    Control Tower • Today
                  </p>
                  <h4 class="text-sm md:text-base font-semibold">
                    Shipment ที่ต้องดูแลเป็นพิเศษในช่วงเช้า (06:00–12:00)
                  </h4>
                </div>
                <div class="flex items-center gap-2 text-[10px]">
                  <span class="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">
                    Logged in as: ops.th8@company.com
                  </span>
                </div>
              </div>

              <div class="grid md:grid-cols-[1.1fr,1.3fr] gap-4">
                <!-- Left: list -->
                <div class="bg-slate-800 rounded-xl border border-slate-700 p-3 flex flex-col gap-3">
                  <!-- Filters -->
                  <div class="flex flex-wrap items-center gap-2 text-[11px]">
                    <span class="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
                      Morning window
                    </span>
                    <span class="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
                      Customer: Modern Trade
                    </span>
                    <span class="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
                      Status: At risk / Delayed
                    </span>
                  </div>

                  <!-- List header -->
                  <div
                    class="flex justify-between items-center text-[11px] text-slate-400 border-b border-slate-700 pb-1"
                  >
                    <span>Shipment</span>
                    <span>สถานะ</span>
                  </div>

                  <!-- Rows -->
                  <div class="space-y-1.5 text-[11px]">
                    <div
                      class="flex items-center justify-between px-2 py-1.5 rounded-lg bg-slate-900/70 border border-amber-500/60"
                    >
                      <div>
                        <p class="font-medium text-slate-50">
                          SHP-2025-00045 · Big C บางนา
                        </p>
                        <p class="text-slate-400 text-[10px]">
                          Route: BKK-03 · ต้องถึงก่อน 09:00 · ETA ปัจจุบัน 09:20
                        </p>
                      </div>
                      <span
                        class="text-[10px] px-2 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/40"
                      >
                        ⚠️ At risk SLA
                      </span>
                    </div>

                    <div
                      class="flex items-center justify-between px-2 py-1.5 rounded-lg bg-slate-900/70 border border-rose-500/60"
                    >
                      <div>
                        <p class="font-medium text-slate-50">
                          SHP-2025-00046 · Lotus ศรีนครินทร์
                        </p>
                        <p class="text-slate-400 text-[10px]">
                          รถหยุดที่จุดพัก 35 นาที · ยังไม่ออกจากฮับสำโรง
                        </p>
                      </div>
                      <span
                        class="text-[10px] px-2 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/40"
                      >
                        ❌ Delay now
                      </span>
                    </div>

                    <div
                      class="flex items-center justify-between px-2 py-1.5 rounded-lg bg-slate-900/70 border border-emerald-500/60"
                    >
                      <div>
                        <p class="font-medium text-slate-50">
                          SHP-2025-00047 · Shopee / Zone กรุงเทพฯ
                        </p>
                        <p class="text-slate-400 text-[10px]">
                          Multi-drop · ETA อยู่ในช่วง window · ไม่มี alert ผิดปกติ
                        </p>
                      </div>
                      <span
                        class="text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                      >
                        ✅ On track
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
                        SHP-2025-00045 · Big C บางนา
                      </p>
                    </div>
                    <div class="inline-flex items-center gap-2">
                      <span
                        class="px-2 py-1 rounded-full bg-amber-500/10 text-amber-200 border border-amber-500/40 text-[10px]"
                      >
                        ⚠️ Risk of SLA breach
                      </span>
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-3">
                    <!-- Left detail -->
                    <div class="space-y-2">
                      <p class="text-slate-400 text-[10px] uppercase tracking-[0.18em]">
                        Timeline &amp; Status
                      </p>
                      <div class="bg-slate-900 rounded-lg border border-slate-700 p-3 space-y-1.5">
                        <p>Planned arrival: <b>09:00</b></p>
                        <p>Current ETA: <span class="text-amber-300 font-semibold">09:20</span></p>
                        <p>Last GPS ping: 08:15 · บนถนนบางนา–ตราด กม.10</p>
                        <p class="text-slate-400 text-[10px]">
                          AI comment: จาก pattern การจราจรวันนี้ มีโอกาสดีเลย์ 15–25 นาทีถ้าไม่เปลี่ยนเส้นทาง.
                        </p>
                      </div>

                      <div class="bg-slate-900 rounded-lg border border-slate-700 p-3 space-y-1.5">
                        <p>Route: <b>BKK-03</b></p>
                        <p>Hub: สำโรง</p>
                        <p>Truck: TH-3A-204 • Driver: สมชาย ขับ</p>
                      </div>
                    </div>

                    <!-- Right actions -->
                    <div class="space-y-2">
                      <p class="text-slate-400 text-[10px] uppercase tracking-[0.18em]">
                        Action &amp; Communication
                      </p>
                      <div class="bg-slate-900 rounded-lg border border-slate-700 p-3 space-y-2">
                        <p class="text-[11px] text-slate-200">
                          AI Suggestion:
                        </p>
                        <ul class="list-disc pl-4 space-y-1 text-[11px] text-slate-300">
                          <li>
                            แจ้ง Big C บางนาว่า shipment เสี่ยงถึงช้ากว่า plan ~20 นาที พร้อมเหตุผลเรื่อง traffic.
                          </li>
                          <li>
                            พิจารณาเปลี่ยน sequence drop order ของเส้นทางนี้รอบต่อไป ลดความเสี่ยงดีเลย์.
                          </li>
                          <li>log เคสนี้เป็น “SLA at risk” เพื่อใช้ในการปรับปรุง route design.</li>
                        </ul>
                      </div>

                      <div class="flex flex-wrap gap-2 text-[11px]">
                        <button
                          class="px-3 py-1.5 rounded-full bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400 transition"
                        >
                          ✅ Mark as handled
                        </button>
                        <button
                          class="px-3 py-1.5 rounded-full bg-sky-500/20 text-sky-200 border border-sky-500/40 hover:bg-sky-500/30 transition"
                        >
                          📤 แจ้งลูกค้า / สาขา
                        </button>
                        <button
                          class="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 transition"
                        >
                          📝 Add note / assign ให้ hub
                        </button>
                      </div>

                      <p class="text-[10px] text-slate-400">
                        ทุก action ถูกเก็บ log พร้อม user, เวลา และเหตุผล เพื่อใช้ audit, review SLA
                        และวิเคราะห์คอขวดในอนาคต.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p class="mt-4 text-[10px] text-slate-400">
                หมายเหตุ: หน้านี้เป็นเพียง mockup เพื่อให้เห็น journey และองค์ประกอบสำคัญ
                การ implement จริงสามารถปรับให้เข้ากับ TMS/WMS/ERP และ policy ของแต่ละองค์กรในไทยได้.
              </p>
            </div>
          </div>

          <!-- Footer / Credit -->
          <div
            class="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-slate-500"
          >
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-sky-500"></div>
              <span>TH8.AI • AI Agent &amp; Automation for Thai Enterprises</span>
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
