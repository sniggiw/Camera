<script setup lang="ts">
// 媒体设备（包括摄像头、麦克风等）
const devices = await navigator.mediaDevices.enumerateDevices()
</script>

<template>
  <main class="">{{ devices }}</main>
</template>

<style lang="scss"></style>
