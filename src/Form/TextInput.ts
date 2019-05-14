import BuildElement from '../BuildElement';
import { AddInputAttributes, AddInputClasses, InputBaseProps } from './InputBase';

export interface TextInputProps extends InputBaseProps {
	type?: 'text' | 'password' | 'email' | 'tel';
}

export default BuildElement<TextInputProps>('input', {
	addAttributes: (props) => ({
		...AddInputAttributes(props),
		[`type`]: props.type
	}),

	addClasses: AddInputClasses,

	render: 'input'
});
