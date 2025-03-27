import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ContentValueSquare extends Schema.Component {
  collectionName: 'components_content_value_squares';
  info: {
    displayName: 'valueSquare';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface ContentTextSection extends Schema.Component {
  collectionName: 'components_content_text_sections';
  info: {
    displayName: 'Text Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Blocks;
  };
}

export interface ContentStep extends Schema.Component {
  collectionName: 'components_content_steps';
  info: {
    displayName: 'Step';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ContentStepSection extends Schema.Component {
  collectionName: 'components_content_step_sections';
  info: {
    displayName: 'stepSection';
    description: '';
  };
  attributes: {
    steps: Attribute.Component<'content.step', true> & Attribute.Required;
    preStep: Attribute.Component<'content.pre-step'> & Attribute.Required;
    postStep: Attribute.Component<'content.post-step'> & Attribute.Required;
  };
}

export interface ContentSource extends Schema.Component {
  collectionName: 'components_content_sources';
  info: {
    displayName: 'Source';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    link: Attribute.String;
  };
}

export interface ContentSectionTitleSubtitleContent extends Schema.Component {
  collectionName: 'components_content_section_title_subtitle_content_s';
  info: {
    displayName: 'Content Section (title, sub, descr, btn)';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Blocks;
    button: Attribute.Component<'content.button-with-overline'> &
      Attribute.Required;
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

export interface ContentPostStep extends Schema.Component {
  collectionName: 'components_content_post_steps';
  info: {
    displayName: 'postStep';
  };
  attributes: {
    titleLine1: Attribute.String & Attribute.Required;
    titleLine2: Attribute.String & Attribute.Required;
    bottomButtonLabel: Attribute.String & Attribute.Required;
  };
}

export interface ContentOurProducts extends Schema.Component {
  collectionName: 'components_content_our_products';
  info: {
    displayName: 'ourProducts';
    description: '';
  };
  attributes: {
    highlightedProducts: Attribute.Relation<
      'content.our-products',
      'oneToMany',
      'api::product.product'
    >;
    title: Attribute.String;
    subTitle: Attribute.String;
  };
}

export interface ContentOpinions extends Schema.Component {
  collectionName: 'components_content_opinions';
  info: {
    displayName: 'opinions';
    description: '';
  };
  attributes: {
    subTitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    opinionCard: Attribute.Component<'content.opinion-card', true> &
      Attribute.Required;
  };
}

export interface ContentOpinionCard extends Schema.Component {
  collectionName: 'components_content_opinion_cards';
  info: {
    displayName: 'OpinionCard';
    description: '';
  };
  attributes: {
    fullName: Attribute.String & Attribute.Required;
    starRating: Attribute.Decimal &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      > &
      Attribute.DefaultTo<5>;
    opinionTime: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    opinionNumber: Attribute.String & Attribute.Required;
  };
}

export interface ContentOffice extends Schema.Component {
  collectionName: 'components_content_offices';
  info: {
    displayName: 'Office';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    addressLine1: Attribute.String & Attribute.Required;
    addressLine2: Attribute.String;
    postalCode: Attribute.String & Attribute.Required;
    city: Attribute.String & Attribute.Required;
    country: Attribute.String;
    phone: Attribute.String;
    email: Attribute.String;
  };
}

export interface ContentLocationsSection extends Schema.Component {
  collectionName: 'components_content_locations_sections';
  info: {
    displayName: 'Locations Section';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
    offices: Attribute.Component<'content.office', true>;
    embedCode: Attribute.Text & Attribute.Required;
  };
}

export interface ContentImage extends Schema.Component {
  collectionName: 'components_content_images';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    imgDescription: Attribute.Text;
  };
}

export interface ContentHighlight extends Schema.Component {
  collectionName: 'components_content_highlights';
  info: {
    displayName: 'Highlight';
    description: '';
  };
  attributes: {
    highlightText: Attribute.Text & Attribute.Required;
  };
}

export interface ContentHeroSection extends Schema.Component {
  collectionName: 'components_content_hero_sections';
  info: {
    displayName: 'heroSection';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    floatingCards: Attribute.Component<'content.floating-cards', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 3;
        },
        number
      >;
    image: Attribute.Media<'images'> & Attribute.Required;
    button: Attribute.Component<'content.button-with-overline'> &
      Attribute.Required;
  };
}

export interface ContentGallery extends Schema.Component {
  collectionName: 'components_content_galleries';
  info: {
    displayName: 'gallery';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    description: Attribute.Text;
  };
}

export interface ContentGallerySlide extends Schema.Component {
  collectionName: 'components_content_gallery_slides';
  info: {
    displayName: 'Gallery Slide';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    link: Attribute.Component<'content.cta-button'>;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ContentFloatingCards extends Schema.Component {
  collectionName: 'components_content_floating_cards';
  info: {
    displayName: 'floatingCards';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface ContentFaq extends Schema.Component {
  collectionName: 'components_content_faqs';
  info: {
    displayName: 'Faq';
    description: '';
  };
  attributes: {
    subTitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    faqQuestion: Attribute.Component<'content.faq-questions', true> &
      Attribute.Required;
    button: Attribute.Component<'content.button-with-overline'> &
      Attribute.Required;
  };
}

export interface ContentFaqQuestions extends Schema.Component {
  collectionName: 'components_content_faq_questions';
  info: {
    displayName: 'faqQuestions';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.Blocks & Attribute.Required;
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

export interface ContentCtaSection extends Schema.Component {
  collectionName: 'components_content_cta_sections';
  info: {
    displayName: 'CTA Section';
    description: '';
  };
  attributes: {
    cta: Attribute.Relation<'content.cta-section', 'oneToOne', 'api::cta.cta'>;
  };
}

export interface ContentCtaButton extends Schema.Component {
  collectionName: 'components_content_cta_buttons';
  info: {
    displayName: 'CTA Button';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface ContentContentSectionTitleSubtitle extends Schema.Component {
  collectionName: 'components_content_content_section_title_subtitle_s';
  info: {
    displayName: 'Content Section (title, sub)';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ContentButtonWithOverline extends Schema.Component {
  collectionName: 'components_content_button_with_overlines';
  info: {
    displayName: 'Button with overline';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    overline: Attribute.String;
    url: Attribute.String & Attribute.Required;
  };
}

export interface ContentBlogPreview extends Schema.Component {
  collectionName: 'components_content_blog_previews';
  info: {
    displayName: 'blogPreview';
  };
  attributes: {
    subTitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    article: Attribute.Relation<
      'content.blog-preview',
      'oneToOne',
      'api::article.article'
    >;
  };
}

export interface ContentAccordion extends Schema.Component {
  collectionName: 'components_content_accordions';
  info: {
    displayName: 'accordion';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

export interface ContentAboutSection extends Schema.Component {
  collectionName: 'components_content_about_sections';
  info: {
    displayName: 'aboutSection';
    description: '';
  };
  attributes: {
    subTitle: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    text: Attribute.Blocks & Attribute.Required;
    blocks: Attribute.Component<'content.value-square', true> &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 3;
        },
        number
      >;
    image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'content.value-square': ContentValueSquare;
      'content.text-section': ContentTextSection;
      'content.step': ContentStep;
      'content.step-section': ContentStepSection;
      'content.source': ContentSource;
      'content.section-title-subtitle-content': ContentSectionTitleSubtitleContent;
      'content.pre-step': ContentPreStep;
      'content.post-step': ContentPostStep;
      'content.our-products': ContentOurProducts;
      'content.opinions': ContentOpinions;
      'content.opinion-card': ContentOpinionCard;
      'content.office': ContentOffice;
      'content.locations-section': ContentLocationsSection;
      'content.image': ContentImage;
      'content.highlight': ContentHighlight;
      'content.hero-section': ContentHeroSection;
      'content.gallery': ContentGallery;
      'content.gallery-slide': ContentGallerySlide;
      'content.floating-cards': ContentFloatingCards;
      'content.faq': ContentFaq;
      'content.faq-questions': ContentFaqQuestions;
      'content.dimensions': ContentDimensions;
      'content.cta-section': ContentCtaSection;
      'content.cta-button': ContentCtaButton;
      'content.content-section-title-subtitle': ContentContentSectionTitleSubtitle;
      'content.button-with-overline': ContentButtonWithOverline;
      'content.blog-preview': ContentBlogPreview;
      'content.accordion': ContentAccordion;
      'content.about-section': ContentAboutSection;
    }
  }
}
