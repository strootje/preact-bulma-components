import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface MenuLabelProps extends ModifierProps {
}

export interface MenuLabelAttribs {
}

export const MenuLabel = ElementBuilder<MenuLabelProps, MenuLabelAttribs>('menu-label', {
	render: 'p'
});
