<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import TechStack from './components/TechStack.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
