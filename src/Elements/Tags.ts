import BuildElement from '../BuildElement';
import { ModifierProps } from '../Modifiers';

interface TagsProps extends ModifierProps {
	addons?: boolean;
}

// TODO: link single tag
export default BuildElement<TagsProps>('tags', {
	addClasses: (props: TagsProps) => ({
		[`has-addons`]: !!props.addons
	})
});
