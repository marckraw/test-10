---
to: ../src/components/<%= componentName %>/storyblok/breakpoints.schema.ts
---
import type {
    BackpackCore,
    GenerateNestedSchema,
} from 'storyblok-schema-types';

export type WithBreakpoints = {
    design: {
        spacing: BackpackCore['BackpackSpacing'];
        text_color: BackpackCore['BackpackColorPicker'];
    };
};

export type BreakpointsSchema = GenerateNestedSchema<WithBreakpoints['design']>;

export const breakpointsSchema: BreakpointsSchema['Input'] = {
  spacing: {
      type: 'custom',
      field_type: 'backpack-spacing',
      default_value: {},
  },
  text_color: {
      type: 'custom',
      field_type: 'backpack-color-picker',
      options: [
          {
              name: 'colors',
              value: 'colors',
          },
      ],
      default_value: {},
  },
};