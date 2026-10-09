<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../composables/useLocale'
import { en } from '../i18n/en'
import { es } from '../i18n/es'
import { experienceData } from '../data/experience'
import ArchitectureDiagram from './ArchitectureDiagram.vue'

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

const publishedExperience = computed(() => experienceData.filter(exp => exp.published))
</script>

<template>
  <section id="experience" class="py-16 bg-slate-950 text-slate-200 border-t border-slate-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2">{{ t('experience.title') }}</h2>
        <p class="text-sm font-mono text-emerald-400">{{ t('experience.subtitle') }}</p>
      </div>

      <div class="relative border-l border-slate-800 ml-4 space-y-12">
        <div 
          v-for="item in publishedExperience" 
          :key="item.id" 
          class="relative pl-8 group"
        >
          <!-- Timeline indicator dot -->
          <div class="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-700 group-hover:bg-emerald-400 border border-slate-950 transition-colors"></div>

          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
            <h3 class="text-xl font-bold text-white">
              {{ item.position[locale] }}
            </h3>
            <span class="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-emerald-400 w-fit">
              {{ item.start }} — {{ item.end[locale] }}
            </span>
          </div>

          <p class="text-sm font-semibold text-slate-400 mb-4">{{ item.employer }}</p>

          <ul class="list-disc list-inside space-y-2 text-slate-300 text-sm mb-4">
            <li v-for="(highlight, hIdx) in item.highlights[locale]" :key="hIdx">
              {{ highlight }}
            </li>
          </ul>

          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in item.technologies" 
              :key="tech"
              class="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- Industrial Architecture Diagram Section -->
      <ArchitectureDiagram />
    </div>
  </section>
</template>
