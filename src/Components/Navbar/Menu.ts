import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface NavbarMenuProps extends ModifierProps {
	active?: boolean;
}

export interface NavbarMenuAttribs {
}

export const NavbarMenu = ElementBuilder<NavbarMenuProps, NavbarMenuAttribs>('navbar-menu', {
	classes: (props) => ({
		['is-active']: !!props.active
	})
});
