import { h } from 'preact';
import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface PaginationEllipsisProps extends ModifierProps {
}

export const PaginationEllipsis = BuildElement<PaginationEllipsisProps>('pagination-ellipsis', {
	render: (className, attribs) => (
		<li><span class={className} {...attribs}>&hellip;</span></li>
	)
});
