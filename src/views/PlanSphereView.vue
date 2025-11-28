<template>
  <div class="min-h-screen bg-th8-surface text-th8-text">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-12 lg:space-y-16">
      <!-- Breadcrumb -->
      <div class="flex items-center gap-2 text-[11px] text-slate-500">
        <RouterLink to="/services" class="hover:text-th8-primary cursor-pointer">
          Solutions
        </RouterLink>
        <span>/</span>
        <span class="text-slate-700 font-medium">PlanSphere™ FP&amp;A Suite</span>
      </div>

      
      <!-- Language switch -->
      <div class="flex justify-end">
        <div class="inline-flex items-center gap-1 rounded-full border border-th8-border bg-white/80 px-2 py-1 text-[11px] text-slate-600 shadow-sm">
          <RouterLink
            :to="{ name: 'PlanSphere' }"
            class="px-2 py-0.5 rounded-full"
            :class="$route.name === 'PlanSphere' ? 'bg-th8-primary text-white' : 'text-slate-600 hover:text-th8-primary'"
          >
            EN
          </RouterLink>
          <RouterLink
            :to="{ name: 'plansphere-th' }"
            class="px-2 py-0.5 rounded-full"
            :class="$route.name === 'plansphere-th' ? 'bg-th8-primary text-white' : 'text-slate-600 hover:text-th8-primary'"
          >
            TH
          </RouterLink>
        </div>
      </div>

<!-- HERO -->
      <section class="grid lg:grid-cols-[1.4fr,1fr] gap-8 lg:gap-10 items-center">
        <!-- Left: copy -->
        <div class="space-y-5">
          <p class="text-[11px] uppercase tracking-[0.25em] text-th8-primary flex items-center gap-2">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-th8-primary" />
            PlanSphere™ · FP&amp;A AI Suite for Thai CFOs
          </p>

          <h1 class="text-3xl lg:text-4xl font-semibold leading-tight">
            Turn your FP&amp;A from spreadsheets<br class="hidden sm:block" />
            into an <span class="text-th8-primary">AI-driven decision system</span>.
          </h1>

          <p class="text-sm lg:text-base text-slate-600 max-w-xl">
            PlanSphere™ is TH8’s FP&amp;A platform for Thai CFOs who want more than BI reports.
            We combine budgeting, forecasting, Actual vs Plan, scenario simulation, and an AI FP&amp;A Copilot
            into a single workflow your finance team can actually use every month.
          </p>

          <!-- CFO bullet value -->
          <div class="grid sm:grid-cols-3 gap-3 text-xs">
            <div class="bg-white border border-th8-border rounded-xl p-3 shadow-sm">
              <p class="text-slate-500 mb-1">Month-end close</p>
              <p class="font-semibold">−40–70% faster</p>
            </div>
            <div class="bg-white border border-th8-border rounded-xl p-3 shadow-sm">
              <p class="text-slate-500 mb-1">Forecast accuracy</p>
              <p class="font-semibold">+10–25% improvement</p>
            </div>
            <div class="bg-white border border-th8-border rounded-xl p-3 shadow-sm">
              <p class="text-slate-500 mb-1">Manual Excel files</p>
              <p class="font-semibold">Baseline −50–80%</p>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-wrap items-center gap-3">
            <RouterLink
              :to="{ name: 'contact' }"
              class="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium bg-th8-primary text-white shadow-sm hover:bg-th8-accent transition-colors"
            >
              Book 60-min FP&amp;A Demo
            </RouterLink>
            <RouterLink
              :to="{ name: 'fpa-playbook' }"
              class="inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs font-medium border border-th8-border bg-white text-slate-800 hover:border-th8-primary transition-colors"
            >
              View PlanSphere™ Playbook
            </RouterLink>
          </div>

          <!-- Who it's for -->
          <div class="flex flex-wrap gap-2 text-[11px] text-slate-600">
            <span class="px-3 py-1 rounded-full bg-white border border-th8-border">
              CFO &amp; Head of Finance
            </span>
            <span class="px-3 py-1 rounded-full bg-white border border-th8-border">
              FP&amp;A &amp; Business Planning
            </span>
            <span class="px-3 py-1 rounded-full bg-white border border-th8-border">
              Thai businesses with 50–5,000 employees
            </span>
          </div>
        </div>

        <!-- Right: journey card -->
        <div class="relative">
          <div
            class="absolute -inset-1 rounded-3xl bg-gradient-to-br from-red-200/70 via-slate-50 to-red-100 blur-xl opacity-70"
          />
          <div class="relative bg-white border border-th8-border rounded-3xl p-4 lg:p-5 shadow-xl space-y-4">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">
              CFO User Journey
            </p>

            <div class="space-y-3 text-xs text-slate-700">
              <div class="flex gap-3 items-start">
                <div
                  class="mt-0.5 w-6 h-6 flex items-center justify-center rounded-full bg-th8-primary text-white text-[11px] font-semibold"
                >
                  1
                </div>
                <div>
                  <p class="font-semibold text-th8-text">Connect real numbers</p>
                  <p class="text-slate-600">
                    P&amp;L, drivers, cost centers, and product/channel data from ERP, WMS, or Excel.
                  </p>
                </div>
              </div>

              <div class="flex gap-3 items-start">
                <div
                  class="mt-0.5 w-6 h-6 flex items-center justify-center rounded-full bg-slate-900 text-white text-[11px] font-semibold"
                >
                  2
                </div>
                <div>
                  <p class="font-semibold text-th8-text">Run monthly FP&amp;A workflow</p>
                  <p class="text-slate-600">
                    Budget, Forecast, and Actual vs Plan in one model. No more 20 disconnected Excel files.
                  </p>
                </div>
              </div>

              <div class="flex gap-3 items-start">
                <div
                  class="mt-0.5 w-6 h-6 flex items-center justify-center rounded-full bg-slate-900 text-white text-[11px] font-semibold"
                >
                  3
                </div>
                <div>
                  <p class="font-semibold text-th8-text">Ask AI FP&amp;A—get board-ready answers</p>
                  <p class="text-slate-600">
                    “Why did margin drop in Q2?”, “If we increase price 3%, what happens?” — answered with real data.
                  </p>
                </div>
              </div>
            </div>

            <div class="border-t border-dashed border-th8-border pt-3">
              <p class="text-[11px] text-slate-500">
                PlanSphere wraps around your existing ERP/BI — you don’t have to rip and replace anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION: Why existing tools are not enough -->
      <section class="space-y-5">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              For CFOs who feel stuck between Excel, BI, and TM1
            </p>
            <h2 class="text-xl lg:text-2xl font-semibold">
              Why traditional FP&amp;A tools don’t solve your real problem
            </h2>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-2">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              Excel
            </p>
            <p class="font-semibold text-th8-text">Flexible, but fragile</p>
            <p class="text-slate-600 text-xs">
              Works for a while, but hard to govern, error-prone, version chaos, and impossible to run serious
              scenario analysis over multiple years and BU.
            </p>
          </div>

          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-2">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              BI dashboards
            </p>
            <p class="font-semibold text-th8-text">Great for “what happened”</p>
            <p class="text-slate-600 text-xs">
              BI shows history, but doesn’t “think” about volume-price-mix, driver-based planning, or business
              rules. You still do FP&amp;A logic in your head or in Excel.
            </p>
          </div>

          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-2">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              Heavy FP&amp;A systems
            </p>
            <p class="font-semibold text-th8-text">Powerful, but overkill</p>
            <p class="text-slate-600 text-xs">
              TM1/Anaplan class tools are expensive, slow to implement, and require a modeling team. Not realistic
              for most Thai businesses outside top tier.
            </p>
          </div>
        </div>

        <div class="bg-white border border-red-100 rounded-2xl p-4 flex flex-col md:flex-row md:items-center gap-3">
          <div class="text-sm text-slate-700">
            <span class="font-semibold text-th8-text">PlanSphere™</span> sits exactly in the middle:
            the modeling power of TM1, the speed of modern data stack, and the flexibility of AI — priced and
            implemented for Thai mid-market.
          </div>
        </div>
      </section>

      <!-- SECTION: How PlanSphere works -->
      <section class="space-y-5">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              How PlanSphere works
            </p>
            <h2 class="text-xl lg:text-2xl font-semibold">
              From data chaos to clear FP&amp;A decisions — in one monthly workflow
            </h2>
          </div>
        </div>

        <div class="grid lg:grid-cols-[1.3fr,1fr] gap-6">
          <!-- Journey steps -->
          <div class="space-y-4">
            <div
              v-for="(step, index) in journeySteps"
              :key="index"
              class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm flex gap-3"
            >
              <div
                class="mt-0.5 w-8 h-8 flex items-center justify-center rounded-full bg-slate-900 text-white text-xs font-semibold"
              >
                {{ index + 1 }}
              </div>
              <div class="text-sm space-y-1">
                <p class="font-semibold text-th8-text">
                  {{ step.title }}
                </p>
                <p class="text-slate-600 text-xs">
                  {{ step.description }}
                </p>
                <p v-if="step.example" class="text-[11px] text-slate-500">
                  Example: <span class="text-slate-800">{{ step.example }}</span>
                </p>
              </div>
            </div>
          </div>

          <!-- FP&A flow mini-diagram -->
          <div class="bg-white border border-th8-border rounded-2xl p-4 lg:p-5 shadow-sm space-y-3 text-xs">
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Monthly FP&amp;A Flow
            </p>

            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500" />
                <span class="font-semibold text-th8-text">Month-end close</span>
              </div>
              <p class="text-slate-600">
                Actuals loaded from ERP/WMS → P&amp;L cube updated → variance engine flags key deviations.
              </p>
            </div>

            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-blue-500" />
                <span class="font-semibold text-th8-text">Rolling forecast</span>
              </div>
              <p class="text-slate-600">
                Drivers (volume, price, cost, headcount) adjusted → forecast scenario generated and stored.
              </p>
            </div>

            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-th8-primary" />
                <span class="font-semibold text-th8-text">CFO decision</span>
              </div>
              <p class="text-slate-600">
                CFO uses AI FP&amp;A Copilot to ask real questions and test 2–3 scenarios before making calls.
              </p>
            </div>

            <div class="border-t border-dashed border-th8-border pt-3 mt-2">
              <p class="text-[11px] text-slate-500">
                PlanSphere can run on top of your current BI and ERP.
                No need to replace your existing stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION: Capabilities -->
      <section class="space-y-5">
        <div class="flex items-baseline justify-between gap-4">
          <div>
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Capabilities
            </p>
            <h2 class="text-xl lg:text-2xl font-semibold">
              One platform, five FP&amp;A building blocks
            </h2>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-1.5">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              1 · Budgeting
            </p>
            <p class="font-semibold text-th8-text">Driver-based budget input</p>
            <p class="text-slate-600 text-xs">
              Standardised P&amp;L template. Product, BU, channel, cost center. All in one model instead of 20
              spreadsheets.
            </p>
          </div>

          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-1.5">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              2 · Forecast
            </p>
            <p class="font-semibold text-th8-text">Rolling forecast with real drivers</p>
            <p class="text-slate-600 text-xs">
              Volume, price, promo, headcount, cost assumption — connected back to P&amp;L and scenarios.
            </p>
          </div>

          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-1.5">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              3 · Actual vs Plan
            </p>
            <p class="font-semibold text-th8-text">Variance engine</p>
            <p class="text-slate-600 text-xs">
              Auto-compute variance by product, channel, region, and driver. Highlight where to look — not just
              show numbers.
            </p>
          </div>

          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-1.5">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              4 · Scenario engine
            </p>
            <p class="font-semibold text-th8-text">What-if in seconds</p>
            <p class="text-slate-600 text-xs">
              “+3% price, −10% trade spend, −2% volume” → instant EBITDA impact by BU and channel.
            </p>
          </div>

          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-1.5">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              5 · AI FP&amp;A Copilot
            </p>
            <p class="font-semibold text-th8-text">Ask in Thai, answer with data</p>
            <p class="text-slate-600 text-xs">
              “Why is margin down in Q2?”, “Which branch is leaking profit?”, “If we close 1 warehouse?” —
              answered with numbers and reasoning.
            </p>
          </div>
        </div>
      </section>

      <!-- SECTION: Playbook snippet -->
      <section class="space-y-5">
        <div class="flex items-baseline justify-between gap-4">
          <div>
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              TH8 · Playbook inside PlanSphere
            </p>
            <h2 class="text-xl lg:text-2xl font-semibold">
              Not just a tool — a ready-made FP&amp;A playbook
            </h2>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-5 text-xs">
          <!-- Left: FP&A Playbook outline -->
          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-2">
            <p class="font-semibold text-th8-text">
              PlanSphere · AI FP&amp;A Suite Playbook (Blueprint)
            </p>
            <ul class="space-y-1.5 text-slate-700">
              <li><span class="font-semibold text-th8-text">1. Data needed:</span> P&amp;L, drivers, GL mapping, business rules</li>
              <li><span class="font-semibold text-th8-text">2. Workflow:</span> from data sanity → views → insight → packs</li>
              <li><span class="font-semibold text-th8-text">3. Decision structure:</span> margin, cost drivers, “what if” questions</li>
              <li><span class="font-semibold text-th8-text">4. Exceptions:</span> missing data, mapping changes, outliers</li>
              <li><span class="font-semibold text-th8-text">5. KPIs:</span> time-to-close, forecast accuracy, Excel reduction</li>
              <li><span class="font-semibold text-th8-text">6. Timeline:</span> 6–8 weeks implementation plan</li>
              <li><span class="font-semibold text-th8-text">7. Deliverables:</span> FP&amp;A model, agent, dashboards, training</li>
            </ul>
          </div>

          <!-- Right: Implementation timeline -->
          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-3">
            <p class="font-semibold text-th8-text text-sm">8-week FP&amp;A implementation for Thai businesses</p>
            <ol class="space-y-2 text-slate-700">
              <li>
                <span class="font-semibold text-th8-text">Week 1–2 · Alignment &amp; mapping</span><br />
                Define P&amp;L structure, drivers, and connect first data sources.
              </li>
              <li>
                <span class="font-semibold text-th8-text">Week 3–4 · FP&amp;A model</span><br />
                Build cubes, driver model, and first Actual vs Plan view.
              </li>
              <li>
                <span class="font-semibold text-th8-text">Week 5–6 · AI &amp; scenarios</span><br />
                Enable AI Copilot, scenario engine, and CFO-ready views.
              </li>
              <li>
                <span class="font-semibold text-th8-text">Week 7–8 · Pilot &amp; roll-out</span><br />
                Run with real management questions, refine, then roll-out to BU.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <!-- SECTION: Case studies -->
      <section class="space-y-5">
        <div class="flex items-baseline justify-between gap-4">
          <div>
            <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Example scenarios
            </p>
            <h2 class="text-xl lg:text-2xl font-semibold">
              Two real-world stories: FMCG &amp; Logistics warehouse
            </h2>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-5 text-sm">
          <!-- FMCG case -->
          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-2">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              FMCG · Snack brand
            </p>
            <p class="font-semibold text-th8-text">
              From Excel chaos to driver-based P&amp;L with AI variance explanation
            </p>
            <ul class="list-disc list-inside text-slate-700 text-xs space-y-1">
              <li>Replaced 15+ Excel files used for annual budget and Q-to-Q variance.</li>
              <li>Built product-channel P&amp;L with volume/price/promo drivers.</li>
              <li>AI FP&amp;A explains margin drop or gain per quarter, in Thai and English.</li>
              <li>Scenario: “+3% price, −10% trade spend” → +12M THB EBITDA in 1 year.</li>
            </ul>
            <RouterLink
              :to="{ name: 'fpa-cases' }"
              class="inline-flex items-center mt-2 text-[11px] text-th8-primary hover:underline"
            >
              View FP&amp;A Case Studies →
            </RouterLink>
          </div>

          <!-- Logistics case -->
          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-2">
            <p class="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
              Logistics &amp; warehouse
            </p>
            <p class="font-semibold text-th8-text">
              Cost-per-drop FP&amp;A with route, warehouse, and fuel drivers
            </p>
            <ul class="list-disc list-inside text-slate-700 text-xs space-y-1">
              <li>Linked FP&amp;A model with orders, routes, fuel cost, and warehouse overheads.</li>
              <li>Actual vs Plan at “cost per drop” and “cost per route” level.</li>
              <li>AI suggests which routes and customers to review based on profitability.</li>
              <li>Scenario: “reduce empty run by 10%” → ~9.4M THB per year improvement.</li>
            </ul>
          </div>
        </div>

        <div
          class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm"
        >
          <div class="text-slate-700">
            Want to see PlanSphere with your own P&amp;L and drivers?
          </div>
          <RouterLink
            :to="{ name: 'contact' }"
            class="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium bg-th8-primary text-white shadow-sm hover:bg-th8-accent transition-colors"
          >
            Schedule a 60-minute FP&amp;A session
          </RouterLink>
        </div>
      </section>

      <!-- SECTION: FAQ / Reassurance for CFO -->
      <section class="pb-10 space-y-5">
        <div>
          <p class="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            For CFO &amp; Finance leaders
          </p>
          <h2 class="text-xl lg:text-2xl font-semibold">
            What CFOs usually ask us before saying “Let’s do a pilot”
          </h2>
        </div>

        <div class="grid lg:grid-cols-3 gap-4 text-xs">
          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-1.5">
            <p class="font-semibold text-th8-text">
              “Do we need to replace our ERP or BI?”
            </p>
            <p class="text-slate-700">
              No. PlanSphere sits on top of your existing systems. We use light ETL from ERP/WMS/BI and create an
              FP&amp;A model that complements what you already have.
            </p>
          </div>

          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-1.5">
            <p class="font-semibold text-th8-text">
              “How long until we see real insight?”
            </p>
            <p class="text-slate-700">
              With one BU and clear data, we typically show real variance &amp; scenario insight in 4–6 weeks,
              using your own numbers — not dummy data.
            </p>
          </div>

          <div class="bg-white border border-th8-border rounded-2xl p-4 shadow-sm space-y-1.5">
            <p class="font-semibold text-th8-text">
              “Can my team maintain this without a big FP&amp;A tech team?”
            </p>
            <p class="text-slate-700">
              Yes. PlanSphere is designed for finance teams, not for a separate modeling team. TH8 provides the
              logic layer and guardrails so your FP&amp;A team can focus on decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const journeySteps = [
  {
    title: 'Connect and structure your P&L & drivers',
    description:
      'We map your chart of accounts, products, channels, BU, and cost centers into a clean FP&A model on Postgres/Cube.js.',
    example: 'Map GL_4000–4010 as Revenue, GL_5000 series as COGS, plus volume/price/promo drivers.'
  },
  {
    title: 'Run Budget, Forecast, and Actual vs Plan in one model',
    description:
      'Finance enters budget and forecast using one standard template, while Actuals flow in from ERP/WMS every month.',
    example: 'Finance updates forecast assumptions, and PlanSphere recalculates P&L and margin per BU and channel.'
  },
  {
    title: 'Let AI FP&A explain what changed and why',
    description:
      'LangGraph-based agent uses your cubes and drivers to explain variance, surface key drivers, and prepare management-ready narratives.',
    example: '“Why is Q2 EBITDA better than plan while COGS and marketing are above budget?”'
  },
  {
    title: 'Simulate scenarios before you commit',
    description:
      'DuckDB scenario engine runs “what-if” for price, volume, cost, and trade spend — with full P&L impact.',
    example: '“+3% price, −10% trade spend, −2% volume” → EBITDA and margin impact by BU.'
  }
]
</script>

<style scoped>
/* Uses global Prompt font from main.css */
</style>
