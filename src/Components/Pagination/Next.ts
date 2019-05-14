import BuildElement from '../../BuildElement';
import { ModifierProps } from '../../Modifiers';

export interface PaginationNextProps extends ModifierProps {
	disabled?: boolean;
}

export const PaginationNext = BuildElement<PaginationNextProps>('pagination-next', {
	addAttributes: (props) => ({
		[`disabled`]: !!props.disabled
	}),

	render: 'a'
});
