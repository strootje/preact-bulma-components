import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface MediaContentProps extends ModifierProps {
}

export interface MediaContentAttribs {
}

export const MediaContent = ElementBuilder<MediaContentProps, MediaContentAttribs>('media-content');
