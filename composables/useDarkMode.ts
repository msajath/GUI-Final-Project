import { ref, watch } from 'vue'

const isDark = ref(localStorage.getItem('theme') === 'dark')

watch(
  isDark,
  (value) => {
    document.documentElement.classList.toggle('dark', value)
    localStorage.setItem('theme', value ? 'dark' : 'light')
  },
  { immediate: true }
)

export function useDarkMode() {
  function toggleDarkMode(): void {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleDarkMode,
  }
}