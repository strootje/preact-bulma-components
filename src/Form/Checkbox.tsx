import { h } from 'preact';
import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

export interface ControlProps extends ModifierProps {
}

export interface ControlAttribs {
	checked?: boolean;
	disabled?: boolean;
}

export const Checkbox = ElementBuilder<ControlProps, ControlAttribs>('checkbox', {
	attribs: (props) => ({
		['checked']: !!props.checked,
		['disabled']: !!props.disabled
	}),

	render: (className, attribs, { checked, children, disabled }) => (
		<label class={className} disabled={disabled}>
			<input type='checkbox' {...attribs} aria-checked={!!checked} />
			{children}
		</label>
	)
});
