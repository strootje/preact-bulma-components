import { ElementBuilder } from "../ElementBuilder";
import { ModifierProps } from "../Modifiers";
import { PropBuilder } from "../PropBuilder";
import { BreakpointsThisAndLarger, Sizes, WithBreakpoints } from "../Types/Bulma";

export interface ColumnProps extends ModifierProps {
	offset?: Sizes | WithBreakpoints<Sizes>;
	narrow?: boolean | BreakpointsThisAndLarger;
}

export const Column = ElementBuilder<ColumnProps>('column', {
	classes: (props) => ({
		...PropBuilder(props.offset, 'is-offset'),
		...PropBuilder(props.narrow, 'is-narrow')
	})
});
