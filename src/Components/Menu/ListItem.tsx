import { h } from 'preact';
import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface MenuListItemProps extends ModifierProps {
	active?: boolean;
	label: string;
}

export interface MenuListItemAttribs {
	href: string;
}

export const MenuListItem = ElementBuilder<MenuListItemProps, MenuListItemAttribs>({
	render: (className, attribs, { active, children, label }) => (
		// tslint:disable-next-line: react-a11y-anchors
		<li class={className}><a class={active ? 'is-active' : ''} {...attribs} >{label}</a>{children}</li>
	)
});
