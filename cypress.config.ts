import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.spec.ts',
    baseUrl: 'http://localhost:8000/',
    supportFile: false,
  },
});
