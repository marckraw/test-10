import type {
  StoryblokComponentSchemaBase,
  Core,
  GenerateSchema,
  BackpackCore,
} from 'storyblok-schema-types';
import type { Components } from '@/components/all-components';

export type Settings = {
  theme: BackpackCore['BackpackTheme'];
  seo_meta_fields: Core['custom'];
  seo: Core['tab'];
};

export type Schema = GenerateSchema<Settings>;

const settings: StoryblokComponentSchemaBase<Schema['Input']> = {
  name: 'settings',
  display_name: 'Settings',
  is_root: true,
  is_nestable: false,
  component_group_name: 'Content type',
  schema: {
    theme: {
      type: 'custom',
      field_type: 'backpack-theme',
      options: [
        {
          name: 'oauthToken',
          value: process.env.STORYBLOK_OAUTH_TOKEN,
        },
      ],
      default_value: {},
    },
    seo_meta_fields: {
      type: 'custom',
      field_type: 'seo-metatags',
    },
    seo: {
      type: 'tab',
      display_name: 'Default SEO',
      keys: ['seo_meta_fields'],
    },
  },
};

export default settings;
