import { esbuildPlugin } from "@web/dev-server-esbuild";

export default {
  plugins: [
    esbuildPlugin({
      target: "auto",
      loaders: {'.css': 'css'}
    }),
  ],
};
