import React from 'react';
import { default as NextLink } from 'next/link';
import { i18nConfig } from '@/constants/general';
import type { LinkSBProps } from '@ef-global/backpack/lib/components/Link/storyblok/LinkSB';
import { isProduction } from '@/helpers/environment';
import { LinkSB } from '@ef-global/backpack/LinkSB';
import type { LinkTileSBProps } from '@ef-global/backpack/LinkTileSB';
import { LinkTileSB } from '@ef-global/backpack/LinkTileSB';

export const Link = (props: LinkSBProps) => {
  const { blok } = props;
  const { link } = blok;
  return (
    <NextLink
      href={getHref({ link })}
      locale={getLocaleFromLink({ link })}
      passHref
      legacyBehavior
    >
      <LinkSB {...props} />
    </NextLink>
  );
};

export const CrossLinkTile = (props: LinkTileSBProps) => {
  const { blok } = props;
  const { link } = blok;

  return (
    <NextLink
      href={getHref({ link })}
      locale={getLocaleFromLink({ link })}
      passHref
      legacyBehavior
    >
      <LinkTileSB {...props} />
    </NextLink>
  );
};

const getHref = ({ link }) => {
  switch (link.linktype) {
    case 'story':
      return isProduction && !i18nConfig.localeInDomainUrl
        ? `${link.cached_url.replace(getLocaleFromLink({ link }), '')}`
        : `${link.cached_url}`;
    default:
      return link.url;
  }
};

export const getLocaleFromLink = ({ link }) => {
  return link.linktype === 'story' &&
    i18nConfig.translationStrategy === 'folder'
    ? link.cached_url
        .replace(/^\//, '')
        .substring(0, link.cached_url.indexOf('/'))
    : undefined;
};
