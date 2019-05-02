import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import TableBody, { TableBodyProps } from './Body';
import TableColumn, { TableColumnProps } from './Column';
import TableFoot, { TableFootProps } from './Foot';
import TableHead, { TableHeadProps } from './Head';
import TableRow, { TableRowProps } from './Row';

interface TableProps extends ModifierProps {
	bordered?: boolean;
	striped?: boolean;
	narrow?: boolean;
	hoverable?: boolean;
	fullwidth?: boolean;
}

const Table = BuildElement<TableProps>('table', {
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
	Foot: FunctionalComponent<RenderableProps<TableFootProps>>;
	Head: FunctionalComponent<RenderableProps<TableHeadProps>>;
	Row: FunctionalComponent<RenderableProps<TableRowProps>>;
});

export default Table;
Table.Body = TableBody;
Table.Column = TableColumn;
Table.Foot = TableFoot;
Table.Head = TableHead;
Table.Row = TableRow;
