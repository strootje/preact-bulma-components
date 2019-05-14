import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface MenuLabelProps extends ModifierProps {
}

export const MenuLabel = BuildElement<MenuLabelProps>('menu-label', {
	render: 'p'
});
