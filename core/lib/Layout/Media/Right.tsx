import { ComponentBuilder } from "../../ComponentBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";

export interface MediaRightProps extends ModifierProps {
}

export const MediaRight = ComponentBuilder<MediaRightProps, ModifierAttribs>('media-right');
