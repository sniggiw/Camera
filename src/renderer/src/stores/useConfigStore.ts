import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'configStore',
  () => {
    const config = ref({
      deviceId: '',
      page: 'camera',
      borderWidth: '2px',
      borderColor: '#27ae60',
      rounded: true
    })

    return { config }
  },
  {
    persist: true
  }
)
