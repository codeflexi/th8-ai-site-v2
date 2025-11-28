<template>
  <div class="max-w-6xl mx-auto px-4 py-12 space-y-12">
    <!-- Hero -->
    <section class="space-y-4">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div class="space-y-3 max-w-2xl">
          <p class="text-[11px] uppercase tracking-[0.25em] text-th8-primary flex items-center gap-2">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-th8-primary"></span>
            TH8 · PlanSphere™ · FP&A Case Studies
          </p>
          <h1 class="text-3xl font-bold text-th8-text">
            เรื่องเล่าจากหน้างาน — FP&amp;A ที่ทำงานได้จริงใน FMCG และ Warehouse
          </h1>
          <p class="text-sm text-th8-text/80">
            เคสทั้งหมดนี้เป็นรูปแบบการทำงานจริงของทีม Finance / FP&amp;A ในบริษัทไทย
            ที่ต้องทำ Budget, Forecast, Actual vs Plan และคุยกับผู้บริหารทุกเดือน —
            TH8 · PlanSphere™ เข้าไปช่วย “ใส่ระบบ + ใส่ AI” ให้ขั้นตอนเหล่านี้ใช้แรงคนลดลง แต่คุณภาพการตัดสินใจดีขึ้นกว่าเดิม
          </p>
        </div>
        <div class="w-full md:w-72 space-y-3">
          <div class="rounded-3xl border border-th8-border bg-th8-surface p-4 space-y-2 text-[12px]">
            <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              สาระสำคัญจากทั้ง 2 เคส
            </p>
            <ul class="space-y-1.5 text-slate-700">
              <li>• จาก Excel หลายเวอร์ชัน → กลายเป็น model กลางเดียว</li>
              <li>• จาก “คาดเดา” → เป็น Scenario ที่วัด impact ได้จริง</li>
              <li>• จาก report สวย ๆ → เป็น Insight ที่ตอบคำถาม “แล้วเราควรทำอะไรต่อ?”</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Case 1: FMCG -->
    <section class="space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Case 1 · FMCG / Distribution
          </p>
          <h2 class="text-lg font-semibold text-th8-text">
            จาก “งบโปรโมชั่นกระจัดกระจาย” → “รู้จริงว่าโปรไหนคุ้ม โปรไหนเผาเงิน”
          </h2>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 text-sm">
        <!-- Story -->
        <div class="space-y-3">
          <p class="text-[13px] text-slate-700 leading-relaxed">
            บริษัท FMCG ขนาดกลางที่ขายสินค้าผ่าน 3 ช่องทางหลัก — Modern trade, ร้านค้าปลีกดั้งเดิม และ Online marketplace.
            ทีมการเงินต้องทำ Budget &amp; Forecast แยกตามช่องทาง รวมถึงงบ Promotion ที่เปลี่ยนแทบทุกเดือน
            แต่ข้อมูลโปรส่วนใหญ่กระจายอยู่ใน Excel ของทีม Sales / Trade marketing แต่ละคน
          </p>
          <p class="text-[13px] text-slate-700 leading-relaxed">
            ปัญหาของทีม FP&amp;A คือ:
          </p>
          <ul class="list-disc list-inside text-[13px] text-slate-700 space-y-1">
            <li>งบ Promotion ไม่เคย match กับยอดขายจริงแบบ clean ๆ</li>
            <li>ผู้บริหารถามว่า “โปรไหนคุ้ม?” ก็ตอบได้แค่ระดับความรู้สึก</li>
            <li>เวลาเล่น Scenario เช่น “ถ้าลด Trade spending 10%” ต้องไล่แก้ Excel หลายไฟล์</li>
          </ul>
          <p class="text-[13px] text-slate-700 leading-relaxed">
            TH8 · PlanSphere™ เข้าไปช่วยโดยเริ่มจาก:
          </p>
          <ul class="list-disc list-inside text-[13px] text-slate-700 space-y-1">
            <li>ดึงยอดขายจริงแยกตามช่องทาง / แบรนด์ / SKU จากระบบขาย</li>
            <li>สร้าง “Promotion model” กลางให้ทีม Sales กรอกแผนโปรในที่เดียว</li>
            <li>เชื่อมงบ Promotion เข้ากับยอดขายจริง (Actual) แบบเดือนต่อเดือน</li>
          </ul>
        </div>

        <!-- Impact & AI angle -->
        <div class="space-y-3">
          <div class="rounded-2xl border border-th8-border bg-th8-surface p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              แล้ว AI FP&amp;A ช่วยตรงไหน?
            </p>
            <ul class="text-[13px] text-slate-700 space-y-1.5">
              <li>• ทำ Variance ระหว่าง “ยอดขายตามแผน” กับ “ยอดขายจริง” แยกตามโปร</li>
              <li>• วิเคราะห์ว่าโปรไหนดัน volume จริง โปรไหนแค่กิน Margin</li>
              <li>• เขียน Insight เป็นภาษาคน: “ถ้าตัด 3 โปรนี้ จะไม่กระทบยอดขายรวม แต่กำไรดีขึ้น X ล้านบาท”</li>
              <li>• ให้ Scenario สำเร็จรูป เช่น “ลด Trade spending 10% ที่ไม่ productive” แล้วคำนวณ impact ทันที</li>
            </ul>
          </div>
          <div class="grid grid-cols-2 gap-3 text-[11px]">
            <div class="rounded-2xl border border-th8-border bg-th8-surface px-3 py-3">
              <p class="text-slate-500 mb-1">เวลาทำงบ &amp; วิเคราะห์โปร</p>
              <p class="text-xl font-semibold text-th8-text">-60%</p>
            </div>
            <div class="rounded-2xl border border-th8-border bg-th8-surface px-3 py-3">
              <p class="text-slate-500 mb-1">โปรที่ “ตัดทิ้งได้” แต่ไม่กระทบยอดขาย</p>
              <p class="text-xl font-semibold text-th8-text">+ ชัดเจน</p>
            </div>
          </div>
          <p class="text-[12px] text-slate-600">
            สิ่งที่เปลี่ยนไปไม่ใช่แค่ตัวเลขใน report แต่คือ “วิธีคุยระหว่าง CFO กับ Head of Sales” —
            เขามองโปรเป็น Investment ที่วัดผลได้ ไม่ใช่แค่ “ค่าใช้จ่ายที่ต้องจ่ายทุกปี”
          </p>
        </div>
      </div>
    </section>

    <!-- Case 2: Warehouse / Logistics -->
    <section class="space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-3">
        <div>
          <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Case 2 · Warehouse / Logistics
          </p>
          <h2 class="text-lg font-semibold text-th8-text">
            จาก “รู้แค่ว่าเหนื่อย” → “รู้จริงว่า Cost per pick เท่าไหร่ และจะลดได้ยังไง”
          </h2>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 text-sm">
        <!-- Story -->
        <div class="space-y-3">
          <p class="text-[13px] text-slate-700 leading-relaxed">
            บริษัท Logistics / Fulfillment ที่มี 3 Warehouse รอบกรุงเทพฯ รับงานทั้ง B2B และ B2C.
            ทุกเดือนทีม Finance เห็นค่าแรง OT, ค่าเช่าโกดัง, ค่าขนส่งเพิ่มขึ้นเรื่อย ๆ
            แต่ไม่มีใครตอบได้ชัด ๆ ว่า “Cost per order / per pick / per route จริง ๆ เท่าไหร่”
          </p>
          <p class="text-[13px] text-slate-700 leading-relaxed">
            ข้อมูลการทำงานมีครบ:
          </p>
          <ul class="list-disc list-inside text-[13px] text-slate-700 space-y-1">
            <li>จำนวน order / line item ที่หยิบในแต่ละวัน</li>
            <li>จำนวนคนแต่ละกะ + OT</li>
            <li>ค่าเช่า, ค่าไฟ, ค่าเดินรถ, ค่า delivery ต่อวัน</li>
          </ul>
          <p class="text-[13px] text-slate-700 leading-relaxed">
            แต่ปัญหาคือข้อมูลเหล่านี้อยู่คนละระบบ / Excel คนละไฟล์ ทำให้เวลาคุย budget กับ Owner ก็จบแค่
            “ปีนี้ค่าขนส่งขึ้น” แต่ไม่เคยลงลึกว่าจริง ๆ แล้วเราควรปรับอะไร
          </p>
          <p class="text-[13px] text-slate-700 leading-relaxed">
            TH8 · PlanSphere™ เข้าไปช่วยโดย:
          </p>
          <ul class="list-disc list-inside text-[13px] text-slate-700 space-y-1">
            <li>สร้าง Model ที่เอา Cost ทั้งหมด (แรงงาน, ค่าเช่า, ค่ารถ) มาผูกกับ Volume งานจริง</li>
            <li>คำนวณ Cost per pick / per order / per route แยกตามประเภทงาน</li>
            <li>ทำ Budget &amp; Forecast โดยอิงจาก Driver เหล่านี้ ไม่ใช่แค่ % growth จากปีก่อน</li>
          </ul>
        </div>

        <!-- Impact & AI -->
        <div class="space-y-3">
          <div class="rounded-2xl border border-th8-border bg-th8-surface p-4 space-y-2">
            <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              AI FP&amp;A เห็นอะไรที่คนมองไม่ค่อยเห็น?
            </p>
            <ul class="text-[13px] text-slate-700 space-y-1.5">
              <li>• เทียบ Productivity ระหว่างกะ / Warehouse โดยไม่เอา outlier มาปน</li>
              <li>• วิเคราะห์ว่า “จุดไหนเพิ่มคนแล้วคุ้ม จุดไหนลดคนได้โดยไม่กระทบ SLA”</li>
              <li>• จำลอง Scenario เช่น “เพิ่มกะกลางคืน +5 คน” หรือ “รวม 2 Warehouse เป็น 1” แล้วดู Impact ต่อ Cost &amp; Service level</li>
              <li>• สรุปเป็นภาษาที่ Owner เข้าใจได้ใน 1–2 หน้า — ไม่ใช่ Excel 20 แท็บ</li>
            </ul>
          </div>
          <div class="grid grid-cols-2 gap-3 text-[11px]">
            <div class="rounded-2xl border border-th8-border bg-th8-surface px-3 py-3">
              <p class="text-slate-500 mb-1">มองเห็น Cost per pick ชัดเจน</p>
              <p class="text-xl font-semibold text-th8-text">ครั้งแรก</p>
            </div>
            <div class="rounded-2xl border border-th8-border bg-th8-surface px-3 py-3">
              <p class="text-slate-500 mb-1">Idea ลดต้นทุนที่ “ทำได้จริง”</p>
              <p class="text-xl font-semibold text-th8-text">ชัด 2–3 ทางเลือก</p>
            </div>
          </div>
          <p class="text-[12px] text-slate-600">
            จุดสำคัญไม่ใช่แค่ “ลด Cost” แต่คือการทำให้ทีมปฏิบัติการเข้าใจตัวเลขเดียวกับทีมการเงิน —
            ทุกคนคุยกันบนฐานข้อมูลและ model เดียวกัน ไม่ใช่ Excel คนละชุด
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="border border-dashed border-th8-border rounded-2xl bg-th8-surface/60 px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div class="space-y-1">
        <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">
          อยากเห็นเคสแบบนี้กับข้อมูลของบริษัทคุณ?
        </p>
        <p class="text-sm font-semibold text-th8-text">
          เราเริ่มจาก Workshop ง่าย ๆ 60–90 นาที กับทีม Finance / FP&amp;A / Operations
        </p>
        <p class="text-[12px] text-slate-600">
          เอา file Excel / report เดิมของคุณมาด้วย แล้วให้ PlanSphere™ ช่วยต่อเป็น model + AI Insight ให้เห็นภาพในครั้งแรก.
        </p>
      </div>
      <RouterLink
        :to="{ name: 'contact' }"
        class="inline-flex items-center rounded-full bg-th8-primary px-5 py-2 text-xs font-semibold text-white hover:bg-th8-accent"
      >
        นัดคุยเคสของบริษัทคุณ
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>