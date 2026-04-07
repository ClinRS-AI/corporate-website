/**
 * Public-folder URLs. With no `BASE_PATH` (custom domain), paths stay `/images/...`.
 * When `BASE_PATH=/repo` for a GitHub.io project-site build, URLs become `/repo/images/...`.
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
