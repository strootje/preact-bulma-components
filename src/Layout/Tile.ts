import { RenderableProps } from 'preact';
import { NumberedSizes } from '../Bulma';
import { ElementBuilder } from '../ElementBuilder';
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

export interface TileAttribs {
}

export const Tile = ElementBuilder<(TileProps | TileChildProps), TileAttribs>('tile', {
	classes: (props: RenderableProps<(TileProps | TileChildProps)>) => ({
		[`is-${props.size}`]: !!props.size,
		[`is-${props.type}`]: !!props.type,
		[`is-vertical`]: !!props.vertical,
		[`${props.class}`]: !!props.class
	})
});
