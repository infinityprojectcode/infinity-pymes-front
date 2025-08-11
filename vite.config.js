/* eslint-disable no-undef */
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './public/index.html',
        './src/**/*.html',
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@fragments': path.resolve(__dirname, 'src/components'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@lib': path.resolve(__dirname, '/src/lib'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@context': path.resolve(__dirname, 'src/context'),
    }
  }
})
