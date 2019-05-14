import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import { TableBody, TableBodyProps } from './Body';
import { TableColumn, TableColumnProps } from './Column';
import { TableFooter, TableFooterProps } from './Footer';
import { TableHeader, TableHeaderProps } from './Header';
import { TableRow, TableRowProps } from './Row';
export { TableBody, TableBodyProps } from './Body';
export { TableColumn, TableColumnProps } from './Column';
export { TableFooter, TableFooterProps } from './Footer';
export { TableHeader, TableHeaderProps } from './Header';
export { TableRow, TableRowProps } from './Row';

export interface TableProps extends ModifierProps {
	bordered?: boolean;
	striped?: boolean;
	narrow?: boolean;
	hoverable?: boolean;
	fullwidth?: boolean;
}

export const Table = BuildElement<TableProps>('table', {
	addClasses: (props) => ({
		[`is-bordered`]: !!props.bordered,
		[`is-striped`]: !!props.striped,
		[`is-narrow`]: !!props.narrow,
		[`is-hoverable`]: !!props.hoverable,
		[`is-fullwidth`]: !!props.fullwidth
	}),
	render: 'table'
}) as (FunctionalComponent<RenderableProps<TableProps>> & {
	Body: FunctionalComponent<RenderableProps<TableBodyProps>>;
	Column: FunctionalComponent<RenderableProps<TableColumnProps>>;
	Footer: FunctionalComponent<RenderableProps<TableFooterProps>>;
	Header: FunctionalComponent<RenderableProps<TableHeaderProps>>;
	Row: FunctionalComponent<RenderableProps<TableRowProps>>;
});

Table.Body = TableBody;
Table.Column = TableColumn;
Table.Footer = TableFooter;
Table.Header = TableHeader;
Table.Row = TableRow;
