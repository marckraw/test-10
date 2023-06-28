import { getSbStory } from '@/lib/storyblok/storyblok-pages';

export const getGlobalSettings = async ({ locale }) => {
  try {
    const context = { params: { slug: ['settings'] }, locale: locale };
    return await getSbStory({ context, bypassSlugFilter: true });

  } catch (e) {
    console.error({ e });
    throw 'Error - Ensure you have a settings page in the language root or main root of storyblok space';
  }
};

const removeEmpty = (obj) => {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => !!v));
};
