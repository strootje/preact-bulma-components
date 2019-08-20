import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface NavbarStartProps extends ModifierProps {
}

export interface NavbarStartAttribs {
}

export const NavbarStart = ElementBuilder<NavbarStartProps, NavbarStartAttribs>('navbar-start');
