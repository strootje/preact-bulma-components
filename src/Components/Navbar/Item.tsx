import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';

export interface NavbarItemProps {
	expanded?: boolean;
	tab?: boolean;
}

export function CssBaseClasses(props: NavbarItemProps, classesToAdd?: { [_: string]: boolean }): string {
	return ClassNames('navbar-item', {
		['is-expanded']: !!props.expanded,
		['is-tab']: !!props.tab,
		...classesToAdd
	});
}

export default function NavbarItem(props: RenderableProps<NavbarItemProps>) {
	const className = CssBaseClasses(props);

	return (
		<div class={className}>
			{props.children}
		</div>
	);
}
