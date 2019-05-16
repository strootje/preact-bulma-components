import { h } from 'preact';
import { Sides } from '../../Bulma';
import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { DropdownDivider, DropdownDividerAttribs, DropdownDividerProps } from './Divider';
import { DropdownItem, DropdownItemAttribs, DropdownItemProps } from './Item';
export { DropdownDivider, DropdownDividerAttribs, DropdownDividerProps } from './Divider';
export { DropdownItem, DropdownItemAttribs, DropdownItemProps } from './Item';

export interface DropdownProps extends ModifierProps {
	active?: boolean;
	align?: Sides;
	direction?: 'down' | 'up';
	hoverable?: boolean;
	label: string;
}

export interface DropdownAttribs {
}

export const Dropdown = ElementBuilder<DropdownProps, DropdownAttribs>('dropdown', {
	classes: (props) => ({
		[`is-active`]: !!props.active,
		[`is-hoverable`]: !!props.hoverable,
		[`is-up`]: !!props.direction && props.direction === 'up',
		[`is-${props.align}`]: !!props.align
	}),

	render: (className, attribs, { children, label }) => (
		<div class={className} {...attribs}>
			<div class='dropdown-trigger'>
				<button class='button' aria-haspopup='true' aria-controls='dropdown-menu'>{label}</button>
			</div>

			<div class='dropdown-menu' id='dropdown-menu' role='menu'>
				<div class='dropdown-content'>
					{children}
				</div>
			</div>
		</div>
	)
}) as (Component<DropdownProps, DropdownAttribs> & {
	Divider: Component<DropdownDividerProps, DropdownDividerAttribs>;
	Item: Component<DropdownItemProps, DropdownItemAttribs>;
});

Dropdown.Divider = DropdownDivider;
Dropdown.Item = DropdownItem;
