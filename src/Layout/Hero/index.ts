import { Colors } from '../../Bulma';
import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { HeroBody, HeroBodyAttribs, HeroBodyProps } from './Body';
import { HeroFooter, HeroFooterAttribs, HeroFooterProps } from './Footer';
import { HeroHeader, HeroHeaderAttribs, HeroHeaderProps } from './Header';
export { HeroBody, HeroBodyAttribs, HeroBodyProps } from './Body';
export { HeroFooter, HeroFooterAttribs, HeroFooterProps } from './Footer';
export { HeroHeader, HeroHeaderAttribs, HeroHeaderProps } from './Header';

type HeroSize = 'medium' | 'large' | 'fullheight' | 'fullheight-with-navbar';

export interface HeroProps extends ModifierProps {
	color?: Colors;
	size?: HeroSize;
	bold?: boolean;
}

export interface HeroAttribs {
}

export const Hero = ElementBuilder<HeroProps, HeroAttribs>('hero', {
	classes: (props) => ({
		[`is-${props.color}`]: !!props.color,
		[`is-${props.size}`]: !!props.size,
		[`is-bold`]: !!props.bold
	})
}) as (Component<HeroProps, HeroAttribs> & {
	Body: Component<HeroBodyProps, HeroBodyAttribs>;
	Footer: Component<HeroFooterProps, HeroFooterAttribs>;
	Header: Component<HeroHeaderProps, HeroHeaderAttribs>;
});

Hero.Body = HeroBody;
Hero.Footer = HeroFooter;
Hero.Header = HeroHeader;
