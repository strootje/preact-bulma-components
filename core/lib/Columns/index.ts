import { AttrBuilder } from '../AttrBuilder';
import { ComponentBuilder } from '../ComponentBuilder';
import { ModifierAttribs, ModifierProps } from '../Modifiers';
import { BreakpointsThisAndLarger, WithBreakpoints } from '../Types/Bulma';
import { Component, ListOfClasses, Props } from '../Types/Preact';
import { Column, ColumnProps } from './Column';

export type CenteredPropValues = 'horizontal' | 'vertical' | 'both';
export type GapPropValues = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
export type GapWithNogapPropValues = 'gapless' | GapPropValues;

export interface ColumnsProps extends ModifierProps {
	multiline?: boolean;
	centered?: boolean | CenteredPropValues;
	gap?: GapWithNogapPropValues | WithBreakpoints<GapPropValues, BreakpointsThisAndLarger>;
}

export const Columns = (ComponentBuilder<ColumnsProps>('columns', {
	classes: props => ({
		...AttrBuilder<ColumnsProps>(props, 'multiline'),
		...CenteredAttrBuilder(props.centered),
		...GapAttrBuilder(props)
	})
}) as Component<ColumnsProps, ModifierAttribs> & {
	Column: Component<ColumnProps, ModifierAttribs>;
});

Columns.Column = Column;

// Aliases
export const Row = Columns;

const CenteredAttrBuilder = (prop?: boolean | CenteredPropValues): ListOfClasses => {
	const classes: ListOfClasses = {};

	const isBoolAndTrue = (typeof prop === 'boolean') && !!prop;

	if (isBoolAndTrue || (prop === 'both' || prop === 'horizontal')) {
		classes[`is-centered`] = true;
	}

	if (!isBoolAndTrue && (prop === 'both' || prop === 'vertical')) {
		classes[`is-vcentered`] = true;
	}

	return classes;
};

const GapAttrBuilder = (props: Props<ColumnsProps, {}>): ListOfClasses => {
	if (!props.gap) {
		return {};
	}

	const classes: ListOfClasses = {
		'is-variable': true,
		...AttrBuilder<ColumnsProps>(props, 'gap')
	};

	return classes;
};
