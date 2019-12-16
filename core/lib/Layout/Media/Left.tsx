import ClassNames from 'classnames';
import { h } from 'preact';
import { ElementBuilder } from "../../ElementBuilder";
import { ModifierAttribs, ModifierProps } from "../../Modifiers";

export type IconSizePropValues = '128x128' | '96x96' | '64x64' | '48x48';

export interface MediaLeftProps extends ModifierProps {
	'icon-size'?: IconSizePropValues;
}

export const MediaLeft = ElementBuilder<MediaLeftProps, ModifierAttribs>('media-left', {
	render: (classes, { children, 'icon-size': iconSize }) => (
		<figure class={classes}>
			<p class={ClassNames({ image: true, [`is-64x64`]: !iconSize, [`is-${iconSize}`]: !!iconSize })}>{children}</p>
		</figure>
	)
});
