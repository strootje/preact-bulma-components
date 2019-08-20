import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

export interface FieldProps extends ModifierProps {
}

export interface FieldAttribs {
}

export const Field = ElementBuilder<FieldProps, FieldAttribs>('field');
