import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface PaginationListProps extends ModifierProps {
}

export interface PaginationListAttribs {
}

export const PaginationList = ElementBuilder<PaginationListProps, PaginationListAttribs>('pagination-list', {
	render: 'ul'
});
