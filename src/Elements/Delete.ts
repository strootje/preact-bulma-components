import { OtherSizes } from '../Bulma';
import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

export interface DeleteProps extends ModifierProps {
	size?: OtherSizes;
}

export interface DeleteAttribs {
}

export const Delete = ElementBuilder<DeleteProps, DeleteAttribs>('delete', {
	classes: (props) => ({
		[`is-${props.size}`]: !!props.size
	}),

	render: 'a'
});
