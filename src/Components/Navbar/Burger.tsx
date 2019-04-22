import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

interface NavbarBurgerProps extends ModifierProps {
	active?: boolean;
}

export default BuildElement<NavbarBurgerProps>('navbar-burger', {
	addAttributes: () => ({
		['role']: 'button',
		['aria-label']: 'menu',
		['aria-expanded']: 'false'
	}),

	addClasses: (props) => ({
		['is-active']: !!props.active
	}),

	render: (className, attr) => (
		<a class={className} {...attr}>
			<span aria-hidden></span>
			<span aria-hidden></span>
			<span aria-hidden></span>
		</a>
	)
});
