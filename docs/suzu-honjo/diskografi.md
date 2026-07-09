---
title: Diskografi Suzu Honjo
---

# 本庄鈴 · Diskografi

Database lengkap 121 karya Suzu Honjo dari debut hingga rilis terbaru.

<StatsChart :items="diskografi" />

## Daftar Lengkap

<div class="diskografi-list">
  <div v-for="(group, y) in byYear" :key="y" class="year-group fade-in">
    <h3 :id="'year-' + y">{{ y }} <span class="year-count">{{ group.length }} judul</span></h3>
    <table class="bio-table">
      <thead>
        <tr>
          <th>Kode</th>
          <th>Judul</th>
          <th>Tanggal</th>
          <th>Tipe</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in group" :key="item.code">
          <td><code>{{ item.code }}</code></td>
          <td>{{ item.title }}</td>
          <td>{{ item.date }}</td>
          <td><span class="tag">{{ shortType(item.type) }}</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<script setup>
const diskografi = [
  { code: '3DSVR-1996', title: '[VR][8K] Dirty Talk Masturbation Support x Face-Focused Angle VR', date: '2026-07-02', type: 'SODVR' },
  { code: 'START-585', title: 'Athleisure Fashion Magazine Model You Can Meet on Set', date: '2026-06-23', type: 'SOD star - START' },
  { code: 'START-575', title: 'The Female Investigator Forbidden from Sex Since Her Appointment for Strict Duty', date: '2026-05-26', type: 'SOD star - START' },
  { code: 'START-561', title: 'I Left Her at That Hardcore College Sex Circle.', date: '2026-04-28', type: 'SOD star - START' },
  { code: 'START-540', title: 'The Merciless, Expressionless High-Level Sexual Processing Officer', date: '2026-03-31', type: 'SOD star - START' },
  { code: 'START-521', title: '"Who Do You Like Better, Me with My Makeup Done Perfectly, or That Kid?"', date: '2026-02-24', type: 'SOD star - START' },
  { code: 'REBD-1013', title: 'REbecca STARS13 - The marvels', date: '2026-02-19', type: 'REbecca' },
  { code: 'START-505', title: 'The Expressionless Female Kendo Instructor', date: '2026-01-27', type: 'SOD star - START' },
  { code: 'SODS-083', title: 'First Compilation in 6 Years! Suzu Honjo, Grown More Beautiful: 20 Titles, 20 Sex Acts', date: '2026-01-06', type: 'Compilation' },
  { code: 'START-468', title: '[Training Camp Gang] The Power-Harassing Beautiful Advisor with Cold Eyes', date: '2025-12-23', type: 'SOD star - START' },
  { code: 'START-464', title: 'A Middle-Aged Man Like Me Was Loved by a Highly Educated Lady Who Can Only Love Ugly Fat Guys', date: '2025-11-25', type: 'SOD star - START' },
  { code: 'REBD-985', title: 'Suzu9 Sunlit Oasis', date: '2025-11-20', type: 'REbecca' },
  { code: 'START-449', title: 'My Cousin Who Will Wear a Wedding Dress in 3 Days', date: '2025-10-28', type: 'SOD star - START' },
  { code: '3DSVR-1795', title: '[VR][8K] The Housewife Honjo-san, My Part-Time Job Coworker', date: '2025-10-16', type: 'SODVR' },
  { code: 'START-414', title: 'A Supreme Body Drenched in Bodily Fluids Moaning and Cumming', date: '2025-09-30', type: 'SOD star - START' },
  { code: '3DSVR-1794', title: '[VR][8K] The Intense Kisses of a Beautiful Femme Fatale', date: '2025-09-22', type: 'SODVR' },
  { code: 'START-402', title: 'A Spontaneous One-Night Stand with a Coworker I Dislike After a Work Party', date: '2025-08-26', type: 'SOD star - START' },
  { code: 'START-380', title: '30 Shots of Creampie Massive Orgy! Nonstop, No Cut', date: '2025-07-29', type: 'SOD star - START' },
  { code: 'START-355', title: 'Tempting Men at a Hot Spring Resort - Solo Guests and Couples Alike', date: '2025-06-24', type: 'SOD star - START' },
  { code: 'START-333', title: 'A Careful, Delicate Life I Started with Suzu, Whom I Just Began Dating', date: '2025-05-27', type: 'SOD star - START' },
  { code: 'START-310V', title: 'The Dignified and Beautiful Naginata Swordsman: A Virginity Loss Story', date: '2025-04-29', type: 'SOD star - START' },
  { code: 'START-273V', title: '[Room Barrier] SODstar Collaboration SPECIAL', date: '2025-03-25', type: 'SOD star - START' },
  { code: 'START-286', title: 'Whispering Sweetly While Entangling Her Beautiful Legs, Holding Back Orgasms', date: '2025-03-11', type: 'SOD star - START' },
  { code: 'START-259', title: 'The Bunny Girl a Younger College Student Fell Genuinely in Love with Was a Single Mom', date: '2025-02-25', type: 'SOD star - START' },
  { code: 'START-242', title: 'The Young Mistress of a Ryokan Who Revives Her Struggling Inn with Heartfelt Hospitality', date: '2025-01-28', type: 'SOD star - START' },
  { code: 'START-220', title: 'My Married Sister Who Agreed to Practice Kissing with Me, a Virgin', date: '2024-12-17', type: 'SOD star - START' },
  { code: 'START-205', title: 'Footage of My Girlfriend Having Sex with a Man She Just Met', date: '2024-11-26', type: 'SOD star - START' },
  { code: 'START-184', title: 'The Local Old Men Who Raised My Husband to Be a Baseball Player', date: '2024-10-22', type: 'SOD star - START' },
  { code: 'REBD-877', title: 'Suzu8 Emotional holiday', date: '2024-10-03', type: 'REbecca' },
  { code: 'START-166', title: 'Ejaculation Addiction Recovery Treatment Center', date: '2024-09-17', type: 'SOD star - START' },
  { code: 'START-138', title: 'A Stylish Clothing Store Where Customers Are Stripped Naked and Made to Ejaculate', date: '2024-08-20', type: 'SOD star - START' },
  { code: 'START-016', title: 'The Sex Sales Lady Who Licks Up Stiff Cocks and Built-Up Semen', date: '2024-08-06', type: 'SOD star - START' },
  { code: 'START-097', title: '[VR][8K] VR CHANNEL 004 8KVR 12 Ejaculations', date: '2024-07-29', type: 'SODVR' },
  { code: 'START-085', title: 'The Real Estate Lady Who Steals the Boyfriend of a Couple Viewing a Property', date: '2024-07-23', type: 'SOD star - START' },
  { code: 'START-036', title: 'The Beautiful Wife Next Door Was Frustrated and Unsatisfied', date: '2024-06-18', type: 'SOD star - START' },
  { code: 'START-040V', title: 'Which Suzu Do You Like? 3 Situations, 3 Transformations', date: '2024-04-23', type: 'SOD star - START' },
  { code: 'SDHS-048', title: 'Suzu: A High-Class Lover with S-Class Looks, Eroticism, and Personality', date: '2024-04-10', type: 'SDHS' },
  { code: 'STARS-998', title: 'Suzu Honjo Cums! Downing Thick Sperm from Amateur Men One After Another', date: '2024-02-20', type: 'SOD star - STARS' },
  { code: 'STARS-974', title: 'Always Futon Together... Close, Sticky Piston Thrusting', date: '2024-01-23', type: 'SOD star - STARS' },
  { code: 'STARS-944', title: 'A Married Woman Losing Her Reason to Her Brother-in-Law`s Carnal Desires in a Borderline Adulterous Affair', date: '2023-12-19', type: 'SOD star - STARS' },
  { code: 'SETM-006', title: 'Circle Drinking Party Leaked Sex Videos Collection BEST 4', date: '2023-11-28', type: 'SETM' },
  { code: 'STARS-938', title: 'Orgasmic Esthetic Salon: Extreme Teasing Leading to Repeated Ejaculations', date: '2023-11-21', type: 'SOD star - STARS' },
  { code: 'STARS-924', title: 'Beautiful Cafe Employee Confined! Impregnation Stalker', date: '2023-10-17', type: 'SOD star - STARS' },
  { code: 'STARS-909', title: 'THE Immediate Blowjob! A Big Sister Who Loves Giving Head and Suddenly Starts Sucking Your Cock', date: '2023-09-19', type: 'SOD star - STARS' },
  { code: 'REBD-772', title: 'Suzu7 Lucky heaven', date: '2023-09-07', type: 'REbecca' },
  { code: 'STARS-879', title: 'Home Visit Support for Hikikomori: A Smiling Helper Providing Sexual Support', date: '2023-08-15', type: 'SOD star - STARS' },
  { code: 'STARS-870', title: 'All SODstars Bikini Festival: Gravure Pillow Business Drug Sex Downfall', date: '2023-07-25', type: 'SOD star - STARS' },
  { code: 'STARS-856', title: 'The Married Teacher Who Began Repeatedly Having Sex with Her Student', date: '2023-06-20', type: 'SOD star - STARS' },
  { code: 'STARS-759', title: 'A Gorgeous Woman in Luxury Lingerie: 3 Rounds of Intense Sex', date: '2023-05-23', type: 'SOD star - STARS' },
  { code: 'STARS-828', title: 'A Gal Influencer in Minato Ward Doing Sugar Dating and Becoming a Sex Pet', date: '2023-04-18', type: 'SOD star - STARS' },
  { code: 'STARS-787', title: 'Short-Time Secret Meetings with Convenience Store Part-Timer Housewife H-san', date: '2023-03-21', type: 'SOD star - STARS' },
  { code: 'STARS-785', title: 'YDH: Banging in Places You Shouldn\`t!', date: '2023-02-21', type: 'SOD star - STARS' },
  { code: 'STARS-736', title: 'Rejuvenating Esthetic Salon: Persistent Nipple Teasing and Handjob for Multiple Ejaculations', date: '2022-12-13', type: 'SOD star - STARS' },
  { code: 'REBD-703', title: 'Suzu6 Tension and relaxation', date: '2022-12-01', type: 'REbecca' },
  { code: 'STARS-723', title: 'Shared Room Reverse Netorare: The Femdom Elite Female Boss Who Transforms', date: '2022-11-15', type: 'SOD star - STARS' },
  { code: 'STARS-708', title: 'Immediate Insertion, Immediate Leakage! Surprise Incontinence Piston Thrusting', date: '2022-09-13', type: 'SOD star - STARS' },
  { code: 'STARS-676', title: 'The Taboo Cheating Routine of an Insatiably Horny High-Rise Tower Mansion Wife', date: '2022-08-16', type: 'SOD star - STARS' },
  { code: 'STARS-647', title: 'A Perverted Temptress Who French Kisses Everywhere-Even in Places Where Getting Caught Would Be Disastrous', date: '2022-07-21', type: 'SOD star - STARS' },
  { code: 'STARS-618', title: 'A Dream First Experience! Virginity Loss Sex Document', date: '2022-06-23', type: 'SOD star - STARS' },
  { code: 'STARS-591', title: '[Instant Netorare] My First Girlfriend Ever Was Snatched Away Immediately', date: '2022-05-26', type: 'SOD star - STARS' },
  { code: 'STARS-570', title: 'Hypnotic Live: Brain-Bugged Orgasms Beyond Awareness', date: '2022-04-21', type: 'SOD star - STARS' },
  { code: 'STARS-566', title: 'My Favorite AV Actress and Me (a Sadistic Fan): Dangerous Restraint Training', date: '2022-04-15', type: 'SOD star - STARS' },
  { code: 'IMGN-030', title: 'Suzu', date: '2022-03-24', type: 'Imagine' },
  { code: 'STARS-527', title: '[VR] Ultimate Healing! Ultra-Slim Nurse Home Visit Service', date: '2022-03-16', type: 'SODVR' },
  { code: 'STARS-516', title: '[VR] Sperm Bathe VR: Intense Face Squirting Up Close', date: '2022-03-16', type: 'SODVR' },
  { code: 'STARS-490', title: 'Netorare Apology Report: I Was Training My Big Brother`s Wife', date: '2022-03-08', type: 'SOD star - STARS' },
  { code: 'STARS-468', title: '[VR] A Devoted Maid Lovingly Licking Your Face', date: '2022-03-02', type: 'SODVR' },
  { code: 'SDHS-028', title: 'Ms. Suzuki, the New Teacher: The Female Teacher Enslavement Plan', date: '2022-02-11', type: 'SDHS' },
  { code: 'REBD-607', title: 'Suzu5 Elegance and wildness', date: '2021-12-02', type: 'REbecca' },
  { code: 'STARS-450', title: 'A Sadistic Lover`s Ultimate Look-Down Mounting Cowgirl Position', date: '2021-11-12', type: 'SOD star - STARS' },
  { code: 'STARS-430', title: 'Spit-Roasted PtoM Rape: After Being Massively Creampied', date: '2021-10-14', type: 'SOD star - STARS' },
  { code: 'IMGN-020', title: 'Suu', date: '2021-08-19', type: 'Imagine' },
  { code: 'STARS-418', title: 'Magic Mirror Car: Premature Ejaculation Improvement Pickup', date: '2021-08-17', type: 'SOD star - STARS' },
  { code: 'SDHS-019', title: '[VR] Surrounded by 4 Ultra-Gorgeous Beauties: Harem VR', date: '2021-08-02', type: 'SODVR' },
  { code: 'STARS-400', title: 'Ultra-Fetish Footage of SODstars` Bodies Getting Soaked in Bodily Fluids', date: '2021-07-30', type: 'SDHS' },
  { code: 'STARS-389', title: 'A Submissive Hot Spring Trip', date: '2021-07-13', type: 'SOD star - STARS' },
  { code: 'SDHS-018', title: '[VR] Totally Affirming Girlfriend: Soothing Me, the Premature Ejaculator, with Whispered Words', date: '2021-06-17', type: 'SODVR' },
  { code: 'STARS-372', title: 'The Neighbor`s Disgusting Old Man Turns My Newlywed Wife into a Melting Meat Toilet', date: '2021-06-15', type: 'SOD star - STARS' },
  { code: 'STARS-353', title: 'Mixed Bath Employee Trip Netorare: My Wife Was Raped', date: '2021-04-20', type: 'SOD star - STARS' },
  { code: 'STARS-345', title: 'Shared Hotel Room on a Business Trip with My Virgin Subordinate', date: '2021-03-23', type: 'SOD star - STARS' },
  { code: 'STARS-330', title: 'Tropical Erotic Spa: A Healing Paradise', date: '2021-02-23', type: 'SOD star - STARS' },
  { code: 'STARS-322', title: 'Rape of a No-Show Female College Student', date: '2021-01-19', type: 'SOD star - STARS' },
  { code: 'SDHS-017', title: 'A Horny Dildo Fantasy Femme Fatale Who Satisfies Her Pent-Up Sexual Desires with Creampie', date: '2020-12-23', type: 'SDHS' },
  { code: 'STARS-309', title: 'Baby-Making Creampie Practice with My Childhood Friend', date: '2020-12-22', type: 'SOD star - STARS' },
  { code: 'NHDTB-466', title: 'A Part-Timer Who Gets Super Aroused While Serving Customers SODstar Ver.', date: '2020-12-10', type: 'NHDTB' },
  { code: 'STARS-303', title: 'Naked Nympho OK Girl Special SODstar Ver.', date: '2020-11-24', type: 'SOD star - STARS' },
  { code: 'REBD-506', title: 'Suzu4 Smile of hope', date: '2020-11-05', type: 'REbecca' },
  { code: 'STARS-293', title: 'The Track & Field Club Female Teacher Advisor: Passionate Facial Cumshot Coaching', date: '2020-10-20', type: 'SOD star - STARS' },
  { code: 'STARS-265', title: 'Shared Room with My Virgin Subordinate on a Business Trip: 10 Creampies', date: '2020-09-22', type: 'SOD star - STARS' },
  { code: 'STARS-273', title: '2 Year Debut Anniversary Commemoration: 25 Sex Acts, 8 Hour BEST', date: '2020-08-11', type: 'SOD star - STARS' },
  { code: 'STARS-253', title: 'Suzu the Aspiring Female Announcer: Brainwashing Esthetic Treatment', date: '2020-06-23', type: 'SOD star - STARS' },
  { code: 'STARS-242', title: 'A Night of Guerrilla Torrential Rain: Sex with My Female Boss Until Morning', date: '2020-05-19', type: 'SOD star - STARS' },
  { code: 'STARS-230', title: 'The Inn Became 5-Star Because of the Creampie Entertainment', date: '2020-04-21', type: 'SOD star - STARS' },
  { code: 'STARS-217', title: 'She\`s a Rich, Popular Socialite and Annoying, So I Raped Her', date: '2020-03-24', type: 'SOD star - STARS' },
  { code: 'STARS-202', title: 'A Senior Female Investigator Gang-Raped by an Evil Organization', date: '2020-02-18', type: 'SOD star - STARS' },
  { code: 'STARS-187', title: 'Memories of My Expressionless Girlfriend', date: '2020-01-21', type: 'SOD star - STARS' },
  { code: 'STARS-164', title: '[VR] 100 Kisses and Sex with an Untouchable Beauty of the Highest Facial Level', date: '2019-12-26', type: 'SODVR' },
  { code: 'STARS-171', title: 'Suzu3 Third love affair', date: '2019-12-19', type: 'REbecca' },
  { code: 'STARS-160', title: 'Double M Slave: Restraint Training, Massive Deep Creampie Rape', date: '2019-12-10', type: 'SOD star - STARS' },
  { code: 'STARS-157', title: 'SODstar 10 SEX AFTER PARTY 2019', date: '2019-11-19', type: 'SOD star - STARS' },
  { code: 'STARS-141', title: '[VR] Latest 5 VR Works Bundled at a Loss', date: '2019-11-07', type: 'SODVR' },
  { code: 'STARS-125', title: '[VR] Twin Femme Fatale Goddesses: The Ultimate Reverse 3P Special VR', date: '2019-11-04', type: 'SODVR' },
  { code: 'STARS-120', title: 'Bondage', date: '2019-10-22', type: 'SOD star - STARS' },
  { code: 'STARS-110', title: 'The Spider Men`s Esthetic Salon with Long Limbs Tangling Around', date: '2019-09-24', type: 'SOD star - STARS' },
  { code: 'REBD-434', title: 'Double Sadistic Femme Fatales: Ultra-Luxury Unlimited Ejaculation Full Course', date: '2019-12-24', type: 'REbecca' },
  { code: 'STARS-095', title: 'SODstar 11 SEX BUBBLE PARTY 2019', date: '2019-09-10', type: 'SOD star - STARS' },
  { code: 'STARS-084', title: 'Midnight Endless Orgasm', date: '2019-08-20', type: 'SOD star - STARS' },
  { code: 'STARS-078', title: 'While My Wife Was Away: 72 Hours of Nonstop Sex with My Sister-in-Law', date: '2019-07-23', type: 'SOD star - STARS' },
  { code: 'STARS-065', title: 'A Submissive Training Orgasm Dungeon Where You Can Do Whatever You Want', date: '2019-06-20', type: 'SOD star - STARS' },
  { code: 'STARS-050', title: 'A Female Track Athlete Exposed to Power Harassment and Sexual Harassment', date: '2019-03-21', type: 'SOD star - STARS' },
  { code: 'STARS-038', title: '[VR] Captivated by My Older Sister`s Luxury Lingerie', date: '2019-03-15', type: 'SODVR' },
  { code: 'STARS-029', title: 'Close Contact Sex While Being Licked All Over, Stickily', date: '2019-02-21', type: 'SOD star - STARS' },
  { code: 'STARS-017', title: '[VR] Within a Sealed Locker VR: Close Body Piston with a Beautiful Senior OL', date: '2019-02-15', type: 'SODVR' },
  { code: 'STARS-006', title: 'Forbidden Office Sex with a Tall Female OL in Pantsuit', date: '2019-01-24', type: 'SOD star - STARS' },
  { code: 'REBDB-328', title: '[VR] Double Adultery Sex During a Hot Spring Trip with Friend and His Wife', date: '2019-01-04', type: 'SODVR' },
  { code: 'STAR-994', title: '4 Masters of Femdom Have Their Way!', date: '2018-12-20', type: 'SOD star - STAR' },
  { code: 'STAR-980', title: 'Flustered Adult Experience: Earnest First-Time Service 4 Rounds', date: '2018-09-20', type: 'SOD star - STAR' },
  { code: 'STAR-963', title: 'Brain-Melting Intense Kissing: Multiple Ejaculations with Deep French Kiss Sex', date: '2018-08-23', type: 'SOD star - STAR' },
  { code: 'STAR-948', title: 'Suzu Sap: Lewd Rich Juices Secreted in Abundance from a Beautiful Body', date: '2018-07-26', type: 'SOD star - STAR' },
  { code: 'STAR-933', title: '10,000 Beauties` AV Debut 2nd: Sexual Liberation 4 Rounds', date: '2018-06-21', type: 'SOD star - STAR' },
  { code: 'STAR-888', title: 'Thanks to Everyone. AV DEBUT.', date: '2018-05-24', type: 'SOD star - STAR' },
]

const byYear = {}
for (const item of diskografi) {
  const year = item.date.slice(0, 4)
  if (!byYear[year]) byYear[year] = []
  byYear[year].push(item)
}

function shortType(t) {
  return t.replace('SOD star - ', '').replace('SODクリエイト - ', '')
}
</script>

<style>
.year-group { margin-bottom: 32px; }
.year-group h3 { display: flex; align-items: center; gap: 12px; }
.year-count { font-size: 0.8rem; font-weight: 400; color: var(--vp-c-text-3); }
.diskografi-list code { font-size: 0.85rem; color: var(--vp-c-brand-2); }
</style>