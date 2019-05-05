import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { Colors } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';
import HeroBody, { HeroBodyProps } from './Body';
import HeroFoot, { HeroFootProps } from './Foot';
import HeroHead, { HeroHeadProps } from './Head';

type HeroSize = 'medium' | 'large' | 'fullheight' | 'fullheight-with-navbar';

interface HeroProps extends ModifierProps {
	color?: Colors;
	size?: HeroSize;
	bold?: boolean;
}

const Hero = BuildElement<HeroProps>('hero', {
	addClasses: (props) => ({
		[`is-${props.color}`]: !!props.color,
		[`is-${props.size}`]: !!props.size,
		[`is-bold`]: !!props.bold
	})
}) as (FunctionalComponent<RenderableProps<HeroProps>> & {
	Body: FunctionalComponent<RenderableProps<HeroBodyProps>>;
	Foot: FunctionalComponent<RenderableProps<HeroFootProps>>;
	Head: FunctionalComponent<RenderableProps<HeroHeadProps>>;
});

// Set subitems within main item
export default Hero;
Hero.Body = HeroBody;
Hero.Foot = HeroFoot;
Hero.Head = HeroHead;
