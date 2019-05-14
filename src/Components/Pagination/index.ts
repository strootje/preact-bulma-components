import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { Alignments, OtherSizes } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';
import { PaginationEllipsis, PaginationEllipsisProps } from './Ellipsis';
import { PaginationLink, PaginationLinkProps } from './Link';
import { PaginationList, PaginationListProps } from './List';
import { PaginationNext, PaginationNextProps } from './Next';
import { PaginationPrevious, PaginationPreviousProps } from './Previous';
export { PaginationEllipsis, PaginationEllipsisProps } from './Ellipsis';
export { PaginationLink, PaginationLinkProps } from './Link';
export { PaginationList, PaginationListProps } from './List';
export { PaginationNext, PaginationNextProps } from './Next';
export { PaginationPrevious, PaginationPreviousProps } from './Previous';

export interface PaginationProps extends ModifierProps {
	align?: Alignments;
	rounded?: boolean;
	size?: OtherSizes;
}

export const Pagination = BuildElement<PaginationProps>('pagination', {
	addAttributes: () => ({
		[`role`]: 'navigation',
		[`aria-label`]: 'pagination'
	}),

	addClasses: (props) => ({
		[`is-${props.align}`]: !!props.align,
		[`is-rounded`]: !!props.rounded,
		[`is-${props.size}`]: !!props.size
	}),

	render: 'nav'
}) as (FunctionalComponent<RenderableProps<PaginationProps>> & {
	Ellipsis: FunctionalComponent<RenderableProps<PaginationEllipsisProps>>;
	Link: FunctionalComponent<RenderableProps<PaginationLinkProps>>;
	List: FunctionalComponent<RenderableProps<PaginationListProps>>;
	Next: FunctionalComponent<RenderableProps<PaginationNextProps>>;
	Previous: FunctionalComponent<RenderableProps<PaginationPreviousProps>>;
});

Pagination.Ellipsis = PaginationEllipsis;
Pagination.Link = PaginationLink;
Pagination.List = PaginationList;
Pagination.Next = PaginationNext;
Pagination.Previous = PaginationPrevious;
