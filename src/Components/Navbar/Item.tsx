import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { ListOfClasses } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';

export interface NavbarItemProps extends ModifierProps {
	expanded?: boolean;
	href?: string;
	tab?: boolean;
}

export function AddNavbarItemClasses(props: NavbarItemProps, classesToAdd?: ListOfClasses): ListOfClasses {
	return {
		['is-expanded']: !!props.expanded,
		['is-tab']: !!props.tab,
		...classesToAdd
	};
}

export const NavbarItem = BuildElement<NavbarItemProps>('navbar-item', {
	addAttributes: (props) => ({
		[`href`]: props.href
	}),

	addClasses: AddNavbarItemClasses,

	render: (className, attribs, { children, href }) => (
		!!href ? <a class={className} {...attribs}>{children}</a> : <div class={className} {...attribs}>{children}</div>
	)
});
