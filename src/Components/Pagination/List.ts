import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface PaginationListProps extends ModifierProps {
}

export const PaginationList = BuildElement<PaginationListProps>('pagination-list', {
	render: 'ul'
});
