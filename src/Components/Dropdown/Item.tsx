import { h } from 'preact';
import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface DropdownItemProps extends ModifierProps {
}

export interface DropdownItemAttribs {
	href?: string;
}

export const DropdownItem = ElementBuilder<DropdownItemProps, DropdownItemAttribs>('dropdown-item', {
	attribs: (props) => ({
		[`href`]: props.href
	}),

	render: (className, attribs, { children, href }) => (
		!!href ? <a class={className} {...attribs}>{children}</a> : <div class={className} {...attribs}>{children}</div>
	)
});
