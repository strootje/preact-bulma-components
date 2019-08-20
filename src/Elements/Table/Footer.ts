import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface TableFooterProps extends ModifierProps {
}

export interface TableFooterAttribs {
}

export const TableFooter = ElementBuilder<TableFooterProps, TableFooterAttribs>({
	render: 'tfoot'
});
