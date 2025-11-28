<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-16">
    <!-- HERO -->
    <section class="animate-fade grid lg:grid-cols-2 gap-10 items-start">
      <div class="space-y-4">
        <h1 class="text-3xl lg:text-4xl font-bold text-th8-text leading-tight">
          AI FP&amp;A Suite<br />
          <span class="text-th8-primary">Copilot สำหรับทีมการเงินขององค์กรไทย</span>
        </h1>
        <p class="text-sm text-th8-text/80 leading-relaxed">
          จากเดิมที่ทีม Finance/FP&amp;A ต้องไล่ดู Excel, PowerPoint, รายงานจากหลายระบบ  
          TH8.AI ช่วยให้คุณมี “AI Copilot” คอยช่วยอ่าน, วิเคราะห์ และเตรียม Insight ให้ล่วงหน้า
        </p>
        <ul class="text-sm text-th8-text/80 space-y-1">
          <li>• ลดเวลาทำรายงานประจำเดือน/ไตรมาส</li>
          <li>• มองเห็น Driver ที่ทำให้กำไร/ต้นทุนเปลี่ยนได้เร็วขึ้น</li>
          <li>• ให้ผู้บริหารถาม–ตอบคำถามเชิงกลยุทธ์จากข้อมูลจริง</li>
        </ul>
      </div>

      <div class="rounded-2xl border border-th8-border bg-th8-surface p-5 shadow-sm space-y-4">
        <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
          Example Insights จาก FP&amp;A Agent
        </p>
        <div class="space-y-3 text-xs text-slate-700">
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div class="text-[11px] text-slate-500 mb-1">คำถามผู้บริหาร</div>
            <p class="font-semibold text-slate-800">
              “ทำไม Margin Q2 ปีนี้ ลดลงเมื่อเทียบกับปีก่อน?”
            </p>
          </div>
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-1">
            <div class="text-[11px] text-slate-500">สรุปจาก AI FP&amp;A Agent</div>
            <ul class="list-disc list-inside space-y-1">
              <li>ต้นทุนวัตถุดิบเพิ่มขึ้นเฉลี่ย 6–8% ในกลุ่มสินค้า A และ C</li>
              <li>โปรโมชั่นช่วงเมษา–พฤษภา ทำให้ Discount rate เพิ่มขึ้น ~3%</li>
              <li>ช่องทาง Online เติบโต แต่มีค่า Commission สูงกว่าช่องทางเดิม</li>
            </ul>
          </div>
          <p class="text-[11px] text-slate-500">
            Agent ดึงข้อมูลจาก Data warehouse / Excel / Google Sheet + เอกสารงบการเงินจริงของคุณ
          </p>
        </div>
      </div>
    </section>

    <!-- USER JOURNEY -->
    <section class="animate-fade space-y-6">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 class="text-2xl font-semibold text-th8-text">
            User Journey: เส้นทางการทำงานเมื่อเริ่มใช้ AI FP&amp;A
          </h2>
          <p class="text-sm text-th8-text/80 max-w-2xl">
            เป้าหมายคือไม่รบกวนวิธีทำงานเดิมของทีมการเงินมากเกินไป
            แต่ค่อย ๆ ใส่ AI เข้าไปเป็น “ผู้ช่วย” ในจุดที่ช่วยประหยัดเวลาจริง
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-4 gap-4 text-sm">
        <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <div class="text-[11px] font-semibold text-th8-primary">Phase 1</div>
          <h3 class="font-semibold text-th8-text text-sm">Connect &amp; Understand</h3>
          <p class="text-[12px] text-th8-text/80">
            เชื่อมต่อ Data source หลัก (DW, Excel, GSheet)  
            เก็บตัวอย่าง Report และคำถามที่ทีมมักถูกถามบ่อย ๆ
          </p>
        </div>
        <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <div class="text-[11px] font-semibold text-th8-primary">Phase 2</div>
          <h3 class="font-semibold text-th8-text text-sm">AI-assisted Reporting</h3>
          <p class="text-[12px] text-th8-text/80">
            ให้ Agent ช่วย Draft สไลด์/สรุปตัวเลขเบื้องต้น  
            คนการเงินตรวจและปรับข้อความให้ตรงกับบริบทองค์กร
          </p>
        </div>
        <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <div class="text-[11px] font-semibold text-th8-primary">Phase 3</div>
          <h3 class="font-semibold text-th8-text text-sm">Scenario &amp; Driver Analysis</h3>
          <p class="text-[12px] text-th8-text/80">
            ใช้ Agent ช่วยตั้งคำถาม “What if…?”  
            และเจาะลึก Driver เช่น ราคา, Volume, Mix, Channel
          </p>
        </div>
        <div class="p-4 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <div class="text-[11px] font-semibold text-th8-primary">Phase 4</div>
          <h3 class="font-semibold text-th8-text text-sm">Embedded FP&amp;A Copilot</h3>
          <p class="text-[12px] text-th8-text/80">
            ฝัง AI FP&amp;A เข้าไปในจุดที่ต้องตัดสินใจประจำ เช่น Budget review,
            Pricing discussion, หรือ Monthly business review
          </p>
        </div>
      </div>
    </section>

    <!-- COMPONENTS OF THE SUITE -->
    <section class="animate-fade space-y-6">
      <h2 class="text-2xl font-semibold text-th8-text">
        องค์ประกอบของ AI FP&amp;A Suite
      </h2>
      <div class="grid md:grid-cols-3 gap-6 text-sm">
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <h3 class="font-semibold text-th8-text">1. Data &amp; Metric Layer</h3>
          <ul class="text-[12px] text-th8-text/80 space-y-1">
            <li>• Mapping โครงสร้างบัญชี / CoA / Cost center</li>
            <li>• สร้าง Metric Dictionary ที่ Agent เข้าใจ</li>
            <li>• เชื่อม DW / Excel / GSheet / ระบบบัญชี</li>
          </ul>
        </div>
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <h3 class="font-semibold text-th8-text">2. FP&amp;A Agent &amp; Tools</h3>
          <ul class="text-[12px] text-th8-text/80 space-y-1">
            <li>• Query ตัวเลขแบบ Natural Language</li>
            <li>• สร้าง Insight + ข้อสังเกตจาก Trend</li>
            <li>• ใช้ Template การวิเคราะห์ที่ทีมคุณใช้อยู่แล้ว</li>
          </ul>
        </div>
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-2">
          <h3 class="font-semibold text-th8-text">3. UX: Portal / Chat / Slide Helper</h3>
          <ul class="text-[12px] text-th8-text/80 space-y-1">
            <li>• Web Portal ให้ทีมการเงินลองเล่น</li>
            <li>• Chat interface สำหรับถาม–ตอบ</li>
            <li>• Helper ช่วยแปลง Insight เป็นข้อความหรือ bullet ที่นำไปใช้ในสไลด์ได้เลย</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- BUSINESS IMPACT -->
    <section class="animate-fade space-y-6">
      <h2 class="text-2xl font-semibold text-th8-text">
        ผลลัพธ์ที่คาดหวังได้ (Business Impact)
      </h2>
      <div class="grid md:grid-cols-3 gap-6 text-sm">
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
          <h3 class="font-semibold text-th8-text mb-1">ลดเวลางาน Routine</h3>
          <p class="text-[12px] text-th8-text/80">
            ลดเวลาทำรายงานประจำเดือน, รวมไฟล์, การ copy/paste ข้อมูล  
            เพื่อให้ทีมเอาเวลาไปใช้กับการคิดเชิงกลยุทธ์แทน
          </p>
        </div>
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
          <h3 class="font-semibold text-th8-text mb-1">มองเห็นตัวขับเคลื่อนกำไร/ต้นทุนชัดขึ้น</h3>
          <p class="text-[12px] text-th8-text/80">
            รู้ว่าช่องทางไหน, กลุ่มลูกค้ากลุ่มใด หรือสินค้าใด  
            ที่เป็นตัวฉุด/ตัวดันผลลัพธ์ของบริษัท
          </p>
        </div>
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm">
          <h3 class="font-semibold text-th8-text mb-1">คุยกับผู้บริหารง่ายขึ้น</h3>
          <p class="text-[12px] text-th8-text/80">
            จากเดิมต้องเตรียมคำตอบเองทุกคำถาม  
            กลายเป็นมี Agent ช่วยดึงตัวเลขและสรุปเบื้องต้นให้พร้อมใช้งาน
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="animate-fade border-t border-th8-border pt-8 mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h3 class="text-base font-semibold text-th8-text">
          หากคุณอยากทดลอง AI FP&amp;A กับข้อมูลจริงของบริษัท
        </h3>
        <p class="text-sm text-th8-text/80">
          เราสามารถเริ่มจาก Use case เดียว เช่น Monthly closing หรือ Margin analysis ก่อน
          เพื่อให้ทีมมั่นใจกับผลลัพธ์
        </p>
      </div>
      <RouterLink
        :to="{ name: 'contact' }"
        class="inline-flex items-center rounded-full bg-th8-primary px-5 py-2 text-xs font-semibold text-white hover:bg-th8-accent"
      >
        นัดคุยโจทย์กับทีม TH8.AI
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
