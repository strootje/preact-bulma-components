import { ComponentBuilder } from "../../ComponentBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";

export interface MediaContentProps extends ModifierProps {
}

export const MediaContent = ComponentBuilder<MediaContentProps, ModifierAttribs>('media-content');
