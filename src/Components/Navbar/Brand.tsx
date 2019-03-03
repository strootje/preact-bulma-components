import { h, RenderableProps } from 'preact';

interface NavbarBrandProps {
}

export default function NavbarBrand(props: RenderableProps<NavbarBrandProps>) {
	return (
		<div class='navbar-brand'>
			{props.children}
		</div>
	);
}
