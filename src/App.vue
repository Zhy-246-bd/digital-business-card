<script setup lang="ts">
import { computed } from 'vue'
import { useTitle } from '@vueuse/core'
import { profile } from './config/profile'
import ThemeToggle from './components/ThemeToggle.vue'
import ProfileCard from './components/ProfileCard.vue'
import SocialLinks from './components/SocialLinks.vue'
import ProjectsSection from './components/ProjectsSection.vue'

// 浏览器标签页标题跟随名片信息
useTitle(computed(() => `${profile.name} · 个人数字名片`))

const year = new Date().getFullYear()
</script>

<template>
  <div class="topbar">
    <div class="container topbar-inner">
      <a class="brand" href="#top">
        <span class="brand-dot" aria-hidden="true"></span>
        {{ profile.name }}
      </a>
      <!-- 模块四：主题切换 -->
      <ThemeToggle />
    </div>
  </div>

  <main id="top" class="container main">
    <!-- 模块一：基础信息 + 模块二：社交链接 -->
    <section class="hero card">
      <ProfileCard />
      <SocialLinks />
    </section>

    <!-- 模块三：作品项目展示 -->
    <ProjectsSection />

    <footer class="footer">
      <p>© {{ year }} {{ profile.name }} · 基于 Vue 3 + Vite + Pinia + VueUse 构建</p>
    </footer>
  </main>
</template>
