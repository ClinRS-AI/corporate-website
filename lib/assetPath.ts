/**
 * Public-folder URLs. When `BASE_PATH` is set at build time (GitHub project Pages:
 * `https://org.github.io/repo/`), `NEXT_PUBLIC_BASE_PATH` must match so `/images/...`
 * resolves under `/repo/`. For apex domains (e.g. https://clinrs.ai/) leave unset.
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
