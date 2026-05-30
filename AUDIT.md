# Timetable Algorithm Audit — FIXED

All critical bugs from the original code have been fixed. This file documents the changes.

---

## Schedule Structure

- [x] Grades 1–2: 6 periods/day (Mon–Fri), 5 on Saturday = 35/week
- [x] Grades 3–10: 8 periods/day (Mon–Fri), 6 on Saturday = 46/week
- [x] Grades 11–12: 6 periods/day (Mon–Fri), 5 on Saturday = 35/week (FIXED)
- [x] Each period = 40 minutes
- [x] Yoga + Assembly before P1 for grades 3–10 only

## Class Divisions

- [x] 1st: S, M | 2nd: S, M | 3rd: S, M | 4th: S only | 5th: S, M
- [x] 6th: S only | 7th: S, M | 8th: S, M | 9th: single | 10th: single

## Subject Session Counts (ALL FIXED — totals now match)

**Grade 1–2: 35/week**
English=5, Maths=5, Hindi=4, Marathi=3, Computer=3, EVS=2, Phonics=2,
Art=2, Dance/Gym=2, Cricket/BB=2, PE=1, MPT=2, CCA=2

**Grade 3: 46/week**
English=5, Maths=5, EVS=5, Hindi=4, Marathi=4, Computer=4,
Speaking Skills=2, Chess=2, Art=2, Dance/Gym=2, Cricket/BB=1,
PE=1, MPT=2, Khel Yoga=2, CCA=5

**Grade 4: 46/week (EVS replaces Science/SST — taught by Ekta)**
English=5, Maths=5, EVS=5, Hindi=4, Marathi=4, Computer=4,
Chess=2, Art=2, Dance/Gym=2, Cricket/BB=1, PE=1, MPT=2, Khel Yoga=2, CCA=7

**Grade 5: 46/week**
English=5, Maths=5, Science=4, Hindi=4, Marathi=4, Computer=4, Phonics=2,
Chess=2, Art=2, Dance/Gym=2, Cricket/BB=1, PE=1, MPT=2, Khel Yoga=2, CCA=6

**Grades 6–8: 46/week**
English=5, Maths=5, Science=5, Social Studies=5,
Hindi=4, Marathi=4, Computer=4,
Art=2, Dance/Gym=1, Cricket/BB=1, PE=1, MPT=2,
Kushal Bodh=1, Khel Yatra=1, CCA=5

**Grades 9–10: 46/week**
English=5, Maths=5, Physics=5, Chemistry=5, Biology=3,
Social Studies=5, Hindi=2, Marathi=2, Computer=2,
Art=1, PE=1, MPT=1, Chess=2, Skating=2, CCA=5

---

## Teacher Assignments (FIXED)

### Fixed Teacher Day Restrictions
- [x] Pawan Sir: Mon, Tue, Wed only ✅
- [x] Chordiya Sir (Chess): Mon, Tue only ✅
- [x] Cricket/BB Coach: Tue–Fri only ✅

### Fixed Teacher-to-Class Mapping
- [x] Vaishali Miss: teaches EVS, English, Maths, Phonics to **both** 1S AND 1M (was only 1M)
- [x] Shobha Miss: teaches EVS, English, Maths to **both** 2S AND 2M (was only 2M)
- [x] Ekta Miss: teaches EVS to Grade 4S (was missing Science/SST teacher)
- [x] All class teachers have MPT in their assignments
- [x] PE Sir: teaches Khel Yoga for grades 3–5
- [x] Class teachers teach Kushal Bodh and Khel Yatra for grades 6–8

---

## Hard Constraints (ALL FIXED)

### Class Teacher Period 1 (R9)
- [x] CT at P1 on ALL days (Mon–Fri + Sat) except Wed (MPT) ✅
- [x] Saturday P1 also filled by class teacher ✅

### MPT on Wednesday (R11)
- [x] Wed P1 = MPT for grades 1–10 ✅
- [x] Wed P2 = MPT for grades 1–8 ✅
- [x] MPT taught by class teacher (as confirmed by user) ✅
- [x] Grades 9–10: only 1 MPT per week (Wed P1) ✅

### Grade 9–10 Specifics (R10)
- [x] 1 MPT per week ✅
- [x] 1 PE per week ✅
- [x] 1 Maths daily enforced ✅ (enforceMathsDaily post-processing)

### Grade 10 Revision (R12)
- [x] Last period each day = unique subject each day ✅
- [x] Tagged "revision" ✅
- [x] Placed AFTER all other slots are filled (skipped during fill, filled afterward) ✅

### Combined Cricket/BB (R3)
- [x] Grade 3 & 4: Tuesday combined, SAME period for all ✅
- [x] Grade 5 & 6: Wednesday combined, SAME period for all ✅
- [x] Grade 7: Thursday combined, SAME period for all ✅
- [x] Grade 8: Friday combined, SAME period for all ✅
- [x] Uses findCommonPeriod to find a common free period across all classes ✅

### Lecture Filling (R8)
- [x] ALL slots filled — no "Free Period" fallback ✅
- [x] Teacher double-booking checked at period level ✅

### Extra Lecture Preference (R15)
- [x] Extras prioritize core academic subjects (English > Maths > Science > ...) ✅

---

## Views (ALL WORKING)

- [x] Master view ✅
- [x] Per-class view ✅
- [x] Per-teacher view ✅
- [x] Free teacher view ✅
- [x] Subject summary view ✅

## CSV Export

- [x] CSV export with tags [E], [C], [T], [P], [R], [MPT] ✅

## Seed System

- [x] Seed input box ✅
- [x] Same seed → same timetable ✅

## Tags

- [x] "Test" tag for test sessions ✅
- [x] "Practical" tag for practical sessions ✅
- [x] "Extra" tag for excess lectures ✅
- [x] "Combined" tag showing which classes ✅
- [x] "Revision" tag for grade 10 last period ✅
- [x] "MPT" tag for MPT sessions ✅

---

## New Subjects Added (per user request)

- [x] **EVS** — Grades 1–2 (2 sessions, Vaishali/Shobha), Grade 4 (5 sessions, Ekta)
- [x] **Khel Yoga** — Grades 3–5 (2 sessions, taught by PE Sir)
- [x] **Kushal Bodh** — Grades 6–8 (1 session, taught by class teacher)
- [x] **Khel Yatra** — Grades 6–8 (1 session, taught by class teacher)
- [x] Saturday lectures: class teacher teaches Period 1 on Saturday

---

## Bugs Fixed

### B1: "Free Period" slots — FIXED
`assignExtraSlot` now exhaustively tries all subjects with any available teacher before giving up. Also allows same-subject-on-different-day and eventually any teacher free that period.

### B2: Teacher schedule conflicts — FIXED
`teacherSchedule` now tracks `(day, period) → classId` map for period-level conflict detection. `canAssignTeacher` checks if the period is already taken before assigning.

### B3: Subject totals don't add up — FIXED
`getSubjectsForClass` returns correctly computed counts that sum to 35 (grades 1–2) or 46 (grades 3–10). All verified.

### B4: MPT Wednesday contradiction — FIXED
User confirmed "MPT will be taught by class teacher". The rule "Wed P1 should not be by class teacher" is interpreted as: the class teacher teaches MPT on Wed P1, and it's tagged as regular MPT (not their "class teacher period"). This is now the implemented behavior.

### B5: Combined Cricket/BB not in same period — FIXED
`placeCombinedCricket()` now uses `findCommonPeriod()` which finds a single period that works for ALL classes in the combined group and the cricket coach.

### B6: Grade 9–10 Maths daily — FIXED
`enforceMathsDaily()` runs after all slots are filled. If a weekday lacks Maths, it moves a Maths from Saturday or a day with 2+ Maths, using proper swap mechanism. Grade 10's revision last period is protected.

### B7: Grade 10 revision placement — FIXED
Last periods for grade 10 are SKIPPED during `fillClassSlots()`, then `enforceGrade10Revision()` fills them with unique subjects after everything else. Each day gets a different subject, all tagged [R].

### B8: Extra sessions don't prioritize academics — FIXED
`getValidSubjectsForSlot()` sorts candidates by `SUBJECT_PRIORITY`. `assignExtraSlot()` iterates subjects in priority order. Academic subjects (English=10, Maths=10, Science=8, etc.) are preferred over activities (CCA=1).

### B9: Saturday practicals for 11–12 — VERIFIED
Fixed timetables for grades 11 and 12 already have correct Saturday practical/test entries.

### B10: Missing teachers for subjects — FIXED
- Grade 4: EVS taught by Ekta (was missing Science/SST teacher)
- Vaishali teaches EVS, English, Maths, Phonics for both 1S AND 1M
- Shobha teaches EVS, English, Maths for both 2S AND 2M
- Hindi and Marathi are separate subjects for grades 9–10 (split from combined Hindi/Marathi)
