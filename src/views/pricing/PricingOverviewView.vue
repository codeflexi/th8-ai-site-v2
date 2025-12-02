<!-- src/views/pricing/PricingOverviewView.vue -->
<template>
  <div class="bg-slate-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 py-10 space-y-8">
      <!-- HEADER -->
      <header class="space-y-3">
        <p class="text-[11px] uppercase tracking-wide text-red-500 font-semibold">
          TH8.AI Agentic System · Investment & ROI Summary
        </p>
        <h1 class="text-2xl md:text-3xl font-semibold">
          เลือกอุตสาหกรรมของคุณ แล้วดูภาพรวมการลงทุน + ROI ของ TH8.AI
        </h1>
        <p class="text-sm md:text-base text-slate-600 max-w-3xl">
          TH8.AI ออกแบบ 3 เสาหลัก
          <span class="font-semibold">Agent Suite · Workflow Automation · Knowledge &amp; Analytics</span>
          ให้เหมาะกับแต่ละอุตสาหกรรม – เลือก sector ที่ใกล้เคียงธุรกิจของคุณเพื่อดูรายละเอียด
        </p>

        <!-- Industry selector -->
        <div class="mt-4 flex flex-col md:flex-row gap-3 items-start md:items-center">
          <label class="text-xs text-slate-600">เลือกอุตสาหกรรม:</label>
          <select
            v-model="selected"
            class="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm"
          >
            <option value="">-- เลือกอุตสาหกรรม --</option>
            <option value="manufacturing">Manufacturing / โรงงานผลิต</option>
            <option value="solar">Solar / Energy &amp; EPC</option>
            <option value="logistics">Logistics &amp; Fulfillment</option>
            <option value="fnb">F&amp;B / Restaurant Chains</option>
            <option value="banking">Banking &amp; Financial Services / อุตสาหกรรมการเงิน</option>
          </select>

          <button
            class="px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 disabled:opacity-40"
            :disabled="!selected"
            @click="goToIndustry"
          >
            เปิดดู Investment &amp; ROI →
          </button>
        </div>

        <!-- link to full ROI page -->
        <div class="mt-2">
          <button
            type="button"
            class="inline-flex items-center gap-1 text-[11px] md:text-xs font-semibold text-slate-600 hover:text-slate-900"
            @click="goToRoi"
          >
            ดูเวอร์ชันเต็มแบบ ROI แยกตามอุตสาหกรรม →
          </button>
        </div>
      </header>

      <!-- Quick cards -->
      <section class="grid md:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
        <div
          v-for="card in industryCards"
          :key="card.key"
          class="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col justify-between"
        >
          <div class="space-y-1">
            <p class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
              {{ card.label }}
            </p>
            <p class="font-semibold">{{ card.title }}</p>
            <p class="text-xs text-slate-600">
              {{ card.desc }}
            </p>
          </div>
          <button
            class="mt-3 inline-flex items-center justify-between rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-[11px] text-slate-700 hover:bg-slate-100"
            @click="go(card.key)"
          >
            <span>ดู Investment &amp; ROI</span>
            <span>→</span>
          </button>
        </div>
      </section>

      <!-- 90 Days -->
      <section class="bg-white border border-slate-200 rounded-2xl p-5 mt-8">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <p class="text-[11px] uppercase tracking-[0.22em] text-slate-500 font-semibold">
              90-Day Pilot · Start Small, Learn Fast
            </p>
            <h2 class="text-lg font-semibold text-slate-900">
              เริ่มจาก Pilot 90 วัน · ไม่ผูกมัดระยะยาว · ใช้ข้อมูลจริงของบริษัทคุณเอง
            </h2>
            <p class="text-sm text-slate-600 max-w-xl mt-1.5">
              เป้าหมายไม่ใช่ “ทำโปรเจกต์ AI ให้จบ” แต่คือ “พิสูจน์ให้เห็นว่า AI Agent ช่วยลดงาน ลดความผิดพลาด
              และเพิ่มกำไรได้จริงในองค์กรคุณ”
            </p>
          </div>
          <div class="text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
            <p>✔ ใช้ระบบเดิม (ERP/Excel/CRM) เป็นฐาน</p>
            <p>✔ เลือก 1–2 Use Case ที่ impact สูงสุด</p>
            <p>✔ ถ้าไม่เห็นประโยชน์ ไม่ต้องขยายต่อ</p>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p class="font-semibold text-slate-800 mb-1">Scope (โดยประมาณ)</p>
            <ul class="space-y-1 text-slate-600">
              <li>• 1–2 AI Agent / Dashboard หลัก</li>
              <li>• เชื่อมต่อ 1–4 ระบบ (ERP/Excel/CRM/WMS)</li>
              <li>• Coaching ทีมงานใช้งานจริง</li>
              <li>• Executive Review ทุก 4 สัปดาห์</li>
            </ul>
          </div>
          <div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p class="font-semibold text-slate-800 mb-1">การลงทุน (ไม่ผูกมัด)</p>
            <ul class="space-y-1 text-slate-600">
              <li>• ค่าติดตั้ง + implement ครั้งแรก</li>
              <li class="pl-3">ประมาณ <span class="font-semibold">฿350,000 – 600,000</span></li>
              <li>• ค่าบริการ Platform & Support รายเดือน</li>
              <li class="pl-3">ประมาณ <span class="font-semibold">฿60,000 – 120,000 / เดือน</span></li>
              <li>• ค่าบริการ LLM API</li>
              <li class="pl-3">เริ่ม ~ <span class="font-semibold">฿10,000 – 60,000 / เดือน</span></li>
            </ul>
            <p class="text-[11px] text-slate-500 mt-2">
              *ตัวเลขทั้งหมดเป็น range เพื่อการวางแผนงบประมาณ — ปรับตาม scope จริงในแต่ละองค์กร
            </p>
          </div>
          <div class="bg-slate-900 text-slate-50 rounded-xl p-4">
            <p class="font-semibold mb-1">สิ่งที่ต้องได้กลับไปใน 90 วัน</p>
            <ul class="space-y-1 text-slate-100">
              <li>• Dashboard จากข้อมูลจริงของคุณเอง (ไม่ใช่ demo)</li>
              <li>• AI Agent ที่ทีมงานใช้ได้จริงในงานประจำวัน</li>
              <li>• ตัวเลขวัดผล: เวลาที่ลดลง / งานแก้ซ้ำที่หายไป / เงินที่ประหยัดได้ (โดยประมาณ)</li>
            </ul>
            <p class="text-[11px] text-slate-300 mt-2">
              ถ้าไม่เห็นประโยชน์ชัดเจนใน 90 วัน — เราไม่แนะนำให้ขยายไปทั้งองค์กร (และเราพูดแบบนี้กับทุกบริษัท)
            </p>
          </div>
        </div>
      </section>

      <!-- Note -->
      <section class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 text-sm">
        <h2 class="text-base md:text-lg font-semibold mb-2">
          ใช้ทีมเดิม ระบบเดิม แต่เพิ่ม “Agentic Layer” ของ TH8.AI เข้าไป
        </h2>
        <p class="text-slate-600">
          เราเน้นเริ่มที่โจทย์จริงขององค์กร ต่อเชื่อม ERP / WMS / CRM / LINE OA / MES / Core system ที่มีอยู่แล้ว
          แล้วเพิ่ม Agent, Workflow และ Knowledge Layer เข้าไป เพื่อให้ “ผลลัพธ์” ดีขึ้นแบบวัดได้
          ไม่ใช่แค่ทดลองเล่น AI.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selected = ref('')

const industryCards = [
  {
    key: 'manufacturing',
    label: 'Industry',
    title: 'Manufacturing / โรงงานผลิต',
    desc: 'โรงงานโลหะ, พลาสติก, ชิ้นส่วนยานยนต์, Packaging – เน้น OEE, Scrap, และเชื่อม MES/ERP.',
  },
  {
    key: 'solar',
    label: 'Industry',
    title: 'Solar / Energy & EPC',
    desc: 'บริษัท Solar, EPC, และพลังงานสะอาด – เน้น Lead → Survey → Proposal → Service.',
  },
  {
    key: 'logistics',
    label: 'Industry',
    title: 'Logistics & Fulfillment',
    desc: 'Fulfillment, 3PL, e-Commerce – เน้น Order Flow, Warehouse, Delivery, Billing.',
  },
  {
    key: 'fnb',
    label: 'Industry',
    title: 'F&amp;B / Restaurant Chains',
    desc: 'แบรนด์ร้านอาหารหลายสาขา – เน้นสั่งซื้อวัตถุดิบ, สต็อก, Waste, และ P&amp;L.',
  },
  {
    key: 'banking',
    label: 'Industry',
    title: 'Banking & Financial Services',
    desc: 'ธนาคาร, Non-Bank, Leasing, Microfinance – เน้น Credit, Operations, Contact Center, Compliance.',
  },
]

const go = (key) => {
  if (key === 'manufacturing') router.push('/pricing/manufacturing')
  if (key === 'solar') router.push('/pricing/solar')
  if (key === 'logistics') router.push('/pricing/logistics')
  if (key === 'fnb') router.push('/pricing/fnb')
  if (key === 'banking') router.push('/pricing/banking')
}

const goToIndustry = () => {
  if (!selected.value) return
  go(selected.value)
}

const goToRoi = () => {
  router.push('/roi')
}
</script>
