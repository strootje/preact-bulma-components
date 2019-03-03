import { h, RenderableProps } from 'preact';

interface NavbarEndProps {
}

export default function NavbarEnd(props: RenderableProps<NavbarEndProps>) {
	return (
		<div class='navbar-end'>
			{props.children}
		</div>
	);
}
