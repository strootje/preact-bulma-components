import { ElementBuilder } from "../ElementBuilder";
import { ModifierProps } from "../Modifiers";

export interface ColumnsProps extends ModifierProps {
}

export const Columns = ElementBuilder<ColumnsProps>('columns');

// Aliases
export const Row = Columns;
