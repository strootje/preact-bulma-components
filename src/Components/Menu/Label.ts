import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface MenuLabelProps extends ModifierProps {
}

export default BuildElement<MenuLabelProps>('menu-label', {
	render: 'p'
});
