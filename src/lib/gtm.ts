export const GTM_TRACKING_ID = process.env.NEXT_PUBLIC_GTM_ID ?? '';

type WindowWithDataLayer = Window & {
  dataLayer?: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const pageview = (url) => {
  window.dataLayer?.push({
    event: 'pageview',
    page: url,
  });
}; 