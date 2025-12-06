export function isPathMatch(currentPath: string, targetPath: string): boolean {
  if (!currentPath || !targetPath) return false;

  // ✅ Exact match
  if (currentPath === targetPath) return true;

  // ✅ Split both paths at "?" to get path and query string
  const [currentBase, currentQuery] = currentPath.split('?');
  const [targetBase, targetQuery] = targetPath.split('?type');

  // ❌ If path is different, don't match
  if (currentBase !== targetBase) return false;

  // ✅ If no query in target, base match is enough
  if (!targetQuery) return true;

  // ✅ Convert query strings to URLSearchParams for comparison
  const currentParams = new URLSearchParams(currentQuery || '');
  const targetParams = new URLSearchParams(targetQuery || '');

  // ✅ All target query params must match current params
  for (const [key, value] of targetParams.entries()) {
    if (currentParams.get(key) !== value) {
      return false;
    }
  }

  return true;
}
