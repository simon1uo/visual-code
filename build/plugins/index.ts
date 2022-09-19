import vue from '@vitejs/plugin-vue'
import { PluginOption } from 'vite'

// unplugin
import unplugin from './unplugin'

// html
import { configHtmlPlugin } from './html'

export function setupVitePlugins(viteEnv, isBuild): PluginOption[] {
  const plugins = [vue(), ...unplugin, configHtmlPlugin(viteEnv, isBuild)]

  return plugins
}
