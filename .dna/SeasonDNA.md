# Chorn Mountain Season

---

# 1. Purpose

Chorn Mountain Season คือระบบ Temporal Intelligence ของ ChornDNA
ทำหน้าที่ตรวจจับ “เวลา” และแปลงเป็นข้อมูลเชิงออกแบบอย่างเป็นระบบ

Chorn Mountain Season ต้องสามารถ:

* ระบุเดือนปัจจุบัน
* ระบุฤดูปัจจุบัน
* ตรวจสอบดอกไม้ที่กำลังบาน
* แยกระดับ Early / Blooming / Full / Late
* คำนวณ Seasonal Intensity
* สร้าง Color / Mood / Texture Recommendation
* สนับสนุน Design / Storytelling / AI Prompt Layer

Chorn Mountain Season คือชีพจรของเวลาในระบบทั้งหมด

---

# 2. System Architecture

Chorn Mountain Season ประกอบด้วย 3 โมดูลหลัก:

## 2.1 Flowers (Master Botanical Registry)

ฐานข้อมูลดอกไม้เชิงลึก 3 ชั้นข้อมูล:

### A. Identity Layer

* `name`
* `alterName`
* `season`
* `roles[]`
* `areas[]`

### B. Botanical Layer

* `colorPrimary`
* `colorAccent`
* `petalForm`
* `flowerSize` (เล็ก / กลาง / ใหญ่)
* `growthForm` (ไม้ยืนต้น / ไม้พุ่ม / ล้มลุก)
* `heightRange`
* `fragranceLevel` (ไม่มี / อ่อน / หอมชัด / หอมแรง)
* `visualDensity` (เบา / กลาง / หนาแน่น)
* `lightPreference`
* `symbolicMeaning`
* `culturalUsage`

### C. Temporal Layer

* `startBloomMonth`
* `endBloomMonth`
* `bloomMonths[]`
* `fullBloom`
* `bloomPattern`
* `intensityCurve`

---

## 2.2 Seasons

Mapping ฤดู → เดือน / Mood / Primary Flower

แต่ละฤดูต้องมี:

* `name`
* `months[]`
* `themeColor`
* `mood[]`
* `primaryFlower` (ต้องมี 1 ดอกเสมอ)
* `flowers[]`

---

## 2.3 Month Mapping

Mapping เดือน → ฤดู → ดอกไม้ที่บาน

ใช้ตรวจจับเดือนปัจจุบันแบบ dynamic

---

# 3. Seasonal Governance Rules

## 3.1 Season Priority

1. ฤดูหนาว
2. ฤดูร้อน
3. ฤดูฝน

ใช้เมื่อดอกไม้มี overlap

---

## 3.2 Primary Flower Rule

แต่ละฤดูต้องมี Primary Flower เพียง 1 ดอก
ทำหน้าที่เป็น Visual Anchor และ Identity Core

* หนาว → ดอกนางพญาเสือโคร่ง
* ร้อน → ดอกราชพฤกษ์
* ฝน → ดอกพุทธรักษาญี่ปุ่น

---

## 3.3 Transitional Rule

ดอกไม้ประเภท:

* ปลายหนาว–ต้นร้อน
* รอยต่อฤดู

สามารถอยู่ใน 2 ฤดูติดกันได้

---

## 3.4 All-Year Rule

ดอกไม้ที่ season = “ทุกฤดู”:

* ห้ามเป็น Primary Flower
* ทำหน้าที่ Background Layer
* ใช้เสริม mood เท่านั้น

---

# 4. Bloom Stage Classification

สถานะการบานมี 5 ระดับ:

1. Early Bloom
   เดือน = startBloomMonth

2. Blooming
   เดือนอยู่ใน bloomMonths

3. Full Bloom
   เดือนตรงกับ fullBloom

4. Late Bloom
   เดือน = endBloomMonth

5. Off Season
   ไม่อยู่ใน bloomMonths

---

# 5. Current Month Detection Procedure

### Step 1 – Detect Month

```
const now = new Date()
const currentMonth = MONTHS_TH[now.getMonth()]
```

### Step 2 – Detect Season

ค้นหา season ที่ months.includes(currentMonth)

### Step 3 – Filter Blooming Flowers

กรอง Flowers ที่ bloomMonths.includes(currentMonth)

### Step 4 – Classify Stage

ประเมินแต่ละดอกตาม Bloom Stage

### Step 5 – Apply Weighting

ลำดับความสำคัญ:

1. Primary Flower
2. Full Bloom
3. Early / Late
4. Blooming
5. All-Year

---

# 6. Seasonal Intensity Score

คะแนนต่อดอก:

* Full Bloom = 5
* Early / Late = 3
* Blooming = 2
* All-Year = 1

รวมคะแนน → Normalize 0–100

ใช้กำหนด:

* ความเข้มสี
* ความหนาแน่นลวดลาย
* ความสว่างภาพ
* Saturation Level

---

# 7. Standard Output Structure

```
{
  month,
  season,
  primaryFlower,
  earlyBloomers[],
  fullBloomers[],
  lateBloomers[],
  blooming[],
  backgroundFlowers[],
  intensityScore,
  dominantColorPalette[],
  recommendedTexture,
  recommendedMoodKeywords[]
}
```

---

# 8. Botanical Registry (Standardized Summary)

## 8.1 ดอกนางพญาเสือโคร่ง

Season: ฤดูหนาว (Primary)

* Color: ชมพูอ่อน–เข้ม / เกสรเหลือง
* Form: 5 กลีบบาง
* Growth: ไม้ยืนต้น 8–15 ม.
* Fragrance: อ่อน
* Density: หนาแน่นเมื่อบานเต็มที่
* Pattern: บานพร้อมกันทั้งต้น
* Curve: พุ่งเร็ว
* Meaning: การเริ่มต้นใหม่ / ความสงบภูเขา

Design: Cool Pink + Soft Blue, ใช้ Negative Space

---

## 8.2 ดอกพวงแสด

Season: ฤดูหนาว

* Color: ส้มสด
* Form: ถ้วยใหญ่
* Growth: ไม้ยืนต้น 10–20 ม.
* Density: หนาแน่น
* Pattern: ช่อใหญ่
* Meaning: พลังเมือง

Design: Accent Orange

---

## 8.3 ดอกเสี้ยวดอกขาว

Season: ฤดูหนาว

* Color: ขาว
* Form: 5 กลีบแยก
* Density: กลาง
* Fragrance: อ่อน
* Meaning: เรียบง่าย / ป่าสูง

Design: Minimal / Light Texture

---

## 8.4 ดอกเสลา

Season: รอยต่อฤดู

* Color: ม่วงอมชมพู
* Form: กลีบย่น
* Pattern: ทยอยบาน
* Curve: ค่อยเพิ่ม
* Meaning: การเปลี่ยนผ่าน

Design: Purple Gradient

---

## 8.5 ดอกราชพฤกษ์

Season: ฤดูร้อน (Primary)

* Color: เหลืองทอง
* Pattern: ช่อยาวห้อย
* Density: หนาแน่น
* Fragrance: อ่อน
* Meaning: เทศกาล / แสงแดด

Design: High Saturation Yellow

---

## 8.6 ดอกประดู่บ้าน

Season: ฤดูร้อน

* Color: เหลืองอ่อน
* Fragrance: หอมแรง
* Pattern: โปรยทั่วเรือนยอด
* Meaning: ร่มเงาชุมชน

Design: Layered Texture

---

## 8.7 ดอกสารภี

Season: ปลายหนาว–ต้นร้อน

* Color: ขาวครีม
* Size: เล็ก
* Fragrance: หอมชัด
* Density: เบา
* Meaning: เมืองเก่า

Design: Soft Focus

---

## 8.8 ดอกพิกุล

Season: ทุกฤดู

* Color: ครีม
* Size: เล็ก
* Fragrance: หอมแรง
* Density: เบา
* Role: Background Cultural Layer

---

## 8.9 ดอกมะลิลา

Season: ทุกฤดู

* Color: ขาว
* Fragrance: หอมแรง
* Pattern: ทยอยบาน
* Role: Daily Layer

---

## 8.10 ดอกพุทธรักษาญี่ปุ่น

Season: ฤดูฝน (Primary)

* Color: แดง / ส้ม / เหลือง
* Form: กลีบซ้อนใหญ่
* Growth: ล้มลุก 1–2 ม.
* Pattern: บานต่อเนื่องยาว
* Curve: คงที่ยาว
* Meaning: ความต่อเนื่อง / การงอกงาม

Design: Saturated Blocks + Reflection Mood

---

# 9. Integration in ChornDNA

Chorn Mountain Season = Temporal Intelligence Layer

ทำงานร่วมกับ:

* LannaDNA → Cultural Context
* SmartCityDNA → Urban Context
* DroneDNA → Mobility Context
* ContentTranslationDNA → Language Context

Chorn Mountain Season มีสิทธิ์กำหนด Mood และ Timing ก่อน Aesthetic Preference เสมอ

---

# 10. Design Principle

Chorn Mountain Season ไม่ได้บอกเพียงว่า “ตอนนี้เดือนอะไร”

แต่มันบอกว่า

ช่วงเวลานี้
ธรรมชาติกำลังขยายตัวแบบไหน

และงานออกแบบ
ต้องหายใจในจังหวะเดียวกัน