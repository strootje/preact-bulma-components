import { ElementBuilder } from "../../ElementBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";

export interface MediaContentProps extends ModifierProps {
}

export const MediaContent = ElementBuilder<MediaContentProps, ModifierAttribs>('media-content');
