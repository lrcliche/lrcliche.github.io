<script setup lang="ts">
import { useLocale } from '../composables/useLocale'
import { en } from '../i18n/en'
import { es } from '../i18n/es'
import { profileData } from '../data/profile'

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
</script>

<template>
  <section id="about" class="py-16 bg-slate-900 text-slate-200 border-t border-slate-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2">{{ t('about.title') }}</h2>
        <p class="text-sm font-mono text-emerald-400">{{ t('about.subtitle') }}</p>
      </div>

      <div class="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
        <p v-for="(paragraph, idx) in profileData.aboutParagraphs[locale]" :key="idx">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>
