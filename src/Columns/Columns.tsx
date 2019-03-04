import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { Directions } from '../Bulma';

type GapSize = 'gapless' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export interface ColumnsProps {
	centered?: Directions;
	gap?: GapSize;
	multiline?: boolean;
}

export default function Column(props: RenderableProps<ColumnsProps>) {
	const className = ClassNames('columns', {
		['is-centered']: props.centered === 'both' || props.centered === 'horizontal',
		['is-vcentered']: props.centered === 'both' || props.centered === 'vertical',
		[`is-${props.gap}`]: !!props.gap,
		['is-multiline']: !!props.multiline
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
