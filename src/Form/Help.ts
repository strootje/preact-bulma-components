import { Colors } from '../Bulma';
import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

export interface HelpProps extends ModifierProps {
	color?: Colors;
}

export interface HelpAttribs {
}

export const Help = ElementBuilder<HelpProps, HelpAttribs>('help', {
	classes: (props) => ({
		[`is-${props.color}`]: !!props.color
	}),

	render: 'p'
});
