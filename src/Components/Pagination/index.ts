import { Alignments, OtherSizes } from '../../Bulma';
import { Component, ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';
import { PaginationEllipsis, PaginationEllipsisAttribs, PaginationEllipsisProps } from './Ellipsis';
import { PaginationLink, PaginationLinkAttribs, PaginationLinkProps } from './Link';
import { PaginationList, PaginationListAttribs, PaginationListProps } from './List';
import { PaginationNext, PaginationNextAttribs, PaginationNextProps } from './Next';
import { PaginationPrevious, PaginationPreviousAttribs, PaginationPreviousProps } from './Previous';
export { PaginationEllipsis, PaginationEllipsisAttribs, PaginationEllipsisProps } from './Ellipsis';
export { PaginationLink, PaginationLinkAttribs, PaginationLinkProps } from './Link';
export { PaginationList, PaginationListAttribs, PaginationListProps } from './List';
export { PaginationNext, PaginationNextAttribs, PaginationNextProps } from './Next';
export { PaginationPrevious, PaginationPreviousAttribs, PaginationPreviousProps } from './Previous';

export interface PaginationProps extends ModifierProps {
	align?: Alignments;
	rounded?: boolean;
	size?: OtherSizes;
}

export interface PaginationAttribs {
	'aria-label'?: string;
	role?: string;
}

export const Pagination = ElementBuilder<PaginationProps, PaginationAttribs>('pagination', {
	attribs: () => ({
		[`role`]: 'navigation',
		[`aria-label`]: 'pagination'
	}),

	classes: (props) => ({
		[`is-${props.align}`]: !!props.align,
		[`is-rounded`]: !!props.rounded,
		[`is-${props.size}`]: !!props.size
	}),

	render: 'nav'
}) as (Component<PaginationProps, PaginationAttribs> & {
	Ellipsis: Component<PaginationEllipsisProps, PaginationEllipsisAttribs>;
	Link: Component<PaginationLinkProps, PaginationLinkAttribs>;
	List: Component<PaginationListProps, PaginationListAttribs>;
	Next: Component<PaginationNextProps, PaginationNextAttribs>;
	Previous: Component<PaginationPreviousProps, PaginationPreviousAttribs>;
});

Pagination.Ellipsis = PaginationEllipsis;
Pagination.Link = PaginationLink;
Pagination.List = PaginationList;
Pagination.Next = PaginationNext;
Pagination.Previous = PaginationPrevious;
