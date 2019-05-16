import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { TableBody, TableBodyAttribs, TableBodyProps } from './Body';
import { TableColumn, TableColumnAttribs, TableColumnProps } from './Column';
import { TableFooter, TableFooterAttribs, TableFooterProps } from './Footer';
import { TableHeader, TableHeaderAttribs, TableHeaderProps } from './Header';
import { TableRow, TableRowAttribs, TableRowProps } from './Row';
export { TableBody, TableBodyAttribs, TableBodyProps } from './Body';
export { TableColumn, TableColumnAttribs, TableColumnProps } from './Column';
export { TableFooter, TableFooterAttribs, TableFooterProps } from './Footer';
export { TableHeader, TableHeaderAttribs, TableHeaderProps } from './Header';
export { TableRow, TableRowAttribs, TableRowProps } from './Row';

export interface TableProps extends ModifierProps {
	bordered?: boolean;
	striped?: boolean;
	narrow?: boolean;
	hoverable?: boolean;
	fullwidth?: boolean;
}

export interface TableAttribs {
}

export const Table = ElementBuilder<TableProps, TableAttribs>('table', {
	classes: (props) => ({
		[`is-bordered`]: !!props.bordered,
		[`is-striped`]: !!props.striped,
		[`is-narrow`]: !!props.narrow,
		[`is-hoverable`]: !!props.hoverable,
		[`is-fullwidth`]: !!props.fullwidth
	}),

	render: 'table'
}) as (Component<TableProps, TableAttribs> & {
	Body: Component<TableBodyProps, TableBodyAttribs>;
	Column: Component<TableColumnProps, TableColumnAttribs>;
	Footer: Component<TableFooterProps, TableFooterAttribs>;
	Header: Component<TableHeaderProps, TableHeaderAttribs>;
	Row: Component<TableRowProps, TableRowAttribs>;
});

Table.Body = TableBody;
Table.Column = TableColumn;
Table.Footer = TableFooter;
Table.Header = TableHeader;
Table.Row = TableRow;
