import { swap } from '@/utils/utils'
import { defineStore } from 'pinia'
import { useComponentStore } from './component'

const componentStore = useComponentStore()

export const useLayerStore = defineStore('layer', {
  actions: {
    upComponent() {
      const { componentData, curComponentIndex } = componentStore
      if (componentData && curComponentIndex !== null && curComponentIndex > -1) {
        if (curComponentIndex! < componentData.length - 1) {
          swap(componentData, curComponentIndex, curComponentIndex + 1)
          componentStore.curComponentIndex = curComponentIndex + 1
        } else {
          console.log('已经到顶了')
        }
      }
    },
    downComponent() {
      const { componentData, curComponentIndex } = componentStore
      if (componentData && curComponentIndex !== null && curComponentIndex > -1) {
        if (curComponentIndex > 0) {
          swap(componentData, curComponentIndex, curComponentIndex - 1)
          componentStore.curComponentIndex = curComponentIndex - 1
        } else {
          console.log('已经到底了')
        }
      }
    },
    topComponent() {
      const { componentData, curComponentIndex, curComponent } = componentStore
      if (componentData && curComponentIndex !== null && curComponentIndex > -1 && curComponent) {
        if (curComponentIndex < componentData.length - 1) {
          componentData.splice(curComponentIndex, 1)
          componentData.push(curComponent)
          componentStore.curComponentIndex = componentData.length - 1
        } else {
          console.log('已经到顶了')
        }
      }
    },
    bottomComponent() {
      const { componentData, curComponentIndex, curComponent } = componentStore
      if (componentData && curComponentIndex !== null && curComponentIndex > -1 && curComponent) {
        if (curComponentIndex > 0) {
          componentData.splice(curComponentIndex, 1)
          componentData.push(curComponent)
          componentStore.curComponentIndex = componentData.length - 1
        } else {
          console.log('已经到顶了')
        }
      }
    },
  },
})
