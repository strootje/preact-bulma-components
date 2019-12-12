import { ElementBuilder } from "../ElementBuilder";
import { ModifierProps } from "../Modifiers";

export interface ColumnProps extends ModifierProps {
}

export const Column = ElementBuilder<ColumnProps>('column');
