import { h } from 'preact';
import { ElementBuilder } from '../../ElementBuilder';
import { AddNavbarItemClasses, NavbarItemProps } from './Item';

export interface NavbarDropdownItemProps extends NavbarItemProps {
	hoverable?: boolean;
	active?: boolean;
}

export interface NavbarDropdownItemAttribs {
	label?: string | JSX.Element;
}

export const NavbarDropdownItem = ElementBuilder<NavbarDropdownItemProps, NavbarDropdownItemAttribs>('navbar-item', {
	attribs: (props) => ({
		['label']: props.label
	}),

	classes: (props) => AddNavbarItemClasses(props, {
		['has-dropdown']: true,
		['is-hoverable']: !!props.hoverable || !props.active,
		['is-active']: !!props.active
	}),

	render: (className, { label }, { children }) => (
		<div class={className}>
			<a class='navbar-link'>
				{label}
			</a>

			<div class='navbar-dropdown'>
				{children}
			</div>
		</div>
	)
});
