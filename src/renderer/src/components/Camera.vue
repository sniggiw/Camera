<script setup lang="ts">
import { onMounted } from 'vue'

// 媒体设备（包括摄像头、麦克风等）
// const devices = await navigator.mediaDevices.enumerateDevices()

onMounted(() => {
  const constraints = {
    audio: false,
    video: true
  }

  const video = document.querySelector('video')!

  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
    video.play()
  })
})
</script>

<template>
  <main class="">
    <video src=""></video>
  </main>
</template>

<style lang="scss"></style>
