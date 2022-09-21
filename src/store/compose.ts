import { Component } from '@/custom/types/component'
import { $ } from '@/utils/utils'
import { defineStore } from 'pinia'

export interface AreaData {
  style: {
    top: number
    left: number
    width: number
    height: number
  }
  components: Component[]
}

export interface ComposeState {
  areaData: AreaData
  editor: HTMLElement | null
}

export const useComposeStore = defineStore('composeStore', {
  state: (): ComposeState => ({
    areaData: {
      style: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
      },
      components: [],
    },
    editor: null,
  }),
  actions: {
    getEditor() {
      this.editor = $('#editor')
    },
    setAreaData(data: AreaData) {
      this.areaData = data
    },
  },
  getters: {
    rectInfo: state => {
      if (state && state.editor) {
        return state.editor.getBoundingClientRect()
      }
    },
  },
})
