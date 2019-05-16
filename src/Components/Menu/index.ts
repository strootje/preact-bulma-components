import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { MenuLabel, MenuLabelAttribs, MenuLabelProps } from './Label';
import { MenuList, MenuListAttribs, MenuListProps } from './List';
import { MenuListItem, MenuListItemAttribs, MenuListItemProps } from './ListItem';
export { MenuLabel, MenuLabelAttribs, MenuLabelProps } from './Label';
export { MenuList, MenuListAttribs, MenuListProps } from './List';
export { MenuListItem, MenuListItemAttribs, MenuListItemProps } from './ListItem';

export interface MenuProps extends ModifierProps {
}

export interface MenuAttribs {
}

export const Menu = ElementBuilder<MenuProps, MenuAttribs>('menu', {
	render: 'aside'
}) as (Component<MenuProps, MenuAttribs> & {
	Label: Component<MenuLabelProps, MenuLabelAttribs>;
	List: Component<MenuListProps, MenuListAttribs>;
	ListItem: Component<MenuListItemProps, MenuListItemAttribs>;
});

Menu.Label = MenuLabel;
Menu.List = MenuList;
Menu.ListItem = MenuListItem;
