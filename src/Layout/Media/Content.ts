import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface MediaContentProps extends ModifierProps {
}

export const MediaContent = BuildElement<MediaContentProps>('media-content');
