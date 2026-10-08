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
  <section id="home" class="relative py-20 lg:py-28 bg-slate-950 text-slate-100 overflow-hidden">
    <!-- Subtle Background Glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
      <!-- Status Badge -->
      <div v-if="profileData.availableForWork" class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>{{ t('hero.available') }}</span>
      </div>

      <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
        {{ profileData.name }}
      </h1>

      <p class="text-xl sm:text-2xl font-semibold text-emerald-400 mb-6 tracking-wide">
        {{ t('hero.role') }}
      </p>

      <p class="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
        {{ t('hero.summary') }}
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-wrap items-center justify-center sm:justify-start gap-4">
        <a 
          href="#projects" 
          class="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-lg shadow-emerald-500/20 transition-colors"
        >
          {{ t('hero.viewProjects') }}
        </a>

        <a 
          href="#contact" 
          class="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold transition-colors"
        >
          {{ t('hero.contactMe') }}
        </a>

        <a 
          v-if="profileData.cvUrl" 
          :href="profileData.cvUrl" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="px-6 py-3 rounded-lg bg-transparent hover:bg-slate-800 border border-emerald-500/50 text-emerald-400 font-semibold transition-colors"
        >
          {{ t('hero.downloadCv') }}
        </a>
      </div>
    </div>
  </section>
</template>
