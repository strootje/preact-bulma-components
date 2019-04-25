import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { Colors } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';
import NavbarBrand from './Brand';
import NavbarBurger from './Burger';
import NavbarDropdownItem from './DropdownItem';
import NavbarEnd from './End';
import NavbarItem from './Item';
import NavbarLinkItem from './LinkItem';
import NavbarMenu from './Menu';
import NavbarStart from './Start';

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
	[_ in 'Brand' | 'Burger' | 'Dropdown' | 'End' | 'Item' | 'LinkItem' | 'Menu' | 'Start']: FunctionalComponent<any>;
});

export default Navbar;
Navbar.Brand = NavbarBrand;
Navbar.Burger = NavbarBurger;
Navbar.Dropdown = NavbarDropdownItem;
Navbar.End = NavbarEnd;
Navbar.Item = NavbarItem;
Navbar.LinkItem = NavbarLinkItem;
Navbar.Menu = NavbarMenu;
Navbar.Start = NavbarStart;
