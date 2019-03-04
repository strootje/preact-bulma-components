import { h, RenderableProps } from 'preact';
import { AddNavbarItemClasses, NavbarItemProps } from './Item';

interface NavbarLinkItemProps extends NavbarItemProps {
	href?: string;
}

export default function NavbarLinkItem(props: RenderableProps<NavbarLinkItemProps>) {
	const className = AddNavbarItemClasses(props);

	return (
		<a class={className} href={props.href}>
			{props.children}
		</a>
	);
}
