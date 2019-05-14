import BuildElement from '../BuildElement';
import { OtherSizes } from '../Bulma';
import { ModifierProps } from '../Modifiers';

export interface DeleteProps extends ModifierProps {
	size?: OtherSizes;
}

export const Delete = BuildElement<DeleteProps>('delete', {
	addClasses: (props) => ({
		[`is-${props.size}`]: !!props.size
	}),

	render: 'a'
});
