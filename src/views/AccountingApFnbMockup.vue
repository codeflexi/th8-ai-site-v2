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
          <RouterLink to="/solutions/accounting-ap-fnb" class="hover:text-slate-700">
            AI สำหรับทีมบัญชี F&amp;B (Story)
          </RouterLink>
          <span>/</span>
          <span class="text-slate-700">Mockup UI</span>
        </nav>

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-[0.18em] text-rose-500 font-semibold">
              UI Mockup • Accounting AP &amp; Reconcile Agent
            </p>
            <h1 class="text-2xl md:text-3xl font-semibold text-slate-900">
              Mockup: จากกระดาษสู่ระบบ AI สำหรับทีมบัญชี F&amp;B
            </h1>
            <p class="text-sm md:text-base text-slate-600 max-w-2xl">
              หน้านี้ออกแบบเป็น <b>Infographic + Screen Mockup</b> สำหรับนำเสนอให้ทีมบัญชี, Finance
              และ Management เห็นภาพ workflow ใหม่แบบครบจบในหน้าเดียว.
            </p>
          </div>
          <RouterLink
            to="/solutions/accounting-ap-fnb"
            class="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition"
          >
            ← ย้อนกลับไปอ่าน Story / Use case
          </RouterLink>
        </div>
      </section>

      <!-- Canvas Wrapper (Infographic) -->
      <section class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div class="absolute -top-16 -right-20 w-72 h-72 rounded-full bg-rose-500 opacity-10"></div>
        <div class="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-slate-900 opacity-5"></div>

        <div class="relative p-6 md:p-10">
          <!-- Header -->
          <div class="flex items-center justify-between gap-4 mb-6">
            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="px-2.5 py-1 rounded-full text-white text-xs tracking-wide bg-rose-500">
                  TH8.AI
                </div>
                <span class="text-xs text-slate-500">Infographic • Ready to Present / Print</span>
              </div>
              <h2 class="text-2xl md:text-3xl font-semibold leading-tight text-slate-900">
                จาก
                <span class="underline decoration-rose-500 decoration-4 underline-offset-4">
                  กระดาษ
                </span>
                สู่ระบบ:
                AI ช่วยทีมบัญชี F&amp;B ให้ปิดงบเร็วขึ้นแบบใช้ได้จริง
              </h2>
              <p class="mt-3 text-sm md:text-base text-slate-600 max-w-3xl">
                บริบทองค์กรเครื่องดื่ม (AB Food, Siam Winery เป็นต้น) โฟกัสงานรับวางบิล → ตั้งหนี้/Match PO →
                จ่ายเงิน → Fixed Asset → นับสต๊อก โดยสื่อสารผ่าน
                <b>Microsoft Teams</b> และจัดเก็บบน <b>SharePoint</b>.
              </p>
            </div>
          </div>

          <div class="mt-3 flex flex-wrap items-center gap-2">
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              🟣 MS Teams
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              🔵 SharePoint
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              ⚙️ ERP (SAP/Oracle)
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              🤖 AI Document &amp; Reconcile Agent
            </span>
          </div>

          <!-- Before vs After -->
          <div class="grid md:grid-cols-2 gap-6 mt-8">
            <!-- BEFORE -->
            <div class="rounded-2xl border border-slate-200 bg-white">
              <div class="flex items-center justify-between p-5 border-b border-slate-200">
                <h3 class="text-base md:text-lg font-semibold">ก่อนใช้ AI (Painpoints)</h3>
                <span
                  class="text-[11px] font-medium px-2.5 py-1 rounded-full border border-rose-200 text-rose-700 bg-rose-50"
                >
                  ช้า • ซ้ำ • เสี่ยงผิดพลาด
                </span>
              </div>
              <ol class="p-5 space-y-4 text-xs md:text-sm">
                <li class="flex gap-3">
                  <div class="mt-0.5">📄</div>
                  <div>
                    <b>รับเอกสารช้า</b> — ใบวางบิล/ใบรับของมาเป็นกระดาษหรือ PDF กระจัดกระจาย (อีเมล/Teams) →
                    คนต้องตามเอกสารจริง
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">🧾</div>
                  <div>
                    <b>ตั้งหนี้แบบ manual</b> — คีย์จากกระดาษเข้า ERP, เสียเวลาตรวจยอด/วันที่/เลข PO ทีละใบ
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">🧩</div>
                  <div>
                    <b>Match PO ช้า</b> — เปิด SharePoint หาไฟล์หลายเวอร์ชัน, ข้อมูลไม่ตรง batch, ต้องโทรถามหลายแผนก
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">🏦</div>
                  <div>
                    <b>ขั้นตอนจ่ายเงินล่าช้า</b> — อนุมัติหลายชั้น, export ไฟล์ธนาคารซ้ำ, รายงานสถานะไม่ real-time
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">🏭</div>
                  <div>
                    <b>Fixed Asset &amp; นับสต๊อก</b> — ค่าเสื่อมทำใน Excel, นับสต๊อกปลายเดือนส่งรูปใน Teams →
                    บัญชีต้อง reconcile เอง
                  </div>
                </li>
              </ol>
              <div class="px-5 pb-5">
                <div
                  class="rounded-lg bg-rose-50 border border-rose-200 p-4 text-xs md:text-sm text-rose-800"
                >
                  <b>ผลลัพธ์:</b> ปิดงบช้า, คนทำงานดึก, ความผิดพลาดสะสมจากการพิมพ์เองและไฟล์ซ้ำ
                </div>
              </div>
            </div>

            <!-- AFTER -->
            <div class="rounded-2xl border border-slate-200 bg-white">
              <div class="flex items-center justify-between p-5 border-b border-slate-200">
                <h3 class="text-base md:text-lg font-semibold">หลังใช้ AI (Workflow ใหม่)</h3>
                <span
                  class="text-[11px] font-medium px-2.5 py-1 rounded-full border border-emerald-200 text-emerald-700 bg-emerald-50"
                >
                  เร็ว • โปร่งใส • ตรวจสอบได้
                </span>
              </div>
              <ol class="p-5 space-y-4 text-xs md:text-sm">
                <li class="flex gap-3">
                  <div class="mt-0.5">🤖</div>
                  <div>
                    <b>AI อ่านเอกสารจาก Teams</b> — ดึงข้อมูลจาก PDF/ภาพ → เข้าสู่
                    <u>SharePoint List</u> พร้อมสถานะใบต่อใบ
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">🔗</div>
                  <div>
                    <b>Auto-Match กับ ERP</b> — ตรวจเลข PO/ยอด/วันที่ อัตโนมัติ; ถ้าไม่ตรง &gt;3%
                    แจ้งเตือนใน Teams Channel ที่เกี่ยวข้อง
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">✅</div>
                  <div>
                    <b>อนุมัติไว</b> — Card แจ้งเตือนใน Teams พร้อมปุ่ม Approve/Reject; log เก็บที่ SharePoint
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">🏦</div>
                  <div>
                    <b>จ่ายเงินอัตโนมัติบางส่วน</b> — สร้าง Payment proposal จาก ERP, แยก routine vs exception
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">📊</div>
                  <div>
                    <b>Fixed Asset &amp; สต๊อกแบบอัตโนมัติ</b> — คำนวณค่าเสื่อมตาม policy; Reconcile สต๊อกปลายเดือนและแจ้งส่วนต่างทันที
                  </div>
                </li>
              </ol>
              <div class="px-5 pb-5">
                <div
                  class="rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-xs md:text-sm text-emerald-800"
                >
                  <b>ผลลัพธ์:</b> ลดเวลาปิดงบ 30–50%, เอกสารถูกต้องขึ้น, ทุกฝ่ายเห็นสถานะเดียวกันแบบ real-time
                </div>
              </div>
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
              <p>ดึงใบวางบิล/ใบรับของจาก Teams/อีเมล → เก็บไฟล์ที่ SharePoint</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">🔎</div>
              <b>2) OCR &amp; Parse</b>
              <p>AI อ่าน PDF/ภาพ → แยกเลขที่บิล, PO, วันที่, ยอดเงิน</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">🔗</div>
              <b>3) Match</b>
              <p>เทียบกับ ERP (SAP/Oracle) อัตโนมัติ; ตั้ง flag เมื่อผิดปกติ</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">📣</div>
              <b>4) Notify</b>
              <p>แจ้งเตือน &amp; อนุมัติใน Teams; เก็บ Log ที่ SharePoint</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">📈</div>
              <b>5) Analytics</b>
              <p>Dashboard สถานะตั้งหนี้–จ่ายเงิน/FA/Stock แบบ real-time</p>
            </div>
          </div>

          <!-- Metrics & Checklist -->
          <div class="mt-8 grid md:grid-cols-2 gap-6">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 class="text-sm md:text-base font-semibold mb-3">
                ตัวชี้วัดที่ควรติดตาม (หลังปรับใช้)
              </h3>
              <ul class="text-xs md:text-sm space-y-2 text-slate-700">
                <li>• ระยะเวลาจาก “รับเอกสาร” → “ตั้งหนี้เสร็จ” (เป้าลด &gt;40%)</li>
                <li>• อัตราเอกสารที่ต้องแก้คืน (Exception Rate)</li>
                <li>• เวลาปิดงบสิ้นเดือน (ลดเหลือ 2–3 วันสำหรับ module ที่ทำอัตโนมัติ)</li>
                <li>• ความครบถ้วนของเอกสาร (SharePoint completeness)</li>
                <li>• เวลาที่ใช้ในงาน manual vs งานวิเคราะห์</li>
              </ul>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 class="text-sm md:text-base font-semibold mb-3">
                เริ่มเล็ก ๆ แต่เห็นผลจริง (Checklist 5 ข้อ)
              </h3>
              <ol class="text-xs md:text-sm space-y-2 text-slate-700">
                <li>1) เลือก Supplier 10 รายที่ส่งบิลถี่ที่สุดมาทดลองก่อน</li>
                <li>2) ตั้ง Teams Channel เดียวสำหรับใบวางบิล &amp; ใบรับของ</li>
                <li>3) สร้าง SharePoint List สำหรับเก็บสถานะใบต่อใบ</li>
                <li>4) ตั้งกติกา Match PO (เช่นเบี่ยงเบน ≤3% ผ่านอัตโนมัติ)</li>
                <li>5) วัดผล 30 วัน แล้วค่อยขยายไป FA/Stock</li>
              </ol>
            </div>
          </div>

          <!-- NEW BLOCK 1: Role-based view -->
          <div class="mt-8">
            <h3 class="text-sm md:text-base font-semibold mb-3">
              ใน 1 วัน AI Agent ตัวนี้ช่วย “ใคร” ทำอะไรบ้าง?
            </h3>
            <p class="text-xs md:text-sm text-slate-600 mb-4">
              มองภาพแบบ role-based เพื่อให้ทีมบัญชี, จัดซื้อ, คลัง และ IT เข้าใจตรงกันว่า AI เข้ามาเสริมตรงไหน
              ไม่ได้มาแทนใคร.
            </p>
            <div class="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
              <!-- AP / Accounting -->
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
                <div class="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 w-fit">
                  <span>📘</span>
                  <span>AP / Accounting</span>
                </div>
                <p class="font-semibold text-slate-900">
                  จาก “นั่งตามเอกสาร” → “นั่งเคลียร์เฉพาะเคสที่มีปัญหา”
                </p>
                <ul class="mt-1 space-y-1.5 text-slate-700">
                  <li>• เห็น inbox เอกสารที่ AI อ่านแล้ว แบ่งเป็น OK / Exception</li>
                  <li>• คลิกเข้าไปดูใบที่มีปัญหา พร้อม context ครบ (PO, ใบรับของ, invoice)</li>
                  <li>• กดส่งต่อให้คนที่เกี่ยวข้อง หรืออนุมัติได้จากหน้าจอเดียว</li>
                </ul>
              </div>

              <!-- Purchasing / Warehouse -->
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
                <div class="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 w-fit">
                  <span>📦</span>
                  <span>Purchasing / Warehouse</span>
                </div>
                <p class="font-semibold text-slate-900">
                  จาก “โดนโทรตามเอกสาร” → “เห็นแจ้งเตือนชัดว่าต้องเคลียร์อะไร”
                </p>
                <ul class="mt-1 space-y-1.5 text-slate-700">
                  <li>• ได้รับ Teams notification เมื่อ PO / GR ไม่ตรงยอด invoice</li>
                  <li>• เห็นว่าใบไหนรอแก้ไข รอเอกสารจริง หรือรอ confirm ปริมาณรับของ</li>
                  <li>• อัปโหลดรูป / ใบรับของเพิ่มได้จาก Teams แล้วระบบเก็บ log ให้</li>
                </ul>
              </div>

              <!-- IT / Finance leadership -->
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
                <div class="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 w-fit">
                  <span>🖥️</span>
                  <span>IT / Finance Leadership</span>
                </div>
                <p class="font-semibold text-slate-900">
                  จาก “ไม่รู้ว่าคอขวดอยู่ตรงไหน” → “เห็น health ของ process ชัดเจน”
                </p>
                <ul class="mt-1 space-y-1.5 text-slate-700">
                  <li>• Dashboard ดู exception rate, lead time ตั้งหนี้, aging ของเอกสาร</li>
                  <li>• เห็นว่าคอขวดอยู่ที่แผนกไหน / ประเภทเอกสารไหน</li>
                  <li>• ใช้ข้อมูลจริงไปคุยกับ management เรื่อง resource / policy ได้</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- NEW BLOCK 2: Mini Screen Mockup – AP Workbench -->
          <div class="mt-10">
            <h3 class="text-sm md:text-base font-semibold mb-3">
              ตัวอย่างหน้าจอ “AP Workbench” – ทีมบัญชีเปิดมาจะเห็นอะไร?
            </h3>
            <p class="text-xs md:text-sm text-slate-600 mb-4">
              ภาพนี้ไม่ได้เน้นความสวยงามของ UI แต่เน้นให้ทีมบัญชีเห็นว่า “เวลาใช้งานจริง” เขาจะเจอหน้าจอประมาณไหน
              และ AI ทำงานเบื้องหลังให้แล้วแค่ไหน.
            </p>

            <div class="rounded-2xl border border-slate-200 bg-slate-900 text-slate-50 p-5 md:p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="space-y-1">
                  <p class="text-[11px] uppercase tracking-[0.18em] text-emerald-300">
                    AP Workbench • Today
                  </p>
                  <h4 class="text-sm md:text-base font-semibold">
                    Inbox เอกสารวันนี้ (AI อ่านแล้ว + แบ่งกลุ่มให้แล้ว)
                  </h4>
                </div>
                <div class="flex items-center gap-2 text-[10px]">
                  <span class="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">
                    Logged in as: ap.th8@company.com
                  </span>
                </div>
              </div>

              <div class="grid md:grid-cols-[1.1fr,1.3fr] gap-4">
                <!-- Left: list -->
                <div class="bg-slate-800 rounded-xl border border-slate-700 p-3 flex flex-col gap-3">
                  <!-- Filters -->
                  <div class="flex flex-wrap items-center gap-2 text-[11px]">
                    <span class="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
                      Today
                    </span>
                    <span class="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
                      Supplier: All
                    </span>
                    <span class="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
                      Status: Exception only
                    </span>
                  </div>

                  <!-- List header -->
                  <div class="flex justify-between items-center text-[11px] text-slate-400 border-b border-slate-700 pb-1">
                    <span>เอกสาร</span>
                    <span>สถานะ</span>
                  </div>

                  <!-- Rows -->
                  <div class="space-y-1.5 text-[11px]">
                    <div class="flex items-center justify-between px-2 py-1.5 rounded-lg bg-slate-900/70 border border-emerald-500/60">
                      <div>
                        <p class="font-medium text-slate-50">
                          INV-2025-00123 · Supplier A
                        </p>
                        <p class="text-slate-400 text-[10px]">
                          PO-45001234 · ยอด 152,340.00 · Batch: 2025-05-10
                        </p>
                      </div>
                      <span class="text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">
                        ✅ Matched
                      </span>
                    </div>

                    <div class="flex items-center justify-between px-2 py-1.5 rounded-lg bg-slate-900/70 border border-amber-500/60">
                      <div>
                        <p class="font-medium text-slate-50">
                          INV-2025-00124 · Supplier B
                        </p>
                        <p class="text-slate-400 text-[10px]">
                          PO-45001240 · ยอด 89,500.35 · GR 89,500.00
                        </p>
                      </div>
                      <span class="text-[10px] px-2 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/40">
                        ⚠️ ต่าง 0.35 บาท
                      </span>
                    </div>

                    <div class="flex items-center justify-between px-2 py-1.5 rounded-lg bg-slate-900/70 border border-rose-500/60">
                      <div>
                        <p class="font-medium text-slate-50">
                          INV-2025-00125 · Supplier C
                        </p>
                        <p class="text-slate-400 text-[10px]">
                          PO not found ใน ERP · รอจัดซื้อ confirm
                        </p>
                      </div>
                      <span class="text-[10px] px-2 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/40">
                        ❌ PO missing
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Right: detail -->
                <div class="bg-slate-800 rounded-xl border border-slate-700 p-4 flex flex-col gap-3 text-[11px] md:text-[12px]">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-slate-400 text-[10px]">Selected:</p>
                      <p class="font-semibold text-slate-50">
                        INV-2025-00124 · Supplier B
                      </p>
                    </div>
                    <div class="inline-flex items-center gap-2">
                      <span class="px-2 py-1 rounded-full bg-amber-500/10 text-amber-200 border border-amber-500/40 text-[10px]">
                        ⚠️ Exception – Amount mismatch
                      </span>
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-3">
                    <!-- Left detail -->
                    <div class="space-y-2">
                      <p class="text-slate-400 text-[10px] uppercase tracking-[0.18em]">
                        Invoice &amp; GR
                      </p>
                      <div class="bg-slate-900 rounded-lg border border-slate-700 p-3 space-y-1.5">
                        <p>Invoice amount: <b>89,500.35</b></p>
                        <p>GR amount: <b>89,500.00</b></p>
                        <p>Difference: <span class="text-amber-300 font-semibold">0.35</span></p>
                        <p class="text-slate-400 text-[10px]">
                          AI comment: อาจเป็นผลจากการปัดเศษหรือค่า rounding.
                        </p>
                      </div>

                      <div class="bg-slate-900 rounded-lg border border-slate-700 p-3 space-y-1.5">
                        <p>PO: <b>45001240</b></p>
                        <p>GR date: 10 May 2025</p>
                        <p>Invoice date: 11 May 2025</p>
                      </div>
                    </div>

                    <!-- Right actions -->
                    <div class="space-y-2">
                      <p class="text-slate-400 text-[10px] uppercase tracking-[0.18em]">
                        Action &amp; Routing
                      </p>
                      <div class="bg-slate-900 rounded-lg border border-slate-700 p-3 space-y-2">
                        <p class="text-[11px] text-slate-200">
                          AI Suggestion:
                        </p>
                        <ul class="list-disc pl-4 space-y-1 text-[11px] text-slate-300">
                          <li>ส่งแจ้งเตือนให้ Purchasing ตรวจสอบยอด rounding</li>
                          <li>ถ้าได้รับการยืนยัน → auto update adjustment ใน ERP</li>
                          <li>log เหตุผลไว้ใน remark สำหรับรอบ audit</li>
                        </ul>
                      </div>

                      <div class="flex flex-wrap gap-2 text-[11px]">
                        <button class="px-3 py-1.5 rounded-full bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400 transition">
                          ✅ Approve &amp; Post
                        </button>
                        <button class="px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-200 border border-amber-500/40 hover:bg-amber-500/30 transition">
                          📤 ส่งให้ Purchasing
                        </button>
                        <button class="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 transition">
                          📝 Add note / tag คน
                        </button>
                      </div>

                      <p class="text-[10px] text-slate-400">
                        ทุก action จะถูกเก็บ log ไว้ใน SharePoint / Teams เพื่อใช้ยืนยันกับ auditor และดูย้อนหลังได้.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p class="mt-4 text-[10px] text-slate-400">
                หมายเหตุ: หน้านี้เป็นเพียง mockup เพื่อให้เห็นภาพ journey และองค์ประกอบสำคัญ
                ในการ implement จริงสามารถปรับให้เข้ากับ ERP / Policy ของแต่ละองค์กรได้.
              </p>
            </div>
          </div>

          <!-- Footer / Credit -->
          <div class="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-slate-500">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-rose-500"></div>
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
</script>
