import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  preflight: false,
  extract: {
    include: ['**/*.{vue}'],
  },
  attributify: true,
})
