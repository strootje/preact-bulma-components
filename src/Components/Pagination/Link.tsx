import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface PaginationLinkProps extends ModifierProps {
	children: number | string;
	current?: boolean;
}

export const PaginationLink = BuildElement<PaginationLinkProps>('pagination-link', {
	addAttributes: (props) => ({
		[`aria-label`]: `Goto page ${props.children}`
	}),

	addClasses: (props) => ({
		[`is-current`]: !!props.current
	}),

	render: (className, attribs, { children }) => (
		<li><a class={className} {...attribs}>{children}</a></li>
	)
});
