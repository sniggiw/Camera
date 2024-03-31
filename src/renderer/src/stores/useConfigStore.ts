import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'configStore',
  () => {
    const config = ref({
      deviceId: '',
      page: 'camera'
    })

    return { config }
  },
  {
    persist: true
  }
)
