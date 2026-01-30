import type { APIString } from "@the-story/standard-core/types";

const normalizeBaseUrl = (url: string) => url.replace(/\/+$/, "");

const baseUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_BASE_URL ?? "");
const cmsUrl = normalizeBaseUrl(process.env.NEXT_PUBLIC_CDN ?? "");

export function isInternalLink(link: APIString) {
  if (!link) {
    return true;
  }

  if (link.startsWith("/")) {
    return true;
  }

  if (baseUrl && (link === baseUrl || link.startsWith(`${baseUrl}/`))) {
    return true;
  }

  if (cmsUrl && (link === cmsUrl || link.startsWith(`${cmsUrl}/`))) {
    return true;
  }

  return false;
}

export function isExternalLink(link: APIString) {
  return !isInternalLink(link);
}
