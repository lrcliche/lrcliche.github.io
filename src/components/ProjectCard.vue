<script setup lang="ts">
import { useLocale } from '../composables/useLocale'
import { en } from '../i18n/en'
import { es } from '../i18n/es'
import type { Project } from '../types/portfolio'

const props = defineProps<{
  project: Project
}>()

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
  <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-md">
    <div>
      <!-- Header / Title -->
      <div class="flex items-start justify-between gap-3 mb-3">
        <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
          {{ project.title }}
        </h3>
        <span 
          class="text-xs font-mono px-2 py-0.5 rounded uppercase font-semibold shrink-0"
          :class="{
            'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30': project.visibility === 'public-repo',
            'bg-slate-800 text-slate-400 border border-slate-700': project.visibility === 'case-study'
          }"
        >
          {{ project.visibility === 'public-repo' ? t('projects.viewRepo') : t('projects.caseStudy') }}
        </span>
      </div>

      <p class="text-sm text-slate-300 mb-6 leading-relaxed">
        {{ project.summary[locale] }}
      </p>

      <!-- Problem, Solution, Outcome -->
      <div class="space-y-3 mb-6 text-xs text-slate-400">
        <div>
          <span class="font-mono text-emerald-400 font-semibold">{{ t('projects.problem') }}:</span>
          <p class="text-slate-300 mt-0.5">{{ project.problem[locale] }}</p>
        </div>
        <div>
          <span class="font-mono text-emerald-400 font-semibold">{{ t('projects.solution') }}:</span>
          <p class="text-slate-300 mt-0.5">{{ project.solution[locale] }}</p>
        </div>
        <div>
          <span class="font-mono text-emerald-400 font-semibold">{{ t('projects.outcome') }}:</span>
          <p class="text-slate-300 mt-0.5">{{ project.outcome[locale] }}</p>
        </div>
      </div>
    </div>

    <div>
      <!-- Tech tags -->
      <div class="flex flex-wrap gap-1.5 mb-6">
        <span 
          v-for="item in project.tech" 
          :key="item"
          class="text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
        >
          {{ item }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex items-center gap-4 pt-4 border-t border-slate-800 text-sm">
        <a 
          v-if="project.repoUrl" 
          :href="project.repoUrl" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="inline-flex items-center gap-1.5 text-emerald-400 hover:underline font-mono text-xs font-semibold"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          GitHub Repository
        </a>

        <a 
          v-if="project.demoUrl" 
          :href="project.demoUrl" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="inline-flex items-center gap-1.5 text-emerald-400 hover:underline font-mono text-xs font-semibold"
        >
          Demo Link
        </a>
      </div>
    </div>
  </div>
</template>
