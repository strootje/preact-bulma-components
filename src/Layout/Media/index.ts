import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import { MediaContent, MediaContentProps } from './Content';
import { MediaLeft, MediaLeftProps } from './Left';
import { MediaRight, MediaRightProps } from './Right';
export { MediaContent, MediaContentProps } from './Content';
export { MediaLeft, MediaLeftProps } from './Left';
export { MediaRight, MediaRightProps } from './Right';

export interface MediaProps extends ModifierProps {
}

export const Media = BuildElement('media') as (FunctionalComponent<RenderableProps<MediaProps>> & {
	Content: FunctionalComponent<RenderableProps<MediaContentProps>>;
	Left: FunctionalComponent<RenderableProps<MediaLeftProps>>;
	Right: FunctionalComponent<RenderableProps<MediaRightProps>>;
});

Media.Content = MediaContent;
Media.Left = MediaLeft;
Media.Right = MediaRight;
