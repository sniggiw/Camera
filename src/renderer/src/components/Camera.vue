<script setup lang="ts">
import { onMounted } from 'vue'
import { useConfigStore } from '@renderer/stores/useConfigStore'

const { config } = useConfigStore()

onMounted(() => {
  const constraints = {
    audio: false,
    video: { deviceId: config.deviceId } // 传空串的话会使用默认的摄像头
  } as MediaStreamConstraints

  const video = document.querySelector('video')!

  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
    video.play()
  })
})
</script>

<template>
  <main
    class="w-screen h-screen flex"
    :class="{ 'rounded-full': config.rounded }"
    :style="`border:${config.borderWidth} ${config.borderColor} solid`"
  >
    <video class="object-cover" :class="{ 'rounded-full': config.rounded }"></video>
  </main>
</template>

<style lang="scss" scoped></style>
