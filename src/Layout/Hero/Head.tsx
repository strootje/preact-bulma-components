import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';

interface HeroHeadProps extends ModifierProps {
}

export default function HeroHead(props: RenderableProps<HeroHeadProps>) {
	const className = ClassNames('hero-head', {
		...AddModifierClasses(props)
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
