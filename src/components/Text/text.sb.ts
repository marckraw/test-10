import type {
  StoryblokComponentSchemaBase,
  Core,
  GenerateSchema,
} from 'storyblok-schema-types';

export type Text = {
  content: Core['custom'];
};

export type Schema = GenerateSchema<Text>;

const text: StoryblokComponentSchemaBase<Schema['Input']> = {
  name: 'text',
  display_name: 'Text',
  is_root: true,
  is_nestable: false,
  component_group_name: 'Content type',
  schema: {
    content: {
      type: 'custom',
      field_type: 'backpack-translation-gpt',
      options: [
        {
          name: 'token',
          value: '81777e2e-2c7b-45ee-b8d3-f76924ad95b8',
        },
      ],
    },
  },
};

export default text;
