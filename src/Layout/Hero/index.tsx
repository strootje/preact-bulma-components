import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { Colors } from '../../Bulma';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';
import HeroBody from './Body';
import HeroFoot from './Foot';
import HeroHead from './Head';

type HeroSize = 'medium' | 'large' | 'fullheight' | 'fullheight-with-navbar';

interface HeroProps extends ModifierProps {
	color?: Colors;
	size?: HeroSize;
	bold?: boolean;
}

export default function Hero(props: RenderableProps<HeroProps>) {
	const className = ClassNames('hero', {
		...AddModifierClasses(props),
		[`is-${props.color}`]: !!props.color,
		[`is-${props.size}`]: !!props.size,
		[`is-bold`]: !!props.bold
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}

// Set subitems within main item
Hero.Body = HeroBody;
Hero.Foot = HeroFoot;
Hero.Head = HeroHead;
