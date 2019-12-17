import { AttrBuilder } from '../../AttrBuilder';
import { ComponentBuilder } from '../../ComponentBuilder';
import { ModifierAttribs, ModifierProps } from '../../Modifiers';
import { Component } from '../../Types/Preact';
import { HeroBody, HeroBodyProps } from './Body';
import { HeroFoot, HeroFootProps } from './Foot';
import { HeroHead, HeroHeadProps } from './Head';

export type HeroSizePropValues = 'medium' | 'large' | 'fullheight' | 'fullheight-with-navbar';

export interface HeroProps extends ModifierProps {
	bold?: boolean;
	'hero-size'?: HeroSizePropValues;
}

export const Hero = (ComponentBuilder<HeroProps, ModifierAttribs>('hero', {
	classes: props => ({
		...AttrBuilder<HeroProps, ModifierAttribs>(props, 'bold'),
		...AttrBuilder<HeroProps, ModifierAttribs>(props, 'hero-size')
	})
}) as Component<HeroProps, ModifierAttribs> & {
	Body: Component<HeroBodyProps, ModifierAttribs>;
	Foot: Component<HeroFootProps, ModifierAttribs>;
	Head: Component<HeroHeadProps, ModifierAttribs>;
});

Hero.Body = HeroBody;
Hero.Foot = HeroFoot;
Hero.Head = HeroHead;
