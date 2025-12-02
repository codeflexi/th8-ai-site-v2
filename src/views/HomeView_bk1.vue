<template>
  <div class="bg-slate-50">
    <!-- HERO (3-slide Auto + Selector) -->
    <section class="bg-th8-surface border-b border-th8-border">
      <div
        class="max-w-6xl mx-auto px-4 lg:px-6 py-12 lg:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
      >
        <!-- Left: Messaging with 3-slide Hero -->
        <div class="space-y-6">
          <!-- Top Badge -->
          <div
            class="inline-flex items-center gap-2 rounded-full border border-th8-border bg-slate-50 px-3 py-1 text-[11px] text-slate-600"
          >
            <span class="h-2 w-2 rounded-full bg-th8-primary"></span>
            <span>ลดงาน Routine · ลด Error · เพิ่มความมั่นใจในการตัดสินใจ</span>
          </div>

          <!-- Headline + Subtitle (Auto Slide) -->
          <div class="space-y-3">
            <h1
              class="text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-th8-text leading-tight"
            >
              {{ activeHeroSlide.titleMain }}
              <span class="block text-th8-primary">
                {{ activeHeroSlide.titleHighlight }}
              </span>
            </h1>

            <p class="text-sm lg:text-base text-th8-text/80 leading-relaxed max-w-xl">
              {{ activeHeroSlide.subtitle }}
            </p>
          </div>

          <!-- Hero Metrics -->
          <div class="grid grid-cols-3 gap-3 text-[11px] lg:text-xs">
            <div class="rounded-2xl border border-th8-border bg-white p-3 shadow-sm">
              <p class="text-[10px] uppercase tracking-wide text-slate-500 mb-2">
                Routine Work
              </p>
              <p class="text-lg font-semibold text-th8-text">30–50%</p>
              <p class="text-[11px] text-slate-600">ลดเวลางานซ้ำ ๆ ในการเงิน–ปฏิบัติการ</p>
            </div>
            <div class="rounded-2xl border border-th8-border bg-white p-3 shadow-sm">
              <p class="text-[10px] uppercase tracking-wide text-slate-500 mb-2">
                Human Error
              </p>
              <p class="text-lg font-semibold text-th8-text">20–40%</p>
              <p class="text-[11px] text-slate-600">ลดความผิดพลาดจากการเช็คข้อมูลข้ามระบบ</p>
            </div>
            <div class="rounded-2xl border border-th8-border bg-white p-3 shadow-sm">
              <p class="text-[10px] uppercase tracking-wide text-slate-500 mb-2">
                Decision Confidence
              </p>
              <p class="text-lg font-semibold text-th8-text">×3</p>
              <p class="text-[11px] text-slate-600">เพิ่มความมั่นใจในการตัดสินใจจากข้อมูลจริง</p>
            </div>
          </div>

          <!-- Slide Index / Selector -->
          <div class="flex flex-wrap items-center gap-2 pt-1">
            <button
              v-for="(slide, index) in heroSlides"
              :key="slide.id"
              type="button"
              @click="selectHero(index)"
              class="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium transition"
              :class="
                index === currentHeroIndex
                  ? 'border-th8-primary bg-th8-primary text-white'
                  : 'border-th8-border bg-white text-slate-600 hover:bg-slate-100'
              "
            >
              <span
                class="h-1.5 w-1.5 rounded-full"
                :class="index === currentHeroIndex ? 'bg-white' : 'bg-slate-400'"
              ></span>
              <span>{{ slide.label }}</span>
            </button>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-3 pt-1">
            <RouterLink
              :to="{ name: 'contact' }"
              class="inline-flex items-center justify-center rounded-full bg-th8-primary px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-th8-accent transition"
            >
              นัดคุย 30 นาที · สำรวจโอกาสใช้ AI Agent
            </RouterLink>
            <RouterLink
              :to="{ name: 'solutions' }"
              class="inline-flex items-center justify-center rounded-full border border-th8-border bg-white px-4 py-2 text-xs font-semibold text-th8-text hover:bg-slate-50 transition"
            >
              ดู AI Agent Suite ที่พร้อมใช้
            </RouterLink>
          </div>

          <!-- Trust Text -->
          <p class="text-[11px] text-slate-500 max-w-lg">
            สำหรับองค์กรยอดขายตั้งแต่ 300 ล้านบาทขึ้นไป ที่ต้องการ
            <span class="font-semibold">ลดงาน manual</span>,
            <span class="font-semibold">คุมตัวเลข</span> และ
            <span class="font-semibold">ยกระดับคุณภาพการตัดสินใจของทั้งองค์กร</span>
          </p>
        </div>

        <!-- Right: Hero Visual (TH8 Red / Owl / Executive layout) -->
        <div class="relative">
          <div
            class="relative overflow-hidden rounded-3xl border border-th8-border bg-slate-900 text-white shadow-xl"
          >
            <!-- Top Bar -->
            <div
              class="flex items-center justify-between border-b border-slate-800 px-4 py-3 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950"
            >
              <div class="flex items-center gap-3">
                <!-- Owl Logo Badge -->
                <div
                  class="flex h-9 w-9 items-center justify-center rounded-2xl bg-th8-primary/10 border border-th8-primary/40"
                >
                  <svg viewBox="0 0 32 32" class="h-6 w-6 text-th8-primary" aria-hidden="true">
                    <circle cx="11.5" cy="13" r="3.2" class="fill-current" />
                    <circle cx="20.5" cy="13" r="3.2" class="fill-current" />
                    <path
                      d="M6 12.5C6 8.9 8.9 6 12.5 6h7c3.6 0 6.5 2.9 6.5 6.5v4.5c0 4.1-3.4 7.5-7.5 7.5h-7C9.4 24.5 6 21.1 6 17Z"
                      class="fill-current opacity-20"
                    />
                    <path
                      d="M9 21c1.5 1.6 3.7 2.5 6 2.5s4.5-.9 6-2.5"
                      class="stroke-current opacity-85"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-[11px] uppercase tracking-wide text-slate-400">
                    TH8 · Executive AI Agent Console
                  </p>
                  <p class="text-xs text-slate-200">“What should we do next?”</p>
                </div>
              </div>
              <span
                class="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] text-emerald-300"
              >
                ● Live Agent Active
              </span>
            </div>

            <!-- Body -->
            <div class="space-y-4 px-4 pt-4 pb-5">
              <!-- Question & Recommendation -->
              <div class="space-y-2">
                <p class="text-[11px] text-slate-400">ผู้บริหารถาม</p>
                <div
                  class="rounded-2xl bg-slate-800/70 border border-slate-700 px-3 py-2.5 text-[11px] leading-relaxed"
                >
                  “เดือนนี้มีอะไรที่เสี่ยงต่อกำไร หรือ Cashflow ที่ผมควรรู้ตอนนี้บ้าง?”
                </div>
                <p class="text-[11px] text-slate-400">TH8 Agent ตอบพร้อมเหตุผล</p>
                <div
                  class="rounded-2xl bg-slate-900/80 border border-slate-700 px-3 py-2.5 space-y-1.5"
                >
                  <p class="text-[11px] text-slate-100 font-medium">
                    ▶ พบ 3 จุดเสี่ยงหลักที่กระทบ Margin รวม ~4.2 ล้านบาท
                  </p>
                  <ul class="text-[10px] text-slate-300 space-y-0.5 pl-4 list-disc">
                    <li>
                      สินค้า FNB-042 ขายดีแต่ต้นทุน Logistics ต่อหน่วยสูงกว่าค่าเฉลี่ย 18%
                    </li>
                    <li>ลูกค้า Top 20 บางรายเริ่มลด Order ต่อบิลลง 12–15% ต่อเดือน</li>
                    <li>มี Stock เสี่ยงตกรุ่นในคลัง 2 แห่ง คิดเป็นมูลค่าประมาณ 1.1 ล้านบาท</li>
                  </ul>
                </div>
              </div>

              <!-- Impact Cards -->
              <div class="grid grid-cols-2 gap-2.5">
                <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-2.5 space-y-1.5">
                  <p class="text-[10px] text-slate-400">Potential Profit Recovery</p>
                  <p class="text-lg font-semibold text-emerald-300">+ 4.2M฿</p>
                  <p class="text-[10px] text-slate-400">
                    หากดำเนินการตามแผนที่ Agent แนะนำภายใน 60 วัน
                  </p>
                </div>
                <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-2.5 space-y-1.5">
                  <p class="text-[10px] text-slate-400">Manual Analysis Time</p>
                  <p class="text-lg font-semibold text-red-400">- 65%</p>
                  <p class="text-[10px] text-slate-400">
                    ลดเวลาที่ทีมต้องใช้ในการไล่ Excel / Report หลายระบบ
                  </p>
                </div>
              </div>

              <!-- Footer -->
              <div class="flex items-center justify-between pt-1 border-t border-slate-800">
                <p class="text-[10px] text-slate-500">
                  ข้อมูลจาก ERP · WMS · BI · Excel ถูกรวมและวิเคราะห์โดย TH8 Agent
                </p>
                <span class="text-[10px] text-slate-400">อัปเดตอัตโนมัติทุกวัน</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INFOGRAPHIC: 90-Day Outcome (Corporate Style) -->
    <section class="border-b border-th8-border bg-white">
      <div class="max-w-6xl mx-auto px-4 lg:px-6 py-10 lg:py-14 space-y-8">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div class="space-y-2">
            <h2 class="text-xl lg:text-2xl font-semibold text-th8-text">
              เห็นผลลัพธ์จาก AI Agent ภายใน 90 วัน
            </h2>
            <p class="text-sm text-slate-600 max-w-2xl">
              เราไม่ได้เริ่มจากเทคโนโลยี แต่เริ่มจาก
              <span class="font-semibold">“ปัญหาที่กระทบตัวเลข”</span>
              ขององค์กรคุณ แล้วออกแบบ Agent ที่ทำงานแทนทีมได้ตั้งแต่วันแรกที่ขึ้นระบบ
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-4">
          <!-- Step 1 -->
          <div class="rounded-2xl border border-th8-border bg-slate-50/60 p-4 space-y-2">
            <p class="text-[11px] font-semibold uppercase tracking-wide text-th8-primary">
              Phase 1 · 0–2 สัปดาห์
            </p>
            <p class="text-sm font-semibold text-th8-text">
              เข้าใจ Pain จริง + เลือก 1 ปัญหาที่คุ้มที่สุด
            </p>
            <ul class="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
              <li>Workshop กับทีมการเงิน / ปฏิบัติการ / โรงงาน / โลจิสติกส์</li>
              <li>ระบุจุดที่เสียเวลา หรือมี error สูง</li>
              <li>ตกลง KPI ที่จะใช้วัดผล (เวลา · ต้นทุน · ความผิดพลาด)</li>
            </ul>
          </div>

          <!-- Step 2 -->
          <div class="rounded-2xl border border-th8-border bg-slate-50/60 p-4 space-y-2">
            <p class="text-[11px] font-semibold uppercase tracking-wide text-th8-primary">
              Phase 2 · 2–6 สัปดาห์
            </p>
            <p class="text-sm font-semibold text-th8-text">
              สร้าง Agent ที่เชื่อมระบบและทำงานแทนทีม
            </p>
            <ul class="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
              <li>เชื่อมต่อกับ ERP, WMS, CRM, Data Warehouse และ Excel ที่ใช้อยู่</li>
              <li>สร้าง workflow ให้ Agent ดึง–ตรวจ–วิเคราะห์–แจ้งเตือน</li>
              <li>ทดสอบกับข้อมูลจริง จูน logic ให้ตรงกับงานของทีมคุณ</li>
            </ul>
          </div>

          <!-- Step 3 -->
          <div class="rounded-2xl border border-th8-border bg-slate-50/60 p-4 space-y-2">
            <p class="text-[11px] font-semibold uppercase tracking-wide text-th8-primary">
              Phase 3 · 6–12 สัปดาห์
            </p>
            <p class="text-sm font-semibold text-th8-text">
              วัดผลจริง + ปรับจนกลายเป็นส่วนหนึ่งของทีม
            </p>
            <ul class="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
              <li>วัดเวลาที่ประหยัดได้ และ error ที่ลดลง</li>
              <li>ให้ทีมใช้งานจริงในงานประจำวัน พร้อม Human-in-the-loop</li>
              <li>วาง roadmap ขยายจาก 1 agent → หลายทีมในองค์กร</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- BEFORE / AFTER (Consulting Style) -->
    <section class="border-b border-th8-border bg-slate-50/80">
      <div class="max-w-6xl mx-auto px-4 lg:px-6 py-10 lg:py-14 space-y-6">
        <div class="space-y-2">
          <h2 class="text-xl lg:text-2xl font-semibold text-th8-text">
            ก่อนใช้ AI Agent vs หลังใช้ TH8 Agent
          </h2>
          <p class="text-sm text-slate-600 max-w-2xl">
            เราไม่ได้แค่ทำ Dashboard หรือ Workflow เพิ่มอีกหนึ่งตัว แต่ช่วยให้ทีมคุณ
            <span class="font-semibold">
              “ทำงานน้อยลง แต่เห็นภาพมากขึ้น และตัดสินใจได้ดีขึ้น”
            </span>
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-5">
          <!-- Before -->
          <div class="rounded-2xl border border-th8-border bg-white p-4 space-y-3">
            <div class="inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span class="h-2 w-2 rounded-full bg-red-400"></span>
              <span>ก่อนใช้ · ระบบครบ แต่คนเหนื่อย</span>
            </div>
            <ul class="text-xs text-slate-700 space-y-2 pl-4 list-disc">
              <li>ทีมใช้เวลาหลายชั่วโมงไล่ report / Excel จากหลายระบบ</li>
              <li>ตัวเลขไม่ตรงกันระหว่าง ERP, BI และไฟล์ที่ทีมใช้จริง</li>
              <li>ไม่รู้สาเหตุปัญหา (root cause) ชัดเจน ต้องถามกันหลายแผนก</li>
              <li>การตัดสินใจยังขึ้นกับ “ประสบการณ์” มากกว่า “ข้อมูลล่าสุด”</li>
              <li>งานซ้ำ ๆ กินเวลาคนเก่งไปวันละ 2–4 ชั่วโมง</li>
            </ul>
          </div>

          <!-- After -->
          <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 space-y-3">
            <div class="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>หลังใช้ TH8 Agent · ทีมเล็กลง แต่คุมงานได้มากขึ้น</span>
            </div>
            <ul class="text-xs text-emerald-900 space-y-2 pl-4 list-disc">
              <li>Agent ดึง–เช็ค–เชื่อมข้อมูลให้ครบก่อนทุกเช้า โดยไม่ต้องสั่ง</li>
              <li>เจอ pattern ผิดปกติ และแจ้งเตือนพร้อมเหตุผล</li>
              <li>เสนอ action แนะนำให้ทีมตัดสินใจ พร้อมตัวเลขผลกระทบ</li>
              <li>ลดงาน manual ที่ทีมต้องทำซ้ำ ๆ ลง 30–50%</li>
              <li>ผู้บริหารถาม “ควรทำอะไรต่อ” แล้วได้คำตอบจาก Agent ทันที</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- USE CASE SNAPSHOTS -->
    <section class="border-b border-th8-border bg-white">
      <div class="max-w-6xl mx-auto px-4 lg:px-6 py-10 lg:py-14 space-y-6">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div class="space-y-2">
            <h2 class="text-xl lg:text-2xl font-semibold text-th8-text">
              Use Case ที่องค์กรไทยเห็นผลเร็วที่สุด
            </h2>
            <p class="text-sm text-slate-600 max-w-2xl">
              ทุก Agent ถูกออกแบบให้แก้ปัญหาเชิงธุรกิจที่ชัดเจน ไม่ใช่ PoC ที่ใช้จริงไม่ได้
            </p>
          </div>
          <RouterLink
            :to="{ name: 'solutions' }"
            class="inline-flex items-center justify-center rounded-full border border-th8-border bg-slate-50 px-4 py-2 text-xs font-semibold text-th8-text hover:bg-slate-100 transition"
          >
            ดูรายละเอียดแต่ละ Agent Suite
          </RouterLink>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <!-- Finance -->
          <div class="rounded-2xl border border-th8-border bg-slate-50/60 p-4 space-y-2">
            <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Finance · FP&A & Accounting
            </p>
            <p class="text-sm font-semibold text-th8-text">
              ปิดงบเร็วขึ้น · Forecast แม่นขึ้น · ทีมไม่ต้องไล่ Excel อีกต่อไป
            </p>
            <ul class="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
              <li>Agent เช็คความครบถ้วนของข้อมูลก่อนปิดงบ</li>
              <li>หาความผิดปกติของค่าใช้จ่ายและ margin อัตโนมัติ</li>
              <li>เตรียม insight ให้ผู้บริหารก่อน Weekly / Monthly review</li>
            </ul>
          </div>

          <!-- Warehouse & Logistics -->
          <div class="rounded-2xl border border-th8-border bg-slate-50/60 p-4 space-y-2">
            <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Warehouse & Logistics
            </p>
            <p class="text-sm font-semibold text-th8-text">
              ลด mis-pick · ลดของตายคลัง · ลด delivery fail
            </p>
            <ul class="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
              <li>Agent ตรวจ stock movement และเตือนความผิดปกติ</li>
              <li>แนะนำ reorder / relocation ตาม pattern การขายจริง</li>
              <li>จับสัญญาณ trip ที่เสี่ยง delay หรือเกินต้นทุนเป้า</li>
            </ul>
          </div>

          <!-- Operations & Factory -->
          <div class="rounded-2xl border border-th8-border bg-slate-50/60 p-4 space-y-2">
            <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Operations & Factory
            </p>
            <p class="text-sm font-semibold text-th8-text">
              หา root cause defect · วางแผนผลิตแม่นขึ้น · ลด downtime
            </p>
            <ul class="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
              <li>Agent รวมข้อมูลจาก production line, QA, maintenance</li>
              <li>ชี้จุดเสี่ยงใน process ที่ทำให้ defect สูง</li>
              <li>เสนอ plan ปรับ batch / schedule เพื่อลด loss</li>
            </ul>
          </div>

          <!-- Sales & Customer -->
          <div class="rounded-2xl border border-th8-border bg-slate-50/60 p-4 space-y-2">
            <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Sales & Customer Management
            </p>
            <p class="text-sm font-semibold text-th8-text">
              ลด churn · รักษาลูกค้าดี · ใช้ทีมขายอย่างคุ้มค่าที่สุด
            </p>
            <ul class="text-xs text-slate-600 space-y-1.5 pl-4 list-disc">
              <li>Agent วิเคราะห์พฤติกรรมลูกค้า ที่เริ่มให้สัญญาณเสี่ยง</li>
              <li>เตรียม action แนะนำสำหรับทีมขายและ CS</li>
              <li>สรุปผลแคมเปญเป็น insight พร้อมข้อเสนอแนะรอบถัดไป</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY NOW + CTA -->
    <section class="bg-slate-900 text-white">
      <div class="max-w-6xl mx-auto px-4 lg:px-6 py-10 lg:py-14 space-y-6">
        <div class="space-y-2">
          <h2 class="text-xl lg:text-2xl font-semibold">
            ทำไมปีนี้เป็นเวลาที่องค์กรของคุณต้องเริ่มใช้ AI Agent อย่างจริงจัง
          </h2>
          <p class="text-sm text-slate-300 max-w-2xl">
            ระบบคุณพร้อมมานานแล้ว—ERP, WMS, CRM, BI—แต่สิ่งที่ยังขาดคือ
            <span class="font-semibold">
              “สมอง” ที่ดูข้อมูลทั้งหมดแทนทีม และเตือนเมื่อมีบางอย่างควร ‘ลงไปดูให้ลึก’
            </span>
            .
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div class="space-y-1.5">
            <p class="text-[11px] uppercase tracking-wide text-slate-400">พร้อมด้านระบบ</p>
            <p class="text-slate-100">
              ระบบหลักขององค์กรเริ่มเปิด API มากขึ้น ทำให้การเชื่อม Agent
              เข้ากับ ERP, WMS, CRM และ Data Warehouse เป็นเรื่องปกติ ไม่ใช่ project
              ขนาดยักษ์อีกต่อไป
            </p>
          </div>
          <div class="space-y-1.5">
            <p class="text-[11px] uppercase tracking-wide text-slate-400">พร้อมด้านคน</p>
            <p class="text-slate-100">
              ทีมเริ่มคุ้นเคยกับการทำงานร่วมกับ AI ช่วยสรุป ช่วยหาข้อมูล ขั้นต่อไปคือการให้ AI
              “ช่วยคิดและช่วยตัดสินใจร่วมกับทีม”
            </p>
          </div>
          <div class="space-y-1.5">
            <p class="text-[11px] uppercase tracking-wide text-slate-400">
              พร้อมด้านการแข่งขัน
            </p>
            <p class="text-slate-100">
              คู่แข่งเริ่มใช้ AI ในการ optimize การเงิน สต็อก และโลจิสติกส์แล้ว คำถามจึงไม่ใช่
              “จะใช้ดีไหม” แต่คือ “จะเริ่มตรงไหนให้คุ้มที่สุด”
            </p>
          </div>
        </div>

        <div
          class="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-4"
        >
          <div class="space-y-1">
            <p class="text-sm font-semibold text-white">
              เริ่มจาก “90-Day AI Agent Pilot” ที่พิสูจน์ผลได้จริง
            </p>
            <p class="text-xs text-slate-300 max-w-xl">
              เลือก 1 ปัญหาหลักในองค์กรของคุณ แล้วให้เราช่วยออกแบบ Agent ที่ทำงานแทนทีมแบบ
              end-to-end พร้อมรายงานผลกระทบเชิงธุรกิจที่วัดได้จริง
            </p>
          </div>
          <div class="flex flex-wrap gap-3">
            <RouterLink
              :to="{ name: 'contact' }"
              class="inline-flex items-center justify-center rounded-full bg-th8-primary px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-th8-accent transition"
            >
              นัดคุยกับทีม TH8
            </RouterLink>
            <RouterLink
              :to="{ name: 'services' }"
              class="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-800 transition"
            >
              ดูวิธีที่เราทำงานร่วมกับองค์กร
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const heroSlides = [
  {
    id: 'exec',
    label: 'ภาพรวมองค์กร',
    titleMain: 'AI Agent สำหรับองค์กรไทย',
    titleHighlight: 'ที่ช่วย “ลดงานซ้ำ” และ “เพิ่มความมั่นใจในการตัดสินใจ”',
    subtitle:
      'วันนี้องค์กรไม่ได้แพ้เพราะทำงานช้า แต่แพ้เพราะตัดสินใจจากข้อมูลที่ไม่ครบ ไม่ทันเวลา. TH8 ออกแบบ “ระบบช่วยคิดและช่วยทำ” ที่เชื่อมต่อกับ ERP, WMS, CRM, Data Warehouse และ LINE OA เพื่อให้ทีมการเงิน ปฏิบัติการ โรงงาน และโลจิสติกส์ทำงานซ้ำ ๆ น้อยลง แต่ควบคุมตัวเลข คุณภาพงาน และความเสี่ยงได้มากขึ้น.'
  },
  {
    id: 'finance',
    label: 'Finance / FP&A',
    titleMain: 'AI Agent สำหรับทีมการเงินและ FP&A',
    titleHighlight: 'ที่ช่วยปิดงบเร็วขึ้น และเข้าใจตัวเลขกำไรอย่างที่ไม่เคยเป็นมาก่อน',
    subtitle:
      'จากการไล่ Excel หลายไฟล์ และตัวเลขไม่ตรงกันระหว่าง ERP, BI, และไฟล์จริงของทีม – สู่โลกที่ Agent เช็คความครบถูกของข้อมูลให้ก่อน ปิดงบเร็วขึ้น 30% ลด error และเตรียม insight พร้อมคำถาม–คำตอบให้ผู้บริหารก่อนทุกประชุม.'
  },
  {
    id: 'ops',
    label: 'Operations & Logistics',
    titleMain: 'AI Agent สำหรับปฏิบัติการ โรงงาน และโลจิสติกส์',
    titleHighlight:
      'ที่ช่วยให้สต็อก โลจิสติกส์ และโรงงาน “ทำงานลื่น” โดยไม่ต้องไล่งานเองทุกวัน',
    subtitle:
      'แทนที่จะต้องไล่ดูสต็อก ขาด–เกิน, trip deliver ที่เสี่ยง delay, หรือ defect ในไลน์ผลิตทีละเคส – TH8 Agent มองภาพรวมทั้ง ERP, WMS และระบบปฏิบัติการให้ก่อน เจอความเสี่ยง แจ้งเตือน และแนะนำ action ที่ควรทำต่อทันที.'
  }
]

const currentHeroIndex = ref(0)
let heroTimer = null

const activeHeroSlide = computed(() => heroSlides[currentHeroIndex.value])

const startHeroAutoSlide = () => {
  if (heroTimer !== null) return
  heroTimer = window.setInterval(() => {
    currentHeroIndex.value = (currentHeroIndex.value + 1) % heroSlides.length
  }, 9000) // เปลี่ยนสไลด์ทุก ~9 วินาที
}

const stopHeroAutoSlide = () => {
  if (heroTimer !== null) {
    clearInterval(heroTimer)
    heroTimer = null
  }
}

const selectHero = index => {
  currentHeroIndex.value = index
  // เมื่อผู้ใช้เลือกเอง ให้หยุด auto slide เพื่อให้เขาอ่านสไลด์นั้นเต็ม ๆ
  stopHeroAutoSlide()
}

onMounted(() => {
  startHeroAutoSlide()
})

onBeforeUnmount(() => {
  stopHeroAutoSlide()
})
</script>
