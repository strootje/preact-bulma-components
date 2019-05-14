import BuildElement from '../BuildElement';
import { AddInputAttributes, AddInputClasses, InputBaseProps } from './InputBase';

export interface TextInputProps extends InputBaseProps {
}

export default BuildElement<TextInputProps>('textarea', {
	addAttributes: AddInputAttributes,
	addClasses: AddInputClasses,
	render: 'textarea'
});
