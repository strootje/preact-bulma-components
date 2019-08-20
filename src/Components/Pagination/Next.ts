import { ElementBuilder } from '../../ElementBuilder';
import { ModifierProps } from '../../Modifiers';

export interface PaginationNextProps extends ModifierProps {
}

export interface PaginationNextAttribs {
	disabled?: boolean;
}

export const PaginationNext = ElementBuilder<PaginationNextProps, PaginationNextAttribs>('pagination-next', {
	attribs: (props) => ({
		disabled: !!props.disabled
	}),

	render: 'a'
});
