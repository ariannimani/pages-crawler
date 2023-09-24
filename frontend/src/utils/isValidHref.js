export function isValidHref(value) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol (optional)
    '(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}' + // domain name and extension
    '(|((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path (optional)
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string (optional)
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator (optional)

  if (pattern.test(value)) {
    return true;
  }
  try {
    new URL(value); // This checks if the browser can recognize the value as a valid URL.
    return true;
  } catch (_) {
    return false;
  }
}
