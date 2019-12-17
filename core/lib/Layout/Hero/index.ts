import { ElementBuilder } from '../../ElementBuilder';
import { ModifierAttribs, ModifierProps } from '../../Modifiers';
import { PropBuilder } from '../../PropBuilder';
import { Component } from '../../Types/Preact';
import { HeroBody, HeroBodyProps } from './Body';
import { HeroFoot, HeroFootProps } from './Foot';
import { HeroHead, HeroHeadProps } from './Head';

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
	Body: Component<HeroBodyProps, ModifierAttribs>;
	Foot: Component<HeroFootProps, ModifierAttribs>;
	Head: Component<HeroHeadProps, ModifierAttribs>;
});

Hero.Body = HeroBody;
Hero.Foot = HeroFoot;
Hero.Head = HeroHead;
