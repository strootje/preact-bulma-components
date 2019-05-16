import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface MenuListProps extends ModifierProps {
}

export interface MenuListAttribs {
}

export const MenuList = ElementBuilder<MenuListProps, MenuListAttribs>('menu-list', {
	render: 'ul'
});
