import BuildElement from '../../BuildElement';
import { Colors, OtherSizes } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';

export interface TagProps extends ModifierProps {
	size?: OtherSizes;
	color?: Colors;
	delete?: boolean;
	rounded?: boolean;
}

export default BuildElement<TagProps>('tag', {
	addClasses: (props) => ({
		[`is-${props.size}`]: !!props.size,
		[`is-${props.color}`]: !!props.color,
		[`is-delete`]: !!props.delete,
		[`is-rounded`]: !!props.rounded
	}),

	render: 'span'
});
