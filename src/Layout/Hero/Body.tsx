import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';

interface HeroBodyProps extends ModifierProps {
}

export default function HeroBody(props: RenderableProps<HeroBodyProps>) {
	const className = ClassNames('hero-body', {
		...AddModifierClasses(props)
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
