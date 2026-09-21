import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change 'portfolio' to your actual GitHub repository name before deploying
const repoName = 'portfolio'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
})
