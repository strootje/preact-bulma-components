import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../Modifiers';

interface FooterProps extends ModifierProps {
}

export default function Footer(props: RenderableProps<FooterProps>) {
	const className = ClassNames('footer', {
		...AddModifierClasses(props)
	});

	return (
		<footer class={className}>
			{props.children}
		</footer>
	);
}
