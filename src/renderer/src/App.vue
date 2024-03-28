<script setup lang="ts">
import { Suspense } from 'vue'
import Camera from '@renderer/components/Camera.vue'
</script>

<template>
  <Suspense>
    <main class="">
      <Camera />
    </main>
  </Suspense>
</template>
