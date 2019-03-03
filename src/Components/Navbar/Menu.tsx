import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';

interface NavbarMenuProps {
	active?: boolean
}

const defaults: NavbarMenuProps = {
	active: false
};

export default function NavbarMenu(props: RenderableProps<NavbarMenuProps>) {
	props = { ...defaults, ...props };

	const className = ClassNames('navbar-menu', {
		['is-active']: !!props.active
	});

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
