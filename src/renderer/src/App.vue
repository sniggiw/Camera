<script setup lang="ts">
import Camera from '@renderer/components/Camera.vue'
import Setting from '@renderer/components/Setting.vue'

import {
  Setting as SettingIcon,
  CameraFive as CameraIcon,
  InnerShadowBottomLeft
} from '@icon-park/vue-next'

import { useConfigStore } from '@renderer/stores/useConfigStore'
import useDrag from './composables/useDrag'

const { config } = useConfigStore()
const { drag } = useDrag()
drag.run()

const quit = () => {
  window.api.quit()
}
</script>

<template>
  <Suspense>
    <main class="relative group" @contextmenu="quit">
      <section>
        <SettingIcon
          v-if="config.page == 'camera'"
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-[#7f8c8d] opacity-80 cursor-pointer z-10 hidden group-hover:block"
          @click="config.page = 'setting'"
        />
        <InnerShadowBottomLeft
          v-if="config.page == 'camera'"
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 bottom-3 text-[#7f8c8d] opacity-80 cursor-pointer z-10 hidden group-hover:block"
          @click="config.rounded = !config.rounded"
        />
        <CameraIcon
          v-if="config.page == 'setting'"
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 text-[#7f8c8d] opacity-80 cursor-pointer z-10"
          @click="config.page = 'camera'"
        />
      </section>
      <section>
        <Camera v-if="config.page == 'camera'" />
        <Setting v-else />
      </section>
    </main>
  </Suspense>
</template>
