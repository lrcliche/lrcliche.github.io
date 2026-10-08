<script setup lang="ts">
import { ref } from 'vue'
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

const copied = ref(false)

const copyEmailToClipboard = () => {
  if (!profileData.socials.email) return
  navigator.clipboard.writeText(profileData.socials.email)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2500)
}
</script>

<template>
  <section id="contact" class="py-16 bg-slate-900 text-slate-200 border-t border-slate-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
      <div class="mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-2">{{ t('contact.title') }}</h2>
        <p class="text-sm font-mono text-emerald-400 max-w-2xl">{{ t('contact.subtitle') }}</p>
      </div>

      <div class="flex flex-wrap items-center justify-center sm:justify-start gap-4">
        <!-- GitHub Button -->
        <a 
          v-if="profileData.socials.github"
          :href="profileData.socials.github" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium transition-colors"
        >
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          {{ t('contact.github') }}
        </a>

        <!-- LinkedIn Button -->
        <a 
          v-if="profileData.socials.linkedin"
          :href="profileData.socials.linkedin" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium transition-colors"
        >
          {{ t('contact.linkedin') }}
        </a>

        <!-- Email Copy Button (only if email confirmed) -->
        <button 
          v-if="profileData.socials.email"
          @click="copyEmailToClipboard"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-colors"
        >
          <span>{{ copied ? t('contact.emailCopied') : t('contact.copyEmail') }}</span>
        </button>
      </div>
    </div>
  </section>
</template>
