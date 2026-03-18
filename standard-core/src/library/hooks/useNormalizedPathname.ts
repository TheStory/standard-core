import { useRouter } from "@the-story/standard-core/config/navigation";
import { useLocale } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";

export const useNormalizedPathname = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const router = useRouter();

  const normalizedPathname = pathname.startsWith(`/${locale}`)
    ? "/" + pathname.replace(new RegExp(`^/${locale}/?`), "")
    : pathname;

  const createUrlWithQueryParams = (
    newParams: Record<string, string | number>,
  ) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    Object.entries(newParams).forEach(([key, value]) => {
      current.set(key, String(value));
    });

    const search = current.toString();
    const query = search ? `?${search}` : "";

    return `${normalizedPathname}${query}`;
  };

  return { normalizedPathname, createUrlWithQueryParams, searchParams, router };
};
