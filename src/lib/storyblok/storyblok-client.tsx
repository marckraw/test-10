import {
  storyblokInit as sbInit,
} from '@storyblok/js';
import { apiPlugin, storyblokInit as sBStoryblokInit } from '@storyblok/react';
import { allComponents } from '@/components/component-list';

let storyblokApiInstance;

export const storyblokInit = ({ preview = false }) => {
  const { storyblokApi } = sbInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
    bridge: preview,
  });

  // Initialise components here. Can't initialise myself without refactoring <StoryblokComponent>
  sBStoryblokInit({
    components: allComponents,
    bridge: false,
  });

  storyblokApiInstance = storyblokApi;
};

export const useStoryblokApi = () => {

  if (!storyblokApiInstance) {
    storyblokInit({});
  }

  return storyblokApiInstance;
};

export { useStoryblokApi as getStoryblokApi };