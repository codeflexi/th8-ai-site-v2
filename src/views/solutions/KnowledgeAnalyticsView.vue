<template>
  <div class="min-h-screen bg-slate-50 text-slate-800">
    <main class="max-w-6xl mx-auto p-6 md:p-10 space-y-14">

      <!-- HERO -->
      <section class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 md:p-12">
        <div class="absolute -top-20 -right-24 w-96 h-96 rounded-full bg-rose-400 opacity-10"></div>
        <div class="absolute -bottom-20 -left-24 w-72 h-72 rounded-full bg-slate-900 opacity-5"></div>

        <div class="relative space-y-6">
          <div class="flex items-center gap-3">
            <span class="px-2.5 py-1 bg-rose-500 text-white text-xs rounded-full">TH8.AI</span>
            <span class="text-xs text-slate-500">AI Knowledge & Analytics Suite</span>
          </div>

          <h1 class="text-3xl md:text-4xl font-bold leading-tight text-slate-900">
            เปลี่ยนเอกสารกองใหญ่ & ช่องแชทเต็มไปด้วยคำถาม  
            ให้กลายเป็น <span class="underline decoration-rose-500 decoration-4 underline-offset-4">ระบบความรู้</span> ที่ AI ใช้ได้จริง
          </h1>

          <p class="text-slate-600 max-w-3xl text-sm md:text-base leading-relaxed">
            ทุกองค์กรมีข้อมูล แต่ข้อมูลไม่ได้ถูกจัดให้ “AI ใช้ได้จริง”
            Policy กระจายหลายไฟล์, SOP เป็น PDF, รูปสินค้ากระจัดกระจาย,
            คำถามซ้ำ ๆ เกิดขึ้นทุกวันใน LINE / Teams.
            TH8.AI จะช่วยทำให้ข้อมูลทั้งหมดนี้กลายเป็น “Knowledge Graph + Exception Library”
            ที่ใช้ได้จริงทั้งในงาน Finance, Operation, Legal และ Support.
          </p>
        </div>
      </section>

   

      <!-- BEFORE / AFTER -->
      <section class="grid md:grid-cols-2 gap-6">
        <div class="rounded-2xl border bg-white p-6 space-y-4">
          <h2 class="text-xl font-semibold">ก่อนใช้ AI Knowledge</h2>
          <ul class="space-y-2 text-sm">
            <li>• Policy อยู่หลายที่ — ไม่รู้ว่าอันไหน version ล่าสุด</li>
            <li>• SOP เป็น PDF รูปภาพ AI อ่านไม่ออก</li>
            <li>• คำถามซ้ำ ๆ ใน LINE/Teams เกิดทุกวัน</li>
            <li>• เอกสารไม่มี metadata → AI เดา context ผิด</li>
            <li>• Audit หาเอกสารไม่เจอ ใช้เวลานาน</li>
          </ul>
          <div class="rounded-lg bg-rose-50 text-rose-700 border border-rose-200 p-3 text-sm">
            ผลลัพธ์: AI ตอบผิดบ่อย, ตอบมั่ว, อธิบายไม่ได้ → ใช้งานจริงไม่ได้
          </div>
        </div>

        <div class="rounded-2xl border bg-white p-6 space-y-4">
          <h2 class="text-xl font-semibold">หลังใช้ TH8 Knowledge Suite</h2>
          <ul class="space-y-2 text-sm">
            <li>• Document Pipeline จัดการให้ทุกไฟล์มี metadata</li>
            <li>• OCR, Chunk, Classification ทำให้อ่าน PDF ได้ 100%</li>
            <li>• มี Exception Library จาก real usage</li>
            <li>• AI ตอบแบบอ้างอิง source ได้ทุกคำตอบ</li>
            <li>• Dashboard บอก coverage / gaps ที่ต้องปรับปรุง</li>
          </ul>
          <div class="rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 p-3 text-sm">
            ผลลัพธ์: AI ตอบถูกขึ้นมากกว่า 90% พร้อมอ้างอิงหลักฐาน
          </div>
        </div>
      </section>

                <!-- ✅ NEW: Pillar 3 · AI Knowledge & Analytics Suite -->
    <section class="animate-fade space-y-5">
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <div class="space-y-1">
          <h2 class="text-lg font-semibold text-th8-text flex items-center gap-2">
            <span
              class="inline-block h-6 w-6 rounded-full bg-red-100 text-[13px] flex items-center justify-center text-th8-primary"
            >
              📚
            </span>
            <span>AI Knowledge &amp; Analytics Suite</span>
          </h2>
          <p class="text-sm text-th8-text/80 max-w-2xl">
            เปลี่ยน PDF, Policy, SOP, Log งาน และคำถามซ้ำ ๆ ใน LINE/Teams
            ให้กลายเป็นระบบความรู้ที่ AI ใช้ได้จริง พร้อม Dashboard วัด Accuracy, Coverage
            และ Painpoint ที่ยังต้องปรับปรุง.
          </p>
        </div>

      
      </div>

      <div class="grid md:grid-cols-3 gap-6 text-sm">
        <!-- Card 1: Knowledge Copilot -->
        <div class="p-5 border border-th8-border rounded-2xl bg-th8-surface shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span
                class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-[14px]"
              >
                💬
              </span>
              <h3 class="font-semibold text-th8-text">Knowledge Copilot</h3>
            </div>
            <span class="text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              +92.4% accuracy
            </span>
          </div>
          <p class="text-[13px] text-th8-text/80">
            Copilot สำหรับตอบคำถาม Policy, SOP, Contract แบบอ้างอิงเอกสารจริง
            เหมาะกับ Finance, Operation, HR, Legal.
          </p>
          <ul class="text-[12px] text-slate-600 space-y-1 mt-1">
            <li>• แสดง Source ที่อ้างอิงทุกคำตอบ</li>
            <li>• รองรับไทย–อังกฤษ และ context เฉพาะองค์กร</li>
            <li>• แยกสิทธิ์ตอบตามทีม / ระดับผู้ใช้</li>
          </ul>
        </div>

        <!-- Card 2: Document Pipeline -->
        <div class="p-5 border border-th8-border rounded-2xl bg-th8-surface shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span
                class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-[14px]"
              >
                🧹
              </span>
              <h3 class="font-semibold text-th8-text">Document Pipeline</h3>
            </div>
            <span class="text-[10px] px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-th8-border/60">
              SharePoint · GDrive · Teams
            </span>
          </div>
          <p class="text-[13px] text-th8-text/80">
            Pipeline สำหรับดึง, ทำความสะอาด, แปลง และทำ Index เอกสารทุกรูปแบบ
            ให้กลายเป็น Knowledge Graph + Vector Store ที่ดูแลได้.
          </p>
          <ul class="text-[12px] text-slate-600 space-y-1 mt-1">
            <li>• OCR PDF &amp; รูปภาพ, Extract ตาราง &amp; Entity</li>
            <li>• สร้าง Metadata อัตโนมัติตาม Policy / ทีมงาน</li>
            <li>• Dashboard บอกว่า Source ไหนพร้อมใช้, Source ไหนยังมีปัญหา</li>
          </ul>
        </div>

        <!-- Card 3: Exception Library & Analytics -->
        <div class="p-5 border border-th8-border rounded-2xl bg-th8-surface shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span
                class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-[14px]"
              >
                📊
              </span>
              <h3 class="font-semibold text-th8-text">Exception Library &amp; Analytics</h3>
            </div>
            <span class="text-[10px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
              −43% duplicate questions
            </span>
          </div>
          <p class="text-[13px] text-th8-text/80">
            เก็บ Pattern ของคำถามที่ AI ตอบผิดหรือยังไม่มั่นใจ
            เพื่อเอาไปปรับ Rule, ปรับเอกสาร และ Training ให้ดีขึ้นเรื่อย ๆ.
          </p>
          <ul class="text-[12px] text-slate-600 space-y-1 mt-1">
            <li>• Exception Library จาก real usage ไม่ใช่แค่ test lab</li>
            <li>• Analytics: Accuracy, Coverage, Time saved, Cost impact</li>
            <li>• ใช้ตัวเลขจริงคุยกับ Management เรื่อง ROI ของ Knowledge</li>
          </ul>
        </div>
      </div>
    </section>

      <!-- PIPELINE -->
      <section>
        <h3 class="text-xl font-semibold mb-4">TH8 Knowledge Pipeline (5 ขั้น)</h3>
        <div class="grid md:grid-cols-5 gap-4 text-sm">
          <div class="p-4 bg-white border rounded-xl">
            <div class="text-2xl mb-2">📥</div>
            <b>1) Ingest</b>
            <p>PDF, Word, Excel, รูป, Line/Teams messages, SharePoint</p>
          </div>
          <div class="p-4 bg-white border rounded-xl">
            <div class="text-2xl mb-2">🧹</div>
            <b>2) Normalize</b>
            <p>OCR, Clean text, Tag รูป, Extract table & entity</p>
          </div>
          <div class="p-4 bg-white border rounded-xl">
            <div class="text-2xl mb-2">📚</div>
            <b>3) Index & Chunk</b>
            <p>Semantic chunking + metadata + vector store</p>
          </div>
          <div class="p-4 bg-white border rounded-xl">
            <div class="text-2xl mb-2">⚠️</div>
            <b>4) Exception Library</b>
            <p>เก็บคำถาม/คำตอบที่ผิดพลาด → ปรับ rule/label เพิ่ม</p>
          </div>
          <div class="p-4 bg-white border rounded-xl">
            <div class="text-2xl mb-2">📊</div>
            <b>5) Analytics</b>
            <p>Top query, accuracy, knowledge gap, source freshness</p>
          </div>
        </div>
      </section>

      <!-- USE CASES -->
      <section>
        <h3 class="text-xl font-semibold mb-4">4 Use Cases ที่องค์กรไทยใช้จริง</h3>
        <div class="grid md:grid-cols-4 gap-4 text-sm">
          <div class="p-4 bg-white border rounded-xl">
            <b>Finance Policy Copilot</b>
            <p class="text-slate-600 mt-1">ตอบคำถามเรื่องใบกำกับภาษี, เอกสารประกอบ, กฎภาษี</p>
          </div>
          <div class="p-4 bg-white border rounded-xl">
            <b>SOP Operation Manual</b>
            <p class="text-slate-600 mt-1">แนะนำวิธีทำงานตามขั้นตอน ลดคำถามจากทีมใหม่</p>
          </div>
          <div class="p-4 bg-white border rounded-xl">
            <b>Customer Support KB</b>
            <p class="text-slate-600 mt-1">ตอบคำถามลูกค้าได้เร็วขึ้น อ้างอิงคู่มือสินค้า</p>
          </div>
          <div class="p-4 bg-white border rounded-xl">
            <b>Legal / Contract Finder</b>
            <p class="text-slate-600 mt-1">ค้นหา clause สำคัญในสัญญาได้ภายใน 1 วินาที</p>
          </div>
        </div>
      </section>

      <!-- MOCKUP 1: Knowledge Copilot -->
      <section class="rounded-2xl border bg-white p-6">
        <h3 class="text-lg font-semibold mb-4">Mockup: Knowledge Copilot (ตอบคำถาม + อ้างอิงเอกสาร)</h3>

        <div class="grid md:grid-cols-[1fr,1.3fr] gap-6">
          <!-- Chat -->
          <div class="border rounded-xl bg-slate-900 text-slate-100 p-4 space-y-3 text-sm">
            <p class="text-slate-400 text-xs uppercase tracking-wide">ถาม AI</p>

            <div class="bg-slate-800 border border-slate-700 rounded-lg p-3">
              <p>“ถ้าบริษัทต้องการตัดจำหน่ายสินทรัพย์อายุเกิน 5 ปี ต้องใช้เอกสารอะไรบ้าง?”</p>
            </div>

            <p class="text-slate-400 text-xs uppercase tracking-wide">คำตอบจาก AI</p>

            <div class="bg-slate-800 border border-slate-700 rounded-lg p-3 space-y-2">
              <p class="font-medium">สรุปขั้นตอนการตัดจำหน่ายสินทรัพย์:</p>
              <ul class="list-disc pl-5 space-y-1 text-slate-200">
                <li>ต้องมีแบบฟอร์ม “FA-Writeoff-01”</li>
                <li>แนบรูปสินทรัพย์ปัจจุบัน</li>
                <li>แนบรายงานค่าเสื่อมล่าสุดจาก ERP</li>
                <li>ต้องได้รับอนุมัติจากผู้จัดการฝ่ายบัญชี</li>
              </ul>
              <p class="text-xs text-slate-400">AI อ้างอิงจาก policy: Fixed Asset Disposal Rev.2024</p>
            </div>
          </div>

          <!-- Sources -->
          <div class="space-y-3 text-sm">
            <h4 class="font-semibold text-slate-800">Sources ที่อ้างอิง</h4>
            <div class="rounded-xl border bg-slate-50 p-3 space-y-1">
              <p>📄 Fixed Asset Policy Rev.2024 (SharePoint)</p>
              <p>📄 FA Disposal Form (FA-Writeoff-01).pdf</p>
              <p>📄 ERP Depreciation Report / Apr 2025</p>
              <p>📸 Evidence_Image_12.jpg</p>
            </div>

            <div class="text-xs text-slate-500">
              *จุดขายสำคัญ: AI ของ TH8 แสดงหลักฐาน + reasoning ทุกครั้ง ไม่มั่ว ไม่ทึกทัก*
            </div>
          </div>
        </div>
      </section>

      <!-- MOCKUP 2: Document Pipeline -->
      <section class="rounded-2xl border bg-white p-6">
        <h3 class="text-lg font-semibold mb-4">Mockup: Document Pipeline Dashboard</h3>

        <div class="grid md:grid-cols-3 gap-4 text-sm">
          <div class="p-4 bg-slate-900 text-slate-100 rounded-xl">
            <p class="text-xs uppercase text-slate-400">Source</p>
            <h4 class="font-semibold">SharePoint / Policy</h4>
            <p class="text-slate-400 text-xs mt-1">1,253 files</p>
            <p class="text-emerald-300 text-sm mt-3">✓ Synced 2 hours ago</p>
          </div>

          <div class="p-4 bg-slate-900 text-slate-100 rounded-xl">
            <p class="text-xs uppercase text-slate-400">Source</p>
            <h4 class="font-semibold">Google Drive / SOP</h4>
            <p class="text-slate-400 text-xs mt-1">458 files</p>
            <p class="text-amber-300 text-sm mt-3">• 12 files require OCR</p>
          </div>

          <div class="p-4 bg-slate-900 text-slate-100 rounded-xl">
            <p class="text-xs uppercase text-slate-400">Source</p>
            <h4 class="font-semibold">Teams Messages</h4>
            <p class="text-slate-400 text-xs mt-1">824 items indexed</p>
            <p class="text-rose-300 text-sm mt-3">⚠ 3 threads malformed</p>
          </div>
        </div>

        <div class="text-xs text-slate-500 mt-4">
          TH8 Pipeline ดึงข้อมูลแบบ schedule + event-based และตรวจคุณภาพแต่ละชิ้นก่อน indexing
        </div>
      </section>

      <!-- MOCKUP 3: Exception Library -->
      <section class="rounded-2xl border bg-white p-6">
        <h3 class="text-lg font-semibold mb-4">Mockup: Exception Library & Analytics</h3>

        <div class="grid md:grid-cols-2 gap-6">

          <!-- Table -->
          <div class="rounded-xl border bg-slate-50 p-4 text-sm">
            <p class="font-semibold mb-3">Exception Patterns</p>
            <table class="w-full text-xs">
              <thead>
                <tr class="border-b text-slate-600">
                  <th class="py-1 text-left">Pattern</th>
                  <th class="py-1 text-left">Frequency</th>
                  <th class="py-1 text-left">Last Seen</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="py-1">ถาม policy เกี่ยวกับ “ค่าเสื่อมคงค้าง”</td>
                  <td class="py-1">82 ครั้ง</td>
                  <td class="py-1">3 วันก่อน</td>
                </tr>
                <tr class="border-b">
                  <td class="py-1">คำถามเอกสารขาด metadata</td>
                  <td class="py-1">67 ครั้ง</td>
                  <td class="py-1">1 สัปดาห์ก่อน</td>
                </tr>
                <tr class="border-b">
                  <td class="py-1">SOP ขั้นตอนไม่ครบ (require update)</td>
                  <td class="py-1">41 ครั้ง</td>
                  <td class="py-1">5 วันก่อน</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Analytics -->
          <div class="rounded-xl border bg-slate-900 text-slate-50 p-4 text-sm">
            <p class="font-semibold mb-3">Knowledge Analytics</p>
            <ul class="space-y-2 text-slate-300">
              <li>• AI accuracy (last 30 days): <b class="text-emerald-300">92.4%</b></li>
              <li>• Coverage ของ policy/sop: <b class="text-emerald-300">87%</b></li>
              <li>• Duplicate questions ลดลง: <b class="text-emerald-300">−43%</b></li>
              <li>• เวลาตอบเฉลี่ย: <b class="text-emerald-300">1.2 วินาที</b></li>
            </ul>
          </div>
        </div>
      </section>

  

      <!-- FOOTER -->
      <footer class="text-xs text-slate-500 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 bg-rose-500 rounded-full"></div>
          <span>TH8.AI • AI Agent & Automation for Thai Enterprises</span>
        </div>
        <span>Designed by TH8 • TailwindCSS</span>
      </footer>

    </main>
  </div>
</template>

<script setup lang="ts"></script>
