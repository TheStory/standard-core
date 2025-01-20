import type { Attribute, Common, Utils } from "@strapi/strapi";

type IDProperty = { id: number };

type InvalidKeys<TSchemaUID extends Common.UID.Schema> = Utils.Object.KeysBy<
  Attribute.GetAll<TSchemaUID>,
  Attribute.Private | Attribute.Password
>;

export type GetValues<TSchemaUID extends Common.UID.Schema> = {
  [TKey in Attribute.GetOptionalKeys<TSchemaUID>]?: Attribute.Get<
    TSchemaUID,
    TKey
  > extends infer TAttribute extends Attribute.Attribute
    ? GetValue<TAttribute>
    : never;
} & {
  [TKey in Attribute.GetRequiredKeys<TSchemaUID>]-?: Attribute.Get<
    TSchemaUID,
    TKey
  > extends infer TAttribute extends Attribute.Attribute
    ? GetValue<TAttribute>
    : never;
} extends infer TValues
  ? // Remove invalid keys (private, password)
    Omit<TValues, InvalidKeys<TSchemaUID>>
  : never;

type RelationValue<TAttribute extends Attribute.Attribute> =
  TAttribute extends Attribute.Relation<
    infer _TOrigin,
    infer TRelationKind,
    infer TTarget
  >
    ? Utils.Expression.MatchFirst<
        [
          [
            Utils.Expression.Extends<
              TRelationKind,
              Attribute.RelationKind.WithTarget
            >,
            TRelationKind extends `${string}ToMany`
              ? Omit<APIResponseCollection<TTarget>, "meta">
              : APIResponse<TTarget> | null,
          ],
        ],
        `TODO: handle other relation kind (${TRelationKind})`
      >
    : never;

type ComponentValue<TAttribute extends Attribute.Attribute> =
  TAttribute extends Attribute.Component<infer TComponentUID, infer TRepeatable>
    ? IDProperty &
        Utils.Expression.If<
          TRepeatable,
          GetValues<TComponentUID>[],
          GetValues<TComponentUID> | null
        >
    : never;

type DynamicZoneValue<TAttribute extends Attribute.Attribute> =
  TAttribute extends Attribute.DynamicZone<infer TComponentUIDs>
    ? Array<
        Utils.Array.Values<TComponentUIDs> extends infer TComponentUID
          ? TComponentUID extends Common.UID.Component
            ? { __component: TComponentUID } & IDProperty &
                GetValues<TComponentUID>
            : never
          : never
      >
    : never;

type MediaValue<TAttribute extends Attribute.Attribute> =
  TAttribute extends Attribute.Media<infer _TKind, infer TMultiple>
    ? Utils.Expression.If<
        TMultiple,
        APIResponseCollection<"plugin::upload.file">,
        APIResponse<"plugin::upload.file"> | null
      >
    : never;

export type GetValue<TAttribute extends Attribute.Attribute> =
  Utils.Expression.If<
    Utils.Expression.IsNotNever<TAttribute>,
    Utils.Expression.MatchFirst<
      [
        // Relation
        [
          Utils.Expression.Extends<TAttribute, Attribute.OfType<"relation">>,
          RelationValue<TAttribute>,
        ],
        // DynamicZone
        [
          Utils.Expression.Extends<TAttribute, Attribute.OfType<"dynamiczone">>,
          DynamicZoneValue<TAttribute>,
        ],
        // Component
        [
          Utils.Expression.Extends<TAttribute, Attribute.OfType<"component">>,
          ComponentValue<TAttribute>,
        ],
        // Media
        [
          Utils.Expression.Extends<TAttribute, Attribute.OfType<"media">>,
          MediaValue<TAttribute>,
        ],
        // Fallback
        // If none of the above attribute type, fallback to the original Attribute.GetValue (while making sure it's an attribute)
        [Utils.Expression.True, Attribute.GetValue<TAttribute, unknown>],
      ],
      unknown
    >,
    unknown
  >;

export interface APIResponseData<TContentTypeUID extends Common.UID.ContentType>
  extends IDProperty {
  attributes: GetValues<TContentTypeUID>;
}

export interface APIResponseCollectionMetadata {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface APIResponse<TContentTypeUID extends Common.UID.ContentType> {
  data: APIResponseData<TContentTypeUID>;
}

export interface APIResponseCollection<
  TContentTypeUID extends Common.UID.ContentType,
> {
  data: APIResponseData<TContentTypeUID>[];
  meta: APIResponseCollectionMetadata;
}

//in case when you override data using controller
export interface OverrideAPIResponseCollection<
  TContentTypeUID extends Common.UID.ContentType,
  R = Record<string, unknown>,
> {
  data: (APIResponseData<TContentTypeUID> & {
    attributes: R;
  })[];
  meta: APIResponseCollectionMetadata;
}

type HeroSectionProps<
  T extends keyof APIResponse<"api::homepage.homepage">["data"]["attributes"],
> = {
  [K in T]: APIResponse<"api::homepage.homepage">["data"]["attributes"][K];
};

export interface DynamicHeroSectionProps
  extends HeroSectionProps<"heroSection"> {}

export type HomePageProps<
  T extends keyof APIResponse<"api::homepage.homepage">["data"]["attributes"],
> = {
  [K in T]: APIResponse<"api::homepage.homepage">["data"]["attributes"][K];
};

export type CategoryPageProps<
  T extends keyof APIResponse<"api::category.category">["data"],
> = {
  [K in T]: APIResponse<"api::category.category">["data"][K];
};

export type ArticlesProps<
  T extends keyof APIResponse<"api::article.article">["data"],
> = {
  [K in T]: APIResponse<"api::article.article">["data"][K];
};

export type ProductsProps<
  T extends keyof APIResponse<"api::product.product">["data"],
> = {
  [K in T]: APIResponse<"api::product.product">["data"][K];
};

export type ProductPageProps<
  T extends
    keyof APIResponse<"api::product-page.product-page">["data"]["attributes"],
> = {
  [K in T]: APIResponse<"api::product-page.product-page">["data"]["attributes"][K];
};

export type ContactPageProps<
  T extends
    keyof APIResponse<"api::contact-page.contact-page">["data"]["attributes"],
> = {
  [K in T]: APIResponse<"api::contact-page.contact-page">["data"]["attributes"][K];
};
