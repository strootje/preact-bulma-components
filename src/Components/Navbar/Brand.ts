import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface NavbarBrandProps extends ModifierProps {
}

export interface NavbarBrandAttribs {
}

export const NavbarBrand = ElementBuilder<NavbarBrandProps, NavbarBrandAttribs>('navbar-brand');
