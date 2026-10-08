<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLocale } from '../composables/useLocale'
import { en } from '../i18n/en'
import { es } from '../i18n/es'
import { projectsData } from '../data/projects'
import ProjectCard from './ProjectCard.vue'

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

const activeCategory = ref<string>('all')

const categories = [
  { id: 'all', labelKey: 'projects.all' },
  { id: 'backend', labelKey: 'projects.backend' },
  { id: 'mobile', labelKey: 'projects.mobile' },
  { id: 'fullstack', labelKey: 'projects.fullstack' },
  { id: 'industrial', labelKey: 'projects.industrial' }
]

const filteredProjects = computed(() => {
  return projectsData.filter(p => {
    if (!p.published) return false
    if (activeCategory.value === 'all') return true
    return p.category === activeCategory.value
  })
})
</script>

<template>
  <section id="projects" class="py-16 bg-slate-900 text-slate-200 border-t border-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2">{{ t('projects.title') }}</h2>
        <p class="text-sm font-mono text-emerald-400">{{ t('projects.subtitle') }}</p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap gap-2 mb-10">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          @click="activeCategory = cat.id"
          class="px-4 py-1.5 rounded-lg text-sm font-mono transition-colors"
          :class="activeCategory === cat.id 
            ? 'bg-emerald-500 text-slate-950 font-bold' 
            : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'"
        >
          {{ t(cat.labelKey) }}
        </button>
      </div>

      <!-- Grid of Project Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.id" 
          :project="project" 
        />
      </div>
    </div>
  </section>
</template>
