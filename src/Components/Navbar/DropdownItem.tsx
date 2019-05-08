import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { AddNavbarItemClasses, NavbarItemProps } from './Item';

export interface NavbarDropdownItemProps extends NavbarItemProps {
	label: string | JSX.Element;
	hoverable?: boolean;
	active?: boolean;
}

export default BuildElement<NavbarDropdownItemProps>('navbar-item', {
	addAttributes: (props) => ({
		['label']: props.label
	}),

	addClasses: (props) => AddNavbarItemClasses(props, {
		['has-dropdown']: true,
		['is-hoverable']: !!props.hoverable || !props.active,
		['is-active']: !!props.active
	}),

	render: (className, { label }, { children }) => (
		<div class={className}>
			<a class='navbar-link'>
				{label}
			</a>

			<div class='navbar-dropdown'>
				{children}
			</div>
		</div>
	)
});
