import { Colors, ListOfAttributes, ListOfClasses, OtherSizes } from '../Bulma';
import { ModifierProps } from '../Modifiers';

type States = 'normal' | 'hover' | 'focus';

export interface InputBaseProps extends ModifierProps {
	color?: Colors;
	disabled?: boolean;
	rounded?: boolean;
	size?: OtherSizes;
	state?: States;
}

export const AddInputAttributes = (props: InputBaseProps): ListOfAttributes => ({
	[`disabled`]: !!props.disabled
});

export const AddInputClasses = (props: InputBaseProps): ListOfClasses => ({
	[`is-${props.color}`]: !!props.color,
	[`is-rounded`]: !!props.disabled,
	[`is-${props.size}`]: !!props.size,
	[`is-${props.state}`]: !!props.state
});
