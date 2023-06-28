import { EditorialCardSB as BpEditorialCardSB } from '@ef-global/backpack/EditorialCardSB';
import { default as NextLink } from 'next/link';
import { Link } from '@ef-global/backpack/Link';

export const EditorialCardSB = (props) => {
  return (
    <BpEditorialCardSB
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
