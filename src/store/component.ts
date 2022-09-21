import { Component } from '@/custom/types/component'
import { defineStore } from 'pinia'

export interface ComponentState {
  componentData: Component[]
  curComponent: Component | null
  curComponentIndex: number | null
  isClickComponenent: boolean
}

export const useComponentStore = defineStore('component', {
  state: (): ComponentState => ({
    componentData: [],
    curComponent: null,
    curComponentIndex: null,
    isClickComponenent: false,
  }),
  actions: {
    setClickComponentStatus(status: boolean) {
      this.isClickComponenent = status
    },
    setCurComponent(component: Component, index: number) {
      this.curComponent = component
      this.curComponentIndex = index
    },
    setComponentData(componentData: Component[]) {
      this.componentData = { ...componentData }
    },
    addComponent(component: Component, index: number) {
      if (index !== undefined) {
        this.componentData.splice(index, 0, component)
      } else {
        this.componentData.push(component)
      }
    },
    removeComponent(index: any) {
      if (index === undefined) {
        index = this.curComponentIndex
      }

      if (index === this.curComponentIndex) {
        this.curComponentIndex = null
        this.curComponent = null
      }

      if (/\d/.test(index)) {
        this.componentData.splice(index, 1)
      }
    },
  },
  getters: {},
})
