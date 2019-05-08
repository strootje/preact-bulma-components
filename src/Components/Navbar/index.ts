import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { Colors } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';
import NavbarBrand, { NavbarBrandProps } from './Brand';
import NavbarBurger, { NavbarBurgerProps } from './Burger';
import NavbarDropdownItem, { NavbarDropdownItemProps } from './DropdownItem';
import NavbarEnd, { NavbarEndProps } from './End';
import NavbarItem, { NavbarItemProps } from './Item';
import NavbarMenu, { NavbarMenuProps } from './Menu';
import NavbarStart, { NavbarStartProps } from './Start';

interface NavbarProps extends ModifierProps {
	'aria-label'?: string;
	role?: string;
	color?: Colors;
	transparent?: boolean;
	fixed?: 'top' | 'bottom';
}

const Navbar = BuildElement<NavbarProps>('navbar', {
	addAttributes: () => ({
		['aria-label']: 'main navigation',
		['role']: 'navigation'
	}),

	addClasses: (props) => ({
		[`is-${props.color}`]: !!props.color,
		['is-transparent']: !!props.transparent,
		[`is-fixed-${props.fixed}`]: !!props.fixed
	}),

	render: 'nav'
}) as (FunctionalComponent<RenderableProps<NavbarProps>> & {
	Brand: FunctionalComponent<RenderableProps<NavbarBrandProps>>;
	Burger: FunctionalComponent<RenderableProps<NavbarBurgerProps>>;
	Dropdown: FunctionalComponent<RenderableProps<NavbarDropdownItemProps>>;
	End: FunctionalComponent<RenderableProps<NavbarEndProps>>;
	Item: FunctionalComponent<RenderableProps<NavbarItemProps>>;
	Menu: FunctionalComponent<RenderableProps<NavbarMenuProps>>;
	Start: FunctionalComponent<RenderableProps<NavbarStartProps>>;
});

export default Navbar;
Navbar.Brand = NavbarBrand;
Navbar.Burger = NavbarBurger;
Navbar.Dropdown = NavbarDropdownItem;
Navbar.End = NavbarEnd;
Navbar.Item = NavbarItem;
Navbar.Menu = NavbarMenu;
Navbar.Start = NavbarStart;
