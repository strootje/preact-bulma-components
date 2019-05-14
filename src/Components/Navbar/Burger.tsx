import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface NavbarBurgerProps extends ModifierProps {
	active?: boolean;
}

export const NavbarBurger = BuildElement<NavbarBurgerProps>('navbar-burger', {
	addAttributes: () => ({
		['role']: 'button',
		['aria-label']: 'menu',
		['aria-expanded']: 'false'
	}),

	addClasses: (props) => ({
		['is-active']: !!props.active
	}),

	render: (className, attribs) => (
		<a class={className} {...attribs}>
			<span aria-hidden></span>
			<span aria-hidden></span>
			<span aria-hidden></span>
		</a>
	)
});
