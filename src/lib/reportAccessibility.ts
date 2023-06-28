import type React from 'react';
import {isProduction} from '../helpers/environment';

export const reportAccessibility = async (
  App: typeof React,
  config?: Record<string, unknown>
): Promise<void> => {
  if (
    typeof window !== 'undefined' &&
    !isProduction
  ) {
    const axe = await import('@axe-core/react').then(mod => mod.default);
    const ReactDOM = await import('react-dom');

    await axe(App, ReactDOM, 1000, config);
  }
};

export default reportAccessibility;