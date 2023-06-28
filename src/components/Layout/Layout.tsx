import type { CSSProperties } from 'react';
import React from 'react';
import styles from './_layout.module.scss';
import theme from './_theme.module.scss';
import clsx from 'clsx';
import SettingsContextProvider from '../../../context/SettingsContext';
import dynamic from 'next/dynamic';

const StatusOverlay = dynamic(() =>
  import('@/components/StatusOverlay/StatusOverlay').then(
    (mod) => mod.StatusOverlay
  )
);

const Layout = ({ children, settings, locale, preview }) => {
  let themeStyle = {};

  if (typeof window === 'undefined') {
    themeStyle = Object.entries(
      settings?.content?.theme?.selected ?? {}
    ).reduce((acc, [cssVariable, value]) => {
      return {
        ...acc,
        [cssVariable]: value,
      };
    }, {} as CSSProperties);
  }

  const classes = clsx(styles.layout, theme.theme);

  return (
    <SettingsContextProvider settings={settings}>
      <div className={classes} style={themeStyle}>
        <main>
          {preview ? <StatusOverlay /> : null}
          {children}
        </main>
      </div>
    </SettingsContextProvider>
  );
};

Layout.displayName = 'Layout';

export { Layout };
