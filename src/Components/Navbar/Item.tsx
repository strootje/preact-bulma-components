import { h } from 'preact';
import { ListOfClasses } from '../../Bulma';
import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface NavbarItemProps extends ModifierProps {
	expanded?: boolean;
	tab?: boolean;
}

export interface NavbarItemAttribs {
	href?: string;
}

export function AddNavbarItemClasses(props: NavbarItemProps, classesToAdd?: ListOfClasses): ListOfClasses {
	return {
		['is-expanded']: !!props.expanded,
		['is-tab']: !!props.tab,
		...classesToAdd
	};
}

export const NavbarItem = ElementBuilder<NavbarItemProps, NavbarItemAttribs>('navbar-item', {
	attribs: (props) => ({
		[`href`]: props.href
	}),

	classes: AddNavbarItemClasses,

	render: (className, attribs, { children, href }) => (
		!!href ? <a class={className} {...attribs} href={href}>{children}</a> : <div class={className} {...attribs}>{children}</div>
	)
});
