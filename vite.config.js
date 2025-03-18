import { defineConfig } from 'vite'
import { resolve, dirname } from 'path'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  publicDir: false,
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'lib-project',
      fileName: 'lib-project',
    },
    rollupOptions: {},
  },
})
