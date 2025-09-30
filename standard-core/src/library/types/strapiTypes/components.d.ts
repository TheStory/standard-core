import type { Attribute, Schema } from '@strapi/strapi';

export interface ContentAboutSection extends Schema.Component {
  collectionName: 'components_content_about_sections';
  info: {
    description: '';
    displayName: 'aboutSection';
  };
  attributes: {
    blocks: Attribute.Component<'content.value-square', true> &
      Attribute.SetMinMax<
        {
          max: 3;
          min: 0;
        },
        number
      >;
    image: Attribute.Media<'images'>;
    subTitle: Attribute.String & Attribute.Required;
    text: Attribute.Blocks & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentAccordion extends Schema.Component {
  collectionName: 'components_content_accordions';
  info: {
    displayName: 'accordion';
  };
  attributes: {
    answer: Attribute.Text & Attribute.Required;
    question: Attribute.String & Attribute.Required;
  };
}

export interface ContentBlogPreview extends Schema.Component {
  collectionName: 'components_content_blog_previews';
  info: {
    displayName: 'blogPreview';
  };
  attributes: {
    article: Attribute.Relation<
      'content.blog-preview',
      'oneToOne',
      'api::article.article'
    >;
    subTitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentButtonWithOverline extends Schema.Component {
  collectionName: 'components_content_button_with_overlines';
  info: {
    description: '';
    displayName: 'Button with overline';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    overline: Attribute.String;
    url: Attribute.String & Attribute.Required;
  };
}

export interface ContentContentSectionTitleSubtitle extends Schema.Component {
  collectionName: 'components_content_content_section_title_subtitle_s';
  info: {
    description: '';
    displayName: 'Content Section (title, sub)';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentCtaButton extends Schema.Component {
  collectionName: 'components_content_cta_buttons';
  info: {
    description: '';
    displayName: 'CTA Button';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface ContentCtaSection extends Schema.Component {
  collectionName: 'components_content_cta_sections';
  info: {
    description: '';
    displayName: 'CTA Section';
  };
  attributes: {
    cta: Attribute.Relation<'content.cta-section', 'oneToOne', 'api::cta.cta'>;
  };
}

export interface ContentDimensions extends Schema.Component {
  collectionName: 'components_content_dimensions';
  info: {
    displayName: 'dimensions';
  };
  attributes: {
    attribute: Attribute.String & Attribute.Required;
  };
}

export interface ContentFaq extends Schema.Component {
  collectionName: 'components_content_faqs';
  info: {
    description: '';
    displayName: 'Faq';
  };
  attributes: {
    button: Attribute.Component<'content.button-with-overline'> &
      Attribute.Required;
    faqQuestion: Attribute.Component<'content.faq-questions', true> &
      Attribute.Required;
    subTitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentFaqQuestions extends Schema.Component {
  collectionName: 'components_content_faq_questions';
  info: {
    displayName: 'faqQuestions';
  };
  attributes: {
    answer: Attribute.Blocks & Attribute.Required;
    question: Attribute.String & Attribute.Required;
  };
}

export interface ContentFloatingCards extends Schema.Component {
  collectionName: 'components_content_floating_cards';
  info: {
    displayName: 'floatingCards';
  };
  attributes: {
    description: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentGallery extends Schema.Component {
  collectionName: 'components_content_galleries';
  info: {
    description: '';
    displayName: 'gallery';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ContentGallerySection extends Schema.Component {
  collectionName: 'components_content_gallery_sections';
  info: {
    displayName: 'Gallery Section';
  };
  attributes: {
    slides: Attribute.Component<'content.gallery-slide', true> &
      Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    subtitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface ContentGallerySlide extends Schema.Component {
  collectionName: 'components_content_gallery_slides';
  info: {
    displayName: 'Gallery Slide';
  };
  attributes: {
    description: Attribute.Text;
    image: Attribute.Media<'images'> & Attribute.Required;
    link: Attribute.Component<'content.cta-button'>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentHeroSection extends Schema.Component {
  collectionName: 'components_content_hero_sections';
  info: {
    description: '';
    displayName: 'heroSection';
  };
  attributes: {
    button: Attribute.Component<'content.button-with-overline'> &
      Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    floatingCards: Attribute.Component<'content.floating-cards', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 3;
          min: 0;
        },
        number
      >;
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentHighlight extends Schema.Component {
  collectionName: 'components_content_highlights';
  info: {
    description: '';
    displayName: 'Highlight';
  };
  attributes: {
    highlightText: Attribute.Text & Attribute.Required;
  };
}

export interface ContentImage extends Schema.Component {
  collectionName: 'components_content_images';
  info: {
    description: '';
    displayName: 'Image';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    imgDescription: Attribute.Text;
    variant: Attribute.Enumeration<['fullWidth', 'contentWidth']> &
      Attribute.DefaultTo<'fullWidth'>;
  };
}

export interface ContentLocationsSection extends Schema.Component {
  collectionName: 'components_content_locations_sections';
  info: {
    description: '';
    displayName: 'Locations Section';
  };
  attributes: {
    embedCode: Attribute.Text & Attribute.Required;
    offices: Attribute.Component<'content.office', true>;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentOffice extends Schema.Component {
  collectionName: 'components_content_offices';
  info: {
    description: '';
    displayName: 'Office';
  };
  attributes: {
    addressLine1: Attribute.String & Attribute.Required;
    addressLine2: Attribute.String;
    city: Attribute.String & Attribute.Required;
    country: Attribute.String;
    email: Attribute.String;
    phone: Attribute.String;
    postalCode: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentOpinionCard extends Schema.Component {
  collectionName: 'components_content_opinion_cards';
  info: {
    description: '';
    displayName: 'OpinionCard';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    fullName: Attribute.String & Attribute.Required;
    opinionNumber: Attribute.String & Attribute.Required;
    opinionTime: Attribute.String & Attribute.Required;
    starRating: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<5>;
  };
}

export interface ContentOpinions extends Schema.Component {
  collectionName: 'components_content_opinions';
  info: {
    description: '';
    displayName: 'opinions';
  };
  attributes: {
    opinionCard: Attribute.Component<'content.opinion-card', true> &
      Attribute.Required;
    settings: Attribute.Component<'home.settings-opinions'>;
    subTitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentOurProducts extends Schema.Component {
  collectionName: 'components_content_our_products';
  info: {
    description: '';
    displayName: 'ourProducts';
  };
  attributes: {
    highlightedProducts: Attribute.Relation<
      'content.our-products',
      'oneToMany',
      'api::product.product'
    >;
    subTitle: Attribute.String;
    title: Attribute.String;
  };
}

export interface ContentPostStep extends Schema.Component {
  collectionName: 'components_content_post_steps';
  info: {
    displayName: 'postStep';
  };
  attributes: {
    bottomButtonLabel: Attribute.String & Attribute.Required;
    titleLine1: Attribute.String & Attribute.Required;
    titleLine2: Attribute.String & Attribute.Required;
  };
}

export interface ContentPreStep extends Schema.Component {
  collectionName: 'components_content_pre_steps';
  info: {
    displayName: 'preStep';
  };
  attributes: {
    titleLine1: Attribute.String & Attribute.Required;
    titleLine2: Attribute.String & Attribute.Required;
  };
}

export interface ContentSectionTitleSubtitleContent extends Schema.Component {
  collectionName: 'components_content_section_title_subtitle_content_s';
  info: {
    description: '';
    displayName: 'Content Section (title, sub, descr, btn)';
  };
  attributes: {
    button: Attribute.Component<'content.button-with-overline'> &
      Attribute.Required;
    description: Attribute.Blocks;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentSource extends Schema.Component {
  collectionName: 'components_content_sources';
  info: {
    displayName: 'Source';
  };
  attributes: {
    link: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentStep extends Schema.Component {
  collectionName: 'components_content_steps';
  info: {
    displayName: 'Step';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentStepSection extends Schema.Component {
  collectionName: 'components_content_step_sections';
  info: {
    description: '';
    displayName: 'stepSection';
  };
  attributes: {
    postStep: Attribute.Component<'content.post-step'> & Attribute.Required;
    preStep: Attribute.Component<'content.pre-step'> & Attribute.Required;
    steps: Attribute.Component<'content.step', true> & Attribute.Required;
  };
}

export interface ContentTextSection extends Schema.Component {
  collectionName: 'components_content_text_sections';
  info: {
    description: '';
    displayName: 'Text Section';
  };
  attributes: {
    content: Attribute.Blocks;
    title: Attribute.String;
  };
}

export interface ContentValueSquare extends Schema.Component {
  collectionName: 'components_content_value_squares';
  info: {
    displayName: 'valueSquare';
  };
  attributes: {
    description: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface HomePricingSection extends Schema.Component {
  collectionName: 'components_home_pricing_sections';
  info: {
    displayName: 'Pricing section';
  };
  attributes: {
    items: Attribute.Component<'shared.simple-price', true>;
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface HomeService extends Schema.Component {
  collectionName: 'components_home_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    description: Attribute.Blocks;
    link: Attribute.Component<'content.cta-button'>;
    title: Attribute.String;
  };
}

export interface HomeServicesSection extends Schema.Component {
  collectionName: 'components_home_services_sections';
  info: {
    displayName: 'Services section';
  };
  attributes: {
    section: Attribute.Component<'content.section-title-subtitle-content'>;
    services: Attribute.Component<'home.service', true>;
  };
}

export interface HomeSettingsOpinions extends Schema.Component {
  collectionName: 'components_home_settings_opinions';
  info: {
    displayName: 'Settings: opinions';
  };
  attributes: {
    description: Attribute.String;
    link: Attribute.String;
    value: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedPrices extends Schema.Component {
  collectionName: 'components_shared_prices';
  info: {
    description: '';
    displayName: 'prices';
  };
  attributes: {
    productPrice: Attribute.Component<'shared.product-price'> &
      Attribute.Required;
    showUnit: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    unit: Attribute.Enumeration<['szt.', 'm2', 'm3']> &
      Attribute.Required &
      Attribute.DefaultTo<'szt.'>;
  };
}

export interface SharedProductPrice extends Schema.Component {
  collectionName: 'components_shared_product_prices';
  info: {
    description: '';
    displayName: 'ProductPrice';
  };
  attributes: {
    priceBrutto: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    priceNetto: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    vat: Attribute.Enumeration<['vat23', 'vat8', 'vat5', 'vat0', 'brak']> &
      Attribute.Required &
      Attribute.DefaultTo<'vat23'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Attribute.String;
    keywords: Attribute.Text;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Attribute.String;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Attribute.String;
    structuredData: Attribute.JSON;
  };
}

export interface SharedSimplePrice extends Schema.Component {
  collectionName: 'components_shared_simple_prices';
  info: {
    displayName: 'Simple price';
  };
  attributes: {
    price: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.about-section': ContentAboutSection;
      'content.accordion': ContentAccordion;
      'content.blog-preview': ContentBlogPreview;
      'content.button-with-overline': ContentButtonWithOverline;
      'content.content-section-title-subtitle': ContentContentSectionTitleSubtitle;
      'content.cta-button': ContentCtaButton;
      'content.cta-section': ContentCtaSection;
      'content.dimensions': ContentDimensions;
      'content.faq': ContentFaq;
      'content.faq-questions': ContentFaqQuestions;
      'content.floating-cards': ContentFloatingCards;
      'content.gallery': ContentGallery;
      'content.gallery-section': ContentGallerySection;
      'content.gallery-slide': ContentGallerySlide;
      'content.hero-section': ContentHeroSection;
      'content.highlight': ContentHighlight;
      'content.image': ContentImage;
      'content.locations-section': ContentLocationsSection;
      'content.office': ContentOffice;
      'content.opinion-card': ContentOpinionCard;
      'content.opinions': ContentOpinions;
      'content.our-products': ContentOurProducts;
      'content.post-step': ContentPostStep;
      'content.pre-step': ContentPreStep;
      'content.section-title-subtitle-content': ContentSectionTitleSubtitleContent;
      'content.source': ContentSource;
      'content.step': ContentStep;
      'content.step-section': ContentStepSection;
      'content.text-section': ContentTextSection;
      'content.value-square': ContentValueSquare;
      'home.pricing-section': HomePricingSection;
      'home.service': HomeService;
      'home.services-section': HomeServicesSection;
      'home.settings-opinions': HomeSettingsOpinions;
      'shared.meta-social': SharedMetaSocial;
      'shared.prices': SharedPrices;
      'shared.product-price': SharedProductPrice;
      'shared.seo': SharedSeo;
      'shared.simple-price': SharedSimplePrice;
    }
  }
}
