import { ComponentBuilder } from "../../ComponentBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";
import { Component } from "../../Types/Preact";
import { MediaContent, MediaContentProps } from "./Content";
import { MediaLeft, MediaLeftProps } from "./Left";
import { MediaRight, MediaRightProps } from "./Right";

export interface MediaProps extends ModifierProps {
}

export const Media = (ComponentBuilder<MediaProps, ModifierAttribs>('media', {
	render: 'article'
}) as Component<MediaProps, ModifierAttribs> & {
	Content: Component<MediaContentProps, ModifierAttribs>;
	Left: Component<MediaLeftProps, ModifierAttribs>;
	Right: Component<MediaRightProps, ModifierAttribs>;
});

Media.Content = MediaContent;
Media.Left = MediaLeft;
Media.Right = MediaRight;
