<template>
  <div class="bg-slate-50 min-h-screen">
    <div class="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <!-- INTRO -->
      <section class="space-y-4">
        <h1 class="text-3xl font-bold text-th8-text">
          Solutions &amp; Implementation Tracks
        </h1>
        <p class="text-sm text-th8-text/80 max-w-2xl">
          TH8.AI ออกแบบโซลูชันรอบ “กระบวนการทำงานจริง” ขององค์กรไทย
          โดยแบ่งการทำงานออกเป็น 3 Tracks หลัก — Agent, Workflow และ Knowledge
          เพื่อให้คุณเลือกเริ่มจากจุดที่ Impact สูงสุดได้ง่ายขึ้น
        </p>
      </section>

      <!-- 3 TRACKS OVERVIEW -->
      <section class="space-y-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 class="text-xl font-semibold text-th8-text">
              3 Tracks ของ TH8.AI Solutions
            </h2>
            <p class="text-sm text-th8-text/70 max-w-xl">
              แต่ละ Track จะมี Methodology และผลลัพธ์ที่ชัดเจนต่างกันออกไป
              เพื่อให้เหมาะกับโจทย์ของทีม Finance, Operations และ Logistics ในองค์กรคุณ
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6 text-sm">
          <!-- Track 1: Agent -->
          <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-3">
            <p class="text-[11px] uppercase tracking-wide text-slate-500">
              Track 1 · AI Agent Suite
            </p>
            <h3 class="font-semibold text-th8-text">Agent สำหรับงานตัดสินใจและวิเคราะห์</h3>
            <p class="text-[13px] text-th8-text/80">
              เหมาะสำหรับงานที่ต้อง “คิด–วิเคราะห์–ตัดสินใจ” จากข้อมูลหลายแหล่ง
              เช่น FP&amp;A, Inventory, Route Planning, Document QC
            </p>
            <div class="pt-2 space-y-1.5">
              <p class="text-[11px] font-semibold text-slate-500">Methodology ใน Track นี้</p>
              <ul class="text-[12px] text-slate-700 space-y-1">
                <li>• ถอด Decision map: input, เงื่อนไข, exception</li>
                <li>• Map แหล่งข้อมูล (ERP / WMS / Sheet / DB)</li>
                <li>• ออกแบบ Agent (Prompt, Tools, Planner, Guardrail)</li>
                <li>• Prototype กับข้อมูลจริง แล้วปรับจาก log</li>
              </ul>
            </div>
            <div class="pt-2 space-y-1">
              <p class="text-[11px] font-semibold text-slate-500">ตัวอย่าง Agent</p>
              <ul class="text-[12px] text-slate-700 space-y-1">
                <li>• FP&amp;A Copilot Agent</li>
                <li>• Inventory &amp; Replenishment Agent</li>
                <li>• Route Planner &amp; Dispatch Agent</li>
                <li>• Document QC &amp; Reconciliation Agent</li>
              </ul>
            </div>
          </div>

          <!-- Track 2: Workflow -->
          <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-3">
            <p class="text-[11px] uppercase tracking-wide text-slate-500">
              Track 2 · AI Workflow Automation
            </p>
            <h3 class="font-semibold text-th8-text">ทำให้ข้อมูล “ไหลเอง” ข้ามระบบ</h3>
            <p class="text-[13px] text-th8-text/80">
              เหมาะสำหรับงานที่เป็นลำดับขั้นตอน เช่น Order → Approve → Update Stock → แจ้งลูกค้า
              ที่วันนี้ทีมต้องคอยคีย์มือหรือไล่เช็กเอง
            </p>
            <div class="pt-2 space-y-1.5">
              <p class="text-[11px] font-semibold text-slate-500">Methodology ใน Track นี้</p>
              <ul class="text-[12px] text-slate-700 space-y-1">
                <li>• วาด Workflow จริง: ใครทำอะไร ขั้นตอนไหน</li>
                <li>• กำหนด Trigger / Event ที่เริ่มกระบวนการ</li>
                <li>• ให้ Agent เลือก action ถัดไป (call API, update, notify)</li>
                <li>• วาง Human-in-loop &amp; Approval เคสพิเศษ</li>
              </ul>
            </div>
            <div class="pt-2 space-y-1">
              <p class="text-[11px] font-semibold text-slate-500">ตัวอย่าง Integration</p>
              <ul class="text-[12px] text-slate-700 space-y-1">
                <li>• เชื่อม ERP, WMS, CRM, Data warehouse</li>
                <li>• เชื่อม Google Sheet, Email, LINE OA</li>
                <li>• Trigger จากเอกสาร / Event / Webhook</li>
              </ul>
            </div>
          </div>

          <!-- Track 3: Knowledge -->
          <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-3">
            <p class="text-[11px] uppercase tracking-wide text-slate-500">
              Track 3 · AI Knowledge &amp; Analytics
            </p>
            <h3 class="font-semibold text-th8-text">เปลี่ยนเอกสารและ Tacit เป็นระบบ AI</h3>
            <p class="text-[13px] text-th8-text/80">
              เหมาะสำหรับองค์กรที่มี SOP, Policy, Contract, Manual และ “ความรู้ในหัวคน”
              ที่อยากให้ AI นำไปใช้ตอบคำถามและตัดสินใจได้จริง
            </p>
            <div class="pt-2 space-y-1.5">
              <p class="text-[11px] font-semibold text-slate-500">Methodology ใน Track นี้</p>
              <ul class="text-[12px] text-slate-700 space-y-1">
                <li>• จัดระเบียบเอกสาร &amp; Source of truth</li>
                <li>• สร้าง Document &amp; RAG pipeline (chunk, embed, index)</li>
                <li>• สร้าง Exception Library &amp; Rule-based guardrail</li>
                <li>• ทำ Dashboard วัด Time, Error, Cost จากการใช้ AI</li>
              </ul>
            </div>
            <div class="pt-2 space-y-1">
              <p class="text-[11px] font-semibold text-slate-500">ตัวอย่างโซลูชัน</p>
              <ul class="text-[12px] text-slate-700 space-y-1">
                <li>• AI Knowledge Base &amp; Document Copilot</li>
                <li>• SOP / Policy / Contract Q&amp;A</li>
                <li>• Operational Insight &amp; Exception Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- INFOGRAPHIC: 1 PROCESS, 3 TRACKS -->
      <section class="space-y-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 class="text-xl font-semibold text-th8-text">
              จาก Pain point เดียว → เลือก Track ที่เหมาะกับทีมคุณ
            </h2>
            <p class="text-sm text-th8-text/70 max-w-xl">
              ส่วนใหญ่องค์กรจะมี Pain point ด้านเดียวกัน เช่น ปิดงบช้า, สต็อกมั่ว, ขนส่งวุ่น
              แต่ “จุดเริ่มต้น” ที่เหมาะอาจต่างกันได้ เราใช้ Framework นี้ช่วยเลือก Track ที่เหมาะสม
            </p>
          </div>
        </div>

        <!-- Infographic Card -->
        <div
          class="rounded-3xl border border-th8-border bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100 p-6 lg:p-8 shadow-xl"
        >
          <!-- Header -->
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-6">
            <div>
              <p class="text-[11px] uppercase tracking-wide text-red-300">TH8 · Playbook View</p>
              <h3 class="text-lg font-semibold text-white">
                1 Pain point → 3 Implementation Tracks
              </h3>
            </div>
            <div class="flex flex-wrap gap-2 text-[11px]">
              <span class="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">
                Finance / FP&amp;A
              </span>
              <span class="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">
                Operations / Inventory
              </span>
              <span class="px-2 py-1 rounded-full bg-slate-800 border border-slate-700">
                Logistics / Warehouse
              </span>
            </div>
          </div>

          <!-- Grid: Phase vs Track -->
          <div class="space-y-4 text-[12px]">
            <!-- Header row -->
            <div class="grid grid-cols-[1.1fr_1fr_1fr_1fr] gap-3 items-center text-slate-300">
              <div class="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Phase
              </div>
              <div class="text-center text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Track 1<br />Agent
              </div>
              <div class="text-center text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Track 2<br />Workflow
              </div>
              <div class="text-center text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Track 3<br />Knowledge
              </div>
            </div>

            <!-- Row: Discover -->
            <div class="grid grid-cols-[1.1fr_1fr_1fr_1fr] gap-3 items-stretch">
              <div class="rounded-xl bg-slate-900/70 border border-slate-700 p-3">
                <p class="text-[11px] font-semibold text-slate-200 mb-1">Phase 1 · Discover</p>
                <p class="text-slate-400">
                  คุย Pain point, KPI, ทีมที่เกี่ยวข้อง และระบบที่แตะอยู่ในปัจจุบัน
                </p>
              </div>

              <div class="rounded-xl bg-slate-900/40 border border-slate-700/60 p-3">
                <p class="font-semibold text-slate-100 mb-1">Decision map</p>
                <p class="text-slate-400">
                  แยกว่าใครตัดสินใจอะไร ใช้ข้อมูลไหนอยู่แล้ว
                </p>
              </div>

              <div class="rounded-xl bg-slate-900/40 border border-slate-700/60 p-3">
                <p class="font-semibold text-slate-100 mb-1">Process map</p>
                <p class="text-slate-400">
                  วาดลำดับงานจริง และจุดที่อยากให้ระบบช่วย
                </p>
              </div>

              <div class="rounded-xl bg-slate-900/40 border border-slate-700/60 p-3">
                <p class="font-semibold text-slate-100 mb-1">Knowledge map</p>
                <p class="text-slate-400">
                  รวบรวมเอกสาร, แหล่งความรู้ และ tacit knowledge
                </p>
              </div>
            </div>

            <!-- Row: Design -->
            <div class="grid grid-cols-[1.1fr_1fr_1fr_1fr] gap-3 items-stretch">
              <div class="rounded-xl bg-slate-900/70 border border-slate-700 p-3">
                <p class="text-[11px] font-semibold text-slate-200 mb-1">Phase 2 · Design</p>
                <p class="text-slate-400">
                  ออกแบบให้ชัดว่าจะให้ AI “ช่วยตรงไหน” และ “ไม่ช่วยตรงไหน”
                </p>
              </div>

              <div class="rounded-xl bg-slate-900/40 border border-slate-700/60 p-3">
                <p class="font-semibold text-slate-100 mb-1">Agent spec</p>
                <p class="text-slate-400">
                  กำหนดหน้าที่ Agent, Tools, Guardrail, Memory
                </p>
              </div>

              <div class="rounded-xl bg-slate-900/40 border border-slate-700/60 p-3">
                <p class="font-semibold text-slate-100 mb-1">Workflow spec</p>
                <p class="text-slate-400">
                  Trigger, action, human-in-loop, SLA
                </p>
              </div>

              <div class="rounded-xl bg-slate-900/40 border border-slate-700/60 p-3">
                <p class="font-semibold text-slate-100 mb-1">RAG &amp; data spec</p>
                <p class="text-slate-400">
                  Document pipeline, index, สิทธิ์การเข้าถึง
                </p>
              </div>
            </div>

            <!-- Row: Build & Pilot -->
            <div class="grid grid-cols-[1.1fr_1fr_1fr_1fr] gap-3 items-stretch">
              <div class="rounded-xl bg-slate-900/70 border border-slate-700 p-3">
                <p class="text-[11px] font-semibold text-slate-200 mb-1">Phase 3 · Build &amp; Pilot</p>
                <p class="text-slate-400">
                  สร้าง Prototype ที่แตะข้อมูลจริง ใช้กับทีมเล็ก ๆ แล้วเก็บ log ปรับแต่ง
                </p>
              </div>

              <div class="rounded-xl bg-slate-900/40 border border-slate-700/60 p-3">
                <p class="font-semibold text-slate-100 mb-1">Agent pilot</p>
                <p class="text-slate-400">
                  ให้ Agent ช่วยทำงานวิเคราะห์/ตัดสินใจจริง
                </p>
              </div>

              <div class="rounded-xl bg-slate-900/40 border border-slate-700/60 p-3">
                <p class="font-semibold text-slate-100 mb-1">Workflow pilot</p>
                <p class="text-slate-400">
                  ให้ workflow รันจริงแบบมี human approve
                </p>
              </div>

              <div class="rounded-xl bg-slate-900/40 border border-slate-700/60 p-3">
                <p class="font-semibold text-slate-100 mb-1">Knowledge pilot</p>
                <p class="text-slate-400">
                  ให้ทีมถาม–ตอบกับเอกสารจริง แล้วดู gap ของ knowledge
                </p>
              </div>
            </div>

            <!-- Row: Scale -->
            <div class="grid grid-cols-[1.1fr_1fr_1fr_1fr] gap-3 items-stretch">
              <div class="rounded-xl bg-slate-900/70 border border-slate-700 p-3">
                <p class="text-[11px] font-semibold text-slate-200 mb-1">Phase 4 · Scale</p>
                <p class="text-slate-400">
                  ขยายจาก 1 ทีม → หลายทีม พร้อม governance, training, monitoring
                </p>
              </div>

              <div class="rounded-xl bg-slate-900/40 border border-slate-700/60 p-3">
                <p class="font-semibold text-slate-100 mb-1">Agent scaling</p>
                <p class="text-slate-400">
                  ขยายจาก 1 use case → หลาย product/brand
                </p>
              </div>

              <div class="rounded-xl bg-slate-900/40 border border-slate-700/60 p-3">
                <p class="font-semibold text-slate-100 mb-1">Workflow scaling</p>
                <p class="text-slate-400">
                  ขยาย workflow ไปหลายสาขา / region
                </p>
              </div>

              <div class="rounded-xl bg-slate-900/40 border border-slate-700/60 p-3">
                <p class="font-semibold text-slate-100 mb-1">Knowledge scaling</p>
                <p class="text-slate-400">
                  เพิ่ม coverage เอกสาร / ทีม / ภาษา
                </p>
              </div>
            </div>
          </div>

          <!-- Footer text -->
          <p class="mt-4 text-[11px] text-slate-400 text-center">
            Framework นี้จะถูกใช้จริงเวลา Workshop กับทีม Business + IT เพื่อช่วยเลือก Track และ Phase ที่ควรเริ่มก่อน
          </p>
        </div>
      </section>

      <!-- CTA -->
      <section
        class="border-t border-th8-border pt-8 mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h3 class="text-base font-semibold text-th8-text">
            ยังไม่แน่ใจว่าควรเริ่มจาก Track ไหน?
          </h3>
          <p class="text-sm text-th8-text/80">
            ส่งบริบทองค์กรและ Pain point หลักมาให้เรา ทีม TH8.AI จะช่วยแนะนำ Track และ Phase ที่เหมาะสำหรับเริ่มต้น
          </p>
        </div>
        <RouterLink
          :to="{ name: 'contact' }"
          class="inline-flex items-center rounded-full bg-th8-primary px-5 py-2 text-xs font-semibold text-white hover:bg-th8-accent"
        >
          คุยกับทีม TH8.AI
        </RouterLink>
      </section>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
