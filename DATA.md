# Complete Data Extracted from All Sources

This file contains all data extracted from the 4 images, the teachers.txt file, and the user's original requirements.
Use this as the SINGLE SOURCE OF TRUTH when rebuilding the timetable algorithm.

---

## IMAGE 1: Subject Sessions per Class-Division (Grades 1–5)

Columns represent class-divisions grouped by their class teacher.
First 4 columns = Grades 1–2 (6 periods/day, 35 sessions/week: 6×5 + 5 Sat).
Next 5 columns = Grades 3–5 (8 periods/day, 46 sessions/week: 8×5 + 6 Sat).

### Grades 1–2 (35 sessions/week)

| Subject            | 1S (Bundele) | 1M (Vaishali) | 2S (Prajakta) | 2M (Shobha) |
|--------------------|:---:|:---:|:---:|:---:|
| English            | 4   | 4   | 4   | 4   |
| Hindi              | 3   | 3   | 3   | 3   |
| Marathi            | 3   | 3   | 3   | 3   |
| Social Studies     | 0   | 0   | 0   | 0   |
| Maths              | 4   | 4   | 4   | 4   |
| Science/EVS/PC     | 3   | 3   | 3   | 3   |
| Computer/IT-PE     | 3   | 3   | 3   | 3   |
| Phonics/Speaking   | 2   | 2   | 2   | 2   |
| **Academics**      | **22** | **22** | **22** | **22** |
| MPT/PT             | 2   | 2   | 2   | 2   |
| Art                | 2   | 2   | 2   | 2   |
| Dance & Gymnastics | 2   | 2   | 2   | 2   |
| Skating            | 2   | 2   | 2   | 2   |
| Chess              | 0   | 0   | 0   | 0   |
| Cricket/Basketball/Badminton | 0 | 0 | 0 | 0 |
| CCA                | 8   | 8   | 8   | 8   |
| **TOTAL**          | **30** | **30** | **30** | **30** |

**NOTE:** The image shows TOTAL = 30. With 6 periods/day × 5 weekdays = 30. Saturday (5 periods) seems NOT included in this image's count, OR CCA rows overlap with MPT/Art/Dance/Cricket rows. The image total is 30, but actual weekly slots = 35. Need to reconcile.

### Grades 3–5 (46 sessions/week)

| Subject            | 3S (Jayashree) | 3M (Shivali) | 4S (Ekta) | 5S (Ashwini) | 5M (Swapna) |
|--------------------|:---:|:---:|:---:|:---:|:---:|
| English            | 5   | 5   | 5   | 5   | 5   |
| Hindi              | 4   | 4   | 4   | 4   | 4   |
| Marathi            | 4   | 4   | 4   | 4   | 4   |
| Social Studies     | 0   | 0   | 0   | 0   | 0   |
| Maths              | 5   | 5   | 5   | 5   | 5   |
| Science/EVS/PC     | 5   | 5   | 4   | 4   | 4   |
| Computer/IT-PE     | 4   | 4   | 4   | 4   | 4   |
| Phonics/Speaking   | 2   | 2   | 2   | 2   | 2   |
| **Academics**      | **28** | **28** | **28** | **28** | **28** |
| MPT/PT             | 2   | 2   | 2   | 2   | 2   |
| Art                | 2   | 2   | 2   | 2   | 2   |
| Dance & Gymnastics | 2   | 2   | 2   | 2   | 2   |
| Skating            | 2   | 2   | 2   | 2   | 2   |
| Chess              | 2   | 2   | 2   | 2   | 2   |
| Cricket/Basketball/Badminton | 2 | 2 | 2 | 2 | 2 |
| CCA                | 12  | 12  | 12  | 12  | 12  |
| **TOTAL**          | **40** | **40** | **40** | **40** | **40** |

**NOTE:** The image shows TOTAL = 40. With 8 periods/day × 5 weekdays = 40. Saturday (6 periods) NOT included in this image's total. So actual weekly slots = 46, but the image only counts Mon–Fri = 40. Saturday needs 6 additional sessions.

---

## IMAGE 2: Teacher Session Totals Across Grades 6–12

This table shows total sessions per teacher per grade/division. The column headers (left to right) are grade divisions. The row headers are subjects. Numbers indicate sessions per week per division.

### Layout (reconstructed from image):

Columns: 6S | 7S | 7M | 8S | 8M | 9 | 10 | 11 | 12 | (totals)

| Subject | 6S | 7S | 7M | 8S | 8M | 9 | 10 | 11 | 12 | Total |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Eng     | 5   | 5   | 5   | 5   | 5   | 5   | 5   | 3   | 3   | 82   |
| Hindi   | 4   | 4   | 4   | 4   | 4   | 4   | 4   | 0   | 0   | 62   |
| Marathi | 4   | 4   | 4   | 4   | 4   | 4   | 4   | 0   | 0   | 62   |
| S.St    | 5   | 5   | 5   | 5   | 5   | 5   | 5   | 0   | 0   | 35   |
| Maths   | 5   | 5   | 5   | 5   | 5   | 5   | 5   | 5   | 5   | 88   |
| Science | 5   | 5   | 5   | 5   | 5   | 7   | 7   | 5   | 5   | 97   |
| Computer| 4   | 4   | 4   | 4   | 4   | 9   | 9   | 10  | 10  | 64   |
| **Academics** | **32** | **32** | **32** | **32** | **32** | **40** | **40** | **20** | **20** | **508** |
| MPT/PT  | 2   | 2   | 2   | 2   | 2   | 2   | 2   | 0   | 0   | 32   |
| Art     | 2   | 2   | 2   | 2   | 2   | 1   | 1   | 0   | 0   | 30   |
| Dance/Gym | 1 | 1   | 1   | 1   | 1   | 0   | 0   | 0   | 0   | 23   |
| Skating | 0   | 0   | 0   | 0   | 0   | 2   | 2   | 0   | 0   | 18   |
| Chess   | 0   | 0   | 0   | 0   | 0   | 2   | 2   | 0   | 0   | 19   |
| Cricket/BB | 2 | 2   | 2   | 2   | 2   | 0   | 0   | 0   | 0   | 20   |
| CCA     | 8   | 8   | 8   | 8   | 8   | 5   | 5   | 0   | 0   | 142  |
| **TOTAL** | **40** | **40** | **40** | **40** | **40** | **45** | **45** | **20** | **20** | **650** |

**CRITICAL NOTES ON IMAGE 2:**
- Grades 6–8 divisions each show 40 total = 8 periods × 5 weekdays (Sat not counted)
- Grades 9–10 show 45 total = 9 periods × 5 weekdays OR 46 sessions/week (8×5+6 Sat)
- Grades 11–12 show 20 total = their fixed timetable (fewer periods)
- The TOTALS row at bottom shows 8, 8, 8, 8, 8, 5, 5, 0, 0 = 142 (this is the CCA row totals)
- Grand total = 650 teacher-sessions across the whole school

**SOME NUMBERS ARE UNCLEAR in the image. The values above are best-effort reads.**
**Cross-reference with teachers.txt for authoritative teacher session counts.**

---

## IMAGE 3: Fixed Grade 11 Timetable

**School Hours: 9:00 AM – 2:00 PM (6 periods Mon–Fri, 5 on Saturday)**

| Period | Time        | Monday                     | Tuesday                    | Wednesday                  | Thursday                   | Friday                     | Saturday                       |
|--------|-------------|----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|--------------------------------|
| 1st    | 9:00–9:40   | Physics (Sudarshan)        | Physics (Sudarshan)        | Physics (Sudarshan)        | Physics (Sudarshan)        | Physics (Sudarshan)        | TEST (Sudarshan)               |
| 2nd    | 9:40–10:20  | Maths/BIO (Rushikant)      | Maths/BIO (Rushikant)      | Maths/BIO (Rushikant)      | Maths/BIO (Rushikant)      | Maths/BIO (Rushikant)      | TEST (Suvarna)                 |
| BREAK  | 10:20–10:30 | Short Break                | Short Break                | Short Break                | Short Break                | Short Break                | Short Break                    |
| 3rd    | 10:30–11:10 | IT/PE/C.S/BIO (Priyanka/  | IT/PE/C.S/BIO (Priyanka/  | IT/PE/C.S/BIO (Priyanka/  | Chemistry (Sayali)         | Chemistry (Sayali)         | PRACTICAL                      |
|        |             | Sayali/Suvarna)            | Sayali/Suvarna)            | Sayali/Suvarna)            |                            |                            | 1ST SAT-CHEM(SAYALI),          |
|        |             |                            |                            |                            |                            |                            | 2ND SAT-PHY(SUDARSHAN)         |
| 4th    | 11:10–11:50 | Chemistry (Sayali)         | Chemistry (Sayali)         | Chemistry (Sayali)         | English (Beauty)           | English (Beauty)           | PRACTICAL                      |
|        |             |                            |                            |                            |                            |                            | 3RD SAT-BIO(SUVARNA)/MATH(RUSHIKANT) |
| 5th    | 11:50–12:30 | English (Beauty)           | MCQ/DOUBT SESS–MATH       | MCQ/DOUBT SESS–CHEM       | MCQ/DOUBT SESS–PHY         | MCQ/DOUBT SESS–PHY         |                                |

**Saturday 3rd period note:** PRACTICAL — 1ST SAT-CHEM(SAYALI), 2ND SAT-PHY(SUDARSHAN)
**Saturday 4th period note:** PRACTICAL — 3RD SAT-BIO(SUVARNA)/MATH(RUSHIKANT)

---

## IMAGE 4: Fixed Grade 12 Timetable

**School Hours: 9:00 AM – 2:00 PM (6 periods Mon–Fri, 5 on Saturday)**

| Period | Time        | Monday                     | Tuesday                    | Wednesday                  | Thursday                   | Friday                     | Saturday                       |
|--------|-------------|----------------------------|----------------------------|----------------------------|----------------------------|----------------------------|--------------------------------|
| 1st    | 9:00–9:40   | Maths/BIO (Rushikant)      | Maths/BIO (Rushikant)      | Maths/BIO (Rushikant)      | Maths/BIO (Rushikant)      | Maths/BIO (Rushikant)      | TEST (Rushikant)               |
| 2nd    | 9:40–10:20  | Chemistry (Sayali)         | Chemistry (Sayali)         | Chemistry (Sayali)         | Chemistry (Sayali)         | Chemistry (Sayali)         | TEST (Sayali)                  |
| BREAK  | 10:20–10:30 | Short Break                | Short Break                | Short Break                | Short Break                | Short Break                | Short Break                    |
| 3rd    | 10:30–11:10 | Physics (Sudarshan)        | Physics (Sudarshan)        | Physics (Sudarshan)        | Physics (Sudarshan)        | Physics (Sudarshan)        | PRACTICAL                      |
|        |             |                            |                            |                            |                            |                            | 2ST SAT-CHEM(SAYALI),          |
|        |             |                            |                            |                            |                            |                            | 3RD SAT-PHY(SUDARSHAN),        |
|        |             |                            |                            |                            |                            |                            | 11T SAT-BIO(SUVARNA)/MATH(RUSHIKANT) |
| 4th    | 11:10–11:50 | English [E] (Beauty)       | English [E] (Beauty)       | English [E] (Beauty)       | IT/PE (Priyanka Balaji)    | IT/PE (Priyanka Balaji)    |                                |
|        |             |                            |                            |                            | PE Sudarshan               | PE Sudarshan               |                                |
| 5th    | 11:50–12:30 | IT/PE (Priyanka Balaji)    | MCQ/DOUBT SESS–PHY        | MCQ/DOUBT SESS–MATH       | MCQ/DOUBT SESS–CHEM        | MCQ/DOUBT SESS–PHY         |                                |
|        |             | PE Sudarshan               | (Sudarshan)                | (Rushikant)                | (Sayali)                   | (Sudarshan)                |                                |

---

## Teacher Allocation (from teachers.txt — AUTHORITATIVE)

| Teacher | Subject | Classes | Total Sessions |
|---------|---------|---------|---------------|
| Shital Miss | Marathi | 6th–10th | 30 |
| Kalpana Miss | Hindi | 6th–10th | 30 |
| Beauty Miss | English | 8th–12th | 26 |
| Sandip Sir | Social Studies | 7th–10th | 30 |
| Rushikant Sir | Mathematics | 9th–12th | 24 |
| Sudarshan Sir | Physics | 9th–12th | 16 |
| Sudarshan Sir | PE | 12th | 2 |
| Chordiya Sir | Chess | 3rd–10th | 19 |
| Sayali Miss | Chemistry | 9th–12th | 16 |
| Sayali Miss | Science | 8th | 10 |
| Sayali Miss | PE | 11th | 2 |
| Suvarna Miss | Biology | 11th–12th | 10 |
| Shivani Miss | Biology | 9th–10th | 6 |
| Shivani Miss | Science | 5th–7th | 23 |
| Priyanka (Balaji) | Computer | 9th–10th | 8 |
| Priyanka (Balaji) | Computer | 3rd & 5th | 16 |
| Soham Sir | Art | 3rd–10th | 22 |
| Priyanka Auti | Computer | 11th–12th | 4 |
| Priyanka Auti | Computer | 4th, 7th & 8th | 20 |
| Jayashree Miss | Marathi | 2nd–5th | 26 |
| Pawan Sir | Dance & Gymnastics | 1st–8th | 23 |
| Ashwini Miss | Mathematics | 4th–6th | 20 |
| Shobha Miss | Mathematics | 2nd & 3rd | 18 |
| Shobha Miss | English & EVS | 2nd | 8 |
| Class Teachers | MPT | 1st to 10th | 16 each |
| PE Sir | PE | 1st to 10th | 16 |
| Bundele Miss | Hindi | 1st & 2nd | 12 |
| Bundele Miss | Art | 1st & 2nd | 8 |
| Cricket/BB Coach | Cricket & Basketball | 1st–8th | 20 |
| Swapna Miss | Social Studies | 6th | 5 |
| Swapna Miss | English | 5th & 7th | 20 |
| Rathor Miss | English | 6th | 5 |
| Rathor Miss | Mathematics | 7th & 8th | 20 |
| Vaishali Miss | English, Maths, EVS, Phonics | 1st | 30 |
| Shivali Miss | EVS | 3rd | 10 |
| Shivali Miss | English | 3rd | 10 |
| Shivali Miss | Speaking Skills | 3rd | 4 |
| Ekta Miss | Computer | 1st & 2nd | 12 |
| Ekta Miss | English | 4th | 15 |
| Ekta Miss | Phonics | 5th | 4 |
| Khushi (IT) | Computer | 6th | 4 |
| Prajakta Miss | Hindi | 2nd–5th | 20 |
| Prajakta Miss | Marathi | 1st | 6 |

---

## Class Teacher Allocation (from teachers.txt — AUTHORITATIVE)

| Class | Division | Class Teacher |
|-------|----------|--------------|
| 1st   | S        | Bundele Miss |
| 1st   | M        | Vaishali Miss |
| 2nd   | S        | Prajakta Miss |
| 2nd   | M        | Shobha Miss |
| 3rd   | S        | Jayashree Miss |
| 3rd   | M        | Shivali Miss |
| 4th   | S        | Ekta Miss |
| 5th   | S        | Ashwini Miss |
| 5th   | M        | Swapna Miss |
| 6th   | S        | Kalpana Miss |
| 7th   | S        | Rathor Miss |
| 7th   | M        | Shital Miss |
| 8th   | S        | Priyanka (Balaji) |
| 8th   | M        | Beauty Miss |
| 9th   | —        | Shivani Miss |
| 10th  | —        | Sandip Sir |
| 11th  | —        | Sayali Miss |
| 12th  | —        | Sudarshan Sir |

---

## Class Divisions

| Grade | Divisions | Notes |
|-------|-----------|-------|
| 1st   | S, M      | 2 divisions |
| 2nd   | S, M      | 2 divisions |
| 3rd   | S, M      | 2 divisions |
| 4th   | S         | 1 division only |
| 5th   | S, M      | 2 divisions |
| 6th   | S         | 1 division only |
| 7th   | S, M      | 2 divisions |
| 8th   | S, M      | 2 divisions |
| 9th   | single    | 1 division |
| 10th  | single    | 1 division |
| 11th  | single    | 1 division (FIXED) |
| 12th  | single    | 1 division (FIXED) |

---

## School Timing Schedule

### Grades 3–10 (Mon–Fri): 8:30 AM – 3:00 PM

| Time | Activity |
|------|----------|
| 8:30 – 8:45 | Yoga |
| 8:45 – 9:00 | Assembly |
| 9:00 – 9:40 | Period 1 |
| 9:40 – 10:20 | Period 2 |
| 10:20 – 10:30 | Short Break |
| 10:30 – 11:10 | Period 3 |
| 11:10 – 11:50 | Period 4 |
| 11:50 – 12:30 | Period 5 |
| 12:30 – 1:00 | Lunch Break |
| 1:00 – 1:40 | Period 6 |
| 1:40 – 2:20 | Period 7 |
| 2:20 – 3:00 | Period 8 |

### Grades 1–2 & 11–12 (Mon–Fri): 9:00 AM – 2:00 PM

| Time | Activity |
|------|----------|
| 9:00 – 9:40 | Period 1 |
| 9:40 – 10:20 | Period 2 |
| 10:20 – 10:30 | Short Break |
| 10:30 – 11:10 | Period 3 |
| 11:10 – 11:50 | Period 4 |
| 11:50 – 12:30 | Period 5 |
| 12:30 – 1:00 | Lunch Break |
| 1:00 – 1:40 | Period 6 |
| 1:40 – 2:00 | Wrap-up / Dispersal |

### Saturday (Half-Day)

- **Grades 1–2:** School ends at 12:30 → 5 periods (P1–P5)
- **Grades 3–10:** School ends at 1:40 → 6 periods (P1–P6)
- **Grades 11–12:** School ends at 12:30 → 5 periods (P1–P5)
- Bell timing (40 min periods, short break) remains the same.

### Period Counts Summary

| Grade Group | Periods/Day (Mon–Fri) | Periods (Sat) | Total/Week |
|-------------|:-----:|:----:|:----:|
| 1–2         | 6     | 5    | 35   |
| 3–10        | 8     | 6    | 46   |
| 11–12       | 6     | 5    | 35   |

---

## All Rules & Constraints (from user's original message)

1. **Combined Cricket/BB lectures:**
   - Grade 3rd & 4th → Tuesday combined (all divisions)
   - Grade 5th & 6th → Wednesday combined (all divisions)
   - Grade 7th → Thursday combined (all divisions)
   - Grade 8th → Friday combined (all divisions)
   - Only needs 1 Cricket/BB teacher per combined session

2. **Grades 11 & 12 timetables are already fixed. Do NOT change them.**

3. **Seed system** — same seed must reproduce same timetable.

4. **Views required:** per-teacher, per-class, master, free teacher, subject summary.

5. **CSV export** with tags [E], [C], etc.

6. **Teacher load balancing:** No teacher should have too many lectures. BUT all lectures in the timetable MUST be filled (mandatory). No lecture repeated twice in a day for a class (preference, not compulsion).

7. **Class Teachers MUST have the first session on their respective classes** (Grades 11 and 12 exception — already fixed).

8. **Grades 9 and 10:**
   - Only 1 MPT and 1 PE lecture each (per week)
   - 1 Maths lecture daily (5 per week)

9. **Day-wise restrictions:**
   - Pawan sir — Mon, Tue, Wed only
   - Chess sir — Mon, Tue only
   - Cricket/BB — Tue to Friday only
   - MPT — Wed (first 2 sessions) for everyone (1st to 10th), but only 1st for grades 9 and 10
   - On Wednesday, the first lecture shouldn't be by the class teacher

10. **Grade 10:** Last lecture every day should be different each day, tagged "revision" (aesthetic).

11. **Saturday half-day:**
    - Grades 1–2: ends at 12:30
    - Grades 3–10: ends at 1:40
    - Grades 11–12: 9:00–12:30
    - Bell timing remains the same.
    - Test sessions → "Test" tag, Practical sessions → "Practical" tag (aesthetic).

12. **Extra lectures:** If lectures are added after total assigned is done, tag them "extra" (aesthetic).

13. **Combined lectures:** Tag "combined" showing which classes are combined.

14. **CSV tags:** Should reflect as [E] or [C], etc.

15. **Extra lectures preference:** When filling excess slots, prefer core academic subjects over CCA/activities.

---

## Key Derived Data: Subject Sessions Per Week Per Class

These are computed from the image data + teachers.txt. The IMAGE is authoritative for Grades 1–5.
For Grades 6–10, derive from teacher allocations + Image 2.

### Grades 1–2 (35 sessions/week = 6 periods/day × 5 weekdays + 5 Saturday)

| Subject | Sessions/Week |
|---------|:---:|
| English | 4 |
| Maths | 4 |
| Hindi | 3 |
| Marathi | 3 |
| Science/EVS | 3 |
| Computer | 3 |
| Phonics | 2 |
| Art | 2 |
| Dance/Gymnastics | 2 |
| Cricket/BB | 2 |
| PE | 2 |
| MPT | 2 |
| **Total** | **35** |

### Grade 3 (46 sessions/week)

| Subject | Sessions/Week |
|---------|:---:|
| English | 5 |
| Maths | 5 |
| EVS | 5 |
| Hindi | 4 |
| Marathi | 4 |
| Computer | 4 |
| Speaking Skills | 2 |
| Chess | 2 |
| Art | 2 |
| Dance/Gymnastics | 2 |
| Cricket/BB | 2 |
| PE | 2 |
| MPT | 2 |
| **Total** | **41** → need 5 more → **46** |

### Grade 4 (46 sessions/week)

| Subject | Sessions/Week |
|---------|:---:|
| English | 5 |
| Maths | 5 |
| Science | 4 |
| Social Studies | 0 (not in image for 4S) |
| Hindi | 4 |
| Marathi | 4 |
| Computer | 4 |
| Chess | 2 |
| Art | 2 |
| Dance/Gymnastics | 2 |
| Cricket/BB | 2 |
| PE | 2 |
| MPT | 2 |
| **Total** | **38** → need 8 more → **46** |

### Grade 5 (46 sessions/week)

| Subject | Sessions/Week |
|---------|:---:|
| English | 5 |
| Maths | 5 |
| Science | 4 |
| Social Studies | 0 (not in image for 5S/5M) |
| Hindi | 4 |
| Marathi | 4 |
| Computer | 4 |
| Phonics | 2 |
| Chess | 2 |
| Art | 2 |
| Dance/Gymnastics | 2 |
| Cricket/BB | 2 |
| PE | 2 |
| MPT | 2 |
| **Total** | **40** → need 6 more → **46** |

### Grades 6–8 (46 sessions/week) — from Image 2

| Subject | Sessions/Week |
|---------|:---:|
| English | 5 |
| Maths | 5 |
| Science | 5 |
| Social Studies | 5 |
| Hindi | 4 |
| Marathi | 4 |
| Computer | 4 |
| Art | 2 |
| Dance/Gymnastics | 1 |
| Cricket/BB | 2 |
| Chess | 0 |
| PE | 2 |
| MPT | 2 |
| **Total** | **41** → need 5 more → **46** |

### Grades 9–10 (46 sessions/week) — from Image 2

| Subject | Sessions/Week |
|---------|:---:|
| English | 5 |
| Maths | 5 |
| Physics | 5 |
| Chemistry | 5 |
| Biology | 3 |
| Social Studies | 5 |
| Hindi/Marathi | 4 |
| Computer | 2 |
| Art | 1 |
| MPT | 1 |
| PE | 1 |
| Chess | 2 |
| Skating | 2 |
| **Total** | **41** → need 5 more → **46** |

**NOTE:** Image 2 shows some subjects with higher/lower values for grades 9–10.
Science for 9/10 shows 7 — this is because Biology is separate and included.
Computer for 9/10 shows 9 in image — this seems to be total with practical sessions.
**These numbers need careful reconciliation with teacher session counts.**

---

## Teacher-to-Class Subject Mapping (Detailed)

### Who teaches what to which class:

**Grade 1S:**
- English: Vaishali Miss
- Maths: Vaishali Miss
- Hindi: Bundele Miss
- Marathi: Prajakta Miss
- Science/EVS: Vaishali Miss
- Computer: Ekta Miss
- Phonics: Vaishali Miss
- Art: Bundele Miss
- Dance/Gymnastics: Pawan Sir
- Cricket/BB: Cricket Coach
- PE: PE Sir
- MPT: Bundele Miss (Class Teacher)
- Maths by Bundele: NOT listed — Bundele does NOT teach Maths

**Grade 1M:**
- English: Vaishali Miss
- Maths: Vaishali Miss
- Hindi: Bundele Miss
- Marathi: Prajakta Miss
- Science/EVS: Vaishali Miss
- Computer: Ekta Miss
- Phonics: Vaishali Miss
- Art: Bundele Miss
- Dance/Gymnastics: Pawan Sir
- Cricket/BB: Cricket Coach
- PE: PE Sir
- MPT: Vaishali Miss (Class Teacher)

**Grade 2S:**
- English: Shobha Miss
- Maths: Shobha Miss
- Hindi: Prajakta Miss / Bundele Miss
- Marathi: Jayashree Miss
- Science/EVS: Shobha Miss
- Computer: Ekta Miss
- Art: Bundele Miss / Soham Sir?
- Dance/Gymnastics: Pawan Sir
- Cricket/BB: Cricket Coach
- PE: PE Sir
- MPT: Prajakta Miss (Class Teacher)

**Grade 2M:**
- English: Shobha Miss
- Maths: Shobha Miss
- Hindi: Prajakta Miss / Bundele Miss
- Marathi: Jayashree Miss
- Science/EVS: Shobha Miss
- Computer: Ekta Miss
- Art: Bundele Miss
- Dance/Gymnastics: Pawan Sir
- Cricket/BB: Cricket Coach
- PE: PE Sir
- MPT: Shobha Miss (Class Teacher)

**Grade 3S:**
- English: Shivali Miss
- Maths: Shobha Miss
- EVS: Shivali Miss
- Hindi: Prajakta Miss
- Marathi: Jayashree Miss
- Computer: Priyanka (Balaji)
- Speaking Skills: Shivali Miss
- Chess: Chordiya Sir
- Art: Soham Sir
- Dance/Gymnastics: Pawan Sir
- Cricket/BB: Cricket Coach
- PE: PE Sir
- MPT: Jayashree Miss (Class Teacher)

**Grade 3M:**
- English: Shivali Miss
- Maths: Shobha Miss
- EVS: Shivali Miss
- Hindi: Prajakta Miss
- Marathi: Jayashree Miss
- Computer: Priyanka (Balaji)
- Speaking Skills: Shivali Miss
- Chess: Chordiya Sir
- Art: Soham Sir
- Dance/Gymnastics: Pawan Sir
- Cricket/BB: Cricket Coach
- PE: PE Sir
- MPT: Shivali Miss (Class Teacher)

**Grade 4S:**
- English: Ekta Miss
- Maths: Ashwini Miss
- Hindi: Prajakta Miss
- Marathi: Jayashree Miss
- Computer: Priyanka Auti
- Chess: Chordiya Sir
- Art: Soham Sir
- Dance/Gymnastics: Pawan Sir
- Cricket/BB: Cricket Coach
- PE: PE Sir
- MPT: Ekta Miss (Class Teacher)
- Science: ??? (No teacher listed for Science in 4th)
- Social Studies: ??? (No teacher listed for S.St in 4th)

**Grade 5S:**
- English: Swapna Miss
- Maths: Ashwini Miss
- Science: Shivani Miss
- Social Studies: ??? (no teacher listed)
- Hindi: Prajakta Miss
- Marathi: Jayashree Miss
- Computer: Priyanka (Balaji)
- Phonics: Ekta Miss
- Chess: Chordiya Sir
- Art: Soham Sir
- Dance/Gymnastics: Pawan Sir
- Cricket/BB: Cricket Coach
- PE: PE Sir
- MPT: Ashwini Miss (Class Teacher)

**Grade 5M:**
- English: Swapna Miss
- Maths: Ashwini Miss
- Science: Shivani Miss
- Hindi: Prajakta Miss
- Marathi: Jayashree Miss
- Computer: Priyanka (Balaji)
- Phonics: Ekta Miss
- Chess: Chordiya Sir
- Art: Soham Sir
- Dance/Gymnastics: Pawan Sir
- Cricket/BB: Cricket Coach
- PE: PE Sir
- MPT: Swapna Miss (Class Teacher)

**Grade 6S:**
- English: Rathor Miss
- Maths: Ashwini Miss
- Science: Shivani Miss
- Social Studies: Swapna Miss
- Hindi: Kalpana Miss
- Marathi: Shital Miss
- Computer: Khushi (IT Teacher)
- Art: Soham Sir
- Dance/Gymnastics: Pawan Sir
- Cricket/BB: Cricket Coach
- PE: PE Sir
- MPT: Kalpana Miss (Class Teacher)

**Grade 7S:**
- English: Swapna Miss
- Maths: Rathor Miss
- Science: Shivani Miss
- Social Studies: Sandip Sir
- Hindi: Kalpana Miss
- Marathi: Shital Miss
- Computer: Priyanka Auti
- Chess: Chordiya Sir
- Art: Soham Sir
- Dance/Gymnastics: Pawan Sir
- Cricket/BB: Cricket Coach
- PE: PE Sir
- MPT: Rathor Miss (Class Teacher)

**Grade 7M:**
- English: Swapna Miss
- Maths: Rathor Miss
- Science: Shivani Miss
- Social Studies: Sandip Sir
- Hindi: Kalpana Miss
- Marathi: Shital Miss
- Computer: Priyanka Auti
- Chess: Chordiya Sir
- Art: Soham Sir
- Dance/Gymnastics: Pawan Sir
- Cricket/BB: Cricket Coach
- PE: PE Sir
- MPT: Shital Miss (Class Teacher)

**Grade 8S:**
- English: Beauty Miss
- Maths: Rathor Miss
- Science: Sayali Miss
- Social Studies: Sandip Sir
- Hindi: Kalpana Miss
- Marathi: Shital Miss
- Computer: Priyanka Auti
- Chess: Chordiya Sir
- Art: Soham Sir
- Dance/Gymnastics: Pawan Sir
- Cricket/BB: Cricket Coach
- PE: PE Sir
- MPT: Priyanka Balaji (Class Teacher)

**Grade 8M:**
- English: Beauty Miss
- Maths: Rathor Miss
- Science: Sayali Miss
- Social Studies: Sandip Sir
- Hindi: Kalpana Miss
- Marathi: Shital Miss
- Computer: Priyanka Auti
- Chess: Chordiya Sir
- Art: Soham Sir
- Dance/Gymnastics: Pawan Sir
- Cricket/BB: Cricket Coach
- PE: PE Sir
- MPT: Beauty Miss (Class Teacher)

**Grade 9:**
- English: Beauty Miss
- Maths: Rushikant Sir
- Physics: Sudarshan Sir
- Chemistry: Sayali Miss
- Biology: Shivani Miss
- Social Studies: Sandip Sir
- Hindi/Marathi: Kalpana Miss / Shital Miss
- Computer: Priyanka Balaji
- Chess: Chordiya Sir
- Art: Soham Sir
- PE: PE Sir
- MPT: Shivani Miss (Class Teacher)

**Grade 10:**
- English: Beauty Miss
- Maths: Rushikant Sir
- Physics: Sudarshan Sir
- Chemistry: Sayali Miss
- Biology: Shivani Miss
- Social Studies: Sandip Sir
- Hindi/Marathi: Kalpana Miss / Shital Miss
- Computer: Priyanka Balaji
- Chess: Chordiya Sir
- Art: Soham Sir
- PE: PE Sir
- MPT: Sandip Sir (Class Teacher)
