import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';

interface NavbarMenuProps extends ModifierProps {
	active?: boolean;
}

export default function NavbarMenu(props: RenderableProps<NavbarMenuProps>) {
	const className = ClassNames('navbar-menu', {
		...AddModifierClasses(props),
		['is-active']: !!props.active
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
