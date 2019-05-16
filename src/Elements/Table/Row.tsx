import { h } from 'preact';
import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface TableRowProps extends ModifierProps {
}

export interface TableRowAttribs {
}

export const TableRow = ElementBuilder<TableRowProps, TableRowAttribs>({
	render: (className, attribs, { children }) => (
		<tr class={className} {...attribs}>
			{children}
		</tr>
	)
});
