<template>
  <div class="bg-slate-50">
    <!-- HERO -->
    <section class="bg-th8-surface border-b border-th8-border">
      <div
        class="max-w-6xl mx-auto px-4 lg:px-6 py-14 lg:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
      >
        <!-- Left: Messaging -->
        <div class="space-y-6">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-th8-border bg-slate-50 px-3 py-1 text-[11px] text-slate-600"
          >
            <span class="h-2 w-2 rounded-full bg-th8-primary"></span>
            <span>ลดงาน Routine · ลด Error · เชื่อมระบบด้วย Agentic AI</span>
          </div>

          <!-- HERO TITLE (เวอร์ชันผู้บริหาร) -->
          <h1 class="text-3xl lg:text-4xl font-semibold leading-tight text-th8-text">
            ลดงานซ้ำ ๆ
            <span class="text-th8-primary">30–50%</span>
            ลดความผิดพลาด
            <span class="text-th8-primary">20–40%</span>
            ด้วย<span class="text-th8-primary"> Agentic AI </span>
            ที่เข้าไปช่วย ทำงานในขั้นตอนเดิมของทีมคุณ
            <span class="underline decoration-th8-primary/60">โดยไม่ต้องเปลี่ยนระบบทั้งองค์กร</span>
            
          </h1>

          <!-- HERO SUBTEXT (เวอร์ชันผู้บริหาร) -->
          <p class="text-sm lg:text-base text-th8-text/80 leading-relaxed max-w-xl">
            เราช่วยออกแบบ
            <span class="font-semibold">“ระบบทำงานอัตโนมัติ”</span>
            ที่ต่อเข้ากับ ERP, WMS, CRM, POS, Data warehouse และ LINE OA ที่คุณใช้อยู่แล้ว
            ให้ทีมการตลาด ขาย การเงิน ปฏิบัติการ และโลจิสติกส์ทำงานซ้ำ ๆ น้อยลง
            แต่ควบคุมตัวเลข คุณภาพงาน และความเสี่ยงได้มากขึ้น
          </p>

          <!-- Hero Metrics -->
          <div class="grid grid-cols-3 gap-3 text-[11px] lg:text-xs">
            <div class="rounded-2xl border border-th8-border bg-white p-3 shadow-sm">
              <div class="flex items-center justify-between mb-1">
                <p class="text-[10px] uppercase tracking-wide text-slate-500">TIME SAVED</p>
                <!-- simple bar icon -->
                <svg viewBox="0 0 24 24" class="h-4 w-4 text-th8-primary">
                  <rect x="3" y="12" width="3" height="8" class="fill-current opacity-40" />
                  <rect x="10" y="9" width="3" height="11" class="fill-current opacity-70" />
                  <rect x="17" y="6" width="3" height="14" class="fill-current" />
                </svg>
              </div>
              <p class="text-lg font-semibold text-th8-text">30–50%</p>
              <p class="text-[11px] text-slate-600">ลดงานคีย์มือ & งานติดตามงาน</p>
            </div>
            <div class="rounded-2xl border border-th8-border bg-white p-3 shadow-sm">
              <div class="flex items-center justify-between mb-1">
                <p class="text-[10px] uppercase tracking-wide text-slate-500">ERROR ลดลง</p>
                <!-- check list icon -->
                <svg viewBox="0 0 24 24" class="h-4 w-4 text-emerald-500">
                  <rect x="4" y="5" width="6" height="2" class="fill-current opacity-30" />
                  <rect x="4" y="11" width="8" height="2" class="fill-current opacity-60" />
                  <rect x="4" y="17" width="10" height="2" class="fill-current" />
                  <polyline
                    points="17,6 19,8 22,4"
                    class="fill-none stroke-current"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p class="text-lg font-semibold text-th8-text">20–40%</p>
              <p class="text-[11px] text-slate-600">เช็คเอกสาร / Transaction ข้ามระบบ</p>
            </div>
            <div class="rounded-2xl border border-th8-border bg-white p-3 shadow-sm">
              <div class="flex items-center justify-between mb-1">
                <p class="text-[10px] uppercase tracking-wide text-slate-500">DESIGNED FOR</p>
                <!-- org icon -->
                <svg viewBox="0 0 24 24" class="h-4 w-4 text-slate-500">
                  <rect x="9" y="3" width="6" height="4" rx="1" class="fill-current opacity-70" />
                  <rect x="3" y="13" width="6" height="4" rx="1" class="fill-current opacity-40" />
                  <rect x="15" y="13" width="6" height="4" rx="1" class="fill-current opacity-40" />
                  <path
                    d="M12 7v4M7 13l5-2 5 2"
                    class="fill-none stroke-current opacity-70"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p class="text-lg font-semibold text-th8-text">Enterprise & SME</p>
              <p class="text-[11px] text-slate-600">ออกแบบจากประสบการณ์ระบบระดับธนาคาร</p>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-wrap gap-3 pt-2">
            <RouterLink
              :to="{ name: 'contact' }"
              class="inline-flex items-center rounded-full bg-th8-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-th8-accent transition"
            >
              คุยโจทย์จริงกับทีม TH8.AI
            </RouterLink>
            <RouterLink
              :to="{ name: 'services' }"
              class="inline-flex items-center rounded-full border border-th8-border px-5 py-2.5 text-sm text-th8-text hover:border-th8-primary bg-white/80"
            >
              ดู Solutions &amp; Agent Suite
            </RouterLink>
          </div>
        </div>

        <!-- Right: Card + Illustration -->
        <div class="relative">
          <!-- illustration: put unDraw here -->
          <div class="hidden lg:block absolute -top-10 -right-4">
            <img
              src="../assets/illustrations/undraw_analytics_setup.svg"
              alt="Dashboard & workflow illustration"
              class="w-40 h-auto drop-shadow-md"
            />
          </div>

          <div class="absolute -inset-5 rounded-3xl bg-th8-primary/5 blur-2xl"></div>
          <div
            class="relative rounded-3xl border border-th8-border bg-white p-5 lg:p-6 shadow-md text-[11px] space-y-3"
          >
            <div class="flex items-center justify-between text-slate-500 mb-1">
              <span class="font-semibold text-th8-text">TH8 Agentic Flow</span>
              <span>Data → Agent → Workflow → UX</span>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <p class="font-semibold text-slate-800 mb-1">Business Workflow</p>
              <p class="text-slate-500">
                PO → Invoice → Stock<br />
                FP&amp;A → Scenario<br />
                Order → Picking → Delivery
              </p>
            </div>

            <div class="rounded-2xl border border-th8-border bg-red-50/70 p-3 flex items-center gap-3">
              <div>
                <p class="font-semibold text-th8-text mb-1">TH8 Agent Layer</p>
                <p class="text-th8-text/80">
                  Task Planner · Tool calling · RAG · Exception handling · Human-in-the-loop
                </p>
              </div>
              <div
                class="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-th8-primary/10 border border-th8-primary/40"
              >
                <svg viewBox="0 0 24 24" class="h-4 w-4 text-th8-primary">
                  <circle cx="12" cy="8" r="3.2" class="fill-current opacity-80" />
                  <rect x="7" y="12" width="10" height="6" rx="2" class="fill-current opacity-40" />
                  <path
                    d="M5 11h14"
                    class="stroke-current opacity-70"
                    stroke-width="1.3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <p class="font-semibold text-slate-800 mb-1">Systems &amp; Data</p>
              <p class="text-slate-500">
                ERP / WMS / CRM<br />
                Data warehouse / DB<br />
                SOP, Policy, Contract
              </p>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <p class="font-semibold text-slate-800 mb-1">Interface Layer</p>
              <p class="text-slate-500">
                LINE OA · Web portal · API · Google Sheet · Email
              </p>
            </div>

            <p class="text-[11px] text-slate-500">
              เป้าหมายคือให้ Agent กลายเป็น “คนในทีม”
              เข้าไปเสริมกำลังให้ Workflow ของทีมคุณ โดย Agent System เชื่อม Workflow, Data และ
              Process เข้าด้วยกัน ให้ Agent คุยกับ ERP, WMS, CRM, POS, Data warehouse และ LINE OA
            </p>
          </div>
        </div>
      </div>
    </section>

     <!-- 3 PILLARS / SOLUTIONS OVERVIEW (ICON UPGRADED + LINKS) -->
    <section class="bg-th8-surface border-b border-th8-border py-16">
      <div class="max-w-6xl mx-auto px-4 space-y-8">
        <!-- Title -->
        <div class="space-y-2">
          <h2 class="text-2xl font-bold text-th8-text">3 เสาหลักของ TH8.AI Solutions & Product Suite</h2>
          <p class="text-sm text-slate-600 max-w-xl">
            เราไม่ได้ขายแค่โมเดล AI แต่ขาย “ระบบที่ทำงานช่วยคุณ ประสานงาน แต่ละระบบ” ผ่าน Agent,
            Workflow และ Knowledge ที่ออกแบบรอบบริบทองค์กรของคุณจริง ๆ
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 text-sm">
          <!-- Pillar 1 pillar-agent-->
          <RouterLink
            :to="{ name: 'pillar1-backoffice-home' }"
            class="rounded-2xl border border-th8-border bg-white p-6 shadow-sm space-y-5 hover:border-th8-primary hover:shadow-md transition block"
          >
            <!-- Header -->
            <div class="flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-th8-primary/10">
                <!-- Icon: Agent Network (Large) -->
                <svg viewBox="0 0 24 24" class="h-6 w-6 text-th8-primary">
                  <circle cx="8" cy="8" r="2.4" class="fill-current opacity-90" />
                  <circle cx="16" cy="8" r="2.4" class="fill-current opacity-70" />
                  <circle cx="12" cy="15.5" r="2.4" class="fill-current opacity-50" />
                  <path
                    d="M9.7 9.2l1.7 4.4M14.3 9.2l-1.7 4.4"
                    class="stroke-current opacity-90"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>

              <div>
                <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  Pillar 1 · AI Agent Suite
                </p>
                <h3 class="font-bold text-th8-text text-base">Agent สำหรับงานหลักขององค์กร</h3>
              </div>
            </div>

            <!-- Content bullets -->
            <div class="bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-3">
              <div class="flex items-start gap-2">
                <span class="h-2 w-2 rounded-full bg-th8-primary mt-2"></span>
                <p class="text-[13px] text-slate-700">
                  ชุดผู้ช่วย AI สำหรับ
                  <span class="font-semibold">งานการตลาด, ขาย, การเงิน, ปฏิบัติการ และโลจิสติกส์</span>
                </p>
              </div>
              <div class="flex items-start gap-2">
                <span class="h-2 w-2 rounded-full bg-th8-primary mt-2"></span>
                <p class="text-[13px] text-slate-700">
                  FP&amp;A Copilot, Inventory &amp; Replenishment, Route Planner, Document QC
                </p>
              </div>
              <div class="flex items-start gap-2">
                <span class="h-2 w-2 rounded-full bg-th8-primary mt-2"></span>
                <p class="text-[13px] text-slate-700">
                  ออกแบบจาก <span class="font-semibold">Use case จริงในองค์กรไทย</span>
                </p>
              </div>
              <div class="flex items-start gap-2">
                <span class="h-2 w-2 rounded-full bg-th8-primary mt-2"></span>
                <p class="text-[13px] text-slate-700">
                  ลดงานซ้ำ ๆ และเตรียมข้อมูลพร้อมสำหรับการตัดสินใจของผู้บริหาร
                </p>
              </div>
            </div>

            <!-- Footer CTA -->
            <div class="flex items-center justify-between pt-2 text-[12px] text-slate-600">
              <span>ดูตัวอย่าง Inventory / FP&amp;A Agent</span>
              <span class="inline-flex items-center gap-1 text-th8-primary font-medium">
                ดูรายละเอียด
                <span class="text-[14px]">⟶</span>
              </span>
            </div>
          </RouterLink>

          <!-- Pillar 2 -->
          <RouterLink
            :to="{ name: 'pillar-workflow' }"
            class="rounded-2xl border border-th8-border bg-white p-6 shadow-sm space-y-5 hover:border-emerald-600 hover:shadow-md transition block"
          >
            <!-- Header -->
            <div class="flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                <!-- Icon: Workflow / Integration (Large) -->
                <svg viewBox="0 0 24 24" class="h-6 w-6 text-emerald-700">
                  <rect x="4" y="5" width="7" height="4.5" rx="1.2" class="fill-current opacity-85" />
                  <rect x="14" y="10" width="7" height="4.5" rx="1.2" class="fill-current opacity-55" />
                  <rect x="4" y="15" width="7" height="4.5" rx="1.2" class="fill-current opacity-40" />
                  <path
                    d="M11 7h2.5a2 2 0 0 1 2 2v1.2M11 17h2.5a2 2 0 0 0 2-2v-1.2"
                    class="stroke-current opacity-90"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M16 11.2l1.6 1.7 1.6-1.7"
                    class="stroke-current opacity-90"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div>
                <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  Pillar 2 · AI Workflow Automation
                </p>
                <h3 class="font-bold text-th8-text text-base">เชื่อม Agent เข้ากับระบบเดิมของคุณ</h3>
              </div>
            </div>

            <!-- Content -->
            <div class="bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-3">
              <div class="flex items-start gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-600 mt-2"></span>
                <p class="text-[13px] text-slate-700">
                  เชื่อมระบบ ERP, WMS, CRM, Sheet, Email, LINE OA
                </p>
              </div>
              <div class="flex items-start gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-600 mt-2"></span>
                <p class="text-[13px] text-slate-700">
                  ทำให้ระบบ “<span class="font-semibold">คุยกันเอง</span>” ส่งข้อมูลให้อัตโนมัติ
                </p>
              </div>
              <div class="flex items-start gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-600 mt-2"></span>
                <p class="text-[13px] text-slate-700">ลดคีย์มือ ลดเช็กข้ามระบบ ลดเคสตกหล่น</p>
              </div>
              <div class="flex items-start gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-600 mt-2"></span>
                <p class="text-[13px] text-slate-700">
                  เห็นสถานะงานปลายทางชัดขึ้นทั้งทีมหน้าและหลังบ้าน
                </p>
              </div>
            </div>

            <!-- Footer CTA -->
            <div class="flex items-center justify-between pt-2 text-[12px] text-slate-600">
              <span>ดู Flow ตัวอย่าง LINE → ERP / Order → Loading</span>
              <span class="inline-flex items-center gap-1 text-emerald-700 font-medium">
                ดูรายละเอียด
                <span class="text-[14px]">⟶</span>
              </span>
            </div>
          </RouterLink>

          <!-- Pillar 3 -->
          <RouterLink
            :to="{ name: 'pillar-knowledge' }"
            class="rounded-2xl border border-th8-border bg-white p-6 shadow-sm space-y-5 hover:border-sky-600 hover:shadow-md transition block"
          >
            <!-- Header -->
            <div class="flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10">
                <!-- Icon: Knowledge + Analytics (Large) -->
                <svg viewBox="0 0 24 24" class="h-6 w-6 text-sky-700">
                  <path
                    d="M6.5 7h6.2a2 2 0 0 1 2 2v9H8.3a2 2 0 0 1-1.8-2V7z"
                    class="fill-current opacity-85"
                  />
                  <path
                    d="M6.5 7a2 2 0 0 0-2 2v9"
                    class="stroke-current opacity-70"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 10h3.2M11 12.8h2.2"
                    class="stroke-current opacity-95"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <rect
                    x="14"
                    y="9.5"
                    width="5"
                    height="6.5"
                    rx="1.2"
                    class="fill-current opacity-30"
                  />
                  <path
                    d="M14.8 13.4l1.2-1.4 1 0.8 1.1-1.6"
                    class="stroke-current opacity-95"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div>
                <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  Pillar 3 · AI Knowledge &amp; Analytics
                </p>
                <h3 class="font-bold text-th8-text text-base">เปลี่ยนเอกสารกองใหญ่ให้ใช้การได้จริง</h3>
              </div>
            </div>

            <!-- Content -->
            <div class="bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-3">
              <div class="flex items-start gap-2">
                <span class="h-2 w-2 rounded-full bg-sky-600 mt-2"></span>
                <p class="text-[13px] text-slate-700">จัดระเบียบเอกสาร สัญญา SOP และรายงาน</p>
              </div>
              <div class="flex items-start gap-2">
                <span class="h-2 w-2 rounded-full bg-sky-600 mt-2"></span>
                <p class="text-[13px] text-slate-700">
                  เปลี่ยนเป็นฐานความรู้ + Dashboard ที่ค้นหา–ถามตอบได้
                </p>
              </div>
              <div class="flex items-start gap-2">
                <span class="h-2 w-2 rounded-full bg-sky-600 mt-2"></span>
                <p class="text-[13px] text-slate-700">
                  ทั้ง AI และผู้บริหารเห็นภาพเดียวกัน ใช้ข้อมูลจริงในการตัดสินใจ
                </p>
              </div>
              <div class="flex items-start gap-2">
                <span class="h-2 w-2 rounded-full bg-sky-600 mt-2"></span>
                <p class="text-[13px] text-slate-700">ลดพึ่งสไลด์/ไฟล์กระจัดกระจาย</p>
              </div>
            </div>

            <!-- Footer CTA -->
            <div class="flex items-center justify-between pt-2 text-[12px] text-slate-600">
              <span>ดู Knowledge Copilot / Admin Console</span>
              <span class="inline-flex items-center gap-1 text-sky-700 font-medium">
                ดูรายละเอียด
                <span class="text-[14px]">⟶</span>
              </span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- KEY SEGMENTS -->
    <section class="bg-white border-b border-th8-border py-16">
      <div class="max-w-6xl mx-auto px-4 space-y-10">
        <!-- Title -->
        <div class="text-center space-y-3">
          <h2 class="text-2xl font-bold text-th8-text">เราทำงานกับทีมแบบไหน?</h2>
          <p class="text-sm text-th8-text/70">
            TH8.AI ทำงานใกล้ชิดกับทีมที่ “แตะข้อมูลและระบบทุกวัน”
            ไม่ว่าจะเป็นการเงิน ปฏิบัติการ หรือโลจิสติกส์
          </p>
        </div>

        <!-- 3 Columns -->
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Finance -->
          <div class="p-6 rounded-2xl border border-th8-border bg-slate-50">
            <div class="flex items-center gap-3 mb-3">
              <div
                class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-th8-primary/10"
              >
                <!-- finance icon -->
                <svg viewBox="0 0 24 24" class="h-4 w-4 text-th8-primary">
                  <path
                    d="M4 18h16"
                    class="stroke-current opacity-50"
                    stroke-width="1.3"
                    stroke-linecap="round"
                  />
                  <rect x="5" y="10" width="3" height="6" class="fill-current opacity-40" />
                  <rect x="10.5" y="8" width="3" height="8" class="fill-current opacity-70" />
                  <rect x="16" y="6" width="3" height="10" class="fill-current" />
                </svg>
              </div>
              <h3 class="font-semibold text-th8-text">Finance &amp; FP&amp;A</h3>
            </div>
            <p class="text-sm text-th8-text/70 mb-4">
              ลดเวลาปิดงบ วิเคราะห์ตัวเลขอัตโนมัติ เตรียม Insight ให้ผู้บริหาร
            </p>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Time saved 30–50%</li>
              <li>• ลด Human-error จากไฟล์ Excel / Sheet</li>
              <li>• FP&amp;A Copilot / Scenario Engine</li>
            </ul>
          </div>

          <!-- Ops -->
          <div class="p-6 rounded-2xl border border-th8-border bg-slate-50">
            <div class="flex items-center gap-3 mb-3">
              <div
                class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10"
              >
                <!-- ops icon: boxes -->
                <svg viewBox="0 0 24 24" class="h-4 w-4 text-emerald-600">
                  <rect x="4" y="5" width="7" height="6" rx="1" class="fill-current opacity-70" />
                  <rect x="13" y="7" width="7" height="6" rx="1" class="fill-current opacity-40" />
                  <rect x="8" y="13" width="8" height="6" rx="1" class="fill-current opacity-60" />
                </svg>
              </div>
              <h3 class="font-semibold text-th8-text">Operations &amp; Inventory</h3>
            </div>
            <p class="text-sm text-th8-text/70 mb-4">
              เชื่อมระบบเดิม + จัดการ Order, Stock, Exception แบบอัตโนมัติ
            </p>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• Error ลดลง 20–40%</li>
              <li>• Inventory Health &amp; Replenishment</li>
              <li>• Order Intake &amp; Validation Agent</li>
            </ul>
          </div>

          <!-- Logistics -->
          <div class="p-6 rounded-2xl border border-th8-border bg-slate-50">
            <div class="flex items-center gap-3 mb-3">
              <div
                class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10"
              >
                <!-- logistics icon: simple truck -->
                <svg viewBox="0 0 24 24" class="h-4 w-4 text-sky-600">
                  <rect x="3" y="9" width="9" height="5" rx="1" class="fill-current opacity-80" />
                  <path d="M12 10h4l3 3v1h-7" class="fill-current opacity-60" />
                  <circle cx="7" cy="16" r="1.6" class="fill-current" />
                  <circle cx="17" cy="16" r="1.6" class="fill-current" />
                </svg>
              </div>
              <h3 class="font-semibold text-th8-text">Logistics &amp; Delivery</h3>
            </div>
            <p class="text-sm text-th8-text/70 mb-4">
              Route planning, Dispatch, Follow-up และ Exception ช่วยลดภาระทีมขนส่ง
            </p>
            <ul class="text-sm text-slate-600 space-y-1">
              <li>• ลดค่าน้ำมัน / เพิ่ม Drop per trip</li>
              <li>• Route Planner &amp; Exception Engine</li>
              <li>• Delivery Reconciliation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

   

    <!-- KPI / TRUST SECTION -->
    <section class="bg-slate-50 border-b border-th8-border py-16">
      <div class="max-w-6xl mx-auto px-4 space-y-8">
        <div class="space-y-2">
          <h2 class="text-2xl font-bold text-th8-text">
            ตัวเลขที่องค์กรไทยคาดหวังได้จาก TH8 Agentic System
          </h2>
          <p class="text-sm text-slate-600 max-w-2xl">
            เป้าหมายชัดเจน: ไม่ใช่แค่ “ลองใช้ AI ดู” แต่ต้องกลับมาเป็นตัวเลขที่วัดได้จริง
            ทั้งเรื่องเวลา ความผิดพลาด และต้นทุนในการทำงานของทีม
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-4 text-sm">
          <div class="rounded-2xl border border-th8-border bg-white p-4 shadow-sm">
            <div class="flex items-center justify-between mb-1">
              <p class="text-[11px] uppercase tracking-wide text-slate-500">Routine Work</p>
              <!-- clock icon -->
              <svg viewBox="0 0 24 24" class="h-4 w-4 text-slate-500">
                <circle cx="12" cy="12" r="7" class="fill-none stroke-current" stroke-width="1.2" />
                <path
                  d="M12 9v4l2 1.5"
                  class="stroke-current"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p class="text-2xl font-semibold text-th8-text mb-1">30–50%</p>
            <p class="text-[12px] text-slate-600">
              ลดงานคีย์มือ ไล่เช็กเอกสาร และงานตามงานข้ามระบบ
            </p>
          </div>

          <div class="rounded-2xl border border-th8-border bg-white p-4 shadow-sm">
            <div class="flex items-center justify-between mb-1">
              <p class="text-[11px] uppercase tracking-wide text-slate-500">Error</p>
              <!-- shield/check icon -->
              <svg viewBox="0 0 24 24" class="h-4 w-4 text-emerald-500">
                <path
                  d="M12 4l6 2v5c0 3.3-1.9 6.3-6 7.8-4.1-1.5-6-4.5-6-7.8V6l6-2z"
                  class="fill-current opacity-20"
                />
                <path
                  d="M9 11.5l2 2 4-3.5"
                  class="stroke-current"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p class="text-2xl font-semibold text-th8-text mb-1">20–40%</p>
            <p class="text-[12px] text-slate-600">
              ลด Human error ใน PO, Invoice, Stock และ Transaction
            </p>
          </div>

          <div class="rounded-2xl border border-th8-border bg-white p-4 shadow-sm">
            <div class="flex items-center justify-between mb-1">
              <p class="text-[11px] uppercase tracking-wide text-slate-500">Cycle Time</p>
              <!-- trend line icon -->
              <svg viewBox="0 0 24 24" class="h-4 w-4 text-th8-primary">
                <path
                  d="M4 16l5-5 4 3 7-8"
                  class="stroke-current"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p class="text-2xl font-semibold text-th8-text mb-1">25–35%</p>
            <p class="text-[12px] text-slate-600">
              ลดเวลาปิดงบ เคลียร์งานสะสม และเคสค้างในระบบ
            </p>
          </div>

          <div class="rounded-2xl border border-th8-border bg-white p-4 shadow-sm">
            <div class="flex items-center justify-between mb-1">
              <p class="text-[11px] uppercase tracking-wide text-slate-500">Visibility</p>
              <!-- dashboard icon -->
              <svg viewBox="0 0 24 24" class="h-4 w-4 text-slate-500">
                <rect x="4" y="5" width="7" height="5" class="fill-current opacity-70" />
                <rect x="13" y="5" width="7" height="5" class="fill-current opacity-40" />
                <rect x="4" y="13" width="7" height="6" class="fill-current opacity-40" />
                <rect x="13" y="13" width="7" height="6" class="fill-current opacity-70" />
              </svg>
            </div>
            <p class="text-2xl font-semibold text-th8-text mb-1">Real-time</p>
            <p class="text-[12px] text-slate-600">
              ดึงข้อมูลจากหลายระบบมาอยู่ในมุมมองเดียวให้ทีมตัดสินใจได้เร็วขึ้น
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW WE WORK + PLAYBOOK -->
    <section class="bg-white py-16">
      <div class="max-w-6xl mx-auto px-4 space-y-12">
        <!-- 3 Steps -->
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-center text-th8-text">
            ทำงานกับเราแบบเป็นระบบ ชัดเจนตั้งแต่วันแรก
          </h2>
          <div class="grid md:grid-cols-3 gap-6 text-sm">
            <div
              class="bg-slate-50 rounded-2xl border border-th8-border shadow-sm p-6 text-center space-y-2"
            >
              <div
                class="w-10 h-10 mx-auto bg-th8-red text-white rounded-full flex items-center justify-center font-bold text-lg mb-1"
              >
                1
              </div>
              <h3 class="font-semibold text-th8-text">คุยโจทย์ &amp; วาดภาพรวม</h3>
              <p class="text-[13px] text-slate-700">
                เข้าใจบริบทธุรกิจ, ระบบที่ใช้อยู่, KPI ที่อยากเปลี่ยน
                แล้วช่วยกันเลือก Use case แรกที่ Impact สูง
              </p>
            </div>

            <div
              class="bg-slate-50 rounded-2xl border border-th8-border shadow-sm p-6 text-center space-y-2"
            >
              <div
                class="w-10 h-10 mx-auto bg-th8-red text-white rounded-full flex items-center justify-center font-bold text-lg mb-1"
              >
                2
              </div>
              <h3 class="font-semibold text-th8-text">Prototype &amp; Pilot</h3>
              <p class="text-[13px] text-slate-700">
                สร้าง Prototype ที่แตะข้อมูลจริงและ Workflow จริง
                ให้ทีมลองใช้ พร้อมเก็บ Feedback, Time saved, Error
              </p>
            </div>

            <div
              class="bg-slate-50 rounded-2xl border border-th8-border shadow-sm p-6 text-center space-y-2"
            >
              <div
                class="w-10 h-10 mx-auto bg-th8-red text-white rounded-full flex items-center justify-center font-bold text-lg mb-1"
              >
                3
              </div>
              <h3 class="font-semibold text-th8-text">Scale &amp; Roll-out</h3>
              <p class="text-[13px] text-slate-700">
                ขยายจาก 1 ทีม → ทั้งฝ่าย หรือหลายสาขา
                พร้อม Governance, Training และ Monitoring
              </p>
            </div>
          </div>
        </div>

        <!-- Playbook CTA -->
        <div class="max-w-4xl mx-auto">
          <div
            class="rounded-2xl border border-th8-border bg-th8-surface p-8 shadow-sm space-y-4 text-center relative overflow-hidden"
          >
            <div class="hidden md:block absolute -right-6 -bottom-4 opacity-20">
              <img
                src="../assets/illustrations/undraw_agreement.svg"
                alt="Workshop illustration"
                class="w-40 h-auto"
              />
            </div>

            <p class="text-[11px] font-semibold uppercase tracking-wide text-th8-primary">
              สำหรับทีม IT / Data / Process Owner
            </p>
            <h3 class="text-lg font-semibold text-th8-text">อยากเห็นภาพเชิงเทคนิคมากขึ้น?</h3>
            <p class="text-sm text-th8-text/80 max-w-2xl mx-auto">
              Methodology แบบเต็ม, 7-layer framework, Diagram และตัวอย่าง Implementation
              รวบรวมไว้ที่หน้า Playbook เพื่อใช้คุยเชิงลึกกับทีมภายในของคุณ
            </p>
            <RouterLink
              to="/playbook"
              class="inline-flex items-center rounded-full bg-th8-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-th8-accent mt-2"
            >
              เปิดดู Playbook
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="border-t border-th8-border bg-th8-surface">
      <div
        class="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div>
          <h2 class="text-lg font-semibold text-th8-text mb-1">
            อยากเห็น Agent ทำงานกับข้อมูลจริงของบริษัทคุณ?
          </h2>
          <p class="text-sm text-slate-600">
            เราช่วยคุณเลือกจุดเริ่มต้นที่ Impact สูง แต่ไม่ disrupt ทีมงานเกินไป
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <a
            href="https://lin.ee/4YAf9fp"
            target="_blank"
          class="inline-flex items-center justify-center rounded-full border border-th8-border px-4 py-2 text-xs font-medium  bg-green-500 text-th8-text text-white  hover:bg-slate-30"
          >
            แอด LINE สอบถาม
          </a>
          <RouterLink
            :to="{ name: 'contact' }"
            class="inline-flex items-center justify-center rounded-full bg-th8-primary px-4 py-2 text-xs font-semibold text-white hover:bg-th8-accent"
          >
            ส่งโจทย์ให้เราช่วยคิด
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
