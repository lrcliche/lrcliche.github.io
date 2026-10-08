import { ref, computed } from 'vue'

export type Locale = 'en' | 'es'

const currentLocale = ref<Locale>('en')

// Detect initial language preference or default to EN
const savedLocale = localStorage.getItem('portfolio_locale') as Locale | null
if (savedLocale && (savedLocale === 'en' || savedLocale === 'es')) {
  currentLocale.value = savedLocale
} else {
  const navLang = navigator.language.toLowerCase()
  if (navLang.startsWith('es')) {
    currentLocale.value = 'es'
  }
}

export function useLocale() {
  const setLocale = (locale: Locale) => {
    currentLocale.value = locale
    localStorage.setItem('portfolio_locale', locale)
  }

  const toggleLocale = () => {
    setLocale(currentLocale.value === 'en' ? 'es' : 'en')
  }

  return {
    locale: computed(() => currentLocale.value),
    setLocale,
    toggleLocale
  }
}
