<script setup lang="ts">
import { onMounted } from 'vue'
import { useConfigStore } from '@renderer/stores/useConfigStore'

const { config } = useConfigStore()

onMounted(() => {
  const constraints = {
    audio: false,
    video: { deviceId: config.deviceId }
  } as MediaStreamConstraints

  const video = document.querySelector('video')!

  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
    video.play()
  })
})
</script>

<template>
  <main class="w-screen h-screen flex">
    <video class="object-cover"></video>
  </main>
</template>

<style lang="scss" scoped></style>
