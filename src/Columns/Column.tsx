import ClassNames from 'classnames';
import { h, RenderableProps } from "preact";
import { Breakpoints, Sizes } from '../Bulma';

type BreakpointsWithFallback = 'fallback' | Breakpoints;

type ColumnSize = 'full' | Sizes;
type ColumnSizes = { [_ in BreakpointsWithFallback]?: ColumnSize };

type ColumnOffset = Sizes;
type ColumnOffsets = { [_ in BreakpointsWithFallback]?: ColumnOffset };

type ColumnNarrow = boolean;
type ColumnNarrows = { [_ in BreakpointsWithFallback]?: ColumnNarrow };

interface ColumnProps {
	size?: ColumnSize | ColumnSizes
	offset?: ColumnOffset | ColumnOffsets
	narrow?: ColumnNarrow | ColumnNarrows
}

export default function Column(props: RenderableProps<ColumnProps>) {
	let size: ColumnSizes;
	let offset: ColumnOffsets;
	let narrow: ColumnNarrows;

	if (typeof props.size === 'string') {
		size = { fallback: props.size };
	} else {
		size = props.size || {};
	}

	if (typeof props.offset === 'string') {
		offset = { fallback: props.offset };
	} else {
		offset = props.offset || {};
	}

	if (typeof props.narrow === 'boolean') {
		narrow = { fallback: props.narrow };
	} else {
		narrow = props.narrow || {};
	}

	const className = ClassNames('column', {
		...Object.keys(size).reduce((prev, cur: BreakpointsWithFallback) => ({ ...prev, [`is-${size[cur]}${cur !== 'fallback' ? `-${cur}` : ''}`]: true }), {}),
		...Object.keys(offset).reduce((prev, cur: BreakpointsWithFallback) => ({ ...prev, [`is-offset-${offset[cur]}${cur !== 'fallback' ? `-${cur}` : ''}`]: true }), {}),
		...Object.keys(narrow).reduce((prev, cur: BreakpointsWithFallback) => ({ ...prev, [`is-narrow${cur !== 'fallback' ? `-${cur}` : ''}`]: true }), {})
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
