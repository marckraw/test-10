import React, { useEffect } from 'react';
import '@ef-global/backpack/ef-global.css';
import '@/styles/globals.scss';
import { storyblokInit } from '@/lib/storyblok/storyblok-client';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { isProduction } from '@/helpers/environment';
import { EfCircularFont } from '@/helpers/font-loader';
import { useRouter } from 'next/router';
import { GTM_TRACKING_ID, pageview } from '@/lib/gtm';
import reportAccessibility from '@/lib/reportAccessibility';
import { DefaultSeo } from '@/components/Seo';
import { Layout } from '@/components/Layout/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  const { seo, locale, story, settings, preview } = pageProps;

  const router = useRouter();

  storyblokInit({ preview });

  useEffect(() => {
    if (!isProduction || !GTM_TRACKING_ID) {
      return;
    }
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);

  return (
    <>
      {isProduction && GTM_TRACKING_ID ? (
        <Script
          id='gtag-base'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_TRACKING_ID}')
          `,
          }}
        />
      ) : null}
      <style jsx global>{`
        html {
          font-family: ${EfCircularFont.style.fontFamily};
        }
      `}</style>
      <DefaultSeo story={story} seo={seo} locale={locale} />
      <Layout preview={preview} settings={settings} locale={locale}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

reportAccessibility(React).catch(console.error);

export default App;
