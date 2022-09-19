import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import { getSrcPath, convertEnv } from './build/utils'
import { setupVitePlugins } from './build/plugins'

// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv) => {
  const isBuild = configEnv.command === 'build'
  const srcPath = getSrcPath()
  const viteEnv = convertEnv(loadEnv(configEnv.mode, process.cwd()))

  const { VITE_PORT, VITE_PUBLIC_PATH } = viteEnv
  return {
    base: VITE_PUBLIC_PATH || '/',
    server: {
      port: VITE_PORT,
    },
    resolve: {
      alias: {
        '@': srcPath,
      },
    },
    plugins: setupVitePlugins(viteEnv, isBuild),
  }
})
