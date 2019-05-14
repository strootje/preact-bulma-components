import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import { Tag, TagProps } from './Tag';
export { Tag, TagProps } from './Tag';

export interface TagsProps extends ModifierProps {
	addons?: boolean;
}

export const Tags = BuildElement<TagsProps>('tags', {
	addClasses: (props) => ({
		[`has-addons`]: !!props.addons
	})
}) as (FunctionalComponent<RenderableProps<TagsProps>> & {
	Tag: FunctionalComponent<RenderableProps<TagProps>>;
});

Tags.Tag = Tag;
