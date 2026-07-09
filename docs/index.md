---
layout: home
hero:
  name: 本庄鈴
  text: Suzu Honjo
  tagline: Fan Library — Biodata · Galeri · Video · Diskografi · Timeline · Trivia
  actions:
    - theme: brand
      text: Mulai Jelajahi
      link: /suzu-honjo/biodata
    - theme: alt
      text: Galeri Foto
      link: /suzu-honjo/galeri
---

<div class="section-divider">S U Z U · H O N J O</div>

<section style="text-align: center; max-width: 600px; margin: 0 auto 48px;">
  <p style="font-size: 1.05rem; color: var(--vp-c-text-2); line-height: 1.8;">
    本庄鈴 — Debut April 2018 sebagai bintang eksklusif <strong style="color: var(--vp-c-brand-2);">SOD star</strong>.
    Dikenal dengan wajah kucing yang mempesona dan aura cool beauty.
    Dari 10.000 pre-order sebelum debut hingga menjadi salah satu ikon SOD paling bertahan.
  </p>
</section>

<div class="lucide-features">
  <a href="/suzu-honjo/biodata" class="lucide-feature card">
    <ClipboardList :size="28" class="feat-icon" />
    <h3>Biodata Lengkap</h3>
    <p>Profil, ukuran, riwayat karir, dan info personal Suzu Honjo</p>
  </a>
  <a href="/suzu-honjo/galeri" class="lucide-feature card">
    <Image :size="28" class="feat-icon" />
    <h3>Galeri Foto</h3>
    <p>Koleksi foto berkualitas tinggi dengan tampilan lightbox interaktif</p>
  </a>
  <a href="/suzu-honjo/video" class="lucide-feature card">
    <Clapperboard :size="28" class="feat-icon" />
    <h3>Video</h3>
    <p>Database video lengkap dengan link ke supjav & missav</p>
  </a>
  <a href="/suzu-honjo/diskografi" class="lucide-feature card">
    <Disc3 :size="28" class="feat-icon" />
    <h3>Diskografi</h3>
    <p>Seluruh karya SOD Star — dari debut hingga rilis terbaru</p>
  </a>
  <a href="/suzu-honjo/timeline" class="lucide-feature card">
    <Calendar :size="28" class="feat-icon" />
    <h3>Timeline Karir</h3>
    <p>Perjalanan karir dari 2018 sampai sekarang</p>
  </a>
  <a href="/suzu-honjo/trivia" class="lucide-feature card">
    <Star :size="28" class="feat-icon" />
    <h3>Trivia & Fakta</h3>
    <p>Fakta unik, hobi, kesukaan, dan hal-hal menarik lainnya</p>
  </a>
</div>

<div class="stats-grid fade-in">
  <div class="stat-item">
    <div class="stat-value">2018</div>
    <div class="stat-label">Tahun Debut</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">121</div>
    <div class="stat-label">Judul Film</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">163 cm</div>
    <div class="stat-label">Tinggi Badan</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">B85</div>
    <div class="stat-label">Bust</div>
  </div>
</div>

<QuoteBanner />

<BirthdayCountdown />

<script setup>
import { ClipboardList, Image, Clapperboard, Disc3, Calendar, Star } from '@lucide/vue'
</script>

<style>
.lucide-features {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  margin: 32px 0;
}

.lucide-feature {
  display: block;
  text-decoration: none !important;
  border-bottom: none !important;
  padding: 24px 20px;
  text-align: center;
}

.lucide-feature h3 {
  margin: 12px 0 8px;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-base);
}

.lucide-feature p {
  margin: 0;
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.feat-icon {
  color: var(--vp-c-brand-2);
}
</style>
