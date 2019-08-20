import { h } from 'preact';
import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface TableColumnProps extends ModifierProps {
	heading?: boolean;
}

export interface TableColumnAttribs {
}

export const TableColumn = ElementBuilder<TableColumnProps, TableColumnAttribs>({
	render: (className, attribs, { children, heading }) => (
		!!heading ? <th class={className} {...attribs}>{children}</th> : <td class={className} {...attribs}>{children}</td>
	)
});
