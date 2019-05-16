import { Directions } from '../Bulma';
import { Component, ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';
import { Column, ColumnAttribs, ColumnProps } from './Column';
export { Column, ColumnAttribs, ColumnProps } from './Column';

type GapSize = 'gapless' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export interface ColumnsProps extends ModifierProps {
	centered?: Directions;
	gap?: GapSize;
	multiline?: boolean;
}

export interface ColumnsAttribs {
}

export const Columns = ElementBuilder<ColumnsProps, ColumnsAttribs>('columns', {
	classes: (props) => ({
		['is-centered']: props.centered === 'both' || props.centered === 'horizontal',
		['is-vcentered']: props.centered === 'both' || props.centered === 'vertical',
		[`is-${props.gap}`]: !!props.gap,
		['is-multiline']: !!props.multiline
	})
}) as (Component<ColumnsProps, ColumnsAttribs> & {
	Column: Component<ColumnProps, ColumnAttribs>;
});

Columns.Column = Column;
