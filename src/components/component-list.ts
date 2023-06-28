import dynamic from 'next/dynamic';
import type { Components } from '@/components/all-components';
import { Page } from '@/components/Page';
import { ImageSB } from '@/components/Image/ImageSB';
import { SectionSB } from '@ef-global/backpack/SectionSB';
import { TagSB } from '@ef-global/backpack/TagSB';
import { FlexGroupSB } from '@ef-global/backpack/FlexGroupSB';
import { TextSB } from '@ef-global/backpack/TextSB';
import { HeadlineSB } from '@ef-global/backpack/HeadlineSB';
import { CrossLinkTile, Link } from '@/components/Link';
import { LinkTextSB } from '@ef-global/backpack/LinkTextSB';
import { LinkIconSB } from '@ef-global/backpack/LinkIconSB';
import { LinkAnimatedIconSB } from '@ef-global/backpack/LinkAnimatedIconSB';
import { ButtonGroupSB } from '@ef-global/backpack/ButtonGroupSB';
import { ListSB } from '@ef-global/backpack/ListSB';
import { ListItemSB } from '@ef-global/backpack/ListItemSB';
// @ts-ignore
import { DividerSB } from '@ef-global/backpack/DividerSB';
import { BodyTextSB } from '@ef-global/backpack/BodyTextSB';
import { SurfaceSB } from '@ef-global/backpack/SurfaceSB';
import { EditorialCardSB } from '@/components/Cards/EditorialCardSB';
import { ContentCardSB } from '@/components/Cards/ContentCardSB';
import { SectionBackgroundLayerSB } from '@ef-global/backpack/SectionBackgroundLayerSB';
import { CTACardSB } from '@ef-global/backpack/CTACardSB';
import { ContentGroupSB } from '@ef-global/backpack/ContentGroupSB';
import { TeaserCardSB } from '@/components/Cards/TeaserCardSB';
import { ButtonSB } from '@ef-global/backpack/ButtonSB';
import { ButtonTextSB } from '@ef-global/backpack/ButtonTextSB';
import { ButtonIconSB } from '@ef-global/backpack/ButtonIconSB';
import { CarouselSB } from '@ef-global/backpack/CarouselSB';
import { TagGroupSB } from '@ef-global/backpack/TagGroupSB';
import { TabsSB } from '@ef-global/backpack/TabsSB';
import { isProduction } from '@/helpers/environment';
import { CollapsibleSB } from '@ef-global/backpack/CollapsibleSB';
import { CollapsibleButtonSB } from '@ef-global/backpack/CollapsibleButtonSB';
import { PositionLayerSB } from '@ef-global/backpack/PositionLayerSB';

const TableSB = dynamic(
  () => import('@ef-global/backpack/TableSB').then((mod) => mod.TableSB),
  { ssr: isProduction }
);

const BlockquoteSB = dynamic(
  () =>
    import('@ef-global/backpack/BlockquoteSB').then((mod) => mod.BlockquoteSB),
  { ssr: isProduction }
);

const IconSB = dynamic(
  () => import('@ef-global/backpack/IconSB').then((mod) => mod.IconSB),
  { ssr: isProduction }
);

const AccordionSB = dynamic(
  () =>
    import('@ef-global/backpack/AccordionSB').then((mod) => mod.AccordionSB),
  { ssr: isProduction }
);

const BreadcrumbSB = dynamic(
  () =>
    import('@ef-global/backpack/BreadcrumbSB').then((mod) => mod.BreadcrumbSB),
  { ssr: isProduction }
);

const TableHeadSB = dynamic(
  () =>
    import('@ef-global/backpack/TableHeadSB').then((mod) => mod.TableHeadSB),
  { ssr: isProduction }
);

const TableRowSB = dynamic(
  () => import('@ef-global/backpack/TableRowSB').then((mod) => mod.TableRowSB),
  { ssr: isProduction }
);

const TableCollSB = dynamic(
  () =>
    import('@ef-global/backpack/TableCollSB').then((mod) => mod.TableCollSB),
  { ssr: isProduction }
);

const VideoCardSB = dynamic(
  () =>
    import('@ef-global/backpack/VideoCardSB').then((mod) => mod.VideoCardSB),
  { ssr: isProduction }
);

const VideoSB = dynamic(
  () => import('@ef-global/backpack/VideoSB').then((mod) => mod.VideoSB),
  { ssr: isProduction }
);

const SocialEmbedSB = dynamic(
  () =>
    import('@ef-global/backpack/SocialEmbedSB').then(
      (mod) => mod.SocialEmbedSB
    ),
  { ssr: isProduction }
);

const SectionComponents = {
  'sb-section': SectionSB,
  'sb-text-section': TextSB,
  'sb-accordion-section': AccordionSB,
  'sb-blockquote-section': BlockquoteSB,
  'sb-flex-group-section': FlexGroupSB,
  'sb-image-section': ImageSB,
  'sb-editorial-card-section': EditorialCardSB,
  'sb-body-text-section': BodyTextSB,
  'sb-headline-section': HeadlineSB,
  'sb-section-background-layer': SectionBackgroundLayerSB,
  'sb-surface-section': SurfaceSB,
  'sb-divider-section': DividerSB,
  'sb-cta-card-section': CTACardSB,
  'sb-table-section': TableSB,
  'sb-button-group-section': ButtonGroupSB,
  'sb-content-card-section': ContentCardSB,
  'sb-teaser-card-section': TeaserCardSB,
  'sb-video-card-section': VideoCardSB,
  'sb-content-group-section': ContentGroupSB,
  'sb-link-tile-section': CrossLinkTile,
  'sb-carousel-section': CarouselSB,
  'sb-card-carousel-section': CarouselSB,
  'sb-social-embed-section': SocialEmbedSB,
  'sb-video-section': VideoSB,
  'sb-tabs-section': TabsSB,
  'sb-collapsible-section': CollapsibleSB,
};

const GroupComponents = {
  'sb-flex-group': FlexGroupSB,
  'sb-blockquote-flex-group': BlockquoteSB,
  'sb-button-group-flex-group': ButtonGroupSB,
  'sb-body-text-flex-group': BodyTextSB,
  'sb-flex-group-group': FlexGroupSB,
  'sb-image-flex-group': ImageSB,
  'sb-link-flex-group': Link,
  'sb-text-flex-group': TextSB,
  'sb-headline-flex-group': HeadlineSB,
  'sb-icon-flex-group': IconSB,
  'sb-divider-flex-group': DividerSB,
  'sb-accordion-group': AccordionSB,
  'sb-button-group': ButtonGroupSB,
  'sb-button-group-group': ButtonGroupSB,
  'sb-group-group': FlexGroupSB,
  'sb-group': FlexGroupSB,
  'sb-image-group': ImageSB,
  'sb-link-group': Link,
  'sb-text-group': TextSB,
  'sb-icon-group': IconSB,
  'sb-divider-group': DividerSB,
  'sb-icon-selector-group': IconSB,
  'sb-accordion-flex-group': AccordionSB,
  'sb-flex-group-flex-group': FlexGroupSB,
  'sb-content-group-flex-group': ContentGroupSB,
  'sb-list-flex-group': ListSB,
  'sb-social-embed-flex-group': SocialEmbedSB,
  'sb-tag-group': TagGroupSB,
  'sb-collapsible-flex-group': CollapsibleSB,
};

/*
 *
 * Components that exist only as schema, without
 * React implementation.
 *
 * */
const InternalComponents = {
  settings: 'internal',
  'sb-image-card': ImageSB,
  'sb-icon-button': ButtonIconSB, // which wrapper ? (ButtonSB ?) or internal
  'sb-link-button': undefined, // which wrapper ? (ButtonSB ?) or internal
  'sb-modal-button': undefined, // which wrapper ? (ButtonSB ?) or internal
  'sb-text-button': ButtonTextSB,
  'sb-text-icon': ButtonIconSB,
};

const LocalComponents = {};

const components: Partial<Record<Components, any>> = {
  page: Page,
  'sb-accordion': AccordionSB,
  'sb-accordion-item': AccordionSB,
  'sb-blockquote': BlockquoteSB,
  'sb-table': TableSB,
  'sb-image': ImageSB,
  'sb-content-group': ContentGroupSB,
  'sb-link': Link,
  'sb-link-text': LinkTextSB,
  'sb-link-icon': LinkIconSB,
  'sb-link-icon-animated': LinkAnimatedIconSB,
  'sb-link-tile': CrossLinkTile,
  'sb-list': ListSB,
  'sb-list-item': ListItemSB,
  'sb-tag': TagSB,
  'sb-icon': IconSB,
  'sb-editorial-card': EditorialCardSB,
  'sb-flex-group': FlexGroupSB,
  'sb-section-background-layer': SectionBackgroundLayerSB,
  'sb-surface': SurfaceSB,
  'sb-text': TextSB,
  'sb-breadcrumbs': BreadcrumbSB,
  'sb-headline': HeadlineSB,
  'sb-body-text': BodyTextSB,
  'sb-content-card': ContentCardSB,
  'sb-cta-card': CTACardSB,
  'sb-teaser-card': TeaserCardSB,
  'sb-video-card': VideoCardSB,
  'sb-button': ButtonSB,
  'sb-divider': DividerSB,
  'sb-social-embed': SocialEmbedSB,
  'sb-carousel': CarouselSB,
  'sb-card-carousel': CarouselSB,
  'sb-video': VideoSB,
  'sb-tabs': TabsSB,
  'sb-tab-item': TabsSB,
  'sb-collapsible': CollapsibleSB,
  'sb-collapsible-content': CollapsibleSB,
  'sb-collapsible-trigger': CollapsibleSB,
  'sb-collapsible-button': CollapsibleButtonSB,
  'sb-position-layer': PositionLayerSB,
  ...SectionComponents,
  ...GroupComponents,
  ...InternalComponents,
  ...LocalComponents,
};

const internalStoryblokSchemas = {
  _table_head: TableHeadSB, // these are internal schema names for table field type
  _table_row: TableRowSB, // these are internal schema names for table field type
  _table_col: TableCollSB, // these are internal schema names for table field type
};

export const allComponents = {
  ...components,
  ...internalStoryblokSchemas,
};
