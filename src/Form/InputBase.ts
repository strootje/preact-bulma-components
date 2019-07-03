import { Colors, InputStates, ListOfAttributes, ListOfClasses, OtherSizes } from '../Bulma';
import { ModifierProps } from '../Modifiers';

export interface InputBaseProps extends ModifierProps {
	color?: Colors;
	rounded?: boolean;
	size?: OtherSizes;
	state?: InputStates;
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
