import { h } from 'preact';
import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface NavbarBurgerProps extends ModifierProps {
	active?: boolean;
}

export interface NavbarBurgerAttribs {
	'aria-expanded'?: string;
	'aria-label'?: string;
	role?: string;
}

export const NavbarBurger = ElementBuilder<NavbarBurgerProps, NavbarBurgerAttribs>('navbar-burger', {
	attribs: () => ({
		'aria-expanded': 'false',
		'aria-label': 'menu',
		'role': 'button'
	}),

	classes: (props) => ({
		['is-active']: !!props.active
	}),

	render: (className, attribs) => (
		// tslint:disable-next-line: react-a11y-anchors
		<a class={className} {...attribs}>
			<span aria-hidden></span>
			<span aria-hidden></span>
			<span aria-hidden></span>
		</a>
	)
});
