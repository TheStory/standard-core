export function extractUrlFromText(text: string) {
  if (!text) return null;
  if (text.length === 0) return null;

  const URL_REGEX =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

  const result = text.match(new RegExp(URL_REGEX));

  if (!result) return null;

  return result[0];
}
