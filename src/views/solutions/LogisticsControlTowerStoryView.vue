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
          <span class="text-slate-700">Logistics Control Tower &amp; Exception Agent</span>
        </nav>

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="space-y-2">
            <p class="text-xs uppercase tracking-[0.18em] text-sky-500 font-semibold">
              Logistics &amp; Operations Automation
            </p>
            <h1 class="text-2xl md:text-3xl font-semibold text-slate-900">
              จากไลน์ถามของทั้งวัน
              <span class="underline decoration-sky-500 decoration-4 underline-offset-4">
                สู่ Control Tower ตัวเดียวที่เห็นทั้งเส้นทางส่งของ
              </span>
            </h1>
            <p class="text-sm md:text-base text-slate-600 max-w-2xl">
              โฟกัสงานรับออเดอร์ → จัดสต๊อก → โหลดของขึ้นรถ → ส่งของเข้า Modern Trade / ร้านค้าปลีก /
              ลูกค้า e-Commerce โดยมีข้อมูลกระจายอยู่ใน <b>TMS, WMS, ERP, GPS และ LINE/Teams</b>.
            </p>
          </div>

          <div class="flex flex-col items-start md:items-end gap-3">
            <div
              class="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 text-xs"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span class="font-medium text-slate-700">
                TH8 • AI Agent for Logistics &amp; Control Tower
              </span>
            </div>
            <RouterLink
              to="/solutions/logistics-control-tower/mockup"
              class="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full bg-sky-500 text-white shadow-sm hover:bg-sky-600 transition"
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
              วันที่ทั้งทีม “วิ่งตามของ” ผ่านไลน์และโทรศัพท์
            </h2>
            <p class="text-slate-500 text-xs">
              เล่าจากประสบการณ์จริงของทีม IT / Operation ในบริษัท 3PL ไทยที่ส่งของเข้า Modern Trade
            </p>
          </header>

          <p>
            ตอนผมเข้าไปช่วยทีม IT ของบริษัทโลจิสติกส์แถวสมุทรปราการ สิ่งที่เห็นบ่อยที่สุดไม่ใช่ Dashboard
            แต่คือ <b>ไลน์กลุ่มและ Teams ที่เด้งไม่หยุดทั้งวัน</b>.
          </p>

          <p>
            ฝั่ง CS โดนลูกค้าถามว่า
          </p>

          <ul class="pl-4 list-disc space-y-1">
            <li>“ของล็อตนี้ถึง Big C บางนาหรือยัง?”</li>
            <li>“ส่งของเข้าห้างไม่ทันรอบเช้านะครับ ทำไมรถยังไม่ถึง?”</li>
            <li>“Shopee order เบอร์นี้ทำไมระบบขึ้น Delivered แล้ว แต่ลูกค้ายังไม่ได้ของ?”</li>
          </ul>

          <p>
            ทุกครั้งที่มีคำถามแบบนี้เกิดขึ้น ทีมงานต้อง “วิ่งตามข้อมูลย้อนกลับไป” ตลอดเส้นทาง:
            บางคนเปิด TMS ดูสถานะรถ, บางคนโทรหาหัวหน้าศูนย์, บางคนถามคนขับในไลน์ส่วนตัว,
            บางคนเปิด Excel เช็คแผนโหลดของของเมื่อคืน.
          </p>

          <p>
            ข้อมูลจริง ๆ กระจายอยู่เต็มไปหมด:
            สถานะ shipment อยู่ใน TMS, สต๊อกอยู่ใน WMS, ใบสั่งซื้ออยู่ใน ERP หรือระบบอีคอมเมิร์ซ,
            ปัญหาหน้างานอยู่ในไลน์กลุ่มของแต่ละฮับ.
          </p>

          <p>
            เคสหนึ่งที่ผมจำได้ดีคือ ลูกค้า modern trade รายใหญ่โทรตามของที่จะขึ้นห้างตอนเช้า
            ไม่มีใครตอบได้ชัดว่าติดตรงไหนกันแน่:
          </p>

          <ul class="pl-4 list-disc space-y-1">
            <li>บางคนบอกว่ารถออกจากศูนย์แล้ว</li>
            <li>บางคนบอกว่ายังโหลดของไม่เสร็จ</li>
            <li>สุดท้ายมารู้ทีหลังว่ารถออกจริง แต่ต้องวนกลับมาศูนย์เพราะโหลดสินค้า lot ผิด</li>
          </ul>

          <p>
            ในฐานะทีม IT เราก็ช่วยได้ในแบบที่ระบบอนุญาต:
            ดึงข้อมูลจาก TMS/WMS/ERP มาทำรายงาน ส่ง Excel สรุป shipment status ให้ผู้บริหารทุกเย็น.
            แต่พอลูกค้าถามว่า <span class="italic">“ของตอนนี้ ถึงไหนแล้ว?”</span>
            รายงานเมื่อวานแทบไม่มีประโยชน์อะไรเลย.
          </p>

          <div
            class="mt-4 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-xs md:text-sm text-amber-900"
          >
            <b>บทสรุปตอนนั้น:</b>
            เราไม่มี “ตัวกลาง” ที่เล่าเรื่องของแต่ละ shipment ได้แบบ real-time.
            ทุกคนเห็นข้อมูลคนละส่วน, จากคนละระบบ และจากคนละห้องแชต.
          </div>
        </article>

        <!-- Painpoints card -->
        <aside
          class="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm shadow-slate-100 text-sm space-y-4"
        >
          <div
            class="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700"
          >
            <span>⚠️</span>
            <span>จุดคอขวดหลักที่เห็นชัด</span>
          </div>
          <ul class="space-y-3">
            <li>
              <b>1) ข้อมูลกระจายหลายระบบ แต่ไม่มีมุมมองเดียวต่อ shipment</b>
              <p class="text-slate-600">
                TMS, WMS, ERP, GPS, LINE/Teams ต่างคนต่างมีข้อมูลของตัวเอง
                แต่ไม่มีจอเดียวที่ตอบได้ว่าตอนนี้ “ของอยู่ตรงไหนในเรื่องราวทั้งเส้นทาง”.
              </p>
            </li>
            <li>
              <b>2) CS ใช้เวลาไปกับการ “วิ่งตามคำตอบ” มากกว่าดูแลลูกค้า</b>
              <p class="text-slate-600">
                ทุกครั้งที่ลูกค้าถาม ต้องโทร/แชตถามอีก 3–4 ฝั่ง กว่าจะได้คำตอบที่เชื่อถือได้.
              </p>
            </li>
            <li>
              <b>3) ผู้บริหารเห็นแต่ KPI รวม แต่ไม่เห็นคอขวดรายวัน</b>
              <p class="text-slate-600">
                Report สิ้นเดือนสวย แต่ไม่รู้ว่าปัญหาจริงเกิดที่ฮับไหน เส้นไหน หรือประเภท shipment แบบไหน.
              </p>
            </li>
            <li>
              <b>4) ปัญหาเดิม ๆ กลับมาซ้ำ เพราะไม่มีใครเห็น pattern</b>
              <p class="text-slate-600">
                Delay ซ้ำจุดเดิม, รถติดซ้ำ segment เดิม, หรือปัญหากับสาขาเดิม
                แต่ไม่มีระบบไหนเล่าเรื่องทั้งหมดให้ฟังแบบภาพรวม.
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
              สิ่งที่ผมจะทำ ก่อนเริ่มทำ Dashboard ชุดใหญ่หรือโปรเจกต์ Control Tower แพง ๆ
            </p>
          </header>

          <p>
            ถ้าย้อนกลับไปวันนั้น แล้วเรามี AI และ event data แบบทุกวันนี้
            ผมจะไม่เริ่มจากการทำ report ใหม่ แต่จะเริ่มจาก <b>“Agent กลางที่เล่าเรื่องของ shipment ได้ทีละตัว”</b>.
          </p>

          <ul class="space-y-3">
            <li>
              <b>1) ให้ AI รวม event จากทุกระบบเข้าด้วยกัน</b>
              <p class="text-slate-600">
                ดึงข้อมูลจาก TMS, WMS, ERP, GPS, LINE/Teams → ผูกเข้ากับ Shipment ID / Order ID เดียวกัน
                ให้เห็นว่า order แต่ละตัวเดินทางผ่านเหตุการณ์อะไรบ้าง.
              </p>
            </li>
            <li>
              <b>2) ให้ AI สร้าง “Timeline” ของแต่ละ shipment</b>
              <p class="text-slate-600">
                รับออเดอร์เมื่อไหร่, จัดสต๊อกเสร็จเมื่อไหร่, โหลดของขึ้นรถกี่โมง, รถออกศูนย์กี่โมง,
                มีเหตุหยุด/กลับศูนย์ระหว่างทางหรือไม่, ถึงปลายทางเวลาไหน.
              </p>
            </li>
            <li>
              <b>3) ให้ AI จับเหตุการณ์ผิดปกติก่อนลูกค้าจะถาม</b>
              <p class="text-slate-600">
                ถ้ารถหยุดนานผิดปกติ, shipment เสี่ยงเลย SLA, หรือยังไม่โหลดของตามแผน
                → AI แจ้งเตือนทีมที่เกี่ยวข้องพร้อมเหตุผลและ context.
              </p>
            </li>
            <li>
              <b>4) ให้ AI เล่าเรื่องเป็นภาษาที่คนปฏิบัติการเข้าใจ</b>
              <p class="text-slate-600">
                แทนที่จะให้คนไล่อ่าน log 10 หน้า ให้ AI สรุปเป็นประโยคง่าย ๆ ว่า
                “Shipment #A123 ไป Big C บางนา ดีเลย์ 45 นาที เพราะรถคัน 3 ต้องวนกลับฮับเพื่อโหลดสินค้าขาดไป 2 SKU”.
              </p>
            </li>
          </ul>
        </article>

        <!-- Impact card -->
        <aside class="bg-slate-900 text-slate-50 rounded-2xl p-6 md:p-7 flex flex-col justify-between">
          <div class="space-y-4">
            <p class="text-xs uppercase tracking-[0.18em] text-sky-300 font-semibold">
              Impact ถ้าทำให้ครบ loop
            </p>
            <h3 class="text-lg md:text-xl font-semibold">
              “จาก Control Tower ที่เป็นแค่ Dashboard → สู่ System ที่ช่วยตัดสินใจแบบ Real-time”
            </h3>
            <p class="text-sm text-slate-200">
              เป้าหมายไม่ใช่แค่เห็นตัวเลข แต่คือ:
            </p>
            <ul class="text-sm space-y-2">
              <li>• ลดคำถาม “ของถึงไหนแล้ว?” จากลูกค้าและทีมภายใน</li>
              <li>• เห็นคอขวดรายวัน แทนที่จะรู้ตัวตอนสิ้นเดือน</li>
              <li>• ใช้เวลาไปกับการแก้ปัญหา มากกว่าตามหาต้นเหตุ</li>
              <li>• ทำให้ modern trade / e-commerce เห็นว่าทีมคุณ “คุมของอยู่” จริง ๆ</li>
            </ul>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-700 text-xs text-slate-400">
            สุดท้าย สิ่งที่ทำให้ทีมโลจิสติกส์เหนื่อย ไม่ใช่แค่ปริมาณงาน
            แต่คือการต้อง “ต่อจิ๊กซอว์จากหลายระบบด้วยมือ”
            ทั้งที่จริง ๆ แล้ว AI สามารถช่วยเล่าเรื่องทั้งเส้นทางให้เราฟังได้.
          </div>
        </aside>
      </section>

      <!-- CTA -->
      <section
        class="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div class="space-y-2">
          <p class="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold">
            From Story → To Agentic Architecture
          </p>
          <h2 class="text-lg md:text-xl font-semibold text-slate-900">
            จาก “ไลน์ถามของทั้งวัน” → “Blueprint ระบบ Control Tower ที่มี AI เป็นคนเล่าเรื่อง”
          </h2>
          <p class="text-sm text-slate-600 max-w-xl">
            ถ้าองค์กรของคุณยังต้องไล่ถามสถานะ shipment จากหลายห้องแชต/หลายระบบ
            คุณสามารถใช้แนวคิดนี้เริ่มต้น POC เล็ก ๆ บน data เดิม (TMS/WMS/ERP) ได้
            โดยไม่ต้องรื้อระบบทั้งหมด.
          </p>
        </div>
        <div class="flex flex-col items-start md:items-end gap-3">
          <RouterLink
            to="/solutions/logistics-control-tower/mockup"
            class="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            เปิดดู Mockup: Control Tower &amp; Exception Agent
            <span>↗</span>
          </RouterLink>
          <p class="text-[11px] text-slate-500">
            Mockup นี้ออกแบบสำหรับ 3PL, Distributor, และทีม Logistics ที่ต้องส่งของหลายช่องทางในไทย
          </p>
        </div>
      </section>

      <!-- Hashtags -->
      <footer class="pt-2 pb-8 text-[11px] text-slate-500 flex flex-wrap gap-2">
        <span>#TH8AI</span>
        <span>#LogisticsAutomation</span>
        <span>#ControlTower</span>
        <span>#SupplyChainVisibility</span>
        <span>#TMS</span>
        <span>#WMS</span>
        <span>#ERPIntegration</span>
        <span>#3PL</span>
        <span>#ThaiEnterprise</span>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
