<script setup lang="ts">
import { ref } from 'vue'
import { profile } from '../config/profile'
import type { Project } from '../config/profile'
import ProjectCard from './ProjectCard.vue'
import ProjectDetailModal from './ProjectDetailModal.vue'

// 当前打开详情的项目，null 表示弹窗关闭
const activeProject = ref<Project | null>(null)
</script>

<template>
  <section class="projects" aria-labelledby="projects-title">
    <header class="section-header">
      <h2 id="projects-title" class="section-title">精选项目</h2>
      <p class="section-sub">点击卡片查看项目详情</p>
    </header>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in profile.projects"
        :key="project.id"
        :project="project"
        @open="activeProject = project"
      />
    </div>

    <ProjectDetailModal :project="activeProject" @close="activeProject = null" />
  </section>
</template>
