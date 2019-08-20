import { Colors, OtherSizes } from '../../Bulma';
import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface TagProps extends ModifierProps {
	size?: OtherSizes;
	color?: Colors;
	delete?: boolean;
	rounded?: boolean;
}

export interface TagAttribs {
}

export const Tag = ElementBuilder<TagProps, TagAttribs>('tag', {
	classes: (props) => ({
		[`is-${props.size}`]: !!props.size,
		[`is-${props.color}`]: !!props.color,
		[`is-delete`]: !!props.delete,
		[`is-rounded`]: !!props.rounded
	}),

	render: 'span'
});
