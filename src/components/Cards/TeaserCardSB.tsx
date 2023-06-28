import { TeaserCardSB as BpTeaserCardSB } from '@ef-global/backpack/TeaserCardSB';
import { default as NextLink } from 'next/link';
import { Link } from '@ef-global/backpack/Link';

export const TeaserCardSB = (props) => {
  return (
    <BpTeaserCardSB
      {...props}
      renderCustomLink={(props) => {
        return (
          <NextLink passHref legacyBehavior href={props.href ?? ''}>
            <Link {...props} />
          </NextLink>
        );
      }}
    />
  );
};
