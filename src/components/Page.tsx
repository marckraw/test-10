import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

const Page = (props) => {
  const { blok } = props;
  const { body, background_color } = blok;
  const bgStyle = {
    backgroundColor: background_color?.selected?.value,
  };
  return (
    <main {...storyblokEditable(blok)} style={bgStyle}>
      {body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export { Page };
