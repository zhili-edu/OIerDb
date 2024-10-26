/* eslint-disable */

import react from '@vitejs/plugin-react';
import crypto from 'crypto';
import path from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

const buildHash = crypto
  .createHash('sha256')
  .update(new Date().toISOString())
  .digest('hex');

const data = { appVersion: buildHash };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      entry: '/src/main.tsx',
      inject: { data },
    }),
  ],
  build: { target: 'es6' },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
});
