import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface MenuListItemProps extends ModifierProps {
	active?: boolean;
	label: string;
}

export const MenuListItem = BuildElement<MenuListItemProps>('', {
	render: (className, attribs, { active, children, label }) => (
		<li class={className}><a class={active ? 'is-active' : ''} {...attribs}>{label}</a>{children}</li>
	)
});
