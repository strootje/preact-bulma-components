import { ElementBuilder } from '../ElementBuilder';
import { AddInputAttributes, AddInputClasses, InputBaseAttribs, InputBaseProps } from './InputBase';

export interface TextareaProps extends InputBaseProps {
}

export interface TextareaAttribs extends InputBaseAttribs {
}

export const Textarea = ElementBuilder<TextareaProps, TextareaAttribs>('textarea', {
	attribs: AddInputAttributes,
	classes: AddInputClasses,
	render: 'textarea'
});
