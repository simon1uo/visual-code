<template>
  <div class="editor" id="editor">
    <Grid />
  </div>
</template>

<script setup lang="ts">
import Grid from './Grid.vue'
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
