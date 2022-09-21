<template>
  <div class="editor" id="editor">
    <Grid />
  </div>
</template>

<script setup lang="ts">
import { useComposeStore } from '@/store/compose'
import Grid from './Grid.vue'

const composeStore = useComposeStore()

onMounted(() => {
  composeStore.getEditor()
})
</script>

<style scoped>
.editor {
  position: relative;
  margin: auto;
  background-color: #fff;
  width: 800px;
  height: 800px;
}
</style>
