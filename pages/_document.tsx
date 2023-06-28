import { Head, Html, Main, NextScript } from 'next/document';
import { GTM_TRACKING_ID } from '@/lib/gtm';
import { isProduction } from '@/helpers/environment';

const Document = () => {
  return (
    <Html>
      <Head />
      <body className='overwrite-status-overlay'>
        {isProduction && GTM_TRACKING_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_TRACKING_ID}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : null}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
