import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import { MenuLabel, MenuLabelProps } from './Label';
import { MenuList, MenuListProps } from './List';
import { MenuListItem, MenuListItemProps } from './ListItem';
export { MenuLabel, MenuLabelProps } from './Label';
export { MenuList, MenuListProps } from './List';
export { MenuListItem, MenuListItemProps } from './ListItem';

export interface MenuProps extends ModifierProps {
}

export const Menu = BuildElement<MenuProps>('menu', {
	render: 'aside'
}) as (FunctionalComponent<RenderableProps<MenuProps>> & {
	Label: FunctionalComponent<RenderableProps<MenuLabelProps>>;
	List: FunctionalComponent<RenderableProps<MenuListProps>>;
	ListItem: FunctionalComponent<RenderableProps<MenuListItemProps>>;
});

Menu.Label = MenuLabel;
Menu.List = MenuList;
Menu.ListItem = MenuListItem;
