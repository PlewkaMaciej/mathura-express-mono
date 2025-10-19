import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "src"); // Ustawienie aliasów, jeśli używasz src
    return config;
  },
  async headers() {
    return [
      {
        source: "/api/webhooks/clerk",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://indefinite-onita-explicit.ngrok-free.dev", // Twoja domena ngrok
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Custom-Header, Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
