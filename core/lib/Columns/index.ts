import { ElementBuilder } from "../ElementBuilder";
import { ModifierProps } from "../Modifiers";
import { PropBuilder } from "../PropBuilder";
import { BreakpointsThisAndLarger, WithBreakpoints } from "../Types/Bulma";
import { ListOfClasses } from "../Types/Preact";

export type CenteredPropValues = 'horizontal' | 'vertical' | 'both';
export type GapPropValues = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
export type GapWithNogapPropValues = 'gapless' | GapPropValues;

export interface ColumnsProps extends ModifierProps {
	multiline?: boolean;
	centered?: boolean | CenteredPropValues;
	gap?: GapWithNogapPropValues | WithBreakpoints<GapPropValues, BreakpointsThisAndLarger>;
}

export const Columns = ElementBuilder<ColumnsProps>('columns', {
	classes: props => ({
		...PropBuilder(props.multiline, 'is-multiline'),
		...CenteredPropBuilder(props.centered),
		...GapPropBuilder(props.gap)
	})
});;

// Aliases
export const Row = Columns;

const CenteredPropBuilder = (prop?: boolean | CenteredPropValues): ListOfClasses => {
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

const GapPropBuilder = (prop?: GapWithNogapPropValues | WithBreakpoints<GapPropValues, BreakpointsThisAndLarger>): ListOfClasses => {
	if (!prop) {
		return {};
	}

	const classes: ListOfClasses = {
		'is-variable': true,
		...PropBuilder(prop)
	};

	return classes;
};
