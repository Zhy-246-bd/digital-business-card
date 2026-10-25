<script setup lang="ts">
import { watch } from 'vue'
import { onKeyStroke, useScrollLock } from '@vueuse/core'
import type { Project } from '../config/profile'

const props = defineProps<{ project: Project | null }>()

const emit = defineEmits<{ close: [] }>()

// 弹窗打开时锁定页面滚动，关闭时恢复
const isLocked = useScrollLock(document.body)
watch(
  () => props.project,
  (p) => {
    isLocked.value = p !== null
  }
)

// 按 Esc 键关闭弹窗
onKeyStroke('Escape', () => {
  if (props.project) emit('close')
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="project" class="modal-overlay" @click.self="emit('close')">
        <div class="modal-panel" role="dialog" aria-modal="true" :aria-label="project.title">
          <button
            type="button"
            class="modal-close"
            aria-label="关闭详情"
            @click="emit('close')"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <img class="modal-cover" :src="project.cover" :alt="`${project.title} 封面`" />

          <div class="modal-body">
            <h3 class="modal-title">{{ project.title }}</h3>
            <ul class="tags">
              <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
            </ul>
            <p class="modal-desc">{{ project.description }}</p>
            <ul class="modal-detail">
              <li v-for="(item, index) in project.detail" :key="index">{{ item }}</li>
            </ul>
            <div class="modal-actions">
              <a
                v-if="project.demoUrl"
                class="btn btn-primary"
                :href="project.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                在线演示
              </a>
              <a
                v-if="project.repoUrl"
                class="btn btn-secondary"
                :href="project.repoUrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub 仓库
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
