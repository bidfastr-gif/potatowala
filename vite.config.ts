import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import compression from 'vite-plugin-compression';
import purgecss from 'vite-plugin-purgecss';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["tempting-contemptibly-ainsley.ngrok-free.dev"],
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      includePublic: true,
      logStats: true,
      png: { quality: 70 },
      jpeg: { quality: 70 },
      jpg: { quality: 70 },
      webp: { quality: 70 },
      avif: { quality: 50 },
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    purgecss({
      content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        standard: [/^ant-/, /^dark/],
        deep: [/data-state/],
      }
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ['react', 'react-dom'],
  },
  build: {
    chunkSizeWarningLimit: 1200,
    minify: 'esbuild',
    rollupOptions: {
    },
  },
}));
