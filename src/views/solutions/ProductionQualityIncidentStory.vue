<!-- src/views/ProductionQualityIncidentStory.vue -->
<template>
  <div class="min-h-screen bg-slate-50">
    <main class="max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-10">
      <!-- Breadcrumb + Title -->
      <section class="space-y-3">
        <nav class="text-xs md:text-sm text-slate-500 flex items-center gap-1">
          <RouterLink to="/" class="hover:text-slate-700">TH8.AI</RouterLink>
          <span>/</span>
          <RouterLink to="/services" class="hover:text-slate-700">Solutions</RouterLink>
          <span>/</span>
          <span class="text-slate-700">Production &amp; Quality Incident Agent</span>
        </nav>

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="space-y-2">
            <p class="text-xs uppercase tracking-[0.18em] text-emerald-500 font-semibold">
              Manufacturing &amp; Quality Automation
            </p>
            <h1 class="text-2xl md:text-3xl font-semibold text-slate-900">
              จาก “ไลน์แจ้งเคสเสียแบบกระจัดกระจาย”
              <span class="underline decoration-emerald-500 decoration-4 underline-offset-4">
                สู่ Incident Agent ที่ช่วยจับ pattern คุณภาพในโรงงานไทย
              </span>
            </h1>
            <p class="text-sm md:text-base text-slate-600 max-w-2xl">
              โฟกัสงานแจ้งปัญหาไลน์ผลิต, เครื่องจักรล้ม, เคสคุณภาพ (QC reject, customer complaint ย้อนกลับ)
              ในโรงงานอาหาร, พลาสติก, ชิ้นส่วนยานยนต์ และ Consumer product ที่ใช้
              <b>Excel, LINE, ERP, MES, ระบบใบแจ้งซ่อม</b> ปนกันไปหมด.
            </p>
          </div>

          <div class="flex flex-col items-start md:items-end gap-3">
            <div
              class="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 text-xs"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span class="font-medium text-slate-700">
                TH8 • AI Agent for Production &amp; Quality
              </span>
            </div>
            <RouterLink
              to="/solutions/production-quality-incident/mockup"
              class="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full bg-emerald-500 text-white shadow-sm hover:bg-emerald-600 transition"
            >
              ดูตัวอย่างหน้าจอ (Mockup UI)
              <span>↗</span>
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- Story: Before -->
      <section class="grid md:grid-cols-[1.1fr,0.9fr] gap-6">
        <!-- Story block -->
        <article
          class="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm shadow-slate-100 space-y-4 text-sm md:text-[15px]"
        >
          <header class="space-y-2">
            <h2 class="text-lg md:text-xl font-semibold text-slate-900">
              วันที่ทุกคนรู้ว่า “มีปัญหา” แต่ไม่มีใครบอกได้ว่ามันเกิดขึ้นบ่อยแค่ไหน
            </h2>
            <p class="text-slate-500 text-xs">
              เล่าจากประสบการณ์จริงของทีม IT/Process Improvement ในโรงงานไทย
            </p>
          </header>

          <p>
            ตอนผมเข้าไปช่วยโรงงานผลิตอาหารแห่งหนึ่งในภาคกลาง สิ่งที่เห็นทุกวันคือ
            <b>ไลน์กลุ่ม “แจ้งเหตุไลน์ผลิต/ QC / ซ่อมบำรุง” ที่เด้งทั้งวัน</b>.
          </p>

          <p>
            เวลามีปัญหา คนหน้างานจะถ่ายรูป–ถ่ายวิดีโอ แล้วส่งในไลน์ เช่น:
          </p>

          <ul class="pl-4 list-disc space-y-1">
            <li>“ถุงซีลไม่สนิทอีกแล้ว lot เช้านี้”</li>
            <li>“เครื่อง Filler line 3 หยุด error code เดิมเลยครับ”</li>
            <li>“ลูกค้าร้านสะดวกซื้อแจ้งว่ามีชิ้นส่วนพลาสติกในสินค้าอีกแล้ว”</li>
          </ul>

          <p>
            คน QC, วิศวกร, หัวหน้าไลน์, ฝ่ายผลิต ก็จะเข้าไปคอมเมนต์กันในไลน์:
            ขอเลข lot, ขอเวลาเกิดเหตุ, ขอเครื่องที่ใช้, ขอ process ก่อนหน้า ฯลฯ
            บางครั้งก็มีการเปิดใบ NCR (Non-conformity Report) ใน Excel หรือระบบภายในอีกที.
          </p>

          <p>
            ปัญหาคือ:
          </p>

          <ul class="pl-4 list-disc space-y-1">
            <li>มี log ปัญหา “เป็นพันข้อความในไลน์” แต่ไม่มี pattern ที่มองเห็นชัด</li>
            <li>ทุกเดือนต้องมีคนมานั่งไล่ย้อน Excel/ไลน์ เพื่อทำรายงาน 8D หรือ CAPA</li>
            <li>เวลาผู้บริหารถามว่า “pattern ปัญหาจริง ๆ คืออะไร” ทุกคนตอบจากความรู้สึกมากกว่าข้อมูล</li>
          </ul>

          <p>
            ผมเห็นทีม IT กับทีม Process Improvement พยายามช่วย:
            ทำฟอร์ม Google Form ให้แจ้งปัญหา, ทำ Excel Template ให้กรอก, ทำ dashboard
            ที่ดึงข้อมูลจากระบบใบแจ้งซ่อม.
            แต่สุดท้าย incident จริง ๆ ก็ยังถูกเล่าผ่านไลน์อยู่ดี.
          </p>

          <p>
            ยิ่งงานยุ่ง คนก็ยิ่ง “แจ้งสั้น ๆ” หรือ “ลืมแจ้ง” ทำให้ข้อมูลที่เก็บได้ไม่ครบ.
            ผลคือเวลาเกิดเคสใหญ่ หรือมีลูกค้าคอมเพลนกลับมาจาก Modern trade / export,
            ทุกคนต้องมานั่งไล่ย้อน “หาเบาะแส” ย้อนหลัง.
          </p>

          <div
            class="mt-4 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-xs md:text-sm text-amber-900"
          >
            <b>บทสรุปตอนนั้น:</b>
            องค์กรมีข้อมูลเพียงพอที่จะเห็น pattern ปัญหา แต่รูปแบบการเก็บ + การเล่าเรื่อง
            ทำให้เราใช้ประโยชน์จากมันได้น้อยมาก.
          </div>
        </article>

        <!-- Painpoints card -->
        <aside
          class="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm shadow-slate-100 text-sm space-y-4"
        >
          <div
            class="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700"
          >
            <span>⚠️</span>
            <span>จุดคอขวดหลักที่เห็นชัด</span>
          </div>
          <ul class="space-y-3">
            <li>
              <b>1) Incident ถูกกระจายอยู่ในหลายช่องทาง</b>
              <p class="text-slate-600">
                LINE, โทรศัพท์, Excel, ใบ NCR → ไม่มีที่เดียวที่เห็นภาพรวมว่าวันนี้เกิดอะไรขึ้นบ้างในโรงงาน.
              </p>
            </li>
            <li>
              <b>2) ข้อมูลไม่ครบ/ไม่เป็นโครงสร้าง</b>
              <p class="text-slate-600">
                ลืมใส่ lot, ลืมใส่เวลา, ลืมใส่เครื่อง, ลืมระบุลูกค้าปลายทาง
                ทำให้ trace back ยากเวลาเกิดเคสใหญ่.
              </p>
            </li>
            <li>
              <b>3) ไม่มีใครเห็น pattern ในระดับ “สัปดาห์/เดือน”</b>
              <p class="text-slate-600">
                ทุกคนรู้สึกว่า “ช่วงนี้ QC เยอะ” แต่ไม่มีตัวเลขว่าเยอะตรงไหน, กับสินค้าอะไร, เกี่ยวกับกะไหน.
              </p>
            </li>
            <li>
              <b>4) เวลาทีมคุณภาพใช้ไปกับ “การเก็บข้อมูลย้อนหลัง” มากกว่าปรับปรุงระบบ</b>
              <p class="text-slate-600">
                แทนที่จะได้เอาเวลาไปวิเคราะห์ root cause และทำ improvement plan.
              </p>
            </li>
          </ul>
        </aside>
      </section>

      <!-- If we had AI like today -->
      <section class="grid md:grid-cols-2 gap-6">
        <article
          class="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm shadow-slate-100 text-sm space-y-4"
        >
          <header class="space-y-2">
            <h2 class="text-lg md:text-xl font-semibold text-slate-900">
              ถ้าวันนั้นมี AI Agent แบบทุกวันนี้…
            </h2>
            <p class="text-slate-500 text-xs">
              สิ่งที่ผมจะทำให้ทีมผลิตและทีมคุณภาพ ก่อนคิดถึงระบบ MES ใหญ่ ๆ
            </p>
          </header>

          <p>
            ถ้าย้อนกลับไปตอนนั้น แล้วเรามี AI และ text/ image processing แบบทุกวันนี้
            ผมจะเริ่มจาก <b>“Incident Agent” ที่คอยเก็บ–จัดระเบียบ–เล่าเรื่องปัญหาคุณภาพให้ทุกคนฟัง</b>.
          </p>

          <ul class="space-y-3">
            <li>
              <b>1) ให้ AI อ่าน incident จาก LINE/รูป/ข้อความ</b>
              <p class="text-slate-600">
                ใช้ bot หรือ channel กลาง → เวลาใครแจ้งปัญหาแนบรูป/วิดีโอ/ข้อความ
                AI จะช่วยดึงข้อมูลสำคัญ (สายการผลิต, เครื่อง, เวลา, lot, สินค้า, ลูกค้า) ออกมาอัตโนมัติ.
              </p>
            </li>
            <li>
              <b>2) ให้ AI บังคับ “โครงสร้างข้อมูลขั้นต่ำ” แบบไม่ทำให้คนรำคาญ</b>
              <p class="text-slate-600">
                ถ้าขาดข้อมูลสำคัญ AI ถามกลับแบบสั้น ๆ เช่น
                “lot นี้ผลิตกะไหนครับ?” หรือ “ลูกค้าปลายทางเป็น modern trade / export / local ครับ?”.
              </p>
            </li>
            <li>
              <b>3) ให้ AI สร้าง incident timeline &amp; heatmap</b>
              <p class="text-slate-600">
                เห็นว่าใน 1 วัน/สัปดาห์ ปัญหาเกิดกับสินค้าอะไร, บนเครื่องไหน, ช่วงเวลาไหน, กะไหน,
                และมี relation กับ changeover/การล้างไลน์หรือไม่.
              </p>
            </li>
            <li>
              <b>4) ให้ AI สรุปเป็นภาษาที่ทีมผลิต, QC, ผู้บริหารเข้าใจง่าย</b>
              <p class="text-slate-600">
                แทนที่จะส่ง report 10 หน้า ให้ AI สรุปว่า
                “เดือนนี้ 60% ของปัญหาเกิดบน line 3 ในกะดึก หลัง changeover ชนิดบรรจุภัณฑ์”.
              </p>
            </li>
          </ul>
        </article>

        <!-- Impact card -->
        <aside class="bg-slate-900 text-slate-50 rounded-2xl p-6 md:p-7 flex flex-col justify-between">
          <div class="space-y-4">
            <p class="text-xs uppercase tracking-[0.18em] text-emerald-300 font-semibold">
              Impact ถ้าทำให้ครบ loop
            </p>
            <h3 class="text-lg md:text-xl font-semibold">
              “จากการแก้ปัญหาเคสต่อเคส → สู่การจัดการ pattern ปัญหาในระดับระบบ”
            </h3>
            <p class="text-sm text-slate-200">
              เป้าหมายไม่ใช่แค่ปิดเคส NCR แต่คือ:
            </p>
            <ul class="text-sm space-y-2">
              <li>• รู้ก่อนว่าปัญหากำลัง “เริ่มซ้ำ” ไม่ใช่รู้ตอนลูกค้าคอมเพลนกลับมาแล้ว</li>
              <li>• ใช้ข้อมูลจริงคุยกับ production/maintenance เรื่องการจัด resource และ preventive action</li>
              <li>• ลดเวลาที่ทีม QC ต้องใช้กับการไล่หาข้อมูลย้อนหลัง</li>
              <li>• ทำให้การคุยใน meeting คุณภาพ “คุยบนข้อมูลจริง” ไม่ใช่ความรู้สึก</li>
            </ul>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-700 text-xs text-slate-400">
            สุดท้าย การมี AI ไม่ได้แปลว่าไม่ต้องมี QC หรือวิศวกร
            แต่คือการทำให้ “สิ่งที่เขารู้อยู่แล้วในหัว + ในไลน์” กลายเป็น pattern ที่ทั้งองค์กรเห็นร่วมกันได้.
          </div>
        </aside>
      </section>

      <!-- CTA -->
      <section
        class="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div class="space-y-2">
          <p class="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold">
            From Story → To Incident &amp; Quality Agent
          </p>
          <h2 class="text-lg md:text-xl font-semibold text-slate-900">
            จาก “ไลน์แจ้งเคสเสีย” → “Blueprint ระบบ Incident Agent สำหรับโรงงานในไทย”
          </h2>
          <p class="text-sm text-slate-600 max-w-xl">
            ถ้าโรงงานของคุณมีทั้งไลน์, Excel, LINE, ระบบใบแจ้งซ่อม และรายงาน QC กระจัดกระจาย
            คุณสามารถเริ่ม POC เล็ก ๆ ด้วย Incident Agent แบบนี้ได้เลย
            โดยไม่ต้องรื้อ MES/ERP เดิม.
          </p>
        </div>
        <div class="flex flex-col items-start md:items-end gap-3">
          <RouterLink
            to="/solutions/production-quality-incident/mockup"
            class="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            เปิดดู Mockup: Incident &amp; Quality Console
            <span>↗</span>
          </RouterLink>
          <p class="text-[11px] text-slate-500">
            Mockup นี้ออกแบบสำหรับโรงงานอาหาร, พลาสติก, ชิ้นส่วนยานยนต์ และโรงงานไทยที่มีหลายไลน์ผลิต
          </p>
        </div>
      </section>

      <!-- Hashtags -->
      <footer class="pt-2 pb-8 text-[11px] text-slate-500 flex flex-wrap gap-2">
        <span>#TH8AI</span>
        <span>#Manufacturing</span>
        <span>#QualityAutomation</span>
        <span>#IncidentManagement</span>
        <span>#QC</span>
        <span>#MES</span>
        <span>#ERPIntegration</span>
        <span>#ThaiFactory</span>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
