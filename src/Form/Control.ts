import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

export interface ControlProps extends ModifierProps {
	loading?: boolean;
}

export interface ControlAttribs {
}

export const Control = ElementBuilder<ControlProps, ControlAttribs>('control', {
	classes: (props) => ({
		[`is-loading`]: !!props.loading
	})
});
