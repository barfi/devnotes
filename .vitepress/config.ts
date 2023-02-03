import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ru-RU',
  title: 'Devnotes',
  description: 'Web development knowledge base',
  appearance: true,
  base: '/devnotes/',
  lastUpdated: true,
  markdown: {
    // theme: 'material-theme-palenight',
    lineNumbers: true
  },
  srcDir: './src'
})