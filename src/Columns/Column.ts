import { AddBreakpointClasses, Sizes, WithBreakpoints } from '../Bulma';
import { ElementBuilder } from '../ElementBuilder';
import { ModifierProps } from '../Modifiers';

type ColumnSize = 'full' | Sizes;
type ColumnSizes = WithBreakpoints<ColumnSize>;

type ColumnOffset = Sizes;
type ColumnOffsets = WithBreakpoints<ColumnOffset>;

type ColumnNarrow = boolean;
type ColumnNarrows = WithBreakpoints<ColumnNarrow>;

export interface ColumnProps extends ModifierProps {
	size?: ColumnSize | ColumnSizes;
	offset?: ColumnOffset | ColumnOffsets;
	narrow?: ColumnNarrow | ColumnNarrows;
}

export interface ColumnAttribs {
}

export const Column = ElementBuilder<ColumnProps, ColumnAttribs>('column', {
	classes: (props) => ({
		...AddBreakpointClasses(props.size),
		...AddBreakpointClasses(props.offset, 'is-offset'),
		...AddBreakpointClasses(props.narrow, (k, _) => `is-narrow${k !== 'fallback' ? `-${k}` : ''}`)
	})
});
