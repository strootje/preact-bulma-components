import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface MediaLeftProps extends ModifierProps {
}

export interface MediaLeftAttribs {
}

export const MediaLeft = ElementBuilder<MediaLeftProps, MediaLeftAttribs>('media-left');
