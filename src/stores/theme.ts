import { defineStore } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'

/**
 * 主题状态：浅色 / 深色
 * 基于 VueUse 的 useDark 实现：
 *  - 自动读取 localStorage 中用户上次的选择
 *  - 无记录时跟随系统 prefers-color-scheme 偏好
 *  - 切换时在 <html> 上增删 .dark 类，并持久化到 localStorage
 */
export const useThemeStore = defineStore('theme', () => {
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
    storageKey: 'business-card-theme'
  })

  const toggleTheme = useToggle(isDark)

  return { isDark, toggleTheme }
})
