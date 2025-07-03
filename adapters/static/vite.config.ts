import { staticAdapter } from "@builder.io/qwik-city/adapters/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";


export default extendConfig(baseConfig, () => {
  return {
    build: {
      outDir: 'dist',
    },
    plugins: [
      staticAdapter({
        origin: "https://davidde.github.io/qwik-jokes-tutorial",
      }),
    ],
  };
});
