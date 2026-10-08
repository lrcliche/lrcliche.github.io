<script setup lang="ts">
import { useLocale } from '../composables/useLocale'
import { en } from '../i18n/en'
import { es } from '../i18n/es'

const { locale } = useLocale()
const t = (keyPath: string) => {
  const dict = locale.value === 'en' ? en : es
  const keys = keyPath.split('.')
  let val: any = dict
  for (const k of keys) {
    if (val && val[k] !== undefined) {
      val = val[k]
    } else {
      return keyPath
    }
  }
  return val
}

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="py-8 bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>© {{ currentYear }} Luis Ramos. {{ t('footer.rights') }}</p>

      <p class="text-slate-500 font-mono">
        {{ t('footer.builtWith') }}
      </p>
    </div>
  </footer>
</template>
