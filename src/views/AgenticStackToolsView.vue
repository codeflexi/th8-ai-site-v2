<template>
  <div class="bg-slate-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 lg:px-6 py-10 lg:py-14 space-y-10">
      <!-- Header -->
      <section class="space-y-3">
        <p
          class="text-[11px] uppercase tracking-[0.25em] text-red-500 font-semibold"
        >
          TH8.AI · Agentic Fullstack Tooling
        </p>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900">
          Agentic Stack → Tools &amp; Fullstack สำหรับ TH8.AI
        </h1>
        <p class="text-sm text-slate-600 max-w-3xl">
          โครงสร้างสำหรับ Solution Architecture / DevOps / Dev เพื่ออธิบายว่า
          Agentic Stack ของ TH8 ใช้เครื่องมืออะไรบ้าง ตั้งแต่
          <span class="font-semibold text-slate-900"
            >Frontend → Backend API → Agent Orchestration → Data &amp; Storage →
            DevOps on AWS EKS</span
          >
        </p>
      </section>

      <!-- 3 Columns -->
      <section class="grid lg:grid-cols-3 gap-6">
        <!-- LAYER 1 -->
        <div
          class="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 space-y-5"
        >
          <div class="flex items-start gap-3">
            <div
              class="h-7 w-7 rounded-xl bg-red-500 text-white flex items-center justify-center text-xs font-bold"
            >
              1
            </div>
            <div>
              <p
                class="text-[11px] uppercase tracking-[0.18em] text-red-500 font-semibold"
              >
                Layer 1 · Orchestration
              </p>
              <p class="text-lg font-semibold text-slate-900">
                Flow, State Machine, API กลางของ Agent
              </p>
            </div>
          </div>

          <!-- Runtime & API -->
          <div class="space-y-2">
            <p
              class="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]"
            >
              Runtime &amp; API
            </p>
            <div
              class="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <img
                loading="lazy"
                src="https://unpkg.com/simple-icons@v11/icons/fastapi.svg"
                alt="FastAPI logo"
                class="h-5 md:h-6 w-5 md:w-6"
              />
              <div>
                <p class="text-sm font-semibold text-slate-900">
                  FastAPI + Uvicorn
                </p>
                <p class="text-[11px] text-slate-500">
                  Backend API / Orchestrator
                </p>
              </div>
            </div>

            <div
              class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <p class="text-sm font-semibold text-slate-900">Python 3.x</p>
              <p class="text-[11px] text-slate-500">
                ภาษาหลักในการเขียน Agent และ Service
              </p>
            </div>
          </div>

          <!-- Agent Orchestration -->
          <div class="space-y-2">
            <p
              class="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]"
            >
              Agent Orchestration
            </p>

            <!-- LangGraph (inline SVG) -->
            <div
              class="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <div class="h-5 md:h-6 w-5 md:w-6 text-emerald-600">
                <svg
                  viewBox="0 0 24 24"
                  class="h-full w-full"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="5" cy="6" r="2.2" />
                  <circle cx="19" cy="6" r="2.2" />
                  <circle cx="7" cy="18" r="2.2" />
                  <circle cx="17" cy="18" r="2.2" />
                  <path d="M7 16L5.5 8" />
                  <path d="M17 16L18.5 8" />
                  <path d="M7 18h8.5" />
                  <path d="M5 6h12" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-900">LangGraph</p>
                <p class="text-[11px] text-slate-500">
                  State Machine / Graph orchestration
                </p>
              </div>
            </div>

            <!-- LangChain (inline SVG) -->
            <div
              class="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <div class="h-5 md:h-6 w-5 md:w-6 text-sky-600">
                <svg
                  viewBox="0 0 24 24"
                  class="h-full w-full"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3.5" y="4" width="6.5" height="7" rx="1.4" />
                  <rect x="14" y="13" width="6.5" height="7" rx="1.4" />
                  <path d="M10 7.5h4M10 11l4 2" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-900">LangChain</p>
                <p class="text-[11px] text-slate-500">
                  Tools, Chains, Integration adapter
                </p>
              </div>
            </div>
          </div>

          <!-- Control Plane -->
          <div class="space-y-2">
            <p
              class="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]"
            >
              Control Plane
            </p>

            <div
              class="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <img
                loading="lazy"
                src="https://unpkg.com/simple-icons@v11/icons/vuedotjs.svg"
                alt="Vue logo"
                class="h-5 md:h-6 w-5 md:w-6"
              />
              <div>
                <p class="text-sm font-semibold text-slate-900">Vue 3 + Vite</p>
                <p class="text-[11px] text-slate-500">
                  Dashboard / Operator UI
                </p>
              </div>
            </div>

            <div
              class="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <img
                loading="lazy"
                src="https://unpkg.com/simple-icons@v11/icons/tailwindcss.svg"
                alt="Tailwind logo"
                class="h-5 md:h-6 w-5 md:w-6"
              />
              <div>
                <p class="text-sm font-semibold text-slate-900">
                  Tailwind CSS
                </p>
                <p class="text-[11px] text-slate-500">
                  Branding / TH8 UI system
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- LAYER 2 -->
        <div
          class="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 space-y-5"
        >
          <div class="flex items-start gap-3">
            <div
              class="h-7 w-7 rounded-xl bg-red-500 text-white flex items-center justify-center text-xs font-bold"
            >
              2
            </div>
            <div>
              <p
                class="text-[11px] uppercase tracking-[0.18em] text-red-500 font-semibold"
              >
                Layer 2 · Specialist Agents
              </p>
              <p class="text-lg font-semibold text-slate-900">
                FP&amp;A, Warehouse, CS, Production Agent
              </p>
            </div>
          </div>

          <!-- LLM Providers -->
          <div class="space-y-2">
            <p
              class="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]"
            >
              LLM Providers
            </p>

            <div
              class="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <img
                loading="lazy"
                src="https://unpkg.com/simple-icons@v11/icons/openai.svg"
                alt="OpenAI logo"
                class="h-5 md:h-6 w-5 md:w-6"
              />
              <div>
                <p class="text-sm font-semibold text-slate-900">
                  OpenAI (GPT family)
                </p>
                <p class="text-[11px] text-slate-500">
                  Reasoning, Multi-turn, Code
                </p>
              </div>
            </div>

            <div
              class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <p class="text-sm font-semibold text-slate-900">
                LLM อื่น (Claude, Bedrock, Local ฯลฯ)
              </p>
              <p class="text-[11px] text-slate-500">
                สำหรับเคสที่ต้องการ Data residency / Thai-tuned / Policy
                เฉพาะ
              </p>
            </div>
          </div>

          <!-- Agent Tools -->
          <div class="space-y-2">
            <p
              class="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]"
            >
              Agent Tools
            </p>

            <div
              class="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <!-- ใช้ icon LangChain แบบเดียวกับด้านบน -->
              <div class="h-5 md:h-6 w-5 md:w-6 text-sky-600">
                <svg
                  viewBox="0 0 24 24"
                  class="h-full w-full"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3.5" y="4" width="6.5" height="7" rx="1.4" />
                  <rect x="14" y="13" width="6.5" height="7" rx="1.4" />
                  <path d="M10 7.5h4M10 11l4 2" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-900">
                  LangChain Tools &amp; Chains
                </p>
                <p class="text-[11px] text-slate-500">
                  SQL / HTTP / Files / Custom tools
                </p>
              </div>
            </div>

            <div
              class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <p class="text-sm font-semibold text-slate-900">
                Pydantic / JSON Schema
              </p>
              <p class="text-[11px] text-slate-500">
                Structured output / Validation
              </p>
            </div>
          </div>

          <!-- RAG & Knowledge -->
          <div class="space-y-2">
            <p
              class="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]"
            >
              RAG &amp; Knowledge
            </p>

            <div
              class="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <img
                loading="lazy"
                src="https://unpkg.com/simple-icons@v11/icons/supabase.svg"
                alt="Supabase logo"
                class="h-5 md:h-6 w-5 md:w-6"
              />
              <div>
                <p class="text-sm font-semibold text-slate-900">
                  Supabase (Postgres + pgvector)
                </p>
                <p class="text-[11px] text-slate-500">
                  Relational DB + Vector Store
                </p>
              </div>
            </div>

            <div
              class="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <img
                loading="lazy"
                src="https://unpkg.com/simple-icons@v11/icons/amazonaws.svg"
                alt="AWS logo"
                class="h-5 md:h-6 w-5 md:w-6"
              />
              <div>
                <p class="text-sm font-semibold text-slate-900">AWS S3</p>
                <p class="text-[11px] text-slate-500">
                  เก็บไฟล์, Knowledge corpus, PDF
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- LAYER 3 -->
        <div
          class="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 space-y-5"
        >
          <div class="flex items-start gap-3">
            <div
              class="h-7 w-7 rounded-xl bg-red-500 text-white flex items-center justify-center text-xs font-bold"
            >
              3
            </div>
            <div>
              <p
                class="text-[11px] uppercase tracking-[0.18em] text-red-500 font-semibold"
              >
                Layer 3 · Integration &amp; DevOps
              </p>
              <p class="text-lg font-semibold text-slate-900">
                เชื่อมระบบเดิม + Security + รันบน AWS EKS
              </p>
            </div>
          </div>

          <!-- Integration Layer -->
          <div class="space-y-2">
            <p
              class="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]"
            >
              Integration Layer
            </p>

            <!-- LangGraph Flows -->
            <div
              class="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <div class="h-5 md:h-6 w-5 md:w-6 text-emerald-600">
                <svg
                  viewBox="0 0 24 24"
                  class="h-full w-full"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="5" cy="6" r="2.2" />
                  <circle cx="19" cy="6" r="2.2" />
                  <circle cx="7" cy="18" r="2.2" />
                  <circle cx="17" cy="18" r="2.2" />
                  <path d="M7 16L5.5 8" />
                  <path d="M17 16L18.5 8" />
                  <path d="M7 18h8.5" />
                  <path d="M5 6h12" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-900">
                  LangGraph Flows
                </p>
                <p class="text-[11px] text-slate-500">
                  ERP/WMS/CRM → Agent Flow
                </p>
              </div>
            </div>

            <!-- LangChain Connectors -->
            <div
              class="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <div class="h-5 md:h-6 w-5 md:w-6 text-sky-600">
                <svg
                  viewBox="0 0 24 24"
                  class="h-full w-full"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="3.5" y="4" width="6.5" height="7" rx="1.4" />
                  <rect x="14" y="13" width="6.5" height="7" rx="1.4" />
                  <path d="M10 7.5h4M10 11l4 2" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-900">
                  LangChain Connectors
                </p>
                <p class="text-[11px] text-slate-500">
                  HTTP / DB Client / File IO
                </p>
              </div>
            </div>
          </div>

          <!-- DevOps & Observability -->
          <div class="space-y-2">
            <p
              class="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]"
            >
              DevOps &amp; Observability
            </p>

            <div
              class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <p class="text-sm font-semibold text-slate-900">Docker</p>
              <p class="text-[11px] text-slate-500">
                Containerization สำหรับ FastAPI, Agent services, Worker
              </p>
            </div>

            <div
              class="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <img
                loading="lazy"
                src="https://unpkg.com/simple-icons@v11/icons/kubernetes.svg"
                alt="Kubernetes logo"
                class="h-5 md:h-6 w-5 md:w-6"
              />
              <div>
                <p class="text-sm font-semibold text-slate-900">
                  AWS EKS (Kubernetes)
                </p>
                <p class="text-[11px] text-slate-500">
                  Cluster หลักของ Agentic Backend
                </p>
              </div>
            </div>

            <div
              class="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <img
                loading="lazy"
                src="https://unpkg.com/simple-icons@v11/icons/github.svg"
                alt="GitHub logo"
                class="h-5 md:h-6 w-5 md:w-6"
              />
              <div>
                <p class="text-sm font-semibold text-slate-900">
                  GitHub Actions
                </p>
                <p class="text-[11px] text-slate-500">
                  CI/CD – Build &amp; Deploy to EKS
                </p>
              </div>
            </div>

            <div
              class="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
            >
              <img
                loading="lazy"
                src="https://unpkg.com/simple-icons@v11/icons/grafana.svg"
                alt="Grafana logo"
                class="h-5 md:h-6 w-5 md:w-6"
              />
              <div>
                <p class="text-sm font-semibold text-slate-900">
                  Prometheus / Grafana / Loki
                </p>
                <p class="text-[11px] text-slate-500">
                  Observability / Logs / Metrics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Note -->
      <section class="text-[11px] text-slate-500">
        Stack นี้ใช้เป็น Reference สำหรับทีมชุด TH8.AI – สามารถปรับเปลี่ยน
        Provider ตาม Cloud / Policy ของลูกค้าได้ แต่โครง Agentic Flow
        ยังเหมือนเดิม
      </section>
    </div>
  </div>
</template>

<script setup>
</script>
