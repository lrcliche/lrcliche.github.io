<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { locale } = useLocale()
</script>

<template>
  <div class="my-10 p-6 bg-slate-950/80 border border-slate-800 rounded-xl">
    <h4 class="text-xs font-mono font-semibold uppercase text-emerald-400 mb-4 tracking-wider">
      {{ locale === 'en' ? 'Industrial Architecture Pattern' : 'Patrón de Arquitectura Industrial' }}
    </h4>

    <div class="overflow-x-auto pb-2">
      <div class="min-w-[640px] flex items-center justify-between text-center gap-2 text-xs font-mono">
        <!-- Edge / Device -->
        <div class="flex-1 p-3 rounded-lg bg-slate-900 border border-slate-800">
          <p class="font-bold text-white mb-1">Industrial Devices / POS</p>
          <p class="text-[10px] text-slate-400">ATG, Dispensers, Veeder-Root</p>
        </div>

        <div class="text-emerald-500 font-bold px-1">→<br/><span class="text-[9px] text-slate-400">TCP / Serial</span></div>

        <!-- Edge Services -->
        <div class="flex-1 p-3 rounded-lg bg-slate-900 border border-slate-800">
          <p class="font-bold text-white mb-1">Edge Services</p>
          <p class="text-[10px] text-slate-400">Modbus / Custom Listener</p>
        </div>

        <div class="text-emerald-500 font-bold px-1">→<br/><span class="text-[9px] text-slate-400">APIs / MQTT</span></div>

        <!-- Messaging Bus -->
        <div class="flex-1 p-3 rounded-lg bg-slate-900 border border-slate-800 border-emerald-500/30">
          <p class="font-bold text-emerald-400 mb-1">RabbitMQ / gRPC</p>
          <p class="text-[10px] text-slate-400">Async Event Bus</p>
        </div>

        <div class="text-emerald-500 font-bold px-1">→<br/><span class="text-[9px] text-slate-400">Processing</span></div>

        <!-- Databases -->
        <div class="flex-1 p-3 rounded-lg bg-slate-900 border border-slate-800">
          <p class="font-bold text-white mb-1">Databases</p>
          <p class="text-[10px] text-slate-400">MongoDB / PostgreSQL</p>
        </div>

        <div class="text-emerald-500 font-bold px-1">→<br/><span class="text-[9px] text-slate-400">Apps</span></div>

        <!-- Consumer -->
        <div class="flex-1 p-3 rounded-lg bg-slate-900 border border-slate-800">
          <p class="font-bold text-white mb-1">Apps & Reports</p>
          <p class="text-[10px] text-slate-400">Factra / POS / Dashboards</p>
        </div>
      </div>
    </div>
    
    <p class="text-[11px] text-slate-400 mt-3 text-center sm:text-left italic">
      {{ locale === 'en' 
        ? '* Illustrative diagram representing distributed telemetry and async queue patterns used in industrial systems.'
        : '* Diagrama ilustrativo que representa los patrones de telemetría distribuida y colas asíncronas utilizados en sistemas industriales.' }}
    </p>
  </div>
</template>
