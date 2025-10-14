export function cmsMediaUrl(url: string | undefined | null) {
  return (url || "").startsWith("/")
    ? `${process.env.NEXT_PUBLIC_CDN || ""}${url}`
    : `${url}`;
}
