export type TranslationStrategy = 'none' | 'field' | 'folder';

export interface i18nConfigProps {
  translationStrategy: TranslationStrategy; // https://www.storyblok.com/docs/guide/in-depth/internationalization
  localeInDomainUrl: boolean; // ef.com/en-us vs ef.com/ (Only removes locale in NODE_ENV=production)
}

export const relationsToResolve = ['example-page.examples'];

export const i18nConfig: i18nConfigProps = {
  translationStrategy: process.env.NEXT_PUBLIC_TRANSLATION_STRATEGY ?? 'none',
  localeInDomainUrl: false,
};
