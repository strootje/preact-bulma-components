import { AttrBuilder } from "../AttrBuilder";
import { ComponentBuilder } from "../ComponentBuilder";
import { ModifierProps } from "../Modifiers";
import { BreakpointsThisAndLarger, Sizes, WithBreakpoints } from "../Types/Bulma";

export interface ColumnProps extends ModifierProps {
	offset?: Sizes | WithBreakpoints<Sizes>;
	narrow?: boolean | BreakpointsThisAndLarger;
}

export const Column = ComponentBuilder<ColumnProps>('column', {
	classes: props => ({
		...AttrBuilder<ColumnProps>(props, 'offset', 'is-offset'),
		...AttrBuilder<ColumnProps>(props, 'narrow', 'is-narrow')
	})
});
