import { ElementBuilder } from '../../ElementBuilder';
import { ModifierAttribs, ModifierProps } from '../../Modifiers';
import { PropBuilder } from '../../PropBuilder';
import { Component } from '../../Types/Preact';

export type HeroSizePropValues = 'medium' | 'large' | 'fullheight' | 'fullheight-with-navbar';

export interface HeroProps extends ModifierProps {
	bold?: boolean;
	'hero-size'?: HeroSizePropValues;
}

export const Hero = (ElementBuilder<HeroProps, ModifierAttribs>('hero', {
	classes: props => ({
		...PropBuilder(props.bold, 'is-bold'),
		...PropBuilder(props['hero-size'])
	})
}) as Component<HeroProps, ModifierAttribs> & {

});
