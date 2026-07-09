import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import svgr from 'vite-plugin-svgr'   // 👈 import the plugin

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const enableVisualizer = process.env.VIZ === 'true' || mode === 'analyze'

  return {
    base: "/My-New-Portfolio-React-js-/",
    plugins: [
      react(),
      svgr(),  // 👈 add svgr here
      enableVisualizer && visualizer({
        filename: 'stats.html',
        template: 'treemap',
        gzipSize: true,
        brotliSize: true,
        open: false
      })
    ].filter(Boolean),
    build: {
      sourcemap: false,
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks: {
            three: ['three', '@react-three/fiber'],
            gsap: ['gsap'],
            mui: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
            vendor: ['react', 'react-dom']
          }
        }
      },
      target: 'es2018',
      minify: 'esbuild'
    }
  }
})
