import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Important for React testing
    globals: true,
    setupFiles: ["./src/setupTests.ts"], // Optional setup file
  },
});
// import { defineConfig } from 'vitest/config'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     environment: 'jsdom',
//     globals: true,
//     setupFiles: ['./src/test/setup.ts'],
//   },
//   resolve: {
//     alias: {
//       '@': '/src',
//     },
//   },
// })
