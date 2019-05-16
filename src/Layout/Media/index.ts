import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { MediaContent, MediaContentAttribs, MediaContentProps } from './Content';
import { MediaLeft, MediaLeftAttribs, MediaLeftProps } from './Left';
import { MediaRight, MediaRightAttribs, MediaRightProps } from './Right';
export { MediaContent, MediaContentAttribs, MediaContentProps } from './Content';
export { MediaLeft, MediaLeftAttribs, MediaLeftProps } from './Left';
export { MediaRight, MediaRightAttribs, MediaRightProps } from './Right';

export interface MediaProps extends ModifierProps {
}

export interface MediaAttribs {
}

export const Media = ElementBuilder<MediaProps, MediaAttribs>('media') as (Component<MediaProps, MediaAttribs> & {
	Content: Component<MediaContentProps, MediaContentAttribs>;
	Left: Component<MediaLeftProps, MediaLeftAttribs>;
	Right: Component<MediaRightProps, MediaRightAttribs>;
});

Media.Content = MediaContent;
Media.Left = MediaLeft;
Media.Right = MediaRight;
