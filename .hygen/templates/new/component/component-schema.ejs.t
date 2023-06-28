---
to: ../src/components/<%= componentName %>/storyblok/<%= h.changeCase.paramCase(componentName) %>.sb.ts
---
import type {
  StoryblokComponentSchemaBase,
  Core,
  GenerateSchema,
  WithBackpack,
} from 'storyblok-schema-types';
import type { BreakpointsSchema } from './breakpoints.schema';
import { breakpointsSchema } from './breakpoints.schema';

export type WorkshopComponent = {
  content: Core['text'];
  design: WithBackpack<BreakpointsSchema>;
  edit_tab: Core['tab'];
  design_tab: Core['tab'];
};

export type Schema = GenerateSchema<WorkshopComponent>;

const workshopComponent: StoryblokComponentSchemaBase<Schema['Input']> = {
  name: '<%= h.changeCase.paramCase(componentName) %>',
  display_name: '<%= componentName %>',
  is_root: true,
  is_nestable: false,
  component_group_name: 'Custom',
  schema: {
    content: {
      type: 'text',
    },
    design: {
      type: 'custom',
      field_type: 'backpack-breakpoints',
      display_name: 'Design',
      options: [
        {
          name: 'spacing',
          value: JSON.stringify(breakpointsSchema.spacing),
        },
        {
          name: 'text_color',
          value: JSON.stringify(breakpointsSchema.text_color),
        },
      ],
    },
    edit_tab: {
      type: 'tab',
      display_name: 'Content',
      keys: ['content'],
    },
    design_tab: {
      type: 'tab',
      display_name: 'Design',
      keys: ['design'],
    },
  },
};

export default workshopComponent;