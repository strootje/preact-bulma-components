import { h } from 'preact';
import BuildElement from '../BuildElement';
import { ModifierProps } from '../Modifiers';

export interface ControlProps extends ModifierProps {
	checked?: boolean;
	disabled?: boolean;
}

export const Checkbox = BuildElement<ControlProps>('checkbox', {
	addAttributes: (props) => ({
		[`checked`]: !!props.checked,
		[`disabled`]: !!props.disabled
	}),

	render: (className, attribs, { checked, children, disabled }) => (
		<label class={className} disabled={disabled}>
			<input type='checkbox' {...attribs} aria-checked={!!checked} />
			{children}
		</label>
	)
});
