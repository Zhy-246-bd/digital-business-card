<script setup lang="ts">
import { profile } from '../config/profile'
</script>

<template>
  <div class="profile">
    <img
      class="profile-avatar"
      :src="profile.avatar"
      :alt="`${profile.name} 的头像`"
      width="104"
      height="104"
    />
    <h1 class="profile-name">{{ profile.name }}</h1>
    <span class="profile-role">{{ profile.role }}</span>
    <p class="profile-bio">{{ profile.bio }}</p>
    <p class="profile-location">
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      {{ profile.location }}
    </p>
  </div>
</template>
