import { h } from 'preact';
import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface PaginationLinkProps extends ModifierProps {
	children: number | string;
	current?: boolean;
}

export interface PaginationLinkAttribs {
	'aria-label'?: string;
}

export const PaginationLink = ElementBuilder<PaginationLinkProps, PaginationLinkAttribs>('pagination-link', {
	attribs: (props) => ({
		[`aria-label`]: `Goto page ${props.children}`
	}),

	classes: (props) => ({
		[`is-current`]: !!props.current
	}),

	render: (className, attribs, { children }) => (
		<li><a class={className} {...attribs}>{children}</a></li>
	)
});
