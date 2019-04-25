import { h } from 'preact';
import BuildElement from '../BuildElement';
import { ModifierProps } from '../Modifiers';

export interface TextInputProps extends ModifierProps {
	type?: 'text' | 'password' | 'email' | 'tel';
	multiline?: false;
	name?: string;
	placeholder?: string;
	icons?: { left: string, right: string };
}

export default BuildElement<TextInputProps>('input', {
	addAttributes: (props) => ({
		['type']: props.type || 'text',
		['placeholder']: props.placeholder
	}),

	render: (className, attribs) => {
		const InputComponent = () => (<input class={className} {...attribs} />);

		return (
			<div class='control'>
				<InputComponent />
			</div>
		);
	}
});
