<script setup lang="ts">
import ComponentList from '@/custom/config/componentData'

const handleDragStart = (e: any) => {
  e.dataTransfer.setData('index', e.target.dataset.index)
}
</script>

<template>
  <div class="component-list" @dragstart="handleDragStart">
    <div
      class="component-item"
      v-for="(component, index) in ComponentList"
      :key="index"
      :data-index="index"
      draggable="true"
    >
      <component :is="component.icon" />
      <span>{{ component.label }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.component-list {
  height: 65%;
  padding: 10px;
  display: grid;
  grid-gap: 10px 19px;
  grid-template-columns: repeat(auto-fill, 80px);
  grid-template-rows: repeat(auto-fill, 40px);

  .component-item {
    width: 82px;
    height: 40px;
    border: 1px solid #ddd;
    color: #303133;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    @apply rounded bg-white;

    &:active {
      cursor: grabbing;
    }

    &:hover {
      @apply drop-shadow-lg;
    }
  }
}
</style>
