import BuildElement from '../BuildElement';
import { ModifierProps } from '../Modifiers';

export interface BoxProps extends ModifierProps {
}

export const Box = BuildElement<BoxProps>('box');
