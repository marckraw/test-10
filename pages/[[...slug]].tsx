import type { GetStaticPaths, GetStaticProps } from 'next';
import { StoryblokComponent, useStoryblokState } from '@storyblok/react';
import { relationsToResolve } from '@/constants/general';
import { getSeoFromStory } from '@/lib/storyblok/seo';
import { getSbPaths, getSbStory } from '@/lib/storyblok/storyblok-pages';
import { getGlobalSettings } from '@/lib/storyblok/settings';

const Pages = ({ story: initialStory }) => {
  const story = useStoryblokState(initialStory, {
    resolveRelations: relationsToResolve,
  });

  return <StoryblokComponent blok={story.content} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const story = await getSbStory({ context });

    return {
      props: {
        story,
        preview: context.preview || false,
        seo: await getSeoFromStory({ story, locale: context?.locale }),
        settings: await getGlobalSettings({ locale: context?.locale }),
        locale: context?.locale,
      },
      revalidate: 3600,
    };
  } catch (e) {
    console.error(e);
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = await getSbPaths({ locales });
  return {
    paths,
    fallback: 'blocking',
  };
};

export default Pages;
