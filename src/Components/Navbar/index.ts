import { Colors } from '../../Bulma';
import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { NavbarBrand, NavbarBrandAttribs, NavbarBrandProps } from './Brand';
import { NavbarBurger, NavbarBurgerAttribs, NavbarBurgerProps } from './Burger';
import { NavbarDropdownItem, NavbarDropdownItemAttribs, NavbarDropdownItemProps } from './DropdownItem';
import { NavbarEnd, NavbarEndAttribs, NavbarEndProps } from './End';
import { NavbarItem, NavbarItemAttribs, NavbarItemProps } from './Item';
import { NavbarMenu, NavbarMenuAttribs, NavbarMenuProps } from './Menu';
import { NavbarStart, NavbarStartAttribs, NavbarStartProps } from './Start';
export { NavbarBrand, NavbarBrandAttribs, NavbarBrandProps } from './Brand';
export { NavbarBurger, NavbarBurgerAttribs, NavbarBurgerProps } from './Burger';
export { NavbarDropdownItem, NavbarDropdownItemAttribs, NavbarDropdownItemProps } from './DropdownItem';
export { NavbarEnd, NavbarEndAttribs, NavbarEndProps } from './End';
export { NavbarItem, NavbarItemAttribs, NavbarItemProps } from './Item';
export { NavbarMenu, NavbarMenuAttribs, NavbarMenuProps } from './Menu';
export { NavbarStart, NavbarStartAttribs, NavbarStartProps } from './Start';

export interface NavbarProps extends ModifierProps {
	color?: Colors;
	fixed?: 'top' | 'bottom';
	transparent?: boolean;
}

export interface NavbarAttribs {
	'aria-label'?: string;
	role?: string;
}

export const Navbar = ElementBuilder<NavbarProps, NavbarAttribs>('navbar', {
	attribs: () => ({
		'aria-label': 'main navigation',
		'role': 'navigation'
	}),

	classes: (props) => ({
		[`is-${props.color}`]: !!props.color,
		['is-transparent']: !!props.transparent,
		[`is-fixed-${props.fixed}`]: !!props.fixed
	}),

	render: 'nav'
}) as (Component<NavbarProps, NavbarAttribs> & {
	Brand: Component<NavbarBrandProps, NavbarBrandAttribs>;
	Burger: Component<NavbarBurgerProps, NavbarBurgerAttribs>;
	Dropdown: Component<NavbarDropdownItemProps, NavbarDropdownItemAttribs>;
	End: Component<NavbarEndProps, NavbarEndAttribs>;
	Item: Component<NavbarItemProps, NavbarItemAttribs>;
	Menu: Component<NavbarMenuProps, NavbarMenuAttribs>;
	Start: Component<NavbarStartProps, NavbarStartAttribs>;
});

Navbar.Brand = NavbarBrand;
Navbar.Burger = NavbarBurger;
Navbar.Dropdown = NavbarDropdownItem;
Navbar.End = NavbarEnd;
Navbar.Item = NavbarItem;
Navbar.Menu = NavbarMenu;
Navbar.Start = NavbarStart;
