import BuildElement from '../BuildElement';
import { ModifierProps } from '../Modifiers';

export interface FieldProps extends ModifierProps {
}

export const Field = BuildElement<FieldProps>('field');
