<!-- src/views/CustomerComplaintRetentionStory.vue -->
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
          <span class="text-slate-700">Customer Complaint &amp; Retention Agent</span>
        </nav>

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="space-y-2">
            <p class="text-xs uppercase tracking-[0.18em] text-rose-500 font-semibold">
              Customer Experience &amp; Retention
            </p>
            <h1 class="text-2xl md:text-3xl font-semibold text-slate-900">
              จาก “เคสคอมเพลนกองเต็มระบบ”
              <span class="underline decoration-rose-500 decoration-4 underline-offset-4">
                สู่ Complaint Agent ที่ช่วยลด churn แบบใช้ข้อมูลจริง
              </span>
            </h1>
            <p class="text-sm md:text-base text-slate-600 max-w-2xl">
              โฟกัสเคสคอมเพลน/ร้องเรียนใน <b>ธนาคาร, Telco, ประกัน</b> ที่วิ่งผ่านหลายช่องทาง:
              Call center, LINE OA, Facebook, Email, Application, สาขา
              แต่เวลาจะทำ root cause หรือ retention กลับต้องมานั่งไล่ข้อมูลย้อนหลังทีละเคส.
            </p>
          </div>

          <div class="flex flex-col items-start md:items-end gap-3">
            <div
              class="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3 py-1.5 text-xs"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span class="font-medium text-slate-700">
                TH8 • AI Agent for Complaint &amp; Retention
              </span>
            </div>
            <RouterLink
              to="/solutions/customer-complaint-retention/mockup"
              class="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2 rounded-full bg-rose-500 text-white shadow-sm hover:bg-rose-600 transition"
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
              วันที่ทีม Service รู้ว่า “ลูกค้าไม่แฮปปี้” แต่ไม่มีใครบอกได้ว่ากำลังจะเสียลูกค้ากลุ่มไหนไป
            </h2>
            <p class="text-slate-500 text-xs">
              เล่าจากประสบการณ์ทำงานกับ contact center / digital team ในองค์กรบริการไทย
            </p>
          </header>

          <p>
            เวลาคุยกับทีม CX/Contact Center ทั้งในธนาคาร, Telco และประกัน
            สิ่งที่ได้ยินบ่อยมากคือ
            <b>“เราเห็นเคสคอมเพลนทุกวัน แต่ไม่ค่อยมีเวลาย้อนกลับมาดูว่า pattern จริง ๆ คืออะไร”</b>.
          </p>

          <p>
            เคสของธนาคารแห่งหนึ่งในไทย:
          </p>

          <ul class="pl-4 list-disc space-y-1">
            <li>ลูกค้าโทรหา Call center เพราะแอปโอนเงินไม่ผ่าน</li>
            <li>อีกรายทัก LINE OA เพราะถูกตัดเงินบัตรเครดิตซ้ำ</li>
            <li>บางส่วนไปคอมเมนต์ใน Facebook เพราะติดต่อสาขาไม่ได้</li>
          </ul>

          <p>
            ทุกเคสถูกบันทึกลงระบบ ticket คนละ queue, คนละ tag, คนละทีมรับผิดชอบ.
            เวลามีเคสแรง ๆ ก็จะสร้าง group LINE หรือ Teams ขึ้นมาดูเคสเป็นพิเศษ.
          </p>

          <p>
            ปัญหาเหมือนกันใน Telco และบริษัทประกัน:
            ข้อมูลกระจายอยู่ใน CRM, Call log, social listening, email, chatbot log,
            ticket system, excel ที่ทีมหลังบ้านทำเอง.
          </p>

          <p>
            ทุกเดือนทีม CX/Quality/Operation จะำรายงาน:
            Top complaint reason, AHT, SLA, CSAT, NPS.
            แต่เวลาผู้บริหารถามว่า:
          </p>

          <ul class="pl-4 list-disc space-y-1">
            <li>“กลุ่มลูกค้าประเภทไหนกำลังจะยกเลิกมากที่สุด?”</li>
            <li>“ปัญหานี้เกิดมากับ product ไหน/ช่องทางไหนเป็นพิเศษ?”</li>
          </ul>

          <p>
            ทุกคนจะเงียบไปครู่หนึ่ง…แล้วค่อยตอบจากประสบการณ์มากกว่าตัวเลข.
          </p>

          <p>
            ทีม Data/IT ก็ช่วยทำ dashboard ให้:
            แต่ข้อมูล complaint ที่อยู่ใน text/voice/โซเชียล ก็ยังเอามาใช้ได้ไม่เต็มที่.
            และเวลามีเคสที่ risk สูง (ลูกค้า high value, media, influencer)
            กว่าจะรู้ตัวก็ช้าไปหนึ่งก้าวเสมอ.
          </p>

          <div
            class="mt-4 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-xs md:text-sm text-amber-900"
          >
            <b>บทสรุปตอนนั้น:</b>
            เรามีข้อมูลพอจะรู้ว่า “ลูกค้ากำลังจะไปทางไหน”
            แต่รูปแบบการเก็บและการติดตาม ทำให้ความรู้เหล่านั้นออกมาไม่ทันเวลาตัดสินใจ.
          </div>
        </article>

        <!-- Painpoints card -->
        <aside
          class="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 shadow-sm shadow-slate-100 text-sm space-y-4"
        >
          <div
            class="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700"
          >
            <span>⚠️</span>
            <span>จุดคอขวดหลักที่เห็นชัด</span>
          </div>
          <ul class="space-y-3">
            <li>
              <b>1) Complaint กระจายหลายช่องทาง แต่ไม่มี “ภาพรวมต่อหนึ่งลูกค้า”</b>
              <p class="text-slate-600">
                CRM เห็นแค่บางส่วน, social tool เห็นอีกบางส่วน, call log อยู่คนละที่ → ยากที่จะเห็น journey
                ของลูกค้าคนหนึ่งแบบเต็ม ๆ.
              </p>
            </li>
            <li>
              <b>2) ข้อมูลอยู่ใน text/voice แต่ถูกใช้แค่ระดับ tag</b>
              <p class="text-slate-600">
                Agent ใส่ reason code/ tag ให้ แต่รายละเอียดจริง ๆ อยู่ใน note หรือเสียงสนทนา
                ซึ่งไม่มีใครมีเวลาไปอ่าน/ฟังทั้งหมด.
              </p>
            </li>
            <li>
              <b>3) Retention team ทำงานแบบ reactive</b>
              <p class="text-slate-600">
                รู้ว่าลูกค้าจะไปตอนเคส escalate แล้ว ไม่ใช่ตอนสัญญาณเริ่มแสดงตัว.
              </p>
            </li>
            <li>
              <b>4) ไม่มีใคร “เล่าเรื่องลูกค้า” ให้ผู้บริหารฟังจากข้อมูลทั้งหมด</b>
              <p class="text-slate-600">
                มีแต่รายงานจำนวนเคส, SLA, CSAT แต่ไม่มี story ว่า
                ลูกค้ากลุ่มไหนกำลังเจออะไรซ้ำ ๆ จากระบบ/กระบวนการ.
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
              สิ่งที่ผมจะทำให้ทีม CX, Digital, และ Data ก่อนเริ่มโปรเจกต์ใหญ่
            </p>
          </header>

          <p>
            ถ้าย้อนกลับไปตอนนั้น แล้วเรามี LLM + speech-to-text + analytics แบบทุกวันนี้
            ผมจะเริ่มจาก <b>“Complaint &amp; Retention Agent” ที่รวมเคสจากทุกช่องทางเข้ามาเล่าเรื่องเดียวกัน</b>.
          </p>

          <ul class="space-y-3">
            <li>
              <b>1) ให้ AI รวม complaint จากทุกช่องทางต่อ “หนึ่งลูกค้า”</b>
              <p class="text-slate-600">
                ผูก call log, ticket, LINE OA, social comment, email, app feedback
                → เข้ากับ customer ID/เบอร์โทร/เลขบัญชีเดียวกัน
                เพื่อเห็น journey ของลูกค้าคนหนึ่งก่อนจะตัดสินใจยกเลิก.
              </p>
            </li>
            <li>
              <b>2) ให้ AI อ่าน text + voice แล้วสกัด “เจตนา + อารมณ์ + ความเสี่ยง”</b>
              <p class="text-slate-600">
                ไม่ใช่แค่รู้ว่าเขาโกรธ/ไม่พอใจ แต่รู้ด้วยว่าโกรธเรื่อง process ไหน, product ไหน,
                มีความเสี่ยงย้ายค่าย/ยกเลิกสูงแค่ไหน.
              </p>
            </li>
            <li>
              <b>3) ให้ AI สรุป pattern ปัญหาในระดับ “segment”</b>
              <p class="text-slate-600">
                เห็นว่าลูกค้ากลุ่มไหน (รายได้เท่าไหร่, ใช้ product อะไร, ช่องทางไหน) กำลังเจอปัญหาซ้ำ ๆ
                จากระบบ/นโยบายเดียวกัน.
              </p>
            </li>
            <li>
              <b>4) ให้ AI เสนอ next-best-action สำหรับ retention</b>
              <p class="text-slate-600">
                สำหรับลูกค้ารายหนึ่ง ให้ AI ช่วยสรุปว่า
                “เคยเจอปัญหาอะไรมาแล้วบ้าง, กำลังรู้สึกอย่างไร, ควรใช้คำพูด/ข้อเสนอแบบไหน”
                เพื่อช่วยทีม retention คุยอย่างมีข้อมูล.
              </p>
            </li>
          </ul>
        </article>

        <!-- Impact card -->
        <aside class="bg-slate-900 text-slate-50 rounded-2xl p-6 md:p-7 flex flex-col justify-between">
          <div class="space-y-4">
            <p class="text-xs uppercase tracking-[0.18em] text-rose-300 font-semibold">
              Impact ถ้าทำให้ครบ loop
            </p>
            <h3 class="text-lg md:text-xl font-semibold">
              “จากการนับจำนวนเคส → สู่การป้องกันการเสียลูกค้าด้วยข้อมูลจริง”
            </h3>
            <p class="text-sm text-slate-200">
              เป้าหมายไม่ใช่แค่ปิด complaint เร็วขึ้น แต่คือ:
            </p>
            <ul class="text-sm space-y-2">
              <li>• รู้ก่อนว่ากลุ่มลูกค้าไหนกำลังจะ churn ไม่ใช่รู้ตอนเขาปิดบัญชีไปแล้ว</li>
              <li>• ใช้ข้อมูลจริงคุยเรื่อง product/UX/policy ที่สร้างปัญหาซ้ำ ๆ</li>
              <li>• ทำให้ทีม retention มีภาพครบก่อนโทรหาลูกค้า</li>
              <li>• เปลี่ยนจากการ “แก้เคสทีละเคส” → “แก้ที่ root cause ของประสบการณ์ลูกค้า”</li>
            </ul>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-700 text-xs text-slate-400">
            สุดท้าย ตัวเลข CSAT/NPS สำคัญ แต่สิ่งที่สำคัญกว่าคือ
            เราเข้าใจหรือเปล่าว่า “ลูกค้ากลุ่มไหนกำลังจะเดินออกจากธนาคาร/Telco/บริษัทประกันของเรา”
            และเราทำอะไรกับมันทันเวลาหรือไม่.
          </div>
        </aside>
      </section>

      <!-- CTA -->
      <section
        class="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div class="space-y-2">
          <p class="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold">
            From Story → To Complaint &amp; Retention Agent
          </p>
          <h2 class="text-lg md:text-xl font-semibold text-slate-900">
            จาก “เคสกองเต็มระบบ” → “Blueprint ระบบ Complaint Agent สำหรับองค์กรบริการไทย”
          </h2>
          <p class="text-sm text-slate-600 max-w-xl">
            ถ้าองค์กรของคุณมี complaint กระจายอยู่ในหลายช่องทาง
            คุณสามารถเริ่ม POC เล็ก ๆ โดยให้ Agent ตัวนี้ช่วยรวมข้อมูลและสรุป pattern จริง
            ก่อนจะลงทุนทำโครงการใหญ่.
          </p>
        </div>
        <div class="flex flex-col items-start md:items-end gap-3">
          <RouterLink
            to="/solutions/customer-complaint-retention/mockup"
            class="inline-flex items-center gap-2 text-xs md:text-sm px-4 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            เปิดดู Mockup: Complaint &amp; Retention Console
            <span>↗</span>
          </RouterLink>
          <p class="text-[11px] text-slate-500">
            Mockup นี้ออกแบบสำหรับธนาคาร, Telco, และบริษัทประกัน ที่มีทั้ง Call center + Digital channel
          </p>
        </div>
      </section>

      <!-- Hashtags -->
      <footer class="pt-2 pb-8 text-[11px] text-slate-500 flex flex-wrap gap-2">
        <span>#TH8AI</span>
        <span>#CustomerExperience</span>
        <span>#ComplaintManagement</span>
        <span>#Retention</span>
        <span>#CallCenter</span>
        <span>#Banking</span>
        <span>#Telco</span>
        <span>#Insurance</span>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
