<!-- src/views/CustomerComplaintRetentionMockup.vue -->
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
          <RouterLink to="/solutions/customer-complaint-retention" class="hover:text-slate-700">
            Customer Complaint &amp; Retention (Story)
          </RouterLink>
          <span>/</span>
          <span class="text-slate-700">Mockup UI</span>
        </nav>

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-[0.18em] text-rose-500 font-semibold">
              UI Mockup • Complaint &amp; Retention Agent
            </p>
            <h1 class="text-2xl md:text-3xl font-semibold text-slate-900">
              Mockup: Complaint &amp; Retention Console สำหรับองค์กรบริการไทย
            </h1>
            <p class="text-sm md:text-base text-slate-600 max-w-2xl">
              หน้านี้ออกแบบเป็น <b>Infographic + Screen Mockup</b> สำหรับนำเสนอให้ทีม CX, Contact Center,
              Digital และ Management เห็นภาพว่า Agent จะช่วย “รวมเคส – ให้คะแนนความเสี่ยง – เสนอ action”
              ได้อย่างไร.
            </p>
          </div>
          <RouterLink
            to="/solutions/customer-complaint-retention"
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
                  เคสคอมเพลนกองเต็มระบบ
                </span>
                สู่ Console ที่ช่วยป้องกันการเสียลูกค้าด้วยข้อมูลจริง
              </h2>
              <p class="mt-3 text-sm md:text-base text-slate-600 max-w-3xl">
                บริบทองค์กรบริการไทย (ธนาคาร, Telco, ประกัน)
                ที่มี complaint เข้ามาทาง <b>Call, Chat, LINE OA, Facebook, Email, App, สาขา</b>
                แต่ข้อมูลกระจายอยู่หลายระบบ.
              </p>
            </div>
          </div>

          <div class="mt-3 flex flex-wrap items-center gap-2">
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              📞 Call center
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              💬 Chat / LINE OA
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              📱 Mobile App
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              📧 Email / Web form
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              🏦 Branch / Shop
            </span>
            <span
              class="inline-flex items-center gap-1 text-xs bg-slate-100 border border-slate-200 rounded-full px-2.5 py-1"
            >
              🤖 Complaint &amp; Retention Agent
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
                  เคสเยอะ • ข้อมูลกระจาย • Retention reactive
                </span>
              </div>
              <ol class="p-5 space-y-4 text-xs md:text-sm">
                <li class="flex gap-3">
                  <div class="mt-0.5">📂</div>
                  <div>
                    <b>เคสอยู่หลายระบบ</b> — Ticket system, CRM, social tool, excel ของทีมหลังบ้าน
                    → ยากที่จะเห็นภาพรวมต่อหนึ่งลูกค้า.
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">🗣️</div>
                  <div>
                    <b>เสียงลูกค้าอยู่ใน note/voice</b> — ใช้แค่ reason code/ tag
                    แต่ไม่ค่อยมีเวลาอ่าน/ฟังรายละเอียด – ทำให้พลาด context สำคัญ.
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">⏱️</div>
                  <div>
                    <b>รู้ว่าลูกค้าจะ churn ตอนสายไปแล้ว</b> — ส่วนใหญ่เห็นตอนลูกคอยื่นเรื่องยกเลิกจริง ๆ
                    หรือเขียนด่าบนโซเชียล.
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
                  รวมเคส • ให้คะแนนความเสี่ยง • แนะนำ action
                </span>
              </div>
              <ol class="p-5 space-y-4 text-xs md:text-sm">
                <li class="flex gap-3">
                  <div class="mt-0.5">🧠</div>
                  <div>
                    <b>Customer 360 for Complaint</b> — ผูก complaint จากทุกช่องทางเข้ากับ customer ID เดียวกัน
                    → เห็น timeline ปัญหาของลูกค้าคนนั้น.
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">🧪</div>
                  <div>
                    <b>AI วิเคราะห์ intent + emotion + risk</b> — จาก text/voice
                    → ให้คะแนน risk of churn ต่อเคสและต่อหนึ่งลูกค้า.
                  </div>
                </li>
                <li class="flex gap-3">
                  <div class="mt-0.5">🎯</div>
                  <div>
                    <b>Next-best-action สำหรับ retention</b> — สำหรับลูกค้าแต่ละราย AI เสนอวิธีคุย/ข้อเสนอ/ช่องทาง
                    ที่เหมาะสมที่สุด.
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
              <p>ดึง complaint จากทุกช่องทาง (call, chat, app, social, email, branch) เข้า data pipeline.</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">🔗</div>
              <b>2) Match</b>
              <p>ผูกข้อมูลกับ customer ID, product, segment, channel เพื่อสร้าง customer complaint journey.</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">🗣️</div>
              <b>3) Understand</b>
              <p>ใช้ LLM + speech-to-text วิเคราะห์ intent, topic, emotion, risk ต่อเคส.</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">🎯</div>
              <b>4) Prioritise</b>
              <p>จัดลำดับความสำคัญของเคส/ลูกค้า ตาม value, risk of churn, และเรื่องที่ร้องเรียน.</p>
            </div>
            <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
              <div class="text-xl">📈</div>
              <b>5) Act &amp; Learn</b>
              <p>เสนอ action, log ผลลัพธ์ และปรับปรุง model/กติกาจากผลจริง.</p>
            </div>
          </div>

          <!-- Role-based view -->
          <div class="mt-8">
            <h3 class="text-sm md:text-base font-semibold mb-3">
              ใน 1 วัน AI Agent ตัวนี้ช่วย “ใคร” ทำอะไรบ้าง?
            </h3>
            <p class="text-xs md:text-sm text-slate-600 mb-4">
              มองแบบ role-based ให้ทุกทีมเห็นว่า Agent เสริมงาน ไม่ได้มาแทน.
            </p>
            <div class="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
              <!-- Contact Center -->
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
                <div
                  class="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 w-fit"
                >
                  <span>📞</span>
                  <span>Contact Center / Agent</span>
                </div>
                <p class="font-semibold text-slate-900">
                  จาก “รับเคสไปทีละสาย” → “เห็นภาพรวมของลูกค้าคนนี้ก่อนเริ่มคุย”
                </p>
                <ul class="mt-1 space-y-1.5 text-slate-700">
                  <li>• เห็น complaint ก่อนหน้า, product ที่ใช้, ช่องทางที่เขาติดต่อบ่อย.</li>
                  <li>• รู้ level ของ risk &amp; emotion ก่อนเริ่มคุย.</li>
                  <li>• มี script แนะนำของ AI ช่วยตั้งต้นบทสนทนา.</li>
                </ul>
              </div>

              <!-- Retention / Special care -->
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
                <div
                  class="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 w-fit"
                >
                  <span>🎯</span>
                  <span>Retention / Special Care</span>
                </div>
                <p class="font-semibold text-slate-900">
                  จาก “รอเคสแรง ๆ เข้ามา” → “รู้ก่อนว่าควรโทรหาลูกค้าคนไหนก่อน”
                </p>
                <ul class="mt-1 space-y-1.5 text-slate-700">
                  <li>• เห็น list ลูกค้าที่ risk สูง แยกตาม product/segment.</li>
                  <li>• รู้เหตุผลหลักที่ทำให้เขาจะย้าย/ยกเลิก.</li>
                  <li>• ได้ next-best-action พร้อมสคริปต์และช่วงเวลาที่ควรติดต่อ.</li>
                </ul>
              </div>

              <!-- CX / Management -->
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex flex-col gap-2">
                <div
                  class="inline-flex items-center gap-2 text-[11px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 w-fit"
                >
                  <span>📊</span>
                  <span>CX / Management</span>
                </div>
                <p class="font-semibold text-slate-900">
                  จาก “ดูแต่ CSAT/NPS” → “เห็นว่าลูกค้ากลุ่มไหนกำลังเจออะไร”
                </p>
                <ul class="mt-1 space-y-1.5 text-slate-700">
                  <li>• ดู pattern complaint ตาม product/segment/channel.</li>
                  <li>• รู้ว่า policy/feature ไหนสร้างปัญหามากที่สุด.</li>
                  <li>• ใช้ข้อมูลจริงตัดสินใจด้าน product, UX, และ service design.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Mini Screen Mockup – Complaint & Retention Console -->
          <div class="mt-10">
            <h3 class="text-sm md:text-base font-semibold mb-3">
              ตัวอย่างหน้าจอ “Complaint &amp; Retention Console” – เวลาเปิดมาจะเห็นอะไร?
            </h3>
            <p class="text-xs md:text-sm text-slate-600 mb-4">
              ภาพนี้เน้น journey และข้อมูลสำคัญที่ทีมต้องใช้ ไม่ใช่แค่ UI สวย ๆ.
            </p>

            <div class="rounded-2xl border border-slate-200 bg-slate-900 text-slate-50 p-5 md:p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="space-y-1">
                  <p class="text-[11px] uppercase tracking-[0.18em] text-rose-300">
                    Complaint &amp; Retention • Today
                  </p>
                  <h4 class="text-sm md:text-base font-semibold">
                    ลูกค้าที่มีความเสี่ยง churn สูงจาก complaint ในช่วง 7 วันล่าสุด
                  </h4>
                </div>
                <div class="flex items-center gap-2 text-[10px]">
                  <span class="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">
                    Logged in as: retention.team@company.com
                  </span>
                </div>
              </div>

              <div class="grid md:grid-cols-[1.15fr,1.25fr] gap-4">
                <!-- Left: list -->
                <div class="bg-slate-800 rounded-xl border border-slate-700 p-3 flex flex-col gap-3">
                  <!-- Filters -->
                  <div class="flex flex-wrap items-center gap-2 text-[11px]">
                    <span class="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
                      Last 7 days
                    </span>
                    <span class="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
                      Product: Credit Card
                    </span>
                    <span class="px-2 py-1 rounded-full bg-slate-900 border border-slate-700">
                      Risk: High
                    </span>
                  </div>

                  <!-- List header -->
                  <div
                    class="flex justify-between items-center text-[11px] text-slate-400 border-b border-slate-700 pb-1"
                  >
                    <span>Customer</span>
                    <span>Risk</span>
                  </div>

                  <!-- Rows -->
                  <div class="space-y-1.5 text-[11px]">
                    <div
                      class="flex items-center justify-between px-2 py-1.5 rounded-lg bg-slate-900/70 border border-rose-500/60"
                    >
                      <div>
                        <p class="font-medium text-slate-50">
                          CUST-99821 · คุณสุภาวดี
                        </p>
                        <p class="text-slate-400 text-[10px]">
                          Credit Card · 3 complaints ใน 30 วัน · ช่องทาง: Call &amp; LINE OA
                        </p>
                      </div>
                      <span
                        class="text-[10px] px-2 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/40"
                      >
                        🔥 Very High
                      </span>
                    </div>

                    <div
                      class="flex items-center justify-between px-2 py-1.5 rounded-lg bg-slate-900/70 border border-amber-500/60"
                    >
                      <div>
                        <p class="font-medium text-slate-50">
                          CUST-87542 · คุณอนันต์
                        </p>
                        <p class="text-slate-400 text-[10px]">
                          Mobile Banking · 2 complaints · social + app review
                        </p>
                      </div>
                      <span
                        class="text-[10px] px-2 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/40"
                      >
                        ⚠️ High
                      </span>
                    </div>

                    <div
                      class="flex items-center justify-between px-2 py-1.5 rounded-lg bg-slate-900/70 border border-emerald-500/60"
                    >
                      <div>
                        <p class="font-medium text-slate-50">
                          CUST-76410 · คุณศิริพร
                        </p>
                        <p class="text-slate-400 text-[10px]">
                          Insurance · 1 complaint · call center · issue resolved
                        </p>
                      </div>
                      <span
                        class="text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                      >
                        ✅ Medium
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
                        CUST-99821 · คุณสุภาวดี · Credit Card
                      </p>
                    </div>
                    <div class="inline-flex items-center gap-2">
                      <span
                        class="px-2 py-1 rounded-full bg-rose-500/10 text-rose-200 border border-rose-500/40 text-[10px]"
                      >
                        🔥 Very High risk of churn
                      </span>
                    </div>
                  </div>

                  <div class="grid md:grid-cols-2 gap-3">
                    <!-- Left detail -->
                    <div class="space-y-2">
                      <p class="text-slate-400 text-[10px] uppercase tracking-[0.18em]">
                        Complaint Journey
                      </p>
                      <div class="bg-slate-900 rounded-lg border border-slate-700 p-3 space-y-1.5">
                        <p>Product: <b>Credit Card – Platinum</b></p>
                        <p>Tenure: 6 ปี · Monthly spend ~ 40,000 บาท</p>
                        <p>Complaints ล่าสุด:</p>
                        <ul class="list-disc pl-4 text-[10px] space-y-1 text-slate-300">
                          <li>15 พ.ค. – Call center: ยอดตัดซ้ำ – ต้องรอคืนเงิน 30 วัน</li>
                          <li>28 พ.ค. – LINE OA: โปรโมชั่นผ่อน 0% ใช้ไม่ได้ตามที่โฆษณา</li>
                          <li>2 มิ.ย. – App chat: ปิดบัตรสำรองจ่ายแต่ยังโดนเรียกเก็บค่าธรรมเนียม</li>
                        </ul>
                      </div>

                      <div class="bg-slate-900 rounded-lg border border-slate-700 p-3 space-y-1.5">
                        <p>Emotion trend: จาก “ไม่เข้าใจ” → “เริ่มหมดความเชื่อใจ”</p>
                        <p class="text-slate-400 text-[10px]">
                          AI comment: มีการใช้คำว่า “เสียความรู้สึก”, “คิดจะย้ายไปใช้เจ้าอื่น”
                          ใน note/เสียงสนทนาล่าสุด.
                        </p>
                      </div>
                    </div>

                    <!-- Right actions -->
                    <div class="space-y-2">
                      <p class="text-slate-400 text-[10px] uppercase tracking-[0.18em]">
                        AI Insight &amp; Next Best Action
                      </p>
                      <div class="bg-slate-900 rounded-lg border border-slate-700 p-3 space-y-2">
                        <p class="text-[11px] text-slate-200">
                          Root cause (จากมุมมองลูกค้า):
                        </p>
                        <ul class="list-disc pl-4 space-y-1 text-[11px] text-slate-300">
                          <li>รู้สึกว่าระบบธนาคาร “ไม่แฟร์” กับกรณีตัดเงินผิด/คืนเงินช้า.</li>
                          <li>สับสนเรื่องเงื่อนไขโปรโมชั่น – รู้สึกว่า “ถูกหลอกให้ใช้”.</li>
                          <li>การสื่อสารจากเจ้าหน้าที่ไม่สม่ำเสมอ – ต้องโทรตามเองหลายครั้ง.</li>
                        </ul>
                      </div>

                      <div class="bg-slate-900 rounded-lg border border-slate-700 p-3 space-y-2">
                        <p class="text-[11px] text-slate-200">
                          Suggestion สำหรับ retention call:
                        </p>
                        <ul class="list-disc pl-4 space-y-1 text-[11px] text-slate-300">
                          <li>โทรด้วยน้ำเสียง &amp; script เน้น “ยอมรับปัญหา + เคารพเวลาและความรู้สึก”.</li>
                          <li>เสนอการยกเว้นค่าธรรมเนียมปีนี้ + ตรวจย้อนหลังเคสผิด billing ทั้งหมด.</li>
                          <li>ยืนยันเป็นลายลักษณ์อักษรผ่าน email/LINE หลังจากโทร.</li>
                        </ul>
                      </div>

                      <div class="flex flex-wrap gap-2 text-[11px]">
                        <button
                          class="px-3 py-1.5 rounded-full bg-emerald-500 text-slate-900 font-medium hover:bg-emerald-400 transition"
                        >
                          📞 Assign ให้ Senior Retention
                        </button>
                        <button
                          class="px-3 py-1.5 rounded-full bg-rose-500/20 text-rose-200 border border-rose-500/40 hover:bg-rose-500/30 transition"
                        >
                          📝 เปิด case ยกเว้นค่าธรรมเนียม
                        </button>
                        <button
                          class="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 transition"
                        >
                          📤 ส่ง summary ให้ RM / branch
                        </button>
                      </div>

                      <p class="text-[10px] text-slate-400">
                        ทุก action จะถูก log เพื่อนำไปวิเคราะห์ผลลัพธ์ (churn / stay / product move)
                        เพื่อปรับปรุง policy และ strategy ในอนาคต.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p class="mt-4 text-[10px] text-slate-400">
                หมายเหตุ: Mockup นี้ใช้เพื่อสื่อสารแนวคิด Complaint &amp; Retention Agent
                การ implement จริงสามารถเชื่อมเข้ากับ CRM, Contact center platform และ data warehouse ขององค์กรได้.
              </p>
            </div>
          </div>

          <!-- Footer / Credit -->
          <div
            class="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-slate-500"
          >
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-rose-500"></div>
              <span>TH8.AI • AI Agent &amp; Automation for Thai Service Enterprises</span>
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
