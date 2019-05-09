import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';
import Label, { MenuLabelProps } from './Label';
import List, { MenuListProps } from './List';
import ListItem, { MenuListItemProps } from './ListItem';

export interface MenuProps extends ModifierProps {
}

const Menu = BuildElement<MenuProps>('menu', {
	render: 'aside'
}) as (FunctionalComponent<RenderableProps<MenuProps>> & {
	Label: FunctionalComponent<RenderableProps<MenuLabelProps>>;
	List: FunctionalComponent<RenderableProps<MenuListProps>>;
	ListItem: FunctionalComponent<RenderableProps<MenuListItemProps>>;
});

export default Menu;
Menu.Label = Label;
Menu.List = List;
Menu.ListItem = ListItem;
