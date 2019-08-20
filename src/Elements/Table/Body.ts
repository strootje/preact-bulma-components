import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface TableBodyProps extends ModifierProps {
}

export interface TableBodyAttribs {
}

export const TableBody = ElementBuilder<TableBodyProps, TableBodyAttribs>({
	render: 'tbody'
});
