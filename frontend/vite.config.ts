import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true, // listen on 0.0.0.0 (inside container)
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': 'http://backend_wanderlust:3000', // proxy API requests to backend container
    },
  },
});
