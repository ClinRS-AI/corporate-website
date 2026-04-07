/**
 * Production (custom domain on GitHub Pages): leave BASE_PATH unset so assets load from `/`.
 * Optional: set BASE_PATH=/your-repo only when testing the project-site URL
 * `https://<org>.github.io/<repo>/` (same export cannot serve both roots).
 */
function basePathFromEnv() {
  const raw = process.env.BASE_PATH;
  if (raw === undefined || raw === "") return undefined;
  return raw.startsWith("/") ? raw : `/${raw}`;
}

const basePath = basePathFromEnv();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  ...(basePath ? { basePath } : {}),

  // Expose base path to client/server for manual public URLs (img, CSS url(), etc.).
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH ?? "",
  },

  // Static HTML export for hosts like GitHub Pages (`next build` writes to `out/`).
  output: "export",

  // GitHub Pages does not run the Next.js image optimizer; required for `next/image`.
  images: {
    unoptimized: true,
  },

  // Avoids broken relative asset links on many static file servers.
  trailingSlash: true,
};

export default nextConfig;
