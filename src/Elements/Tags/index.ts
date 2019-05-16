import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { Tag, TagAttribs, TagProps } from './Tag';
export { Tag, TagAttribs, TagProps } from './Tag';

export interface TagsProps extends ModifierProps {
	addons?: boolean;
}

export interface TagsAttribs {
}

export const Tags = ElementBuilder<TagsProps, TagsAttribs>('tags', {
	classes: (props) => ({
		[`has-addons`]: !!props.addons
	})
}) as (Component<TagsProps, TagsAttribs> & {
	Tag: Component<TagProps, TagAttribs>;
});

Tags.Tag = Tag;
