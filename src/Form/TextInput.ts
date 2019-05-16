import { ElementBuilder } from '../ElementBuilder';
import { AddInputAttributes, AddInputClasses, InputBaseAttribs, InputBaseProps } from './InputBase';

export interface TextInputProps extends InputBaseProps {
}

export interface TextInputAttribs extends InputBaseAttribs {
	type?: 'text' | 'password' | 'email' | 'tel';
}

export const TextInput = ElementBuilder<TextInputProps, TextInputAttribs>('input', {
	attribs: (props) => ({
		...AddInputAttributes(props),
		['type']: props.type
	}),

	classes: AddInputClasses,

	render: 'input'
});
