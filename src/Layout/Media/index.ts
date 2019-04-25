import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import MediaContent from './Content';
import MediaLeft from './Left';
import MediaRight from './Right';

interface MediaProps extends ModifierProps {
}

const Media = BuildElement('media') as (FunctionalComponent<RenderableProps<MediaProps>> & {
	[_ in 'Content' | 'Left' | 'Right']: FunctionalComponent<any>;
});

// Set subitems within main item
export default Media;
Media.Content = MediaContent;
Media.Left = MediaLeft;
Media.Right = MediaRight;
