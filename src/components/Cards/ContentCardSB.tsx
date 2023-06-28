import { ContentCardSB as BpContentCardSB } from '@ef-global/backpack/ContentCardSB';
import { default as NextLink } from 'next/link';

export const ContentCardSB = (props) => {
  return (
    <BpContentCardSB
      {...props}
      renderCustomLink={(props) => {
        return (
          <NextLink passHref legacyBehavior href={props.href ?? ''}>
            <a {...props} />
          </NextLink>
        );
      }}
    />
  );
};
