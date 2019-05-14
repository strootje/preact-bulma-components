import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface DropdownItemProps extends ModifierProps {
	href?: string;
}

export const DropdownItem = BuildElement<DropdownItemProps>('dropdown-item', {
	addAttributes: (props) => ({
		[`href`]: props.href
	}),

	render: (className, attribs, { children, href }) => (
		!!href ? <a class={className} {...attribs}>{children}</a> : <div class={className} {...attribs}>{children}</div>
	)
});
