import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { Colors } from '../../Bulma';
import NavbarBrand from './Brand';
import NavbarBurger from './Burger';
import NavbarDropdownItem from './DropdownItem';
import NavbarEnd from './End';
import NavbarItem from './Item';
import NavbarLinkItem from './LinkItem';
import NavbarMenu from './Menu';
import NavbarStart from './Start';

interface NavbarProps {
	'aria-label'?: string;
	role?: string;
	color?: Colors;
	transparent?: boolean;
	fixed?: 'top' | 'bottom';
}

const defaults: NavbarProps = {
	'aria-label': 'main navigation',
	'role': 'navigation'
};

export default function Navbar(props: RenderableProps<NavbarProps>): JSX.Element {
	props = { ...defaults, ...props };

	const className = ClassNames('navbar', {
		[`is-${props.color}`]: !!props.color,
		['is-transparent']: !!props.transparent,
		[`is-fixed-${props.fixed}`]: !!props.fixed
	});

	return (
		<nav class={className} role={props.role} aria-label={props['aria-label']}>
			{props.children}
		</nav>
	);
}

// Set subitems within main item
Navbar.Brand = NavbarBrand;
Navbar.Burger = NavbarBurger;
Navbar.Dropdown = NavbarDropdownItem;
Navbar.End = NavbarEnd;
Navbar.Item = NavbarItem;
Navbar.LinkItem = NavbarLinkItem;
Navbar.Menu = NavbarMenu;
Navbar.Start = NavbarStart;
Navbar.End = NavbarEnd;
