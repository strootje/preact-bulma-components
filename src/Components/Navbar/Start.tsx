import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';

interface NavbarStartProps extends ModifierProps {
}

export default function NavbarStart(props: RenderableProps<NavbarStartProps>) {
	const className = ClassNames('navbar-start', {
		...AddModifierClasses(props)
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
