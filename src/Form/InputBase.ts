import { Colors, ListOfAttributes, ListOfClasses, OtherSizes } from '../Bulma';
import { ModifierProps } from '../Modifiers';

type States = 'normal' | 'hover' | 'focus';

export interface InputBaseProps extends ModifierProps {
	color?: Colors;
	rounded?: boolean;
	size?: OtherSizes;
	state?: States;
}

export interface InputBaseAttribs {
	disabled?: boolean;
}

export const AddInputAttributes = (props: InputBaseAttribs): ListOfAttributes<InputBaseAttribs> => ({
	[`disabled`]: !!props.disabled
});

export const AddInputClasses = (props: InputBaseProps): ListOfClasses => ({
	[`is-${props.color}`]: !!props.color,
	[`is-rounded`]: !!props.rounded,
	[`is-${props.size}`]: !!props.size,
	[`is-${props.state}`]: !!props.state
});
