import type { Schema, Struct } from '@strapi/strapi';

export interface ContentAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_content_about_sections';
  info: {
    description: '';
    displayName: 'aboutSection';
  };
  attributes: {
    blocks: Schema.Attribute.Component<'content.value-square', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 0;
        },
        number
      >;
    image: Schema.Attribute.Media<'images'>;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentAccordion extends Struct.ComponentSchema {
  collectionName: 'components_content_accordions';
  info: {
    displayName: 'accordion';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentBlogPreview extends Struct.ComponentSchema {
  collectionName: 'components_content_blog_previews';
  info: {
    displayName: 'blogPreview';
  };
  attributes: {
    article: Schema.Attribute.Relation<'oneToOne', 'api::article.article'>;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentButtonWithOverline extends Struct.ComponentSchema {
  collectionName: 'components_content_button_with_overlines';
  info: {
    description: '';
    displayName: 'Button with overline';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    overline: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentContentSectionTitleSubtitle
  extends Struct.ComponentSchema {
  collectionName: 'components_content_content_section_title_subtitle_s';
  info: {
    description: '';
    displayName: 'Content Section (title, sub)';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_content_cta_buttons';
  info: {
    description: '';
    displayName: 'CTA Button';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_content_cta_sections';
  info: {
    description: '';
    displayName: 'CTA Section';
  };
  attributes: {
    cta: Schema.Attribute.Relation<'oneToOne', 'api::cta.cta'>;
  };
}

export interface ContentDimensions extends Struct.ComponentSchema {
  collectionName: 'components_content_dimensions';
  info: {
    displayName: 'dimensions';
  };
  attributes: {
    attribute: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentFaq extends Struct.ComponentSchema {
  collectionName: 'components_content_faqs';
  info: {
    description: '';
    displayName: 'Faq';
  };
  attributes: {
    button: Schema.Attribute.Component<'content.button-with-overline', false>;
    faq: Schema.Attribute.Relation<'oneToOne', 'api::faq.faq'>;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentFaqQuestions extends Struct.ComponentSchema {
  collectionName: 'components_content_faq_questions';
  info: {
    displayName: 'faqQuestions';
  };
  attributes: {
    answer: Schema.Attribute.Blocks & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentFloatingCards extends Struct.ComponentSchema {
  collectionName: 'components_content_floating_cards';
  info: {
    displayName: 'floatingCards';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentGallery extends Struct.ComponentSchema {
  collectionName: 'components_content_galleries';
  info: {
    description: '';
    displayName: 'gallery';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ContentGallerySection extends Struct.ComponentSchema {
  collectionName: 'components_content_gallery_sections';
  info: {
    displayName: 'Gallery Section';
  };
  attributes: {
    slides: Schema.Attribute.Component<'content.gallery-slide', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContentGallerySlide extends Struct.ComponentSchema {
  collectionName: 'components_content_gallery_slides';
  info: {
    displayName: 'Gallery Slide';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'content.cta-button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_content_hero_sections';
  info: {
    description: '';
    displayName: 'heroSection';
  };
  attributes: {
    button: Schema.Attribute.Component<'content.button-with-overline', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    floatingCards: Schema.Attribute.Component<'content.floating-cards', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 0;
        },
        number
      >;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentHighlight extends Struct.ComponentSchema {
  collectionName: 'components_content_highlights';
  info: {
    description: '';
    displayName: 'Highlight';
  };
  attributes: {
    highlightText: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ContentImage extends Struct.ComponentSchema {
  collectionName: 'components_content_images';
  info: {
    description: '';
    displayName: 'Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imgDescription: Schema.Attribute.Text;
    variant: Schema.Attribute.Enumeration<['fullWidth', 'contentWidth']> &
      Schema.Attribute.DefaultTo<'fullWidth'>;
  };
}

export interface ContentLocationsSection extends Struct.ComponentSchema {
  collectionName: 'components_content_locations_sections';
  info: {
    description: '';
    displayName: 'Locations Section';
  };
  attributes: {
    embedCode: Schema.Attribute.Text & Schema.Attribute.Required;
    offices: Schema.Attribute.Component<'content.office', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentOffice extends Struct.ComponentSchema {
  collectionName: 'components_content_offices';
  info: {
    description: '';
    displayName: 'Office';
  };
  attributes: {
    addressLine1: Schema.Attribute.String & Schema.Attribute.Required;
    addressLine2: Schema.Attribute.String;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String;
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    postalCode: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentOpinionCard extends Struct.ComponentSchema {
  collectionName: 'components_content_opinion_cards';
  info: {
    description: '';
    displayName: 'OpinionCard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    fullName: Schema.Attribute.String & Schema.Attribute.Required;
    opinionNumber: Schema.Attribute.String & Schema.Attribute.Required;
    opinionTime: Schema.Attribute.String & Schema.Attribute.Required;
    starRating: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
  };
}

export interface ContentOpinions extends Struct.ComponentSchema {
  collectionName: 'components_content_opinions';
  info: {
    description: '';
    displayName: 'opinions';
  };
  attributes: {
    opinionCard: Schema.Attribute.Component<'content.opinion-card', true> &
      Schema.Attribute.Required;
    settings: Schema.Attribute.Component<'home.settings-opinions', false>;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentOurProducts extends Struct.ComponentSchema {
  collectionName: 'components_content_our_products';
  info: {
    description: '';
    displayName: 'ourProducts';
  };
  attributes: {
    highlightedProducts: Schema.Attribute.Relation<
      'oneToMany',
      'api::product.product'
    >;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContentPostStep extends Struct.ComponentSchema {
  collectionName: 'components_content_post_steps';
  info: {
    displayName: 'postStep';
  };
  attributes: {
    bottomButtonLabel: Schema.Attribute.String & Schema.Attribute.Required;
    titleLine1: Schema.Attribute.String & Schema.Attribute.Required;
    titleLine2: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentPreStep extends Struct.ComponentSchema {
  collectionName: 'components_content_pre_steps';
  info: {
    displayName: 'preStep';
  };
  attributes: {
    titleLine1: Schema.Attribute.String & Schema.Attribute.Required;
    titleLine2: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentReelsSection extends Struct.ComponentSchema {
  collectionName: 'components_content_reels_sections';
  info: {
    displayName: 'Reels Section';
  };
  attributes: {
    button: Schema.Attribute.Component<'content.cta-button', false>;
    items: Schema.Attribute.Component<'content.reels-slide', true>;
    section: Schema.Attribute.Component<
      'content.content-section-title-subtitle',
      false
    >;
  };
}

export interface ContentReelsSlide extends Struct.ComponentSchema {
  collectionName: 'components_content_reels_slides';
  info: {
    description: '';
    displayName: 'Reels Slide';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'content.cta-button', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface ContentSectionTitleSubtitleContent
  extends Struct.ComponentSchema {
  collectionName: 'components_content_section_title_subtitle_content_s';
  info: {
    description: '';
    displayName: 'Content Section (title, sub, descr, btn)';
  };
  attributes: {
    button: Schema.Attribute.Component<'content.button-with-overline', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentSource extends Struct.ComponentSchema {
  collectionName: 'components_content_sources';
  info: {
    displayName: 'Source';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentStep extends Struct.ComponentSchema {
  collectionName: 'components_content_steps';
  info: {
    displayName: 'Step';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentStepSection extends Struct.ComponentSchema {
  collectionName: 'components_content_step_sections';
  info: {
    description: '';
    displayName: 'stepSection';
  };
  attributes: {
    postStep: Schema.Attribute.Component<'content.post-step', false> &
      Schema.Attribute.Required;
    preStep: Schema.Attribute.Component<'content.pre-step', false> &
      Schema.Attribute.Required;
    steps: Schema.Attribute.Component<'content.step', true> &
      Schema.Attribute.Required;
  };
}

export interface ContentTextSection extends Struct.ComponentSchema {
  collectionName: 'components_content_text_sections';
  info: {
    description: '';
    displayName: 'Text Section';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ContentValueSquare extends Struct.ComponentSchema {
  collectionName: 'components_content_value_squares';
  info: {
    displayName: 'valueSquare';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomePricingSection extends Struct.ComponentSchema {
  collectionName: 'components_home_pricing_sections';
  info: {
    displayName: 'Pricing section';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.simple-price', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeService extends Struct.ComponentSchema {
  collectionName: 'components_home_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    link: Schema.Attribute.Component<'content.cta-button', false>;
    title: Schema.Attribute.String;
  };
}

export interface HomeServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_home_services_sections';
  info: {
    displayName: 'Services section';
  };
  attributes: {
    section: Schema.Attribute.Component<
      'content.section-title-subtitle-content',
      false
    >;
    services: Schema.Attribute.Component<'home.service', true>;
  };
}

export interface HomeSettingsOpinions extends Struct.ComponentSchema {
  collectionName: 'components_home_settings_opinions';
  info: {
    displayName: 'Settings: opinions';
  };
  attributes: {
    description: Schema.Attribute.String;
    link: Schema.Attribute.String;
    value: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 0;
        },
        number
      >;
  };
}

export interface ProjectsContentSection extends Struct.ComponentSchema {
  collectionName: 'components_projects_content_sections';
  info: {
    displayName: 'Content Section';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'left'>;
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ProjectsGallery extends Struct.ComponentSchema {
  collectionName: 'components_projects_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    items: Schema.Attribute.Component<'projects.gallery-slide', true> &
      Schema.Attribute.Required;
  };
}

export interface ProjectsGallerySlide extends Struct.ComponentSchema {
  collectionName: 'components_projects_gallery_slides';
  info: {
    description: '';
    displayName: 'Gallery Slide';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    isFull: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedPrices extends Struct.ComponentSchema {
  collectionName: 'components_shared_prices';
  info: {
    description: '';
    displayName: 'prices';
  };
  attributes: {
    productPrice: Schema.Attribute.Component<'shared.product-price', false> &
      Schema.Attribute.Required;
    showUnit: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    unit: Schema.Attribute.Enumeration<['szt.', 'm2', 'm3']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'szt.'>;
  };
}

export interface SharedProductPrice extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_prices';
  info: {
    description: '';
    displayName: 'ProductPrice';
  };
  attributes: {
    priceBrutto: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    priceNetto: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    vat: Schema.Attribute.Enumeration<
      ['vat23', 'vat8', 'vat5', 'vat0', 'brak']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'vat23'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedSimplePrice extends Struct.ComponentSchema {
  collectionName: 'components_shared_simple_prices';
  info: {
    displayName: 'Simple price';
  };
  attributes: {
    price: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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
      'content.reels-section': ContentReelsSection;
      'content.reels-slide': ContentReelsSlide;
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
      'projects.content-section': ProjectsContentSection;
      'projects.gallery': ProjectsGallery;
      'projects.gallery-slide': ProjectsGallerySlide;
      'shared.meta-social': SharedMetaSocial;
      'shared.prices': SharedPrices;
      'shared.product-price': SharedProductPrice;
      'shared.seo': SharedSeo;
      'shared.simple-price': SharedSimplePrice;
    }
  }
}
