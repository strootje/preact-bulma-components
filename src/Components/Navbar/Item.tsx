import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';
import { AddModifierClasses, ModifierProps } from '../../Modifiers';

export interface NavbarItemProps extends ModifierProps {
	expanded?: boolean;
	tab?: boolean;
}

export function AddNavbarItemClasses(props: NavbarItemProps, classesToAdd?: { [_: string]: boolean }): string {
	return ClassNames('navbar-item', {
		...AddModifierClasses(props),
		['is-expanded']: !!props.expanded,
		['is-tab']: !!props.tab,
		...classesToAdd
	});
}

export default function NavbarItem(props: RenderableProps<NavbarItemProps>) {
	const className = AddNavbarItemClasses(props);

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
