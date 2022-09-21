// element-plus auto import
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// windi css
import WindiCSS from 'vite-plugin-windicss'

import path from 'path'
import { getSrcPath } from '../utils'

const srcPath = getSrcPath()

export default [
  AutoImport({
    imports: ['vue'],
    resolvers: [
      ElementPlusResolver(),
      IconsResolver({
        prefix: 'icon',
        enabledCollections: ['ep', 'mdi'],
      }),
    ],
    dts: path.resolve(srcPath, 'auto-imports.d.ts'),
  }),

  Components({
    resolvers: [
      IconsResolver({
        prefix: 'icon',
        enabledCollections: ['ep', 'mdi'],
      }),
      ElementPlusResolver(),
    ],

    dts: path.resolve(srcPath, 'components.d.ts'),
  }),

  Icons({
    autoInstall: true,
  }),

  WindiCSS(),
]
