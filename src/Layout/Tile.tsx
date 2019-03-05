import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { NumberedSizes } from '../Bulma';
import { AddModifierClasses, ModifierProps } from '../Modifiers';

interface TileBaseProps extends ModifierProps {
	size?: NumberedSizes;
	vertical?: boolean;
	class?: string;
}

interface TileProps extends TileBaseProps {
	type?: 'ancestor' | 'parent';
}

interface TileChildProps extends TileBaseProps {
	type: 'child';
	// TODO: fill with all available classes
	class: 'box' | string;
}

export default function Tile(props: RenderableProps<TileProps> | RenderableProps<TileChildProps>) {
	const className = ClassNames('tile', {
		...AddModifierClasses(props),
		[`is-${props.size}`]: !!props.size,
		[`is-${props.type}`]: !!props.type,
		[`is-vertical`]: !!props.vertical,
		[`${props.class}`]: !!props.class
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
