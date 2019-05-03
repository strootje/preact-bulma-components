import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import MediaContent, { MediaContentProps } from './Content';
import MediaLeft, { MediaLeftProps } from './Left';
import MediaRight, { MediaRightProps } from './Right';

interface MediaProps extends ModifierProps {
}

const Media = BuildElement('media') as (FunctionalComponent<RenderableProps<MediaProps>> & {
	Content: FunctionalComponent<RenderableProps<MediaContentProps>>;
	Left: FunctionalComponent<RenderableProps<MediaLeftProps>>;
	Right: FunctionalComponent<RenderableProps<MediaRightProps>>;
});

// Set subitems within main item
export default Media;
Media.Content = MediaContent;
Media.Left = MediaLeft;
Media.Right = MediaRight;
