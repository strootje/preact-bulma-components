import { ElementBuilder } from "../../ElementBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";

export interface MediaRightProps extends ModifierProps {
}

export const MediaRight = ElementBuilder<MediaRightProps, ModifierAttribs>('media-right');
