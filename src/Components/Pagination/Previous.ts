import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface PaginationPreviousProps extends ModifierProps {
}

export interface PaginationPreviousAttribs {
	disabled?: boolean;
}

export const PaginationPrevious = ElementBuilder<PaginationPreviousProps, PaginationPreviousAttribs>('pagination-previous', {
	attribs: (props) => ({
		disabled: !!props.disabled
	}),

	render: 'a'
});
