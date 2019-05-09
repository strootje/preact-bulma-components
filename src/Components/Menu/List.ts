import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface MenuListProps extends ModifierProps {
}

export default BuildElement<MenuListProps>('menu-list', {
	render: 'ul'
});
