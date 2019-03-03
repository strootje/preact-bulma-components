import ClassNames from 'classnames';
import { h, RenderableProps } from 'preact';

interface NavbarBurgerProps {
	active?: boolean
}

const defaults: NavbarBurgerProps = {
	active: false
};

export default function NavbarBurger(props: RenderableProps<NavbarBurgerProps>) {
	props = { ...defaults, ...props };

	const className = ClassNames('navbar-burger', {
		['is-active']: !!props.active
	});

	return (
		<a class={className} role='button' aria-label='menu' aria-expanded='false'>
			<span aria-hidden></span>
			<span aria-hidden></span>
			<span aria-hidden></span>
		</a>
	);
}
