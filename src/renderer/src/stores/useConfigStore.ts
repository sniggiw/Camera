import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'configStore',
  () => {
    const config = ref({
      deviceId: '',
      page: 'camera',
      borderWidth: '2px',
      borderColor: 'red'
    })

    return { config }
  },
  {
    persist: true
  }
)
