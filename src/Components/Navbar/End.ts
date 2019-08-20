import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface NavbarEndProps extends ModifierProps {
}

export interface NavbarEndAttribs {
}

export const NavbarEnd = ElementBuilder<NavbarEndProps, NavbarEndAttribs>('navbar-end');
