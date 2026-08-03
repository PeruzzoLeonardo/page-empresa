import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the site can be served by GitHub Pages (page-empresa)
  // on the custom domain lldevstudio.com.br.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
