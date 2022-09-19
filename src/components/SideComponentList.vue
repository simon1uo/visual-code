<script setup lang="ts"></script>
<template>
  <div class="component-list">
    <div class="component-item" draggable>
      <icon-mdi-triangle />
    </div>
    <div class="component-item" draggable>
      <icon-mdi-triangle />
    </div>
    <div class="component-item" draggable>
      <icon-mdi-triangle />
    </div>
    <div class="component-item" draggable>
      <icon-mdi-triangle />
    </div>
    <div class="component-item" draggable>
      <icon-mdi-triangle />
    </div>
    <div class="component-item" draggable>
      <icon-mdi-triangle />
    </div>
    <div class="component-item" draggable>
      <icon-mdi-triangle />
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
    width: 80px;
    height: 40px;
    border: 1px solid #ddd;
    color: #333;
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
