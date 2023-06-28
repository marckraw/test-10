import React from 'react';
import { DefaultSeo as DefaultNextSeo } from 'next-seo';
import type { ISbStoryData } from 'storyblok-js-client';

interface DefaultSeoProps {
  story: ISbStoryData;
  seo: any; // @todo fix types
  locale: string;
}

export const DefaultSeo = ({ story, seo, locale }: DefaultSeoProps) => {
  const siteUrl =
    typeof process.env.NEXT_PUBLIC_SITE_URL !== 'undefined'
      ? `${process.env.NEXT_PUBLIC_SITE_URL}${story?.full_slug}/`
      : '';

  const seoDescription =
    seo?.seo?.description ||
    story?.content?.subtitle ||
    seo?.defaultSeo?.description ||
    seo?.defaultSeo?.og_description ||
    '';

  const seoTitle =
    seo?.defaultSeo?.title || seo?.seo?.title || story?.name || undefined;
  const ogSeoTitle = `${seo?.seo?.title || story?.name || ''}${
    seo?.defaultSeo?.og_title ? ` | ${seo?.defaultSeo?.og_title}` : ''
  }`;

  return (
    <DefaultNextSeo
      title={seoTitle}
      titleTemplate={'%s'}
      defaultTitle={`${
        seo?.defaultSeo?.og_title ? ` | ${seo?.defaultSeo?.og_title}` : ''
      }`}
      description={seoDescription}
      canonical={siteUrl}
      openGraph={{
        type: 'website',
        locale: locale ?? 'en_US',
        url: siteUrl,
        title: ogSeoTitle,
        description: seoDescription,
        images: [
          {
            url: `${
              seo?.seo?.og_image || seo?.defaultSeo.og_image || ''
            }/m/1200x630/smart/filters:format(jpeg)`,
            width: 1200,
            height: 630,
            alt: story?.content?.article_image?.alt ?? '',
            type: 'image/jpeg',
          },
        ],
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/icon.svg',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
        },
      ]}
    />
  );
};
