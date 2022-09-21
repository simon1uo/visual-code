<script setup lang="ts">
import { useComponentStore } from '@/store/component'
import { useLayerStore } from '@/store/layer'

const componentStore = useComponentStore()

const componentData = computed(() => componentStore.componentData)
const curComponent = computed(() => componentStore.curComponent)
const curComponentIndex = computed(() => componentStore.curComponentIndex)

const getComponent = (index: number) => {
  return componentData.value[componentData.value.length - 1 - index]
}

const transformIndex = (index: number): number => {
  return componentData.value.length - 1 - index
}

const setCurComponent = (index: number) => {
  componentStore.setCurComponent(componentData.value[index], index)
}

const removeComponent = () => {
  componentStore.removeComponent(undefined)
}

const layerStore = useLayerStore()

const upComponent = (index: number) => {
  layerStore.upComponent(index)
}

const downComponent = (index: number) => {
  layerStore.downComponent(index)
}
</script>

<template>
  <div class="realtime-component-list">
    <div
      v-for="(component, index) in componentData"
      :key="index"
      class="item"
      :class="{ actived: transformIndex(index) === curComponentIndex }"
      @click="setCurComponent(transformIndex(index))"
    >
      <component :is="{ ...getComponent(index).icon }" />
      <span>{{ getComponent(index).label }}</span>
      <div class="icon-container">
        <icon-mdi-arrow-up-thick @click="upComponent" />
        <icon-mdi-arrow-down-thick @click="downComponent" />
        <icon-mdi-delete @click="removeComponent" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.realtime-component-list {
  height: 35%;

  .item {
    height: 35px;
    padding: 5px;
    cursor: grab;
    text-align: center;
    color: #333;
    display: flex;
    align-items: center;
    position: relative;
    user-select: none;

    &:active {
      cursor: grabbing;
    }

    &:hover {
      @apply bg-slate-100;

      .icon-container {
        display: flex;
      }
    }

    .icon-container {
      align-items: center;
      position: absolute;
      right: 10px;
      display: none;

      & {
        cursor: pointer;
      }
    }
  }

  .actived {
    @apply bg-blue-100 text-blue-400;
  }
}
</style>
