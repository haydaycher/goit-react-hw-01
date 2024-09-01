// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     sourcemap: true,
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  css: {
    modules: {
      scopeBehaviour: "local", // чи 'global', якщо потрібно
      generateScopedName: "[name]__[local]___[hash:base64:5]", // Налаштування генерації класів
    },
  },
});
