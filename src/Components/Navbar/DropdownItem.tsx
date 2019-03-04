import { h, RenderableProps } from 'preact';
import { CssBaseClasses, NavbarItemProps } from './Item';

interface NavbarDropdownItemProps extends NavbarItemProps {
	label: string | JSX.Element;
	hoverable?: boolean;
	active?: boolean;
}

export default function NavbarDropdownItem(props: RenderableProps<NavbarDropdownItemProps>) {
	const className = CssBaseClasses(props, {
		['has-dropdown']: true,
		['is-hoverable']: !!props.hoverable || !props.active,
		['is-active']: !!props.active
	});

	return (
		<div class={className}>
			<a class='navbar-link'>
				{props.label}
			</a>

			<div class='navbar-dropdown'>
				{props.children}
			</div>
		</div>
	);
}
