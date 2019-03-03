import { h, RenderableProps } from 'preact';

interface NavbarStartProps {
}

export default function NavbarStart(props: RenderableProps<NavbarStartProps>) {
	return (
		<div class='navbar-start'>
			{props.children}
		</div>
	);
}
