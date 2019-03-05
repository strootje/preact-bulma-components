import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../Modifiers';

interface SectionProps extends ModifierProps {
}

export default function Section(props: RenderableProps<SectionProps>) {
	const className = ClassNames('section', {
		...AddModifierClasses(props)
	});

	return (
		<section class={className}>
			{props.children}
		</section>
	);
}
