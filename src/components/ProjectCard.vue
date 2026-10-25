<script setup lang="ts">
import type { Project } from '../config/profile'

defineProps<{ project: Project }>()

const emit = defineEmits<{ open: [] }>()

const open = () => emit('open')
</script>

<template>
  <article
    class="project-card"
    role="button"
    tabindex="0"
    :aria-label="`查看项目「${project.title}」的详情`"
    @click="open"
    @keydown.enter.prevent="open"
    @keydown.space.prevent="open"
  >
    <div class="project-cover">
      <img :src="project.cover" :alt="`${project.title} 封面`" loading="lazy" />
    </div>
    <div class="project-info">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-desc">{{ project.description }}</p>
      <ul class="tags">
        <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
      </ul>
      <p class="card-hint">查看详情 <span aria-hidden="true">→</span></p>
    </div>
  </article>
</template>
