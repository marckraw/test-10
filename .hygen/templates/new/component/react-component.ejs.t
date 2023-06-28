---
to: ../src/components/<%= componentName %>/<%= componentName %>.tsx
---
import type { CSSProperties, FC } from 'react';
import type { Schema } from './storyblok/<%= h.changeCase.paramCase(componentName) %>.sb';
import styles from './_<%= h.changeCase.paramCase(componentName) %>.module.scss';
import clsx from 'clsx';
import {
  useAllBackpackBreakpoints,
  useCurrentBackpackBreakpoint,
  useSpacing,
} from '@ef-global/backpack/lib/components/hooks';

interface <%= componentName %>SBProps {
  blok: Schema['Output'];
}

const <%= componentName %>SB: FC<<%= componentName %>SBProps> = (props) => {
  const { blok } = props;
  const { content, design } = blok;

  const bpDesign = useAllBackpackBreakpoints({
    design,
  });
  const bpCurrentDesign = useCurrentBackpackBreakpoint({
    design,
  });

  const overrideStyles = {
    color: bpCurrentDesign?.text_color?.selected?.value || 'inherit',
  } as CSSProperties;

  const spacingClass = useSpacing(bpDesign?.spacing);
  const classes = clsx(styles.<%= h.changeCase.camel(componentName) %>, spacingClass);

  return (
    <div className={classes} style={overrideStyles}>
      <h1><%= componentName %>: {content}</h1>
    </div>
  );
};

export { <%= componentName %>SB };