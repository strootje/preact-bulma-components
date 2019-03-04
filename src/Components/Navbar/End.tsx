import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';

interface NavbarEndProps extends ModifierProps {
}

export default function NavbarEnd(props: RenderableProps<NavbarEndProps>) {
	const className = ClassNames('navbar-end', {
		...AddModifierClasses(props)
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
