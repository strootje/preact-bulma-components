import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface NavbarBrandProps extends ModifierProps {
}

export const NavbarBrand = BuildElement<NavbarBrandProps>('navbar-brand');
