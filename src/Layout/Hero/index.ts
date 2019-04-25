import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { Colors } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';
import HeroBody from './Body';
import HeroFoot from './Foot';
import HeroHead from './Head';

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
	[_ in 'Body' | 'Foot' | 'Head']: FunctionalComponent<any>;
});

// Set subitems within main item
export default Hero;
Hero.Body = HeroBody;
Hero.Foot = HeroFoot;
Hero.Head = HeroHead;
