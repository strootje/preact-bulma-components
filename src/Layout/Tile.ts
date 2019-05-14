import { RenderableProps } from 'preact';
import BuildElement from '../BuildElement';
import { NumberedSizes } from '../Bulma';
import { ModifierProps } from '../Modifiers';

export interface TileBaseProps extends ModifierProps {
	size?: NumberedSizes;
	vertical?: boolean;
	class?: string;
}

export interface TileProps extends TileBaseProps {
	type?: 'ancestor' | 'parent';
}

export interface TileChildProps extends TileBaseProps {
	type: 'child';
	// TODO: fill with all available classes
	class: 'box' | string;
}

export const Tile = BuildElement<TileProps | TileChildProps>('tile', {
	addClasses: (props: RenderableProps<TileProps | TileChildProps>) => ({
		[`is-${props.size}`]: !!props.size,
		[`is-${props.type}`]: !!props.type,
		[`is-vertical`]: !!props.vertical,
		[`${props.class}`]: !!props.class
	})
});
