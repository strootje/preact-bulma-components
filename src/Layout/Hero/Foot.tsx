import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';

interface HeroFootProps extends ModifierProps {
}

export default function HeroFoot(props: RenderableProps<HeroFootProps>) {
	const className = ClassNames('hero-foot', {
		...AddModifierClasses(props)
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
