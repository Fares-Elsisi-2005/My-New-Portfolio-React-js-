/**
 * Resolves the correct URL for static assets, taking Vite's base path into account.
 * This is crucial for environments like GitHub Pages where the app is served from a subfolder.
 * 
 * @param {string} path - The asset path (e.g., '/assets/me.jpg' or 'assets/me.jpg')
 * @returns {string} The fully qualified base-relative URL.
 */
export const getAssetUrl = (path) => {
  if (!path) return '';
  
  // If the path is already an absolute URL (http/https), return it as is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  
  // Remove leading slash if present to avoid double-slashes when combining
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Get Vite's base URL (defaults to '/' if not defined)
  const base = import.meta.env.BASE_URL || '/';
  
  // Ensure the base URL ends with a slash and combine with the clean path
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  
  return `${normalizedBase}${cleanPath}`;
};
