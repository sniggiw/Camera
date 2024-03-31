<script setup lang="ts">
import { onMounted } from 'vue'
import useConfig from '@renderer/composables/useConfig'

const { config } = useConfig()

// 媒体设备（包括摄像头、麦克风等）
// const devices = await navigator.mediaDevices.enumerateDevices()

onMounted(() => {
  const constraints = {
    audio: false,
    video: { deviceId: config.value.deviceId }
  } as MediaStreamConstraints

  const video = document.querySelector('video')!

  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
    video.play()
  })
})
</script>

<template>
  <main class="w-screen h-screen flex overflow-hidden">
    <video class="object-cover"></video>
  </main>
</template>

<style lang="scss" scoped></style>
