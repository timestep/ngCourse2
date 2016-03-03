
export function create(renderModule) {
  if (!renderModule) {
    return domRenderer;
  }
  if (typeof renderModule === 'string') {
    if (renderModule === 'console') {
      return consoleRenderer;
    }
    return domRenderer;
  }
  throw new TypeError('renderer.create: unexpected input');
}
