import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface TextInputProps extends ModifierProps {
	type: 'text';
	multiline: boolean;
}

export default BuildElement<TextInputProps>('input', {
	render: ({ type, multiline }) => {
		if (multiline) {
			return (
				<textarea></textarea>
			);
		} else {
			return (
				<input type={type} />
			);
		}
	}
});
