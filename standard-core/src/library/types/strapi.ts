import type { UID } from "@strapi/strapi";
import type { Data } from "@strapi/types";

export type APINullable = null | undefined;
export type APIString = string | APINullable;
export type APINumber = number | APINullable;
export type APIDate = string | Date | APINullable;
export type APIBoolean = boolean | APINullable;

export type APIResponseMeta = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type APIItem<T extends UID.ContentType> = {
  data: Data.ContentType<T> & {};
  meta: {};
};

export type APICollection<T extends UID.ContentType> = {
  data: Data.ContentType<T>[];
  meta: APIResponseMeta;
};

export type APIResponse<T extends UID.ContentType> =
  | APIItem<T>
  | APICollection<T>;

type InferItem<T> =
  T extends APIItem<infer U> ? U : T extends APICollection<infer U> ? U : never;

// Override a single item
export type OverrideAPIItem<T extends UID.ContentType, Ext> = {
  data: Data.ContentType<T> & Ext;
  meta: {};
};

// Override a collection
export type OverrideAPICollection<
  T extends UID.ContentType,
  Ext,
  ExtMeta = APIResponseMeta,
> = {
  data: Array<Data.ContentType<T> & Ext>;
  meta: APIResponseMeta & ExtMeta;
};
