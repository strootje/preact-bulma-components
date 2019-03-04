import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddBreakpointClasses, Sizes, WithBreakpoints } from '../Bulma';
import { AddModifierClasses, ModifierProps } from '../Modifiers';

type ColumnSize = 'full' | Sizes;
type ColumnSizes = WithBreakpoints<ColumnSize>;

type ColumnOffset = Sizes;
type ColumnOffsets = WithBreakpoints<ColumnOffset>;

type ColumnNarrow = boolean;
type ColumnNarrows = WithBreakpoints<ColumnNarrow>;

interface ColumnProps extends ModifierProps {
	size?: ColumnSize | ColumnSizes;
	offset?: ColumnOffset | ColumnOffsets;
	narrow?: ColumnNarrow | ColumnNarrows;
}

export default function Column(props: RenderableProps<ColumnProps>) {
	const className = ClassNames('column', {
		...AddModifierClasses(props),
		...AddBreakpointClasses(props.size),
		...AddBreakpointClasses(props.offset, 'is-offset'),
		...AddBreakpointClasses(props.narrow, (k, _) => `is-narrow${k !== 'fallback' ? `-${k}` : ''}`)
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
