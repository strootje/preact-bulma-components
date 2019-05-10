import { FunctionalComponent, RenderableProps } from 'preact';
import BuildElement from '../../BuildElement';
import { Alignments, OtherSizes } from '../../Bulma';
import { ModifierProps } from '../../Modifiers';
import Ellipsis, { PaginationEllipsisProps } from './Ellipsis';
import Link, { PaginationLinkProps } from './Link';
import List, { PaginationListProps } from './List';
import Next, { PaginationNextProps } from './Next';
import Previous, { PaginationPreviousProps } from './Previous';

export interface PaginationProps extends ModifierProps {
	align?: Alignments;
	rounded?: boolean;
	size?: OtherSizes;
}

const Pagination = BuildElement<PaginationProps>('pagination', {
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

export default Pagination;
Pagination.Ellipsis = Ellipsis;
Pagination.Link = Link;
Pagination.List = List;
Pagination.Next = Next;
Pagination.Previous = Previous;
