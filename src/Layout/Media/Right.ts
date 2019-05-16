import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface MediaRightProps extends ModifierProps {
}

export interface MediaRightAttribs {
}

export const MediaRight = ElementBuilder<MediaRightProps, MediaRightAttribs>('media-right');
