import { h } from 'preact';
import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface PaginationEllipsisProps extends ModifierProps {
}

export interface PaginationEllipsisAttribs {
}

export const PaginationEllipsis = ElementBuilder<PaginationEllipsisProps, PaginationEllipsisAttribs>('pagination-ellipsis', {
	render: (className, attribs) => (
		<li><span class={className} {...attribs}>&hellip;</span></li>
	)
});
