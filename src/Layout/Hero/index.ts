import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { Colors } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';
import { HeroBody, HeroBodyProps } from './Body';
import { HeroFooter, HeroFooterProps } from './Footer';
import { HeroHeader, HeroHeaderProps } from './Header';
export { HeroBody, HeroBodyProps } from './Body';
export { HeroFooter, HeroFooterProps } from './Footer';
export { HeroHeader, HeroHeaderProps } from './Header';

type HeroSize = 'medium' | 'large' | 'fullheight' | 'fullheight-with-navbar';

export interface HeroProps extends ModifierProps {
	color?: Colors;
	size?: HeroSize;
	bold?: boolean;
}

export const Hero = BuildElement<HeroProps>('hero', {
	addClasses: (props) => ({
		[`is-${props.color}`]: !!props.color,
		[`is-${props.size}`]: !!props.size,
		[`is-bold`]: !!props.bold
	})
}) as (FunctionalComponent<RenderableProps<HeroProps>> & {
	Body: FunctionalComponent<RenderableProps<HeroBodyProps>>;
	Footer: FunctionalComponent<RenderableProps<HeroFooterProps>>;
	Header: FunctionalComponent<RenderableProps<HeroHeaderProps>>;
});

Hero.Body = HeroBody;
Hero.Footer = HeroFooter;
Hero.Header = HeroHeader;
