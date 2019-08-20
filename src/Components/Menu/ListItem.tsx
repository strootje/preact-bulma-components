import { h } from 'preact';
import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface MenuListItemProps extends ModifierProps {
	active?: boolean;
	label: string;
}

export interface MenuListItemAttribs {
}

export const MenuListItem = ElementBuilder<MenuListItemProps, MenuListItemAttribs>({
	render: (className, attribs, { active, children, label }) => (
		<li class={className}><a class={active ? 'is-active' : ''} {...attribs}>{label}</a>{children}</li>
	)
});
