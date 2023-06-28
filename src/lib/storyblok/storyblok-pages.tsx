import type { StoryblokLink } from '@/lib/storyblok';
import type { ISbStoriesParams } from '@storyblok/react';
import { getStoryblokApi } from '@/lib/storyblok/storyblok-client';
import { i18nConfig } from '@/constants/general';
import type { GetStaticPropsContext } from 'next';
import { isProduction } from '@/helpers/environment';
import languageMap from '@/lib/i18n/languageMap.json';

interface GetSbPathsProps {
  locales?: string[];
}

const ignoreSlugsRegex: RegExp[] = [
  /settings\//,
  /global\//
];

export const isSlugIgnored = (slug: string, regexArray = ignoreSlugsRegex) => {
  return regexArray.some(slugToIgnore => {
    return slugToIgnore.test(slug);
  });
};

export const filteredLinksToIgnore = (links: StoryblokLink[]): StoryblokLink[] => {
  return Object.values(links ?? []).filter(link => !isSlugIgnored(link?.slug ?? ''));
};

export const getSbPaths = async ({ locales }: GetSbPathsProps) => {
  const storyblokApi = getStoryblokApi();
  const {
    data: { links }
  } = await storyblokApi.get('cdn/links/');

  switch (i18nConfig.translationStrategy) {
    case 'field':
      return getFieldLevelPaths({ links, locales });
    case 'folder':
      return getFolderLevelPaths({ locales, links });
    default:
      return getPaths({ links });
  }
};

interface GetSbStoryProps {
  context: GetStaticPropsContext;
  bypassSlugFilter?: boolean;
}

export const getSbStory = async ({ context, bypassSlugFilter = false }: GetSbStoryProps) => {
  const { params, locale } = context;

  const { translationStrategy } = i18nConfig;

  const defaultSlug = translationStrategy === 'folder' ? '' : 'home';

  const slug = params?.slug ? (params.slug as []).join('/') : defaultSlug;

  const sbParams: ISbStoriesParams = {
    version: 'published'
  };

  if (!bypassSlugFilter && isSlugIgnored(slug ?? '')) {
    throw new Error(`Slug is not allowed, ${slug}`);
  }

  if (translationStrategy === 'field') {
    sbParams['fallback_lang'] = languageMap[locale].fallback_lang;
    sbParams['language'] = locale;
  }

  if (context.preview || !isProduction) {
    sbParams.version = 'draft';
  }

  const storyblokApi = getStoryblokApi();

  const {
    data: { story }
  } = await storyblokApi.get(`cdn/stories/${translationStrategy === 'folder' ? `${locale}/` : ''}${slug}`, sbParams);

  return story;
};

interface GetFolderLevelPathsProps {
  links: StoryblokLink[];
  locales: string[];
}

const getFolderLevelPaths = ({ links, locales }: GetFolderLevelPathsProps) => {
  return filteredLinksToIgnore(links).reduce((acc, link) => {
    const currentLocale = locales.filter((locale) =>
      link.slug.split('/').includes(locale.toLowerCase())
    )[0];

    if (
      link.is_folder ||
      typeof currentLocale === 'undefined'
    ) {
      return acc;
    }
    const slug = link.slug;

    const splitSlug = slug
      .split('/')
      .filter((splitPath) => splitPath !== currentLocale)
      .filter(Boolean);

    locales.map((locale) => {
      acc.push({ params: { slug: splitSlug }, locale });
    });

    return acc;
  }, []);
};

interface GetFieldLevelPathsProps {
  links: StoryblokLink[];
  locales: string[];
}

const getFieldLevelPaths = ({ links, locales }: GetFieldLevelPathsProps) => {
  return filteredLinksToIgnore(links).reduce((acc, link) => {
    if (link.is_folder) {
      return acc;
    }

    const slug = link.slug;
    const splitSlug = slug.split('/');

    locales.map((locale) => {
      acc.push({ params: { slug: splitSlug }, locale });
    });

    return acc;
  }, []);
};

interface GetFieldLevelPathsProps {
  links: StoryblokLink[];
}

const getPaths = ({ links }) => {
  return filteredLinksToIgnore(links).reduce((acc, link) => {
    if (link.is_folder || link.slug === 'home') {
      return acc;
    }

    const slug = link.slug;
    const splitSlug = slug.split('/');

    acc.push({ params: { slug: splitSlug } });

    return acc;
  }, []);
};
