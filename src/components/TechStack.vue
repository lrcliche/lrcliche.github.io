<script setup lang="ts">
import { useLocale } from '../composables/useLocale'
import { en } from '../i18n/en'
import { es } from '../i18n/es'
import { technologiesData } from '../data/technologies'

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

const categories = [
  { id: 'backend', titleKey: 'tech.backend' },
  { id: 'frontend', titleKey: 'tech.frontend' },
  { id: 'mobile', titleKey: 'tech.mobile' },
  { id: 'databases', titleKey: 'tech.databases' },
  { id: 'messaging', titleKey: 'tech.messaging' },
  { id: 'infrastructure', titleKey: 'tech.infrastructure' },
  { id: 'architecture', titleKey: 'tech.architecture' }
]

const getTechByCategory = (catId: string) => {
  return technologiesData.filter(tech => tech.category === catId)
}
</script>

<template>
  <section id="tech" class="py-16 bg-slate-950 text-slate-200 border-t border-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2">{{ t('tech.title') }}</h2>
        <p class="text-sm font-mono text-emerald-400">{{ t('tech.subtitle') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="cat in categories" 
          :key="cat.id" 
          class="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
        >
          <h3 class="text-base font-bold text-white mb-4 border-b border-slate-800 pb-2 flex items-center justify-between">
            <span>{{ t(cat.titleKey) }}</span>
            <span class="text-xs font-mono text-emerald-400 font-normal">({{ getTechByCategory(cat.id).length }})</span>
          </h3>

          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in getTechByCategory(cat.id)" 
              :key="tech.name"
              class="px-3 py-1 text-xs font-mono rounded bg-slate-950 border border-slate-800 text-slate-300 flex items-center gap-1.5"
            >
              <span>{{ tech.name }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
