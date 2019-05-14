import BuildElement from '../BuildElement';
import { Colors } from '../Bulma';
import { ModifierProps } from '../Modifiers';

export interface HelpProps extends ModifierProps {
	color?: Colors;
}

export const Help = BuildElement<HelpProps>('help', {
	addClasses: (props) => ({
		[`is-${props.color}`]: !!props.color
	}),

	render: 'p'
});
