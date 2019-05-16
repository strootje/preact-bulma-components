import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

export interface BoxProps extends ModifierProps {
}

export interface BoxAttribs {
}

export const Box = ElementBuilder<BoxProps, BoxAttribs>('box');
