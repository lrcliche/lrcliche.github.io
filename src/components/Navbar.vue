<script setup lang="ts">
import { ref } from 'vue'
import { useLocale } from '../composables/useLocale'
import { en } from '../i18n/en'
import { es } from '../i18n/es'
import { profileData } from '../data/profile'

const { locale, toggleLocale } = useLocale()
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

const isMobileMenuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800 text-slate-100 transition-colors">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#home" class="flex items-center gap-2 font-bold text-xl tracking-tight hover:text-emerald-400 transition-colors">
        <span class="bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 px-2 py-0.5 rounded font-mono text-sm">LR</span>
        <span>Luis Ramos</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center space-x-5 text-sm font-medium">
        <a href="#about" class="hover:text-emerald-400 transition-colors">{{ t('nav.about') }}</a>
        <a href="#expertise" class="hover:text-emerald-400 transition-colors">{{ t('nav.expertise') }}</a>
        <a href="#experience" class="hover:text-emerald-400 transition-colors">{{ t('nav.experience') }}</a>
        <a href="#projects" class="hover:text-emerald-400 transition-colors">{{ t('nav.projects') }}</a>
        <a href="#tech" class="hover:text-emerald-400 transition-colors">{{ t('nav.tech') }}</a>
        <a href="#contact" class="hover:text-emerald-400 transition-colors">{{ t('nav.contact') }}</a>
        
        <div v-if="profileData.cvUrl" class="flex items-center gap-2">
          <a 
            :href="profileData.cvUrl" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="px-3 py-1.5 rounded-md border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 transition-colors text-xs font-mono font-semibold"
          >
            {{ t('nav.viewCv') }}
          </a>
        </div>
      </nav>

      <!-- Locale Toggle & Mobile Menu Switch -->
      <div class="flex items-center gap-3">
        <button 
          @click="toggleLocale" 
          class="px-2.5 py-1 text-xs font-mono font-semibold rounded bg-slate-800 border border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 transition-colors"
          :aria-label="locale === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'"
        >
          {{ locale === 'en' ? 'ES' : 'EN' }}
        </button>

        <!-- Mobile hamburger button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="md:hidden p-2 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-200"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle Navigation Menu"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-3">
      <a @click="isMobileMenuOpen = false" href="#about" class="block py-2 text-slate-300 hover:text-emerald-400">{{ t('nav.about') }}</a>
      <a @click="isMobileMenuOpen = false" href="#expertise" class="block py-2 text-slate-300 hover:text-emerald-400">{{ t('nav.expertise') }}</a>
      <a @click="isMobileMenuOpen = false" href="#experience" class="block py-2 text-slate-300 hover:text-emerald-400">{{ t('nav.experience') }}</a>
      <a @click="isMobileMenuOpen = false" href="#projects" class="block py-2 text-slate-300 hover:text-emerald-400">{{ t('nav.projects') }}</a>
      <a @click="isMobileMenuOpen = false" href="#tech" class="block py-2 text-slate-300 hover:text-emerald-400">{{ t('nav.tech') }}</a>
      <a @click="isMobileMenuOpen = false" href="#contact" class="block py-2 text-slate-300 hover:text-emerald-400">{{ t('nav.contact') }}</a>
      <a 
        v-if="profileData.cvUrl" 
        :href="profileData.cvUrl" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="block py-2 text-emerald-400 font-semibold"
      >
        {{ t('nav.viewCv') }}
      </a>
    </div>
  </header>
</template>
