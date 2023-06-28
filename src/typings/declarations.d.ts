/// <reference types="styled-jsx" />

import { TranslationStrategy } from '@/constants/general';

declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module '*.scss' {
  export const content: { [className: string]: string };
  export default content;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_TRANSLATION_STRATEGY: TranslationStrategy;
    }
  }
}