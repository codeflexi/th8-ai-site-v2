<template>
  <div class="bg-slate-50 text-slate-900 min-h-screen">
    <!-- TOP BAR / SIMPLE HEADER -->
    <header class="border-b border-slate-200 bg-white">
      <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div class="space-y-0.5">
          <p class="text-[11px] uppercase tracking-[0.18em] text-red-500 font-semibold">
            TH8.AI · Core Values &amp; Business Model Canvas
          </p>
          <h1 class="text-lg md:text-xl font-semibold text-slate-900">
            Agentic System สำหรับองค์กรไทย · จาก “Core Value” → “Business Model ที่โตได้จริง”
          </h1>
        </div>
        <div class="hidden sm:flex">
          <RouterLink
            :to="{ name: 'home' }"
            class="text-xs text-slate-600 hover:text-red-600 underline underline-offset-2"
          >
            ← กลับหน้าแรก th8.ai
          </RouterLink>
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 py-8 space-y-10">
      <!-- INTRO -->
      <section class="space-y-3">
        <p class="text-sm text-slate-600 max-w-3xl">
          หน้านี้สรุป “ตัวตนของ TH8.AI” ผ่าน
          <span class="font-semibold">4 Core Pillars</span>
          และถอดออกมาเป็น
          <span class="font-semibold">Business Model Canvas</span>
          ที่ใช้คุยกับทั้งลูกค้า นักลงทุน และเพื่อนร่วมทีม
          ว่าเรากำลังสร้าง
          <span class="font-semibold">Agentic Infrastructure สำหรับองค์กรไทย</span>
          ไม่ใช่แค่ทำโปรเจกต์ AI รายเคสให้จบไป
        </p>
      </section>

      <!-- SECTION 1: 4 CORE PILLARS -->
      <section class="bg-white border border-slate-200 rounded-2xl p-6 md:p-7 space-y-5">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <p class="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
              Core Values · THAILAND = Think Human • Act Integrated • Learn Fast • Nurture by Data
            </p>
            <h2 class="text-xl md:text-2xl font-semibold text-slate-900 mt-1">
              TH8.AI – 4 Pillars ที่บอกว่าเรา “คิดและทำ” ต่างจากบริษัท AI ทั่วไป
            </h2>
          </div>
          <div class="text-xs text-slate-500">
            ใช้เป็นสไลด์เปิดตัว / Investor one-pager / หน้าแนะนำทีมได้ทันที
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4 md:gap-5 text-sm">
          <!-- Pillar 1 -->
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <div class="flex items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <div
                  class="h-10 w-10 rounded-xl border border-red-200 bg-white flex items-center justify-center"
                >
                  <!-- user icon -->
                  <svg viewBox="0 0 24 24" class="h-5 w-5 text-red-500">
                    <circle
                      cx="12"
                      cy="8"
                      r="3.4"
                      class="fill-none stroke-current"
                      stroke-width="1.6"
                    />
                    <path
                      d="M4 19c0-3.7 3-6.7 8-6.7s8 3 8 6.7"
                      class="fill-none stroke-current"
                      stroke-width="1.6"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-[11px] uppercase tracking-wide text-slate-500">Pillar 1</p>
                  <p class="font-semibold text-slate-900">T + H — Think Human First</p>
                </div>
              </div>
              <span class="text-xs font-bold text-red-500">TH</span>
            </div>
            <p class="text-slate-700">
              เริ่มจากความเข้าใจคนก่อนเทคโนโลยี — ออกแบบ Agentic System ที่ “ช่วยคนทำงาน”
              ไม่ใช่แทนที่คน
            </p>
            <ul class="mt-2 space-y-1 text-slate-700">
              <li>• Human-Centered Design รอบ Workflow จริงขององค์กรไทย</li>
              <li>• ภาษา/บริบทไทย ลดแรงต้านการใช้ระบบใหม่</li>
            </ul>
          </div>

          <!-- Pillar 2 -->
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <div class="flex items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <div
                  class="h-10 w-10 rounded-xl border border-red-200 bg-white flex items-center justify-center"
                >
                  <!-- integration icon -->
                  <svg viewBox="0 0 24 24" class="h-5 w-5 text-red-500">
                    <path
                      d="M9 3v6m6-6v6M3 9h6m6 0h6"
                      class="fill-none stroke-current"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                    <rect
                      x="3"
                      y="15"
                      width="6"
                      height="6"
                      rx="1.5"
                      class="fill-current opacity-40"
                    />
                    <rect
                      x="15"
                      y="3"
                      width="6"
                      height="6"
                      rx="1.5"
                      class="fill-current opacity-70"
                    />
                    <path
                      d="M8 16l8-8"
                      class="fill-none stroke-current"
                      stroke-width="1.4"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-[11px] uppercase tracking-wide text-slate-500">Pillar 2</p>
                  <p class="font-semibold text-slate-900">A + I — Act with Integration</p>
                </div>
              </div>
              <span class="text-xs font-bold text-red-500">AI</span>
            </div>
            <p class="text-slate-700">
              แปลง Insight ให้เป็นการกระทำจริง — Agent ทำงานใน ERP, WMS, CRM, POS, LINE OA
              ไม่ใช่แค่ใน Chat Box
            </p>
            <ul class="mt-2 space-y-1 text-slate-700">
              <li>• จาก Insight → Process → Profit</li>
              <li>• ไม่หยุดแค่เดโม เชื่อมระบบจริงก่อนโชว์เสมอ</li>
            </ul>
          </div>

          <!-- Pillar 3 -->
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <div class="flex items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <div
                  class="h-10 w-10 rounded-xl border border-red-200 bg-white flex items-center justify-center"
                >
                  <!-- lightning icon -->
                  <svg viewBox="0 0 24 24" class="h-5 w-5 text-red-500">
                    <path d="M13 2L4 14h7l-1 8 10-12h-7l1-8z" class="fill-current" />
                  </svg>
                </div>
                <div>
                  <p class="text-[11px] uppercase tracking-wide text-slate-500">Pillar 3</p>
                  <p class="font-semibold text-slate-900">L + A — Learn &amp; Adapt Fast</p>
                </div>
              </div>
              <span class="text-xs font-bold text-red-500">LA</span>
            </div>
            <p class="text-slate-700">
              ปรับไว เรียนรู้ไว เติบโตไปพร้อมลูกค้า — ใช้ข้อมูลจริง ปรับ Agent อย่างต่อเนื่อง
              ไม่ใช่ทำแล้วทิ้ง
            </p>
            <ul class="mt-2 space-y-1 text-slate-700">
              <li>• วงจร Think → Act → Evaluate → Scale</li>
              <li>• Agile Delivery เห็นผลเป็นสัปดาห์ ไม่ใช่เป็นไตรมาส</li>
            </ul>
          </div>

          <!-- Pillar 4 -->
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <div class="flex items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <div
                  class="h-10 w-10 rounded-xl border border-red-200 bg-white flex items-center justify-center"
                >
                  <!-- chart icon -->
                  <svg viewBox="0 0 24 24" class="h-5 w-5 text-red-500">
                    <path
                      d="M3 3v18h18"
                      class="fill-none stroke-current"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 15l3 3 7-7"
                      class="fill-none stroke-current"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <rect
                      x="6"
                      y="10"
                      width="3"
                      height="8"
                      class="fill-current opacity-30"
                    />
                    <rect
                      x="11"
                      y="7"
                      width="3"
                      height="11"
                      class="fill-current opacity-60"
                    />
                    <rect
                      x="16"
                      y="12"
                      width="3"
                      height="6"
                      class="fill-current opacity-90"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-[11px] uppercase tracking-wide text-slate-500">Pillar 4</p>
                  <p class="font-semibold text-slate-900">N + D — Nurture with Data</p>
                </div>
              </div>
              <span class="text-xs font-bold text-red-500">ND</span>
            </div>
            <p class="text-slate-700">
              วัดผลลัพธ์จริง และเติบโตระยะยาว — ทุกโครงการต้องมีตัวเลขยืนยัน ไม่ใช่แค่ความรู้สึก
            </p>
            <ul class="mt-2 space-y-1 text-slate-700">
              <li>• KPI ชัด (Revenue, Cost, Efficiency)</li>
              <li>• Monitor / Retrain / Evaluate เป็นวัฏจักร</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECTION 2: BUSINESS MODEL CANVAS -->
      <section class="space-y-4" id="business-model-canvas">
        <div class="space-y-1">
          <p class="text-[11px] uppercase tracking-[0.18em] text-red-500 font-semibold">
            TH8.AI · Business Model Canvas
          </p>
          <h2 class="text-xl md:text-2xl font-semibold text-slate-900">
            แบบจำลองธุรกิจของ TH8.AI สำหรับสร้างรายได้ระยะยาว (ไม่ใช่แค่โปรเจกต์สั้น ๆ)
          </h2>
          <p class="text-sm text-slate-600 max-w-3xl">
            ผูก Core Values เข้ากับธุรกิจจริง ผ่านโมเดล Implementation + Subscription + Playbook &amp; IP
            เพื่อให้ TH8.AI โตได้แบบ Productized Service / SaaS ในหลายอุตสาหกรรม
          </p>
        </div>

        <!-- GRID BMC -->
        <div class="space-y-4 text-[13px]">
          <!-- Row 1: 5 columns -->
          <div class="grid md:grid-cols-5 gap-3">
            <!-- Key Partners -->
            <div class="bg-white border border-slate-200 rounded-xl p-3 md:p-4 space-y-2">
              <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Key Partners
              </p>
              <ul class="space-y-1 text-slate-700">
                <li>• Cloud / LLM / Vector DB providers</li>
                <li>• ERP / WMS / CRM Vendors</li>
                <li>• System Integrators &amp; Consultancies</li>
                <li>• Local tech houses &amp; Industry partners</li>
                <li>• Data / BI vendors ที่ต้องการ Agentic layer</li>
              </ul>
            </div>

            <!-- Key Activities -->
            <div class="bg-white border border-slate-200 rounded-xl p-3 md:p-4 space-y-2">
              <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Key Activities
              </p>
              <ul class="space-y-1 text-slate-700">
                <li>• ออกแบบ Agentic Blueprint &amp; Architecture</li>
                <li>• พัฒนา TH8 Agentic Integration Stack™</li>
                <li>• พัฒนา TH8 Workflow Sync Engine™</li>
                <li>• ติดตั้ง Agent + Workflow + Dashboard ให้แตะระบบจริง</li>
                <li>• Monitoring, Guardrail, Tuning ใน Production</li>
                <li>• สร้าง &amp; อัปเดต Industry Playbook / Templates</li>
              </ul>
            </div>

            <!-- Key Resources -->
            <div class="bg-white border border-slate-200 rounded-xl p-3 md:p-4 space-y-2">
              <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Key Resources
              </p>
              <ul class="space-y-1 text-slate-700">
                <li>• ทีม Core: AI / Software / Data / Architect / UX</li>
                <li>• TH8 Agentic Integration Stack™</li>
                <li>• TH8 3-Layer Agent Architecture™</li>
                <li>• TH8 Knowledge Copilot™ Framework</li>
                <li>• TH8 Workflow Sync Engine™</li>
                <li>• Industry Playbooks (FP&amp;A, Logistics, F&amp;B, MFG, BFSI)</li>
                <li>• Brand &amp; Content: เว็บไซต์ th8.ai, Case studies</li>
              </ul>
            </div>

            <!-- Value Propositions -->
            <div
              class="bg-white border border-slate-200 rounded-xl p-3 md:p-4 space-y-2 md:col-span-2"
            >
              <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Value Propositions
              </p>
              <p class="font-semibold text-slate-900">
                TH8.AI = Agentic Infrastructure สำหรับองค์กรไทย
                ที่ต่อเข้ากับระบบเดิมและสร้างผลลัพธ์วัดได้จริง
              </p>
              <ul class="space-y-1 text-slate-700 mt-1">
                <li>• ลดงาน Routine 30–50%, ลด Error 20–40%</li>
                <li>• เพิ่ม Cycle speed และ Visibility ของการทำงานทั้งทีมหน้า–หลังบ้าน</li>
                <li>• เชื่อม ERP / WMS / CRM / DWH / LINE OA ด้วย Agentic Layer</li>
                <li>• IP ที่ลอกยาก: Stack, Architecture, Knowledge Engine, Playbook</li>
                <li>• Productized Service &amp; SaaS-like model ขายซ้ำได้ในหลายอุตสาหกรรม</li>
                <li>• ออกแบบจาก Use case จริงในองค์กรไทย ไม่ใช่แค่ PoC</li>
              </ul>
            </div>
          </div>

          <!-- Row 2: Customer Relationships + Channels -->
          <div class="grid md:grid-cols-2 gap-3">
            <!-- Customer Relationships -->
            <div class="bg-white border border-slate-200 rounded-xl p-3 md:p-4 space-y-2">
              <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Customer Relationships
              </p>
              <ul class="space-y-1 text-slate-700">
                <li>• Consultative / Co-creation กับผู้บริหาร + ทีม IT/Data</li>
                <li>• เริ่มจาก Pilot 1–2 Use case ก่อน Scale ทั่วองค์กร</li>
                <li>• Playbook ชัดเจน: Discovery → Prototype → Pilot → Roll-out</li>
                <li>• Long-term Partnership: Retainer + Continuous Improvement</li>
                <li>• Governance / Training / Change Management ให้ทีมใช้งานได้จริง</li>
              </ul>
            </div>

            <!-- Channels -->
            <div class="bg-white border border-slate-200 rounded-xl p-3 md:p-4 space-y-2">
              <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Channels
              </p>
              <ul class="space-y-1 text-slate-700">
                <li>• เว็บไซต์ th8.ai + Landing page แยกตามอุตสาหกรรม</li>
                <li>• LinkedIn / Facebook / Content series (EP, Case study, How-to)</li>
                <li>• Workshop / Discovery session กับผู้บริหาร</li>
                <li>• Network ของผู้ก่อตั้งในธนาคาร, Logistics, F&amp;B, โรงงาน, Solar</li>
                <li>• พาร์ตเนอร์ ERP / WMS / Consulting ที่มีฐานลูกค้าอยู่แล้ว</li>
              </ul>
            </div>
          </div>

          <!-- Row 3: Customer Segments -->
          <div class="bg-white border border-slate-200 rounded-xl p-3 md:p-4">
            <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Customer Segments
            </p>
            <div class="grid md:grid-cols-3 gap-3 mt-2">
              <div class="space-y-1 text-slate-700">
                <p class="font-semibold text-slate-900 mb-1">Enterprise / Upper SME</p>
                <ul class="space-y-1">
                  <li>• องค์กรที่มี ERP/WMS/CRM/DWH อยู่แล้ว</li>
                  <li>• ธุรกิจหลายสาขา / หลายระบบ / Data ซับซ้อน</li>
                  <li>• ต้องการลดงานซ้ำ และ Error ข้ามระบบ</li>
                </ul>
              </div>
              <div class="space-y-1 text-slate-700">
                <p class="font-semibold text-slate-900 mb-1">อุตสาหกรรมหลัก</p>
                <ul class="space-y-1">
                  <li>• FMCG / Food &amp; Beverage</li>
                  <li>• Manufacturing &amp; Warehouse / Logistics</li>
                  <li>• Banking / Financial Services / Leasing / NBFI</li>
                </ul>
              </div>
              <div class="space-y-1 text-slate-700">
                <p class="font-semibold text-slate-900 mb-1">ทีมที่ใช้งานจริง</p>
                <ul class="space-y-1">
                  <li>• Finance &amp; FP&amp;A / Accounting</li>
                  <li>• Operations, Inventory, Warehouse</li>
                  <li>• Logistics &amp; Delivery</li>
                  <li>• IT / Data / Process Owner</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Row 4: Cost Structure + Revenue Streams -->
          <div class="grid md:grid-cols-2 gap-3">
            <!-- Cost Structure -->
            <div class="bg-white border border-slate-200 rounded-xl p-3 md:p-4 space-y-2">
              <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Cost Structure
              </p>
              <ul class="space-y-1 text-slate-700">
                <li>• ทีม Core (Engineer, Data, Architect, UX, Consultant)</li>
                <li>• Cloud / LLM / Vector DB / Monitoring / Logging</li>
                <li>• Development &amp; Maintenance ของ TH8 Agentic Stack</li>
                <li>• Sales &amp; Marketing (Website, Content, Meetup, Travel)</li>
                <li>• Legal / Security / Compliance โดยเฉพาะงาน Finance / Banking</li>
                <li>• Training &amp; Enablement ให้ทีมลูกค้า</li>
              </ul>
            </div>

            <!-- Revenue Streams -->
            <div class="bg-white border border-slate-200 rounded-xl p-3 md:p-4 space-y-2">
              <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Revenue Streams
              </p>
              <ul class="space-y-1 text-slate-700">
                <li>• ค่าติดตั้ง &amp; Integration (Initial Implementation Fee)</li>
                <li>• Subscription รายเดือน (ต่อ Agent / Workflow / Volume)</li>
                <li>• Retainer สำหรับ Monitoring, Tuning, Feature expansion</li>
                <li>• Advisory &amp; Architecture Consulting (Agentic Roadmap, AI Strategy)</li>
                <li>• Industry Packages (FP&amp;A Suite, Logistics Control Tower, MFG OEE, BFSI Agent Suite)</li>
                <li>• Training &amp; Certification Program สำหรับทีมภายใน</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Investor Narrative -->
        <div class="bg-slate-900 text-slate-50 rounded-2xl p-5 md:p-6 space-y-2 mt-2 text-center">
          <p class="text-[11px] uppercase tracking-[0.2em] text-emerald-300 font-semibold">
            Investor Narrative
          </p>
          <p class="text-sm md:text-base max-w-3xl mx-auto">
            <span class="font-semibold">TH8.AI</span>
            ไม่ได้เป็นแค่บริษัทที่ “ทำโปรเจกต์ AI ให้ลูกค้า”
            แต่กำลังสร้าง
            <span class="font-semibold">Agentic Infrastructure สำหรับองค์กรไทย</span>
            ผ่าน IP 4 ชุดหลัก (Stack, Architecture, Knowledge, Workflow) ที่ต่อยอดได้ในหลายอุตสาหกรรม
            ทำให้ธุรกิจนี้มีศักยภาพจะเติบโตแบบ Productized Service / SaaS และสร้างมูลค่าในระยะยาว
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
