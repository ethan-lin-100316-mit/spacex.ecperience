export function assetUrl(path) {
  // Absolute runtime URLs also work inside CSS variables, whose relative URLs
  // would otherwise resolve beside the compiled /assets/ stylesheet.
  return new URL(`${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`, document.baseURI).href
}
