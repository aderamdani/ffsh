import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollAnimation() {
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null
  let el: HTMLElement | null = null

  function observe(target: HTMLElement) {
    el = target
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          target.classList.add('fade-in')
          observer?.unobserve(target)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(target)
  }

  onUnmounted(() => {
    if (observer && el) {
      observer.unobserve(el)
    }
  })

  return { observe, isVisible }
}
