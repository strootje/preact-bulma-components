import BuildElement from '../BuildElement';
import { AddInputAttributes, AddInputClasses, InputBaseProps } from './InputBase';

export interface TextareaProps extends InputBaseProps {
}

export const Textarea = BuildElement<TextareaProps>('textarea', {
	addAttributes: AddInputAttributes,
	addClasses: AddInputClasses,
	render: 'textarea'
});
