import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" ? "/chef-website" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
