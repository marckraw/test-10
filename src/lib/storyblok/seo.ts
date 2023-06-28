import { getSbStory } from '@/lib/storyblok/storyblok-pages';

export const getSeoFromStory = async ({ story, locale }) => {
  try {
    const context = { params: { slug: ['settings'] }, locale };
    const settings = await getSbStory({ context, bypassSlugFilter: true });

    return (
      {
        defaultSeo: settings?.content?.seo_meta_fields,
        seo: removeEmpty(story?.content?.seo_meta_fields ?? {}),
        gtmId: settings?.content?.google_tag_manager ?? '',
      } ?? {}
    );
  } catch (e) {
    console.log({e});
    throw 'Error - Ensure you have a settings page in the language root or main root of storyblok space';
  }
};

const removeEmpty = (obj) => {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => !!v));
};
