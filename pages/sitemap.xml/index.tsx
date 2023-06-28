import type { GetServerSideProps } from 'next';
import { getStoryblokApi } from '@/lib/storyblok/storyblok-client';
import type { StoryblokLink } from '@/lib/storyblok';
import { getServerSideSitemapLegacy } from 'next-sitemap';
import type { ISitemapField } from 'next-sitemap/dist/@types/interface';
import languageMap from '@/lib/i18n/languageMap.json' assert { type: 'json' };
import { isSlugIgnored } from '@/lib/storyblok/storyblok-pages';

interface LangConfig {
  [key: string]: {
    label: string;
    fallback_lang?: string;
    domain?: string;
  };
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const url = ctx.req?.headers?.host;
  const slugs = await getAllStoryblokSlugs();

  const fields: ISitemapField[] = slugs.map((slug) => {
    return {
      loc: `https://${url}/${slug}/`.replace(/\/+$/, '/'),
      lastmod: new Date().toISOString(),
      alternateRefs: Object.entries(languageMap as LangConfig)
        .filter(([lang]) => lang !== 'en')
        .map(([lang, config]) => {
          return {
            href: config.hasOwnProperty('domain')
              ? `https://${config.domain}/${slug}/`.replace(/\/+$/, '/')
              : `https://${url}/${lang}/${slug}/`.replace(/\/+$/, '/'),
            hreflang: lang,
          };
        }),
    };
  });

  return getServerSideSitemapLegacy(ctx, fields);
};

const getAllStoryblokSlugs = async () => {
  const storyblokApi = getStoryblokApi();
  const {
    data: { links },
  } = await storyblokApi.get('cdn/links/');

  return Object.values(links as StoryblokLink[]).reduce((acc, link) => {
    if (link.is_folder || isSlugIgnored(link.slug)) {
      return acc;
    }

    acc.push(link.slug === 'home' ? '/' : link.slug);

    return acc;
  }, []);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
