import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.js',  // نقطه ورود جدید
      name: 'MyUILibrary',
      fileName: (format) => `my-ui-library.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom','bootstrap'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
