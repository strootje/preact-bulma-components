import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface TableHeaderProps extends ModifierProps {
}

export interface TableHeaderAttribs {
}

export const TableHeader = ElementBuilder<TableHeaderProps, TableHeaderAttribs>({
	render: 'thead'
});
