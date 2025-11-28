<template>
  <div class="max-w-4xl mx-auto px-4 py-12 space-y-10">
    <!-- Intro -->
    <section class="animate-fade space-y-4 text-center max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold text-th8-text">คุยกับทีม TH8.AI</h1>
      <p class="text-sm text-th8-text/80">
        ถ้าคุณมีโจทย์เกี่ยวกับ Finance, Operations, Logistics, Warehouse หรืออยากเริ่มทำ Agentic AI  
        สามารถส่งบริบทและสิ่งที่อยากเปลี่ยนแปลงมาหาเราได้เลย
      </p>
    </section>

    <!-- Two-column layout -->
    <section class="animate-fade grid md:grid-cols-[1.2fr,1fr] gap-8 items-start text-sm">
      <!-- Form (static mockup) -->
      <div class="p-6 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-4">
        <h2 class="text-base font-semibold text-th8-text mb-1">
          ส่งโจทย์เบื้องต้นขององค์กรคุณ
        </h2>
        <p class="text-[12px] text-th8-text/70 mb-3">
          ข้อความในฟอร์มนี้เป็นเพียงตัวอย่างสำหรับ UI  
          คุณสามารถนำไปต่อยอดเชื่อมกับ Backend หรือระบบ CRM ของคุณเองได้
        </p>

        <form class="space-y-4">
          <div class="space-y-1 text-left">
            <label class="block text-[12px] font-medium text-slate-700">ชื่อ–นามสกุล</label>
            <input
              type="text"
              class="w-full rounded-xl border border-th8-border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-th8-primary/40 focus:border-th8-primary"
              placeholder="เช่น คุณตั๊กตั๊ก"
            />
          </div>

          <div class="space-y-1 text-left">
            <label class="block text-[12px] font-medium text-slate-700">บริษัท / อุตสาหกรรม</label>
            <input
              type="text"
              class="w-full rounded-xl border border-th8-border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-th8-primary/40 focus:border-th8-primary"
              placeholder="เช่น ธุรกิจ Logistic, Warehouse, FMCG"
            />
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-1 text-left">
              <label class="block text-[12px] font-medium text-slate-700">อีเมลสำหรับติดต่อกลับ</label>
              <input
                type="email"
                class="w-full rounded-xl border border-th8-border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-th8-primary/40 focus:border-th8-primary"
                placeholder="name@company.com"
              />
            </div>
            <div class="space-y-1 text-left">
              <label class="block text-[12px] font-medium text-slate-700">ช่องทางที่สะดวก</label>
              <select
                class="w-full rounded-xl border border-th8-border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-th8-primary/40 focus:border-th8-primary"
              >
                <option>Zoom / Google Meet</option>
                <option>โทรศัพท์</option>
                <option>LINE / Chat</option>
              </select>
            </div>
          </div>

          <div class="space-y-1 text-left">
            <label class="block text-[12px] font-medium text-slate-700">
              เล่าบริบท + ปัญหาที่อยากให้ AI ช่วย (สั้น ๆ)
            </label>
            <textarea
              rows="4"
              class="w-full rounded-xl border border-th8-border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-th8-primary/40 focus:border-th8-primary"
              placeholder="เช่น ตอนนี้ทีมต้องใช้เวลาหลายชั่วโมงในงานไหนบ้าง, ระบบอะไรที่อยากให้เชื่อมต่อ, KPI ที่อยากเปลี่ยนคืออะไร"
            ></textarea>
          </div>

          <button
            type="button"
            class="w-full rounded-full bg-th8-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-th8-accent"
          >
            (Mockup) ส่งข้อมูลให้ทีม TH8.AI
          </button>
        </form>
      </div>

      <!-- Info / Other channels -->
      <div class="space-y-4">
        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-3">
          <h2 class="text-base font-semibold text-th8-text">เริ่มต้นการคุยครั้งแรก</h2>
          <p class="text-[13px] text-th8-text/80">
            ปกติเราจะใช้เวลา 30–45 นาที เพื่อเข้าใจบริบทองค์กร, ระบบที่ใช้อยู่ และสิ่งที่อยากเปลี่ยน  
            จากนั้นทีมจะช่วยเสนอเส้นทางเริ่มต้นที่เหมาะสมให้
          </p>
          <ul class="text-[12px] text-th8-text/80 space-y-1">
            <li>• เข้าใจ Business + Process คร่าว ๆ</li>
            <li>• ดูว่า Agentic AI ไปอยู่ตรงไหนของ Flow ได้บ้าง</li>
            <li>• แนะนำว่าควรเริ่มจาก Use case ไหน</li>
          </ul>
        </div>

        <div class="p-5 rounded-2xl border border-th8-border bg-th8-surface shadow-sm space-y-3">
          <h2 class="text-base font-semibold text-th8-text">ช่องทางอื่น ๆ</h2>
          <ul class="text-[13px] text-th8-text/80 space-y-2">
            <li>• LINE OA: <span class="font-semibold">(@)TH8AI</span> (สมมติ)</li>
            <li>• Email: <span class="font-semibold">hello@th8.ai</span> (สมมติ)</li>
            <li>• LinkedIn: TH8.AI / ทีมที่ปรึกษา</li>
          </ul>
          <p class="text-[11px] text-slate-500">
            * ข้อมูลในหน้านี้เป็นตัวอย่าง UI/Content คุณสามารถนำไปปรับใช้กับระบบของคุณเองได้เต็มที่
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
