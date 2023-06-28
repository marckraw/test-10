import styles from './status-overlay.module.scss';
import { Button } from '@ef-global/backpack/Button';
import React, { useState } from 'react';
import { Text } from '@ef-global/backpack/Text';
import { IconClose, IconGrid, IconInfo } from '@ef-global/backpack-icons';
import {
  SbDesktopIcon,
  SbMobileIcon,
  SbTabletIcon,
} from '@/components/StatusOverlay/icons/sb-icons';
import { useBreakpoint } from '@ef-global/backpack/hooks';
import type {
  BreakpointNames,
  GridCol,
} from '@ef-global/backpack/additional-types';
import { Grid, Item } from '@ef-global/backpack/Grid';
import { EfCircularFont } from '@/helpers/font-loader';
import clsx from 'clsx';

enum HELP_GRID_VISIBILITY {
  SHOW = 'block',
  HIDE = 'none',
}

const STATUS_OVERLAY_STATE = {
  EXPANDED: true,
  FOLDED: false,
};

type BreakpointNameMap = Record<BreakpointNames, string>;
type BreakpointIconMap = Record<BreakpointNames, React.FC>;

const breakpointNameMap: BreakpointNameMap = {
  s: 'Mobile',
  m: 'Tablet',
  l: 'Desktop',
  xl: 'Desktop',
  xxl: 'Desktop',
};

const breakpointIconMap: BreakpointIconMap = {
  s: SbMobileIcon,
  m: SbTabletIcon,
  l: SbDesktopIcon,
  xl: SbDesktopIcon,
  xxl: SbDesktopIcon,
};

const StatusOverlay = () => {
  const { breakpoint } = useBreakpoint();

  const [isHelpGridVisible, setIsHelpGridVisible] = useState(
    HELP_GRID_VISIBILITY.HIDE
  );
  const [isStatusOverlayExpanded, setIsStatusOverlayExpanded] = useState(
    STATUS_OVERLAY_STATE.EXPANDED
  );

  const toggleHelpGrid = () => {
    if (isHelpGridVisible === HELP_GRID_VISIBILITY.SHOW) {
      setIsHelpGridVisible(HELP_GRID_VISIBILITY.HIDE);
    } else {
      setIsHelpGridVisible(HELP_GRID_VISIBILITY.SHOW);
    }
  };

  const toggleStatusOverlay = () => {
    if (isStatusOverlayExpanded === STATUS_OVERLAY_STATE.EXPANDED) {
      setIsStatusOverlayExpanded(STATUS_OVERLAY_STATE.FOLDED);
    } else {
      setIsStatusOverlayExpanded(STATUS_OVERLAY_STATE.EXPANDED);
    }
  };

  const BreakpointIcon = breakpointIconMap[breakpoint];
  const cols: GridCol[] = [
    'col-1',
    'col-2',
    'col-3',
    'col-4',
    'col-5',
    'col-6',
    'col-7',
    'col-8',
    'col-9',
    'col-10',
    'col-11',
    'col-12',
  ];

  return (
    <div
      className={clsx(EfCircularFont.className, styles.statusOverlayContainer)}
    >
      {isStatusOverlayExpanded === STATUS_OVERLAY_STATE.EXPANDED && (
        <>
          <div className={styles.colorBar} />
          <div className={styles.toggleIcon}>
            <Button
              as={'button'}
              size={'small'}
              shape={'round'}
              onClick={toggleStatusOverlay}
            >
              <IconClose />
            </Button>
          </div>
          <div className={styles.statusOverlay}>
            <div className={styles.breakpointIcon}>
              <BreakpointIcon />
            </div>
            <Text variant='uiLabelSmall' as={'span'} className={styles.bpText}>
              {breakpointNameMap[breakpoint]} - {breakpoint}
            </Text>
            <Button
              as='button'
              variant='link'
              size={'small'}
              onClick={toggleHelpGrid}
            >
              {isHelpGridVisible === HELP_GRID_VISIBILITY.SHOW
                ? 'hide grid'
                : 'show grid'}{' '}
              <IconGrid />
            </Button>
          </div>
        </>
      )}
      {isStatusOverlayExpanded === STATUS_OVERLAY_STATE.FOLDED && (
        <div className={styles.toggleIcon}>
          <Button
            as={'button'}
            size={'small'}
            shape={'round'}
            onClick={toggleStatusOverlay}
          >
            <IconInfo />
          </Button>
        </div>
      )}
      <div
        className={styles.helpGrid}
        style={{ display: `${isHelpGridVisible}` }}
      >
        <Grid className={styles.helpGridInner}>
          <Item
            column={{ s: ['offset-start', 'col-1-start'] }}
            className={styles.helperEdge}
          />
          {cols.map((item, i) => {
            return (
              <Item
                key={`item-${i}`}
                column={{ s: [`${item}-start`, `${item}-end`] }}
                className={styles.helperItem}
              />
            );
          })}
          <Item
            column={{ s: ['col-12-end', 'offset-end'] }}
            className={styles.helperEdge}
          />
        </Grid>
      </div>
    </div>
  );
};

export { StatusOverlay };
