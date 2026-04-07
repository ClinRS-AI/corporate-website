/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static HTML export for hosts like GitHub Pages (`next build` writes to `out/`).
  // No `basePath`: site is served at the domain root (e.g. https://clinrs.ai/).
  output: "export",

  // GitHub Pages does not run the Next.js image optimizer; required for `next/image`.
  images: {
    unoptimized: true,
  },

  // Avoids broken relative asset links on many static file servers.
  trailingSlash: true,
};

export default nextConfig;
