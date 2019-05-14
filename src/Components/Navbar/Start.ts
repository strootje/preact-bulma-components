import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface NavbarStartProps extends ModifierProps {
}

export const NavbarStart = BuildElement<NavbarStartProps>('navbar-start');
