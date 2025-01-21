export function cmsMediaUrl(url: string) {
  return url.startsWith("/")
    ? `${process.env.NEXT_PUBLIC_CDN || ""}${url}`
    : url;
}
