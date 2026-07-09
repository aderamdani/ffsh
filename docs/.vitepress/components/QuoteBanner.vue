<template>
  <div class="quote-banner card" @click="rotate">
    <div class="quote-icon">「</div>
    <div class="quote-text">
      <p>{{ currentQuote.text }}</p>
      <cite>— {{ currentQuote.source }}</cite>
    </div>
    <div class="quote-icon end">」</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const quotes = [
  { text: '見た目はクール。だけど中身は清楚系ビッチの天然ちゃん！', source: 'AV-Wiki Profile' },
  { text: '有名になりたいという理由でAVプロダクションに所属しました。', source: 'Debut Interview' },
  { text: '最終目標は「世界で通用するモデル」です。', source: 'Weekly Playboy 2018' },
  { text: '明日花キララさんに憧れています。テレビ番組とか、恵比寿マスカッツみたいな活動もしたい。', source: 'SOD Interview 2018' },
  { text: 'サウナは美肌ケアの元です。週2〜3回通っています。', source: 'CS TV Program' },
  { text: '家事で好きなのは掃除。綺麗好きなので1日に2回します。', source: 'Fan Interview' },
  { text: '実家はぶどう農家です。小さい頃からぶどうに囲まれて育ちました。', source: 'Weekly News 2018' },
  { text: '初体験は高校2年の冬でした。相手は初めての彼氏です。', source: 'Debut Interview' },
  { text: '嫌いな食べ物はさやえんどうなど、スジっぽいもの。好きなのはケーキと刺身。', source: 'Profile' },
  { text: '芸名は自分で命名しました。「本庄鈴」— 自分でつけた名前です。', source: 'SOD AWARD 2018' },
  { text: '役作りは直前であってもイメージトレーニングを心掛けています。', source: 'Actor Interview' },
  { text: 'デビュー前は本当に不安でした。果たして裸の自分にニーズがあるのか…。', source: 'Pre-debut Interview' },
]

const currentIdx = ref(0)
const currentQuote = ref(quotes[0])
let interval: ReturnType<typeof setInterval> | null = null

function rotate() {
  currentIdx.value = (currentIdx.value + 1) % quotes.length
  currentQuote.value = quotes[currentIdx.value]
}

function startRotation() {
  interval = setInterval(rotate, 10000)
}

onMounted(startRotation)
onUnmounted(() => { if (interval) clearInterval(interval) })
</script>

<style scoped>
.quote-banner {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 24px;
  cursor: pointer;
  transition: opacity 0.3s;
}

.quote-banner:hover {
  opacity: 0.9;
}

.quote-icon {
  font-size: 2rem;
  line-height: 1;
  color: var(--vp-c-brand-3);
  font-family: serif;
  opacity: 0.5;
  flex-shrink: 0;
}

.quote-icon.end {
  align-self: flex-end;
}

.quote-text {
  flex: 1;
  text-align: center;
}

.quote-text p {
  margin: 0 0 8px;
  font-size: 1.05rem;
  font-style: italic;
  color: var(--vp-c-text-1);
  line-height: 1.6;
}

.quote-text cite {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  font-style: normal;
}
</style>