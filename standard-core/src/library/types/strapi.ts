import type { Schema, UID } from "@strapi/strapi";
import type { Data } from "@strapi/types";

export type APINullable = null | undefined;
export type APIString = Schema.Attribute.StringValue | APINullable;
export type APINumber = number | APINullable;
export type APIDate = Schema.Attribute.DateTimeValue | APINullable;
export type APIBoolean = Schema.Attribute.BooleanValue | APINullable;

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

// Nadpisanie jednego elementu
export type OverrideAPIItem<T extends UID.ContentType, Ext> = {
  data: Data.ContentType<T> & Ext;
  meta: {};
};

// Nadpisanie kolekcji
export type OverrideAPICollection<
  T extends UID.ContentType,
  Ext,
  ExtMeta = APIResponseMeta,
> = {
  data: Array<Data.ContentType<T> & Ext>;
  meta: APIResponseMeta & ExtMeta;
};
