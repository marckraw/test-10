import type {
  StoryblokComponentSchemaBase,
  Core,
  GenerateSchema,
} from 'storyblok-schema-types';
import type { Components } from '@/components/all-components';

export type Page = {
  body: Core<Components>['bloks'];
  seo_meta_fields: Core['custom'];
  seo: Core['tab'];
};

export type Schema = GenerateSchema<Page>;

const page: StoryblokComponentSchemaBase<Schema['Input']> = {
  name: 'page',
  display_name: 'Page',
  component_group_name: 'Content tye',
  is_root: true,
  is_nestable: false,
  schema: {
    body: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: ['sb-section', 'status-overlay', 'text'],
    },
    seo_meta_fields: {
      type: 'custom',
      field_type: 'seo-metatags',
    },
    seo: {
      type: 'tab',
      display_name: 'SEO',
      keys: ['seo_meta_fields'],
    },
  },
};

export default page;
