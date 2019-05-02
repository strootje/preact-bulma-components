import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import Tag, { TagProps } from './Tag';

interface TagsProps extends ModifierProps {
	addons?: boolean;
}

const Tags = BuildElement<TagsProps>('tags', {
	addClasses: (props) => ({
		[`has-addons`]: !!props.addons
	})
}) as (FunctionalComponent<RenderableProps<TagsProps>> & {
	Tag: FunctionalComponent<RenderableProps<TagProps>>;
});

export default Tags;
Tags.Tag = Tag;
