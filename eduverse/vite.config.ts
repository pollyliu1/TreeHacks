import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "grey-need-permission-disable.trycloudflare.com",
      "dx-invention-curves-sam.trycloudflare.com",
      "asked-literally-lt-mattress.trycloudflare.com",
      "el-producing-songs-aaron.trycloudflare.com",
      "virginia-aviation-slovakia-tv.trycloudflare.com",
      "believed-vb-hand-challenged.trycloudflare.com",
    ],
  },
});
